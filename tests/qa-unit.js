const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { webcrypto } = require('crypto');

class LocalStorageMock {
  constructor() { this.store = new Map(); }
  getItem(key) { return this.store.has(key) ? this.store.get(key) : null; }
  setItem(key, value) { this.store.set(key, String(value)); }
  removeItem(key) { this.store.delete(key); }
  clear() { this.store.clear(); }
}

const context = {
  console, Date, Math, Intl, JSON, Array, Object, String, Number, Boolean,
  RegExp, Error, Map, Set, Uint8Array, localStorage: new LocalStorageMock(),
  crypto: webcrypto, setTimeout, clearTimeout
};
context.window = context;
context.globalThis = context;
vm.createContext(context);

const root = path.resolve(__dirname, '..');
[
  'assets/config.js', 'assets/automotive-data.js', 'assets/storage.js',
  'assets/seed.js', 'assets/ai-engine.js', 'assets/matching-engine.js',
  'assets/lifecycle.js'
].forEach((file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file }));

const { WA } = context;
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const log = (message) => console.log(`✓ ${message}`);

WA.Storage.init();
WA.Seed.run();

assert(WA.Config.stage === 'stage_one_problem_whatsapp', 'Stage-one config missing');
assert(Object.keys(WA.Config.serviceTypes).join(',') === 'problem', 'More than one active service exposed');
log('النطاق التشغيلي مقصور على مسار مشكلة السيارة');

const partners = WA.Storage.get('wa_partners');
assert(partners.length === 45, `Expected 45 workshop test records, got ${partners.length}`);
assert(partners.every((row) => row.type === 'workshop' && row.partnershipStatus === 'active'), 'Future partner types remain in stage-one seed');
assert(WA.Storage.get('wa_discounts').length === 0, 'Stage-one seed should not expose discounts');
log('بيانات الاختبار تشمل ورش المرحلة الأولى فقط وتدعم الدفعات البديلة');

const descriptions = [
  'السيارة ترج إذا وقفت وتظهر لمبة المكينة وصار العزم ضعيف فجأة عند الإشارة',
  'المكيف يبرد أثناء المشي',
  'فيه صوت',
  'الفرامل ما تمسك وفيه ريحة بنزين والسيارة في طريق سريع'
];
const counts = descriptions.map((description) => WA.AIEngine.assess({ description }).questions.length);
assert(counts.every((count) => count >= 0 && count <= 3), `Question count outside 0–3: ${counts.join(',')}`);
assert(counts.includes(0) && counts.some((count) => count > 0), 'Dynamic 0–3 questions not demonstrated');
const danger = WA.AIEngine.assess({ description: descriptions[3] });
assert(danger.questions.length === 0 && /خطرة/.test(danger.urgency) && danger.nextStep.includes('لا تستمر'), 'Danger flow failed');
log('التحليل يطرح صفرًا إلى ثلاثة أسئلة ويوقف الأسئلة عند مؤشرات الخطر');

const analysis = WA.AIEngine.finalize({
  description: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة',
  vehicle: { make: 'تويوتا', model: 'كامري' },
  questions: WA.AIEngine.assess({ description: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة' }).questions,
  answers: ['نعم', 'نعم', 'لا']
});

const payload = {
  serviceType: 'problem',
  customer: { firstName: 'عبدالله', phone: '0551234567', phoneVerified: true, phoneVerifiedAt: new Date().toISOString(), phoneVerificationMode: 'demo_otp' },
  vehicle: { make: 'تويوتا', model: 'كامري', year: '2022', mileage: 'من 50 إلى 100 ألف كم' },
  region: 'منطقة القصيم', city: 'بريدة', preciseLocation: 'حي الريان',
  problem: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة',
  safeToDriveAnswer: 'غير متأكد', ai: analysis,
  consents: { dataSharingAccepted: true, privacyAccepted: true, termsAccepted: true, marketingMessages: false }
};

let consentBlocked = false;
try { WA.Lifecycle.createRequest({ ...payload, consents: { ...payload.consents, dataSharingAccepted: false } }); } catch (_) { consentBlocked = true; }
assert(consentBlocked, 'Request created without data-sharing consent');
const created = WA.Lifecycle.createRequest(payload);
assert(created.request.humanId.startsWith('WA-') && created.request.publicToken, 'Request identity/token missing');
assert(created.request.serviceType === 'problem' && created.request.referralFeeAmount >= 1 && created.request.referralFeeAmount <= 5, 'Stage-one fee classification invalid');
log('الموافقة إلزامية ورقم الطلب وفئة الرسم من 1 إلى 5 محفوظان');

const dispatched = WA.Lifecycle.dispatchToPartners(created.request.id);
assert(dispatched.referrals.length === 3, `Expected exact batch of 3, got ${dispatched.referrals.length}`);
assert(new Set(dispatched.referrals.map((row) => row.partnerId)).size === 3, 'Duplicate workshop in batch');
dispatched.referrals.forEach((referral) => {
  assert(referral.acceptanceToken && referral.status === 'sent', 'Acceptance invitation invalid');
  assert(!('phone' in referral) && !('firstName' in referral) && !('customerPhone' in referral), 'PII leaked into pre-acceptance referral');
});
assert(WA.Storage.get('wa_fees').length === 0, 'Fee created before acceptance');
log('الطلب يرسل إلى ثلاث ورش فريدة دون بيانات شخصية أو رسم مسبق');

const first = dispatched.referrals[0];
const firstView = WA.Lifecycle.getWorkshopAcceptanceView(first.acceptanceToken);
assert(firstView && !firstView.customer && !firstView.acceptedByThisWorkshop, 'Customer data exposed before acceptance');
const accepted = WA.Lifecycle.acceptReferral(first.acceptanceToken);
assert(accepted.accepted && accepted.fee && accepted.fee.amount === created.request.referralFeeAmount, 'First acceptance or fee creation failed');
const acceptedRequest = WA.Storage.findById('wa_requests', created.request.id);
assert(acceptedRequest.acceptedReferralId === first.id && acceptedRequest.alternativeDeadline, 'Accepted request not linked/deadline missing');
const otherRows = WA.Storage.get('wa_referrals').filter((row) => row.requestId === created.request.id && row.batchNumber === 1 && row.id !== first.id);
assert(otherRows.every((row) => row.status === 'closed_prior_acceptance'), 'Other workshops were not closed');
assert(WA.Storage.get('wa_fees').filter((row) => row.referralId === first.id).length === 1, 'Acceptance fee duplicated');
const afterAcceptView = WA.Lifecycle.getWorkshopAcceptanceView(first.acceptanceToken);
assert(afterAcceptView.customer?.phone === payload.customer.phone, 'Accepted workshop did not receive customer data');
const late = WA.Lifecycle.acceptReferral(otherRows[0].acceptanceToken);
assert(!late.accepted && late.closed, 'Late acceptance was not blocked');
assert(WA.Storage.get('wa_fees').filter((row) => row.referralId === otherRows[0].id).length === 0, 'Late workshop was charged');
log('أول قبول يكشف البيانات ويغلق الدفعة ويحتسب الرسم مرة واحدة فقط');

const eligibility = WA.Lifecycle.alternativeEligibility(acceptedRequest);
assert(eligibility.allowed, 'Alternative should be allowed within 24 hours');
const secondBatch = WA.Lifecycle.requestAlternative(created.request.id, 'لم نتفق على الموعد');
assert(secondBatch.referrals.length === 3, 'Second batch did not contain 3 workshops');
const firstPartnerIds = new Set(dispatched.referrals.map((row) => row.partnerId));
assert(secondBatch.referrals.every((row) => !firstPartnerIds.has(row.partnerId)), 'Previous workshops reused in alternative batch');
const secondAccepted = WA.Lifecycle.acceptReferral(secondBatch.referrals[0].acceptanceToken);
assert(secondAccepted.accepted, 'Second batch acceptance failed');
log('البديل خلال 24 ساعة يحتفظ بالطلب ويرسل إلى ثلاث ورش جديدة');

const currentRequest = WA.Storage.findById('wa_requests', created.request.id);
WA.Storage.upsert('wa_requests', { ...currentRequest, alternativeDeadline: new Date(Date.now() - 1000).toISOString() });
assert(!WA.Lifecycle.alternativeEligibility(WA.Storage.findById('wa_requests', created.request.id)).allowed, 'Alternative allowed after deadline');
let lateAlternativeBlocked = false;
try { WA.Lifecycle.requestAlternative(created.request.id, 'بعد المهلة'); } catch (_) { lateAlternativeBlocked = true; }
assert(lateAlternativeBlocked, 'Alternative request not blocked after 24 hours');
log('طلب البديل يتوقف بعد انتهاء مهلة 24 ساعة');

// Reopen the deadline only for testing the third accepted referral and the maximum.
WA.Storage.upsert('wa_requests', { ...WA.Storage.findById('wa_requests', created.request.id), alternativeDeadline: new Date(Date.now() + 3600000).toISOString() });
const thirdBatch = WA.Lifecycle.requestAlternative(created.request.id, 'الموقع غير مناسب');
assert(thirdBatch.referrals.length === 3, 'Third batch failed');
const thirdAccepted = WA.Lifecycle.acceptReferral(thirdBatch.referrals[0].acceptanceToken);
assert(thirdAccepted.accepted, 'Third acceptance failed');
assert(!WA.Lifecycle.alternativeEligibility(WA.Storage.findById('wa_requests', created.request.id)).allowed, 'More than 3 accepted referrals permitted');
log('الحد الأقصى ثلاث إحالات مقبولة للحالة نفسها');

const rating = WA.Lifecycle.createRating({
  requestId: created.request.id,
  referralId: thirdBatch.referrals[0].id,
  overall: 5,
  responseSpeed: 5,
  clarity: 4,
  commitment: 5,
  reception: 5,
  serviceQuality: 4,
  recommend: 'yes',
  comment: '<script>bad</script> تجربة ممتازة'
});
assert(rating.status === 'published' && !rating.comment.includes('<'), 'Verified rating/sanitization failed');
assert(WA.Storage.get('wa_ratings').filter((row) => row.referralId === rating.referralId).length === 1, 'Rating duplicated');
log('التقييم مرتبط بإحالة مقبولة ومُعقّم وغير مكرر');

const notified = WA.Lifecycle.markReferralNotified(secondBatch.referrals[1].id);
assert(notified.notifiedAt && notified.notificationChannel === 'whatsapp_manual', 'WhatsApp manual dispatch not recorded');
log('تسجيل فتح الإرسال اليدوي عبر واتساب');

const issues = WA.Storage.integrityCheck();
assert(issues.length === 0, `Integrity issues: ${issues.join('; ')}`);
log('سلامة العلاقات بين العملاء والسيارات والطلبات والإحالات والرسوم والتقييمات');

console.log('\nALL_UNIT_QA_PASSED');
