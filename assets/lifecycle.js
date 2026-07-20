(() => {
  "use strict";
  window.WA = window.WA || {};

  const now = () => WA.Storage.now();
  const plusHours = (dateValue, hours) => new Date(new Date(dateValue).getTime() + Number(hours) * 3600000).toISOString();
  const touchRequest = (request, patch = {}) => WA.Storage.upsert("wa_requests", { ...request, ...patch, lastActivityAt: now() });
  const findCustomer = (phone) => WA.Storage.get("wa_customers").find((row) => row.phone === WA.Storage.sanitizePhone(phone)) || null;
  const findRequestByToken = (token) => WA.Storage.get("wa_requests").find((row) => row.publicToken === token) || null;
  const findRequestByHumanId = (humanId) => WA.Storage.get("wa_requests").find((row) => row.humanId === String(humanId || "").trim().toUpperCase()) || null;
  const findReferralByAcceptanceToken = (token) => WA.Storage.get("wa_referrals").find((row) => row.acceptanceToken === token) || null;
  const stageOneFee = (category) => WA.Config.referralFeeCategories[category] || WA.Config.referralFeeCategories.simple;
  const feeForBand = (band) => WA.Config.costBands[band]?.fee ?? null;
  const bandLabel = (band) => WA.Config.costBands[band]?.label || band || "غير محددة";

  const saveCustomerAndVehicle = ({ customer, vehicle, consents = {} }) => WA.Storage.transaction(() => {
    const phone = WA.Storage.sanitizePhone(customer.phone);
    if (!/^05\d{8}$/.test(phone)) throw new Error("رقم الجوال غير صالح");
    if (customer.phoneVerified !== true || !customer.phoneVerifiedAt) throw new Error("يلزم التحقق من رقم الجوال قبل إنشاء الطلب");
    const existingCustomer = findCustomer(phone);
    const customerRecord = WA.Storage.upsert("wa_customers", {
      id: existingCustomer?.id || WA.Storage.createId("CUS"),
      firstName: WA.Storage.sanitizeText(customer.firstName, 40),
      phone,
      phoneVerified: true,
      phoneVerifiedAt: customer.phoneVerifiedAt,
      phoneVerificationMode: WA.Storage.sanitizeText(customer.phoneVerificationMode || "demo_otp", 40),
      operationalMessages: true,
      marketingMessages: Boolean(consents.marketingMessages)
    });

    WA.Storage.upsert("wa_consents", {
      id: WA.Storage.createId("CNS"),
      customerId: customerRecord.id,
      privacyAccepted: Boolean(consents.privacyAccepted),
      termsAccepted: Boolean(consents.termsAccepted),
      dataSharingAccepted: Boolean(consents.dataSharingAccepted),
      operationalMessages: true,
      marketingMessages: Boolean(consents.marketingMessages),
      source: "stage_one_customer_flow",
      acceptedAt: now()
    });

    const make = WA.Storage.sanitizeText(vehicle.make, 60);
    const model = WA.Storage.sanitizeText(vehicle.model, 60);
    const year = WA.Storage.sanitizeText(vehicle.year, 4);
    const existingVehicle = WA.Storage.get("wa_vehicles").find((row) => row.customerId === customerRecord.id
      && row.make === make && row.model === model && row.year === year);
    const vehicleRecord = WA.Storage.upsert("wa_vehicles", {
      id: existingVehicle?.id || WA.Storage.createId("VEH"),
      customerId: customerRecord.id,
      make,
      makeOther: WA.Storage.sanitizeText(vehicle.makeOther, 60),
      model,
      modelOther: WA.Storage.sanitizeText(vehicle.modelOther, 60),
      year,
      mileage: WA.Storage.sanitizeText(vehicle.mileage, 60),
      fuelType: WA.Storage.sanitizeText(vehicle.fuelType, 30),
      vin: WA.Storage.sanitizeText(vehicle.vin, 40).toUpperCase()
    });
    return { customer: customerRecord, vehicle: vehicleRecord };
  });

  const createRequest = (payload) => WA.Storage.transaction(() => {
    if ((payload.serviceType || "problem") !== "problem") throw new Error("الخدمة المتاحة حاليًا هي مسار مشكلة السيارة فقط");
    if (!payload.consents?.dataSharingAccepted) throw new Error("يجب الموافقة على مشاركة ملخص الطلب مع الورش المناسبة");
    const saved = saveCustomerAndVehicle(payload);
    const current = payload.requestId ? WA.Storage.findById("wa_requests", payload.requestId) : null;
    const category = payload.ai?.feeCategory || "simple";
    const pricing = stageOneFee(category);
    const request = WA.Storage.upsert("wa_requests", {
      id: current?.id || WA.Storage.createId("REQ"),
      humanId: current?.humanId || `WA-${String(Date.now()).slice(-6)}`,
      publicToken: current?.publicToken || WA.Storage.randomToken("req"),
      customerId: saved.customer.id,
      vehicleId: saved.vehicle.id,
      serviceType: "problem",
      stage: "stage_one",
      region: WA.Storage.sanitizeText(payload.region, 80),
      city: WA.Storage.sanitizeText(payload.city, 80),
      preciseLocation: WA.Storage.sanitizeText(payload.preciseLocation, 400),
      locationCoordinates: payload.locationCoordinates || null,
      locationMethod: WA.Storage.sanitizeText(payload.locationMethod || "manual", 40),
      nearestCityDistanceKm: Number.isFinite(Number(payload.nearestCityDistanceKm)) ? Number(payload.nearestCityDistanceKm) : null,
      problem: WA.Storage.sanitizeText(payload.problem, 1200),
      safeToDriveAnswer: WA.Storage.sanitizeText(payload.safeToDriveAnswer, 30),
      ai: payload.ai || null,
      vehicleSnapshot: saved.vehicle,
      referralFeeCategory: category,
      referralFeeLabel: pricing.label,
      referralFeeAmount: pricing.amount,
      status: current?.status || "ready_for_dispatch",
      activeReferralId: current?.activeReferralId || "",
      acceptedReferralId: current?.acceptedReferralId || "",
      dispatchBatchNumber: Number(current?.dispatchBatchNumber || 0),
      alternativeDeadline: current?.alternativeDeadline || "",
      lastActivityAt: now(),
      administrativeClosedAt: current?.administrativeClosedAt || ""
    });
    return { request, ...saved };
  });

  const requestReferrals = (requestId) => WA.Storage.get("wa_referrals")
    .filter((row) => row.requestId === requestId)
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

  const createInvitation = ({ request, partner, batchNumber, order, matchReason }) => WA.Storage.upsert("wa_referrals", {
    id: WA.Storage.createId("REF"),
    requestId: request.id,
    partnerId: partner.id,
    serviceType: "problem",
    order,
    batchNumber,
    acceptanceToken: WA.Storage.randomToken("accept"),
    status: "sent",
    matchReason: WA.Storage.sanitizeText(matchReason, 800),
    feeCategory: request.referralFeeCategory,
    feeAmount: Number(request.referralFeeAmount || 1),
    sentAt: now(),
    expiresAt: plusHours(now(), WA.Config.workshopResponseMinutes / 60),
    viewedAt: "",
    acceptedAt: "",
    rejectedAt: "",
    closedAt: "",
    attemptedAfterCloseAt: "",
    customerDataRevealedAt: "",
    resultStatus: "",
    alternativeReason: "",
    feeId: "",
    objectionStatus: ""
  });

  const dispatchToPartners = (requestId, limit = WA.Config.dispatchBatchSize) => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) throw new Error("الطلب غير موجود");
    if (request.acceptedReferralId) throw new Error("لا يمكن إرسال دفعة جديدة قبل إنهاء نتيجة الورشة المقبولة");
    const previous = requestReferrals(requestId);
    const excludedPartnerIds = [...new Set(previous.map((row) => row.partnerId))];
    const acceptedCount = previous.filter((row) => row.acceptedAt).length;
    if (acceptedCount >= WA.Config.maxAcceptedReferralsPerRequest) throw new Error("وصل الطلب إلى الحد الأقصى من الإحالات المقبولة");
    const batchNumber = Number(request.dispatchBatchNumber || 0) + 1;
    const matched = WA.Matching.matchBatch({ request, excludedPartnerIds, limit });
    if (matched.partners.length < Number(limit || WA.Config.dispatchBatchSize)) {
      const reason = matched.partners.length
        ? `تتوفر ${matched.partners.length} ورش مطابقة فقط، بينما يتطلب إرسال الطلب توفر ثلاث ورش مناسبة.`
        : matched.reason;
      touchRequest(request, { status: "no_acceptance", noMatchReason: reason, dispatchBatchNumber: batchNumber });
      return { request: WA.Storage.findById("wa_requests", requestId), referrals: [], reason };
    }
    const startOrder = previous.length;
    const referrals = matched.partners.map((entry, index) => createInvitation({
      request,
      partner: entry.partner,
      batchNumber,
      order: startOrder + index + 1,
      matchReason: entry.reason
    }));
    const updated = touchRequest(request, {
      status: "awaiting_workshop_acceptance",
      dispatchBatchNumber: batchNumber,
      activeReferralId: "",
      acceptedReferralId: "",
      dispatchedAt: now(),
      noMatchReason: ""
    });
    return { request: updated, referrals, reason: matched.reason };
  });

  const createReferral = (requestId, partnerId, matchReason = "") => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    const partner = WA.Storage.findById("wa_partners", partnerId);
    if (!request || !partner) throw new Error("تعذر إنشاء الإحالة بسبب بيانات ناقصة");
    const previous = requestReferrals(requestId);
    if (previous.some((row) => row.partnerId === partnerId)) throw new Error("لا يمكن إرسال الطلب إلى الورشة نفسها مرتين");
    const batchNumber = Number(request.dispatchBatchNumber || 0) || 1;
    return createInvitation({ request, partner, batchNumber, order: previous.length + 1, matchReason });
  });

  const markReferralViewed = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    if (referral.status !== "sent") return referral;
    return WA.Storage.upsert("wa_referrals", { ...referral, status: "viewed", viewedAt: referral.viewedAt || now() });
  };

  const getWorkshopAcceptanceView = (token) => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) return null;
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    const partner = WA.Storage.findById("wa_partners", referral.partnerId);
    if (!request || !partner) return null;
    markReferralViewed(referral.id);
    const refreshed = WA.Storage.findById("wa_referrals", referral.id);
    const acceptedByThisWorkshop = request.acceptedReferralId === referral.id;
    const closedByAnother = Boolean(request.acceptedReferralId && request.acceptedReferralId !== referral.id);
    const customer = acceptedByThisWorkshop ? WA.Storage.findById("wa_customers", request.customerId) : null;
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    return { referral: refreshed, request, partner, vehicle, customer, acceptedByThisWorkshop, closedByAnother };
  };

  const ensureAcceptanceFee = (referralId) => WA.Storage.transaction(() => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral?.acceptedAt) return null;
    const existing = WA.Storage.get("wa_fees").find((row) => row.referralId === referralId && row.type === "stage_one_accepted_lead");
    if (existing) return existing;
    const amount = Number(referral.feeAmount || 1);
    const fee = WA.Storage.upsert("wa_fees", {
      id: WA.Storage.createId("FEE"),
      referralId,
      requestId: referral.requestId,
      partnerId: referral.partnerId,
      type: "stage_one_accepted_lead",
      feeCategory: referral.feeCategory || "simple",
      amount,
      event: "قبول الطلب وكشف بيانات العميل للورشة الأولى",
      status: "unbilled",
      eligibleAt: referral.acceptedAt,
      invoiceIds: [],
      paidAt: ""
    });
    WA.Storage.upsert("wa_referrals", { ...referral, feeId: fee.id });
    return fee;
  });

  const acceptReferral = (token) => WA.Storage.transaction(() => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) throw new Error("رابط القبول غير صالح");
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (!request) throw new Error("الطلب غير موجود");

    if (request.acceptedReferralId && request.acceptedReferralId !== referral.id) {
      const updatedLate = WA.Storage.upsert("wa_referrals", {
        ...referral,
        status: "late_acceptance_attempt",
        attemptedAfterCloseAt: now()
      });
      return { accepted: false, closed: true, referral: updatedLate, request };
    }
    if (request.acceptedReferralId === referral.id) {
      return { accepted: true, alreadyAccepted: true, referral, request, fee: ensureAcceptanceFee(referral.id) };
    }
    if (["rejected", "expired", "closed_prior_acceptance"].includes(referral.status)) {
      return { accepted: false, closed: true, referral, request };
    }
    if (referral.expiresAt && new Date(referral.expiresAt).getTime() < Date.now()) {
      const expired = WA.Storage.upsert("wa_referrals", { ...referral, status: "expired", expiredAt: now() });
      return { accepted: false, expired: true, referral: expired, request };
    }

    const acceptedAt = now();
    const acceptedReferral = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: "accepted",
      acceptedAt,
      customerDataRevealedAt: acceptedAt
    });
    requestReferrals(request.id)
      .filter((row) => row.batchNumber === referral.batchNumber && row.id !== referral.id && !["rejected", "expired"].includes(row.status))
      .forEach((row) => WA.Storage.upsert("wa_referrals", { ...row, status: "closed_prior_acceptance", closedAt: acceptedAt }));
    const updatedRequest = touchRequest(request, {
      status: "accepted",
      activeReferralId: acceptedReferral.id,
      acceptedReferralId: acceptedReferral.id,
      acceptedAt,
      alternativeDeadline: plusHours(acceptedAt, WA.Config.alternativeWindowHours)
    });
    const fee = ensureAcceptanceFee(acceptedReferral.id);
    return { accepted: true, referral: WA.Storage.findById("wa_referrals", acceptedReferral.id), request: updatedRequest, fee };
  });

  const rejectReferral = (token, reason = "") => WA.Storage.transaction(() => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) throw new Error("رابط الطلب غير صالح");
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (request?.acceptedReferralId) return { rejected: false, closed: true, referral, request };
    const updated = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: "rejected",
      rejectionReason: WA.Storage.sanitizeText(reason, 300),
      rejectedAt: now()
    });
    const currentBatch = requestReferrals(referral.requestId).filter((row) => row.batchNumber === referral.batchNumber);
    if (currentBatch.every((row) => ["rejected", "expired"].includes(row.id === updated.id ? updated.status : row.status))) {
      touchRequest(request, { status: "no_acceptance", noAcceptanceAt: now() });
    }
    return { rejected: true, referral: updated, request: WA.Storage.findById("wa_requests", referral.requestId) };
  });

  const alternativeEligibility = (request) => {
    if (!request?.acceptedReferralId || !request.alternativeDeadline) return { allowed: false, reason: "لا توجد ورشة مقبولة حاليًا." };
    const acceptedCount = requestReferrals(request.id).filter((row) => row.acceptedAt).length;
    if (acceptedCount >= WA.Config.maxAcceptedReferralsPerRequest) return { allowed: false, reason: "وصل الطلب إلى الحد الأقصى من الإحالات المقبولة." };
    if (new Date(request.alternativeDeadline).getTime() < Date.now()) return { allowed: false, reason: "انتهت مهلة طلب الورشة البديلة البالغة 24 ساعة. يمكنك إنشاء طلب جديد." };
    return { allowed: true, deadline: request.alternativeDeadline };
  };

  const requestAlternative = (requestId, reason = "") => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) throw new Error("الطلب غير موجود");
    const eligibility = alternativeEligibility(request);
    if (!eligibility.allowed) throw new Error(eligibility.reason);
    const active = WA.Storage.findById("wa_referrals", request.acceptedReferralId);
    if (active) WA.Storage.upsert("wa_referrals", {
      ...active,
      status: "alternative_requested",
      resultStatus: "not_agreed",
      alternativeReason: WA.Storage.sanitizeText(reason, 300),
      alternativeRequestedAt: now()
    });
    touchRequest(request, {
      status: "alternative_requested",
      acceptedReferralId: "",
      activeReferralId: "",
      acceptedAt: "",
      alternativeDeadline: ""
    });
    return dispatchToPartners(request.id, WA.Config.dispatchBatchSize);
  });

  const updateReferralOutcome = (referralId, outcome, source = "customer") => WA.Storage.transaction(() => {
    const allowed = ["contacted", "appointment_set", "arrived", "service_received", "service_not_received", "not_agreed"];
    if (!allowed.includes(outcome)) throw new Error("حالة المتابعة غير صالحة");
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral?.acceptedAt) throw new Error("لا يمكن تحديث النتيجة قبل قبول الورشة");
    const updated = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: outcome,
      resultStatus: outcome,
      resultSource: source,
      resultUpdatedAt: now(),
      serviceReceivedAt: outcome === "service_received" ? (referral.serviceReceivedAt || now()) : referral.serviceReceivedAt
    });
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (request) touchRequest(request, { status: outcome });
    return updated;
  });

  const createRating = (payload) => WA.Storage.transaction(() => {
    const referral = WA.Storage.findById("wa_referrals", payload.referralId);
    const request = WA.Storage.findById("wa_requests", payload.requestId);
    if (!referral || !request || referral.requestId !== request.id || !referral.acceptedAt) throw new Error("لا يمكن التقييم دون إحالة مقبولة");
    const existing = WA.Storage.get("wa_ratings").find((row) => row.referralId === referral.id);
    if (existing) return existing;
    const overall = Number(payload.overall);
    if (!Number.isFinite(overall) || overall < 1 || overall > 5) throw new Error("اختر تقييمًا عامًا من 1 إلى 5");
    const rating = WA.Storage.upsert("wa_ratings", {
      id: WA.Storage.createId("RAT"),
      requestId: request.id,
      referralId: referral.id,
      partnerId: referral.partnerId,
      overall,
      responseSpeed: Number(payload.responseSpeed || overall),
      clarity: Number(payload.clarity || overall),
      commitment: Number(payload.commitment || overall),
      reception: Number(payload.reception || overall),
      serviceQuality: Number(payload.serviceQuality || overall),
      recommend: payload.recommend === "yes" || payload.recommend === true,
      comment: WA.Storage.sanitizeText(payload.comment, 800),
      status: "published",
      submittedAt: now()
    });
    touchRequest(request, { status: "rated", ratedAt: now() });
    return rating;
  });

  const createObjection = (payload) => WA.Storage.transaction(() => {
    const referral = payload.referralId ? WA.Storage.findById("wa_referrals", payload.referralId) : null;
    const invoice = payload.invoiceId ? WA.Storage.findById("wa_invoices", payload.invoiceId) : null;
    if (payload.invoiceId) {
      if (!invoice || invoice.partnerId !== payload.partnerId) throw new Error("بيانات الفاتورة غير متطابقة");
      if (invoice.objectionDeadline && new Date(invoice.objectionDeadline).getTime() < Date.now()) throw new Error("انتهت مهلة الاعتراض");
    } else if (!referral || referral.partnerId !== payload.partnerId) throw new Error("بيانات الاعتراض غير متطابقة");
    const objection = WA.Storage.upsert("wa_objections", {
      id: WA.Storage.createId("OBJ"),
      requestId: referral?.requestId || "",
      referralId: referral?.id || "",
      invoiceId: invoice?.id || "",
      partnerId: payload.partnerId,
      ratingId: payload.ratingId || "",
      type: payload.type,
      reason: WA.Storage.sanitizeText(payload.reason, 250),
      details: WA.Storage.sanitizeText(payload.details, 1000),
      status: "new",
      decision: "",
      submittedAt: now(),
      closedAt: ""
    });
    if (referral) WA.Storage.upsert("wa_referrals", { ...referral, objectionStatus: "new" });
    if (invoice) WA.Storage.upsert("wa_invoices", { ...invoice, status: "under_review", objectionId: objection.id });
    return objection;
  });

  const markWhatsappOpened = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) return null;
    return WA.Storage.upsert("wa_referrals", { ...referral, whatsappOpenedAt: now() });
  };
  const markReferralNotified = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return WA.Storage.upsert("wa_referrals", { ...referral, notifiedAt: referral.notifiedAt || now(), notificationChannel: "whatsapp_manual" });
  };
  const markReferralShown = markReferralViewed;
  const confirmArrival = (referralId, source = "customer") => updateReferralOutcome(referralId, "arrived", source);
  const confirmServiceReceived = (referralId, source = "customer") => updateReferralOutcome(referralId, "service_received", source);
  const updateReferralStatus = (referralId, status, source = "partner") => {
    if (["contacted", "appointment_set", "arrived", "service_received", "service_not_received", "not_agreed"].includes(status)) return updateReferralOutcome(referralId, status, source);
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return WA.Storage.upsert("wa_referrals", { ...referral, status, statusSource: source, statusUpdatedAt: now() });
  };

  const registerCostBand = (referralId, costBand, source = "legacy", reason = "") => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return { disputed: false, referral: WA.Storage.upsert("wa_referrals", { ...referral, costBand, costBandLabel: bandLabel(costBand), costSource: source, costChangeReason: WA.Storage.sanitizeText(reason, 500) }), fee: referral.feeId ? WA.Storage.findById("wa_fees", referral.feeId) : null };
  };
  const ensureFee = (referralId) => ensureAcceptanceFee(referralId);

  const outstandingFees = (partnerId) => WA.Storage.get("wa_fees").filter((fee) => fee.partnerId === partnerId && !["paid", "exempt", "cancelled"].includes(fee.status));
  const issueInvoice = (partnerId, reason = "monthly", at = new Date()) => WA.Storage.transaction(() => {
    const fees = outstandingFees(partnerId).filter((fee) => fee.status !== "disputed");
    if (!fees.length) return null;
    const total = fees.reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
    const cycle = `${at.getFullYear()}-${String(at.getMonth() + 1).padStart(2, "0")}`;
    const existing = WA.Storage.get("wa_invoices").find((row) => row.partnerId === partnerId && row.cycle === cycle && !["paid", "cancelled"].includes(row.status));
    const objectionDeadline = new Date(at); objectionDeadline.setDate(objectionDeadline.getDate() + WA.Config.objectionWindowDays);
    const dueAt = new Date(at); dueAt.setDate(dueAt.getDate() + WA.Config.paymentDueDays);
    const paymentRequired = total >= WA.Config.paymentThreshold;
    const invoice = WA.Storage.upsert("wa_invoices", {
      ...(existing || {}),
      id: existing?.id || WA.Storage.createId("INV"),
      number: existing?.number || `INV-${at.getFullYear()}${String(at.getMonth() + 1).padStart(2, "0")}-${String(Date.now()).slice(-5)}`,
      partnerId,
      cycle,
      issueReason: reason,
      feeIds: fees.map((fee) => fee.id),
      amount: total,
      paymentRequired,
      status: paymentRequired ? "payment_required" : "carried_forward",
      issuedAt: existing?.issuedAt || at.toISOString(),
      dueAt: paymentRequired ? (existing?.dueAt || dueAt.toISOString()) : "",
      objectionDeadline: existing?.objectionDeadline || objectionDeadline.toISOString(),
      paidAt: existing?.paidAt || ""
    });
    fees.forEach((fee) => WA.Storage.upsert("wa_fees", { ...fee, invoiceIds: [...new Set([...(fee.invoiceIds || []), invoice.id])], status: paymentRequired ? "invoiced_due" : "statemented" }));
    return invoice;
  });
  const maybeIssueInvoices = (at = new Date()) => WA.Storage.get("wa_partners").forEach((partner) => {
    const total = outstandingFees(partner.id).filter((fee) => fee.status !== "disputed").reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
    if (total >= WA.Config.paymentThreshold || at.getDate() === WA.Config.invoiceIssueDay) issueInvoice(partner.id, total >= WA.Config.paymentThreshold ? "threshold" : "monthly", at);
  });
  const registerPayment = (invoiceId, method = "bank_transfer") => WA.Storage.transaction(() => {
    const invoice = WA.Storage.findById("wa_invoices", invoiceId);
    if (!invoice) throw new Error("الفاتورة غير موجودة");
    const existing = WA.Storage.get("wa_payments").find((row) => row.invoiceId === invoice.id);
    if (existing) return existing;
    const payment = WA.Storage.upsert("wa_payments", { id: WA.Storage.createId("PAY"), invoiceId: invoice.id, partnerId: invoice.partnerId, amount: invoice.amount, method, status: "paid", receiptNumber: `RC-${Date.now().toString().slice(-8)}`, paidAt: now() });
    WA.Storage.upsert("wa_invoices", { ...invoice, status: "paid", paidAt: payment.paidAt });
    (invoice.feeIds || []).forEach((id) => { const fee = WA.Storage.findById("wa_fees", id); if (fee) WA.Storage.upsert("wa_fees", { ...fee, status: "paid", paidAt: payment.paidAt }); });
    return payment;
  });
  const sweepOverdueInvoices = (at = new Date()) => WA.Storage.get("wa_invoices").forEach((invoice) => {
    if (invoice.status === "payment_required" && invoice.dueAt && new Date(invoice.dueAt).getTime() < at.getTime()) WA.Storage.upsert("wa_invoices", { ...invoice, status: "overdue" });
  });
  const sweepExpiredDispatches = (at = new Date()) => {
    WA.Storage.get("wa_referrals").forEach((referral) => {
      if (!["sent", "viewed"].includes(referral.status) || !referral.expiresAt || new Date(referral.expiresAt).getTime() >= at.getTime()) return;
      WA.Storage.upsert("wa_referrals", { ...referral, status: "expired", expiredAt: at.toISOString() });
      const request = WA.Storage.findById("wa_requests", referral.requestId);
      const batch = requestReferrals(referral.requestId).filter((row) => row.batchNumber === referral.batchNumber);
      if (request && !request.acceptedReferralId && batch.every((row) => ["expired", "rejected"].includes(row.id === referral.id ? "expired" : row.status))) touchRequest(request, { status: "no_acceptance", noAcceptanceAt: at.toISOString() });
    });
  };
  const sweepAdministrativeClosures = (at = new Date()) => {
    const cutoff = at.getTime() - WA.Config.administrativeCloseDays * 86400000;
    WA.Storage.get("wa_requests").forEach((request) => {
      if (["rated", "administratively_closed", "finally_closed"].includes(request.status)) return;
      const last = new Date(request.lastActivityAt || request.updatedAt || request.createdAt).getTime();
      if (Number.isFinite(last) && last < cutoff) touchRequest(request, { status: "administratively_closed", administrativeClosedAt: at.toISOString() });
    });
  };

  const saveDraft = (draft) => {
    const sessions = WA.Storage.get("wa_sessions").filter((row) => row.type !== "customer_draft");
    sessions.push({ id: "CUSTOMER-DRAFT", type: "customer_draft", draft: WA.Storage.deepClone(draft), updatedAt: now(), expiresAt: plusHours(now(), 168) });
    WA.Storage.set("wa_sessions", sessions);
  };
  const loadDraft = () => {
    const session = WA.Storage.get("wa_sessions").find((row) => row.type === "customer_draft");
    return !session || new Date(session.expiresAt).getTime() < Date.now() ? null : WA.Storage.deepClone(session.draft);
  };
  const clearDraft = () => WA.Storage.remove("wa_sessions", (row) => row.type === "customer_draft");
  const referralEventState = (referral) => ({ accepted: Boolean(referral?.acceptedAt), serviceReceived: referral?.resultStatus === "service_received", feeCreated: Boolean(referral?.feeId) });
  const runSweep = () => { sweepExpiredDispatches(); maybeIssueInvoices(); sweepOverdueInvoices(); sweepAdministrativeClosures(); };

  WA.Lifecycle = {
    findCustomer, findRequestByToken, findRequestByHumanId, findReferralByAcceptanceToken,
    saveCustomerAndVehicle, createRequest, createReferral, dispatchToPartners, getWorkshopAcceptanceView,
    acceptReferral, rejectReferral, markReferralViewed, markReferralShown, markReferralNotified, markWhatsappOpened,
    requestAlternative, alternativeEligibility, updateReferralOutcome, confirmArrival, confirmServiceReceived,
    createRating, createObjection, ensureAcceptanceFee, ensureFee, registerCostBand, updateReferralStatus,
    issueInvoice, maybeIssueInvoices, registerPayment, sweepOverdueInvoices, sweepExpiredDispatches,
    sweepAdministrativeClosures, runSweep, saveDraft, loadDraft, clearDraft, referralEventState,
    feeForBand, bandLabel, outstandingFees,
    confirmIntake: (referralId, source) => confirmServiceReceived(referralId, source),
    issueClaim: (partnerId, reason) => issueInvoice(partnerId, reason === "threshold" ? "threshold" : "monthly"),
    maybeIssueClaims: () => maybeIssueInvoices()
  };
})();
