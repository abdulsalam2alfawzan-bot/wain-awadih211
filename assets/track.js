(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  let currentRequest = null;
  let currentReferral = null;
  let customerMessage = "";

  const acceptedReferralFor = (request) => request?.acceptedReferralId ? WA.Storage.findById("wa_referrals", request.acceptedReferralId) : null;
  const referralsFor = (requestId) => WA.Storage.get("wa_referrals").filter((row) => row.requestId === requestId).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  const formatDeadline = (value) => value ? WA.UI.formatDate(value) : "";

  const statusHtml = (request, referrals) => {
    const accepted = acceptedReferralFor(request);
    if (accepted) return `<div class="success-panel"><strong>قبلت ورشة طلبك</strong><p>تم كشف بيانات التواصل للورشة المقبولة فقط، وأُغلق الطلب أمام بقية ورش الدفعة.</p></div>`;
    if (request.status === "no_acceptance" || request.status === "no_match") return `<div class="warning-panel"><strong>لم يتم قبول الطلب حتى الآن</strong><p>${WA.UI.escapeHtml(request.noMatchReason || "لم تقبل أي ورشة ضمن المهلة الحالية، ويستطيع فريق التشغيل إرسال الطلب إلى دفعة أخرى.")}</p></div>`;
    const active = referrals.filter((row) => ["sent", "viewed"].includes(row.status)).length;
    return `<div class="info-panel"><strong>بانتظار استجابة ورشة</strong><p>يجري البحث عن ورشة مناسبة دون مشاركة بيانات التواصل. ستظهر بيانات الورشة عند استقبال الطلب.</p></div>`;
  };

  const timelineHtml = (request, referrals) => {
    const batches = [...new Set(referrals.map((row) => Number(row.batchNumber || 1)))];
    const items = [`<div class="timeline-item"><span class="timeline-dot">✓</span><div class="timeline-body"><strong>تم إنشاء الطلب</strong><small>${WA.UI.formatDate(request.createdAt || request.updatedAt)}</small></div></div>`];
    batches.forEach((batch) => {
      const rows = referrals.filter((row) => Number(row.batchNumber || 1) === batch);
      const accepted = rows.find((row) => row.acceptedAt);
      items.push(`<div class="timeline-item"><span class="timeline-dot">${batch}</span><div class="timeline-body"><strong>الدفعة ${batch}: أُرسل إلى ${rows.length} ورش</strong><small>${accepted ? "قبلت ورشة واحدة وأُغلقت بقية الفرص" : rows.every((row) => ["rejected", "expired"].includes(row.status)) ? "انتهت دون قبول" : "بانتظار القبول"}</small></div></div>`);
      if (accepted) items.push(`<div class="timeline-item"><span class="timeline-dot">✓</span><div class="timeline-body"><strong>تم قبول الطلب</strong><small>${WA.UI.formatDate(accepted.acceptedAt)}</small></div></div>`);
    });
    return items.join("");
  };

  const renderOutcomeChoices = () => {
    const choices = [
      ["contacted", "تم التواصل"], ["appointment_set", "تم تحديد موعد"], ["arrived", "وصلت إلى الورشة"],
      ["service_received", "تمت الخدمة"], ["service_not_received", "لم تتم الخدمة"], ["not_agreed", "لم أتفق معها"]
    ];
    $("#outcomeChoices").innerHTML = choices.map(([value, label]) => `<button type="button" class="choice-btn${currentReferral?.resultStatus === value ? " selected" : ""}" data-outcome="${value}">${label}</button>`).join("");
    $$("[data-outcome]").forEach((button) => button.addEventListener("click", () => {
      try {
        currentReferral = WA.Lifecycle.updateReferralOutcome(currentReferral.id, button.dataset.outcome, "customer");
        WA.UI.showToast("تم تحديث نتيجة الإحالة", "success");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    }));
  };

  const renderRequest = (requestId) => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) return;
    currentRequest = request;
    const customer = WA.Storage.findById("wa_customers", request.customerId);
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    const referrals = referralsFor(request.id);
    currentReferral = acceptedReferralFor(request);
    $("#lookupCard").hidden = true;
    $("#requestView").hidden = false;
    $("#requestTitle").textContent = request.humanId;
    $("#requestSubtitle").textContent = `${WA.UI.vehicleText(vehicle || request.vehicleSnapshot || {})} — ${request.city || ""}`;
    $("#requestMeta").innerHTML = `<span>${WA.UI.statusLabel(request.status)}</span><span>${request.ai?.specialty || "فحص وتشخيص عام"}</span><span>${request.ai?.urgency || "استعجال غير محدد"}</span>`;
    $("#statusPanel").innerHTML = statusHtml(request, referrals);
    $("#requestTimeline").innerHTML = timelineHtml(request, referrals);
    const trackPath = `track.html?token=${encodeURIComponent(request.publicToken)}`;
    const fullLink = new URL(trackPath, location.href).href;
    $("#trackPrivateLink").value = fullLink;
    $("#copyTrackLink").onclick = () => WA.UI.copyText(fullLink);

    if (currentReferral) {
      const partner = WA.Storage.findById("wa_partners", currentReferral.partnerId);
      $("#partnerPanel").innerHTML = WA.UI.renderPartnerCard({ partner, referral: currentReferral, matchReason: currentReferral.matchReason });
      $("#contactPanel").hidden = false;
      $("#outcomePanel").hidden = false;
      $("#ratingPanel").hidden = Boolean(WA.Storage.get("wa_ratings").find((row) => row.referralId === currentReferral.id));
      customerMessage = WA.UI.buildWhatsappMessage({ request, customer, vehicle, partner });
      $("#customerWhatsapp").href = WA.UI.whatsappUrl(partner?.whatsapp, customerMessage);
      $("#customerWhatsapp").onclick = () => WA.Lifecycle.markWhatsappOpened(currentReferral.id);
      $("#copyCustomerMessage").onclick = () => WA.UI.copyText(customerMessage);
      renderOutcomeChoices();
      const eligibility = WA.Lifecycle.alternativeEligibility(request);
      $("#alternativePanel").hidden = !eligibility.allowed;
      $("#alternativeHelp").textContent = eligibility.allowed
        ? `يمكن طلب بديل حتى ${formatDeadline(eligibility.deadline)}. سنستبعد الورشة الحالية ونبحث عن ورشة أخرى مناسبة.`
        : eligibility.reason;
    } else {
      $("#partnerPanel").innerHTML = "";
      $("#contactPanel").hidden = true;
      $("#outcomePanel").hidden = true;
      $("#alternativePanel").hidden = true;
      $("#ratingPanel").hidden = true;
    }
  };

  const resolveRequest = () => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      const request = WA.Lifecycle.findRequestByToken(token);
      if (request) { renderRequest(request.id); return; }
      $("#trackError").textContent = "الرابط غير صالح أو لم يعد متاحًا.";
    }
  };

  const bind = () => {
    $("#trackForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const request = WA.Lifecycle.findRequestByHumanId($("#requestNumber").value);
      const phone = WA.Storage.sanitizePhone($("#trackPhone").value);
      const customer = request ? WA.Storage.findById("wa_customers", request.customerId) : null;
      if (!request || !customer || customer.phone !== phone) { $("#trackError").textContent = "لم نجد طلبًا مطابقًا لرقم الطلب والجوال."; return; }
      $("#trackError").textContent = "";
      history.replaceState(null, "", `track.html?token=${encodeURIComponent(request.publicToken)}`);
      renderRequest(request.id);
    });

    $("#requestAlternative").addEventListener("click", () => {
      const reason = $("#alternativeReason").value;
      if (!reason) { WA.UI.showToast("اختر سبب عدم الاتفاق", "error"); return; }
      if (!confirm("سيتم إغلاق الإحالة الحالية والبحث عن ورشة أخرى. هل تريد المتابعة؟")) return;
      try {
        const result = WA.Lifecycle.requestAlternative(currentRequest.id, reason);
        WA.UI.showToast(result.referrals.length === 3 ? "بدأ البحث عن ورشة أخرى" : "لم تتوفر ورشة بديلة حاليًا", result.referrals.length === 3 ? "success" : "info");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    });

    $("#ratingForm").addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        WA.Lifecycle.createRating({
          requestId: currentRequest.id, referralId: currentReferral.id,
          overall: $("#ratingOverall").value, recommend: $("#ratingRecommend").value,
          comment: $("#ratingComment").value
        });
        WA.UI.showToast("شكرًا، تم حفظ تقييمك", "success");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    });
  };

  const init = () => { bind(); resolveRequest(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
