(() => {
  "use strict";
  window.WA = window.WA || {};

  WA.Config = Object.freeze({
    appName: "وين أوديها",
    dataVersion: 13,
    stage: "stage_one_problem_whatsapp",
    stageOneService: "problem",
    dispatchBatchSize: 3,
    maxAcceptedReferralsPerRequest: 3,
    maxReferralsPerRequest: 9,
    alternativeWindowHours: 24,
    workshopResponseMinutes: 60,
    administrativeCloseDays: 5,
    otpLength: 6,
    otpExpiryMinutes: 5,
    googlePlacesEndpoint: "/api/google-place-details",
    paymentThreshold: 100,
    paymentDueDays: 10,
    objectionWindowDays: 15,
    invoiceIssueDay: 1,
    serviceTypes: Object.freeze({
      problem: "عندي مشكلة في السيارة"
    }),
    futureServiceTypes: Object.freeze({
      parts: "قطع الغيار — غير متاحة حاليًا",
      tow: "السطحات — غير متاحة حاليًا",
      maintenance: "الصيانة الدورية — غير متاحة حاليًا",
      pickup: "استلام السيارة وإدارة إصلاحها — غير متاحة حاليًا"
    }),
    partnerTypes: Object.freeze({
      workshop: "ورشة إصلاح وتشخيص",
      parts: "محل قطع غيار — غير متاح حاليًا",
      tow: "مقدم خدمة سطحة — غير متاح حاليًا",
      maintenance: "مركز صيانة دورية — غير متاح حاليًا"
    }),
    storageKeys: Object.freeze([
      "wa_customers", "wa_vehicles", "wa_requests", "wa_partners",
      "wa_referrals", "wa_ratings", "wa_objections", "wa_discounts",
      "wa_fees", "wa_invoices", "wa_claims", "wa_payments",
      "wa_join_applications", "wa_consents", "wa_sessions",
      "wa_admin_users", "wa_admin_sessions", "wa_audit_logs", "wa_meta"
    ]),
    referralFeeCategories: Object.freeze({
      simple: Object.freeze({ label: "طلب بسيط", amount: 1, examples: "فحص مبدئي أو مشكلة غير واضحة" }),
      light: Object.freeze({ label: "خدمة خفيفة", amount: 2, examples: "بطارية أو زيت أو فلاتر" }),
      medium: Object.freeze({ label: "خدمة متوسطة", amount: 3, examples: "فرامل أو تكييف أو تعليق" }),
      specialist: Object.freeze({ label: "خدمة تخصصية", amount: 4, examples: "كهرباء متقدمة أو تبريد أو برمجة" }),
      complex: Object.freeze({ label: "خدمة معقدة", amount: 5, examples: "محرك أو ناقل حركة أو أعطال كبيرة" })
    }),
    // تُبقى شرائح النسخة السابقة للتوافق مع السجلات القديمة فقط.
    costBands: Object.freeze({
      under_50: Object.freeze({ label: "أقل من 50 ريالًا", fee: 0 }),
      from_50_to_199: Object.freeze({ label: "من 50 إلى أقل من 200 ريال", fee: 5 }),
      from_200_to_400: Object.freeze({ label: "من 200 إلى 400 ريال", fee: 10 }),
      over_400: Object.freeze({ label: "أكثر من 400 ريال", fee: 25 })
    }),
    referralStatuses: Object.freeze({
      sent: "أُرسل للورشة",
      viewed: "اطلعت الورشة على الطلب",
      accepted: "قبلت الورشة الطلب",
      rejected: "رفضت الورشة الطلب",
      expired: "انتهت مهلة القبول",
      closed_prior_acceptance: "أُغلق لوجود قبول سابق",
      late_acceptance_attempt: "محاولة قبول بعد الإغلاق",
      contacted: "تم التواصل",
      appointment_set: "تم تحديد موعد",
      arrived: "وصل العميل",
      service_received: "تمت الخدمة",
      service_not_received: "لم تتم الخدمة",
      not_agreed: "لم يتم الاتفاق",
      alternative_requested: "طُلبت ورشة بديلة",
      disputed: "معترض عليها",
      under_review: "تحت المراجعة",
      confirmed: "مؤكدة",
      closed: "مغلقة",
      // توافق خلفي
      registered: "مسجلة",
      shown: "ظهرت للعميل",
      whatsapp_opened: "تم فتح واتساب",
      no_contact: "لم يتواصل العميل",
      contacted_not_arrived: "تواصل ولم يصل",
      arrived_no_service: "وصل ولم يتلق الخدمة",
      cost_pending: "بانتظار فئة التكلفة",
      partner_cost_confirmation: "بانتظار تأكيد الشريك للتكلفة",
      cost_disputed: "اختلاف على فئة التكلفة"
    }),
    requestStatuses: Object.freeze({
      draft: "مسودة",
      ready_for_dispatch: "جاهز للإرسال",
      awaiting_workshop_acceptance: "بانتظار قبول ورشة",
      accepted: "قبلته ورشة",
      no_acceptance: "لم تقبله أي ورشة",
      alternative_requested: "طُلبت ورشة بديلة",
      contacted: "تم التواصل",
      appointment_set: "تم تحديد موعد",
      arrived: "وصل العميل",
      service_received: "تمت الخدمة",
      service_not_received: "لم تتم الخدمة",
      not_agreed: "لم يتم الاتفاق",
      rated: "تم التقييم",
      administratively_closed: "مغلق إداريًا",
      finally_closed: "مغلق نهائيًا",
      // توافق خلفي
      matching: "جاري المطابقة",
      no_match: "لا يوجد تطابق حاليًا",
      referred: "تم ترشيح شريك",
      awaiting_result: "بانتظار نتيجة الإحالة",
      cost_pending: "بانتظار فئة تكلفة الخدمة"
    })
  });
})();
