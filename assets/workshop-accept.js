(() => {
  "use strict";
  const $ = WA.UI.qs;
  let token = "";

  const summaryRows = (view) => [
    ["رقم الطلب", view.request.humanId],
    ["السيارة", WA.UI.vehicleText(view.vehicle || view.request.vehicleSnapshot || {})],
    ["المدينة", view.request.city],
    ["ملخص المشكلة", view.request.problem],
    ["التخصص المتوقع", view.request.ai?.specialty || "فحص وتشخيص عام"],
    ["درجة الاستعجال", view.request.ai?.urgency || "غير محددة"],
    ["رسم الإحالة عند القبول", `${Number(view.referral.feeAmount || 1)} ريال`],
    ["مهلة القبول", WA.UI.formatDate(view.referral.expiresAt)]
  ];

  const render = () => {
    const view = WA.Lifecycle.getWorkshopAcceptanceView(token);
    const card = $("#acceptanceCard");
    if (!view) {
      card.innerHTML = '<div class="error-panel"><strong>الرابط غير صالح</strong><p>تعذر العثور على الطلب المرتبط بهذا الرابط.</p></div>';
      return;
    }
    if (view.closedByAnother || ["closed_prior_acceptance", "late_acceptance_attempt"].includes(view.referral.status)) {
      card.innerHTML = `<div class="warning-panel"><strong>الطلب مغلق</strong><p>تم إغلاق الطلب رقم ${WA.UI.escapeHtml(view.request.humanId)} لوجود قبول سابق من ورشة أخرى. لا تظهر بيانات العميل ولا يحتسب أي رسم على هذه الورشة.</p></div>`;
      return;
    }
    if (["expired", "rejected"].includes(view.referral.status) && !view.acceptedByThisWorkshop) {
      card.innerHTML = `<div class="warning-panel"><strong>${view.referral.status === "expired" ? "انتهت مهلة القبول" : "تم رفض الطلب"}</strong><p>لم تُكشف بيانات العميل ولم يحتسب رسم إحالة.</p></div>`;
      return;
    }

    const rows = summaryRows(view).map(([label, value]) => `<div class="guidance-item"><span>${WA.UI.escapeHtml(label)}</span><strong>${WA.UI.escapeHtml(value)}</strong></div>`).join("");
    if (view.acceptedByThisWorkshop) {
      const customer = view.customer;
      const message = `السلام عليكم، معك ${customer.firstName} بخصوص طلب وين أوديها رقم ${view.request.humanId}.`;
      card.innerHTML = `<div class="success-panel"><strong>تم قبول الطلب بنجاح</strong><p>أُغلق الطلب أمام الورش الأخرى واحتسب رسم الإحالة المحدد.</p></div><div class="guidance-grid mt-16">${rows}<div class="guidance-item"><span>اسم العميل</span><strong>${WA.UI.escapeHtml(customer.firstName)}</strong></div><div class="guidance-item"><span>رقم الجوال</span><strong dir="ltr">${WA.UI.escapeHtml(customer.phone)}</strong></div></div><div class="button-row mt-16"><a class="btn btn-primary" href="${WA.UI.whatsappUrl(customer.phone, message)}" target="_blank" rel="noopener">التواصل مع العميل عبر واتساب</a><button class="btn btn-light" id="copyCustomerPhone" type="button">نسخ رقم الجوال</button></div><div class="legal-note mt-16">استخدم بيانات العميل لهذا الطلب فقط، ولا تستخدمها للتسويق أو تشاركها مع أي طرف آخر.</div>`;
      $("#copyCustomerPhone")?.addEventListener("click", () => WA.UI.copyText(customer.phone));
      return;
    }

    card.innerHTML = `<div class="section-head compact"><div class="kicker">طلب جديد للورشة</div><h1>هل تستطيع استقبال الحالة؟</h1><p>البيانات الشخصية مخفية. أول ورشة تقبل فقط تحصل على اسم العميل ورقم جواله.</p></div><div class="guidance-grid">${rows}</div><div class="fee-policy-box mt-16"><strong>قاعدة الرسم</strong><small>يحتسب الرسم عند قبول الطلب وكشف بيانات العميل، وليس عند مشاهدة الملخص أو رفضه.</small></div><div class="button-row mt-16"><button class="btn btn-primary" id="acceptRequest" type="button">قبول الطلب</button><button class="btn btn-ghost" id="rejectRequest" type="button">لا أستطيع الاستقبال</button></div>`;
    $("#acceptRequest").addEventListener("click", () => {
      if (!confirm(`سيتم قبول الطلب واحتساب رسم إحالة قدره ${Number(view.referral.feeAmount || 1)} ريال وكشف بيانات العميل. هل تؤكد؟`)) return;
      try {
        const result = WA.Lifecycle.acceptReferral(token);
        if (!result.accepted) WA.UI.showToast(result.expired ? "انتهت مهلة القبول" : "سبق أن قبلت ورشة أخرى الطلب", "error");
        render();
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    });
    $("#rejectRequest").addEventListener("click", () => {
      const reason = prompt("سبب الرفض — اختياري", "غير متاح للاستقبال حاليًا") || "";
      try { WA.Lifecycle.rejectReferral(token, reason); render(); } catch (error) { WA.UI.showToast(error.message, "error"); }
    });
  };

  const init = () => { token = new URLSearchParams(location.search).get("token") || ""; render(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
