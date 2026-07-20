(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  let step = 1;
  let selectedSpecialties = [];
  let selectedMakes = [];
  const progress = { 1: [25, "بيانات الورشة"], 2: [50, "ساعات الاستقبال"], 3: [75, "التغطية والتخصص"], 4: [100, "المراجعة"] };

  const selectedValues = (select) => Array.from(select.selectedOptions || []).map((option) => option.value).filter(Boolean);
  const checkedValues = (selector) => $$(selector).filter((input) => input.checked).map((input) => input.value);

  const showStep = (next) => {
    step = next;
    $$('[data-join-step]').forEach((section) => section.classList.toggle("active", Number(section.dataset.joinStep) === next));
    const [percent, label] = progress[next] || [100, "اكتمل"];
    $("#joinProgressLabel").textContent = label;
    $("#joinProgressPercent").textContent = `${percent}%`;
    $("#joinProgressBar").style.width = `${percent}%`;
    $(".progress-track").setAttribute("aria-valuenow", String(percent));
    const active = $(`[data-join-step="${next}"]`);
    active?.focus({ preventScroll: true });
    active?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateCities = () => {
    const region = $("#joinRegion").value;
    const city = $("#joinCity");
    if (!region) {
      city.disabled = true;
      city.innerHTML = '<option value="">اختر المنطقة أولًا</option>';
      return;
    }
    city.disabled = false;
    WA.UI.initSelect(city, WA.Automotive.getCities(region), "اختر المدينة");
    updateCoverage();
  };

  const updateCoverage = () => {
    const region = $("#joinRegion").value;
    const basicCity = $("#joinCity").value;
    const coverage = $("#coverageCities");
    const previous = new Set(selectedValues(coverage));
    coverage.innerHTML = "";
    WA.Automotive.getCities(region).forEach((city) => {
      const option = new Option(city, city);
      option.selected = previous.has(city) || city === basicCity;
      coverage.add(option);
    });
  };

  const timeOptions = (selected = "") => WA.Automotive.timeOptions()
    .map((value) => `<option value="${value}"${value === selected ? " selected" : ""}>${value}</option>`).join("");

  const renderSchedule = () => {
    $("#dailyScheduleEditor").innerHTML = WA.Automotive.weekdays.map((day, index) => {
      const open = day !== "الجمعة";
      return `<article class="day-schedule" data-day="${WA.UI.escapeHtml(day)}">
        <div class="day-schedule-head">
          <strong>${WA.UI.escapeHtml(day)}</strong>
          <label class="switch-line"><input class="day-open" type="checkbox" ${open ? "checked" : ""}><span>مفتوح</span></label>
          <label class="switch-line"><input class="day-all-day" type="checkbox"><span>24 ساعة</span></label>
        </div>
        <div class="day-periods" ${open ? "" : "hidden"}>
          <div class="period-row period-one"><strong>الفترة الأولى</strong><label>من<select class="period1-from">${timeOptions(index === 5 ? "" : "08:00")}</select></label><label>إلى<select class="period1-to">${timeOptions(index === 5 ? "" : "12:00")}</select></label></div>
          <label class="checkbox-line second-period-toggle"><input class="has-second-period" type="checkbox" ${open ? "checked" : ""}><span>إضافة فترة ثانية</span></label>
          <div class="period-row period-two" ${open ? "" : "hidden"}><strong>الفترة الثانية</strong><label>من<select class="period2-from">${timeOptions(index === 5 ? "" : "16:00")}</select></label><label>إلى<select class="period2-to">${timeOptions(index === 5 ? "" : "22:00")}</select></label></div>
        </div>
      </article>`;
    }).join("");

    $$(".day-schedule").forEach((row) => {
      const open = $(".day-open", row);
      const allDay = $(".day-all-day", row);
      const periods = $(".day-periods", row);
      const second = $(".has-second-period", row);
      const secondRow = $(".period-two", row);
      open.addEventListener("change", () => {
        periods.hidden = !open.checked;
        allDay.disabled = !open.checked;
      });
      allDay.addEventListener("change", () => { periods.hidden = !open.checked || allDay.checked; });
      second.addEventListener("change", () => { secondRow.hidden = !second.checked; });
    });
  };

  const schedule = () => $$(".day-schedule").map((row) => {
    const open = $(".day-open", row).checked;
    const allDay = open && $(".day-all-day", row).checked;
    const hasSecond = open && !allDay && $(".has-second-period", row).checked;
    return {
      day: row.dataset.day,
      open,
      allDay,
      period1: open && !allDay ? { from: $(".period1-from", row).value, to: $(".period1-to", row).value } : null,
      period2: hasSecond ? { from: $(".period2-from", row).value, to: $(".period2-to", row).value } : null
    };
  });

  const copySunday = () => {
    const source = $$('.day-schedule')[0];
    if (!source) return;
    const values = {
      open: $(".day-open", source).checked,
      allDay: $(".day-all-day", source).checked,
      hasSecond: $(".has-second-period", source).checked,
      p1f: $(".period1-from", source).value,
      p1t: $(".period1-to", source).value,
      p2f: $(".period2-from", source).value,
      p2t: $(".period2-to", source).value
    };
    $$('.day-schedule').slice(1).forEach((row) => {
      $(".day-open", row).checked = values.open;
      $(".day-all-day", row).checked = values.allDay;
      $(".has-second-period", row).checked = values.hasSecond;
      $(".period1-from", row).value = values.p1f;
      $(".period1-to", row).value = values.p1t;
      $(".period2-from", row).value = values.p2f;
      $(".period2-to", row).value = values.p2t;
      $(".day-periods", row).hidden = !values.open || values.allDay;
      $(".period-two", row).hidden = !values.hasSecond;
    });
    WA.UI.showToast("تم نسخ ساعات الأحد", "success");
  };

  const renderPriority = ({ availableId, selectedId, source, selected, setSelected }) => {
    const available = source.filter((item) => !selected.includes(item));
    $(`#${availableId}`).innerHTML = available.map((item) => `<div class="selector-item"><span>${WA.UI.escapeHtml(item)}</span><button class="btn btn-light btn-sm" type="button" data-add-item="${WA.UI.escapeHtml(item)}">إضافة</button></div>`).join("") || '<p class="muted">أضفت جميع الخيارات.</p>';
    $(`#${selectedId}`).innerHTML = selected.map((item, index) => `<li class="selector-item"><span>${WA.UI.escapeHtml(item)}</span><span class="priority-actions"><button class="btn btn-ghost btn-sm" type="button" data-up="${index}" aria-label="رفع الأولوية">↑</button><button class="btn btn-ghost btn-sm" type="button" data-down="${index}" aria-label="خفض الأولوية">↓</button><button class="btn btn-ghost btn-sm" type="button" data-remove="${index}">إزالة</button></span></li>`).join("") || '<li class="muted">لم تختر شيئًا بعد.</li>';
    $$(`#${availableId} [data-add-item]`).forEach((button) => button.addEventListener("click", () => setSelected([...selected, button.dataset.addItem])));
    $$(`#${selectedId} [data-remove]`).forEach((button) => button.addEventListener("click", () => setSelected(selected.filter((_, index) => index !== Number(button.dataset.remove)))));
    $$(`#${selectedId} [data-up]`).forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.up); if (index <= 0) return; const copy = [...selected]; [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]]; setSelected(copy);
    }));
    $$(`#${selectedId} [data-down]`).forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.down); if (index >= selected.length - 1) return; const copy = [...selected]; [copy[index + 1], copy[index]] = [copy[index], copy[index + 1]]; setSelected(copy);
    }));
  };

  const setSpecialties = (items) => {
    selectedSpecialties = items;
    renderPriority({ availableId: "availableSpecialties", selectedId: "selectedSpecialties", source: WA.Automotive.specialties.filter((item) => !/قطع غيار|نقل وسحب|صيانة دورية/.test(item)), selected: selectedSpecialties, setSelected: setSpecialties });
  };
  const setMakes = (items) => {
    selectedMakes = items;
    renderPriority({ availableId: "availableMakes", selectedId: "selectedMakes", source: WA.Automotive.makes.filter((item) => item !== "أخرى"), selected: selectedMakes, setSelected: setMakes });
  };

  const validateStep = (number) => {
    if (number === 1) {
      const ids = ["businessName", "tradeName", "activityDescription", "acceptanceContactName", "joinRegion", "joinCity", "address", "googleMapsUrl", "googlePlaceId", "joinWhatsapp", "commercialRegistration", "registeredName"];
      let valid = ids.every((id) => Boolean(String($(`#${id}`).value || "").trim()));
      valid = valid && /^05\d{8}$/.test(WA.Storage.sanitizePhone($("#joinWhatsapp").value));
      try { new URL($("#googleMapsUrl").value); } catch (_) { valid = false; }
      valid = valid && WA.GooglePlaces.validPlaceId($("#googlePlaceId").value);
      if (!valid) WA.UI.showToast("أكمل بيانات الورشة وتحقق من رقم واتساب ورابط الخرائط وGoogle Place ID", "error");
      return valid;
    }
    if (number === 2) {
      const rows = schedule();
      let valid = rows.some((row) => row.open);
      rows.forEach((row) => {
        if (!row.open || row.allDay) return;
        valid = valid && Boolean(row.period1?.from && row.period1?.to && row.period1.from < row.period1.to);
        if (row.period2) valid = valid && Boolean(row.period2.from && row.period2.to && row.period2.from < row.period2.to);
      });
      if (!valid) WA.UI.showToast("افتح يومًا واحدًا على الأقل وتحقق من أوقات الفترات", "error");
      return valid;
    }
    if (number === 3) {
      const valid = selectedValues($("#coverageCities")).length > 0 && selectedSpecialties.length > 0 && selectedMakes.length > 0 && checkedValues('#fuelTypesJoin input[type="checkbox"]').length > 0;
      if (!valid) WA.UI.showToast("أكمل مدن التغطية والتخصصات والسيارات وأنواع الوقود", "error");
      return valid;
    }
    return true;
  };

  const review = () => {
    const openDays = schedule().filter((row) => row.open).map((row) => row.day).join("، ");
    const items = [
      ["الورشة", $("#tradeName").value],
      ["مسؤول القبول", $("#acceptanceContactName").value],
      ["الموقع", `${$("#joinRegion").value} — ${$("#joinCity").value}`],
      ["Google Place ID", $("#googlePlaceId").value],
      ["أيام الاستقبال", openDays],
      ["التخصص الرئيسي", selectedSpecialties[0] || "—"],
      ["بقية التخصصات", selectedSpecialties.slice(1).join("، ") || "—"],
      ["مدن التغطية", selectedValues($("#coverageCities")).join("، ")],
      ["حالة الاستقبال", document.querySelector('input[name="intakeCapacity"]:checked')?.value === "available" ? "نستقبل طلبات" : document.querySelector('input[name="intakeCapacity"]:checked')?.value === "limited" ? "استقبال محدود" : "متوقف مؤقتًا"]
    ];
    $("#joinReview").innerHTML = items.map(([label, value]) => `<div class="guidance-item"><span>${WA.UI.escapeHtml(label)}</span><strong>${WA.UI.escapeHtml(value)}</strong></div>`).join("");
  };

  const showSuccess = (application) => {
    $("#joinApplicationNumber").textContent = application.applicationNumber;
    $("#joinStatusLink").href = `join-status.html?token=${encodeURIComponent(application.publicToken)}`;
    $$('[data-join-step]').forEach((section) => section.classList.remove("active"));
    $("#joinSuccess").classList.add("active");
    $("#joinSuccess").focus();
  };

  const submit = (event) => {
    event.preventDefault();
    const form = $("#joinForm");
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (!["agreementAccepted", "feesAccepted", "ratingsAccepted", "privacyTrustAccepted", "honestyPledge"].every((id) => $(`#${id}`).checked)) {
      WA.UI.showToast("يلزم قبول جميع الموافقات والتعهد", "error"); return;
    }
    const phone = WA.Storage.sanitizePhone($("#joinWhatsapp").value);
    const businessName = WA.Storage.sanitizeText($("#businessName").value, 100);
    const duplicate = WA.Storage.get("wa_join_applications").find((row) => row.phone === phone && row.businessName === businessName && !["rejected", "cancelled"].includes(row.status));
    if (duplicate) { WA.UI.showToast(`يوجد طلب سابق برقم ${duplicate.applicationNumber}`, "info"); showSuccess(duplicate); return; }
    const application = WA.Storage.upsert("wa_join_applications", {
      id: WA.Storage.createId("APP"),
      applicationNumber: `JOIN-${Math.floor(10000 + Math.random() * 90000)}`,
      publicToken: WA.Storage.randomToken("join"),
      partnerType: "workshop",
      stage: "stage_one",
      businessName,
      tradeName: WA.Storage.sanitizeText($("#tradeName").value, 100),
      description: WA.Storage.sanitizeText($("#activityDescription").value, 500),
      acceptanceContactName: WA.Storage.sanitizeText($("#acceptanceContactName").value, 80),
      region: $("#joinRegion").value,
      city: $("#joinCity").value,
      address: WA.Storage.sanitizeText($("#address").value, 250),
      googleMapsUrl: $("#googleMapsUrl").value,
      googlePlaceId: WA.Storage.sanitizeText($("#googlePlaceId").value, 512),
      googlePlaceLinkStatus: "pending_verification",
      phone,
      acceptanceWhatsapp: phone,
      secondaryPhone: WA.Storage.sanitizePhone($("#secondaryPhone").value),
      documents: {
        commercialRegistration: WA.Storage.sanitizeText($("#commercialRegistration").value, 40),
        registeredName: WA.Storage.sanitizeText($("#registeredName").value, 120),
        commercialExpiry: $("#commercialExpiry").value
      },
      schedule: schedule(),
      coverageCities: selectedValues($("#coverageCities")),
      specialtiesPriority: selectedSpecialties,
      makesPriority: selectedMakes,
      fuelTypes: checkedValues('#fuelTypesJoin input[type="checkbox"]'),
      intakeCapacity: document.querySelector('input[name="intakeCapacity"]:checked')?.value || "available",
      agreements: {
        partnership: true,
        threeWorkshopDispatch: true,
        firstAcceptanceClosesBatch: true,
        acceptedLeadFees: true,
        feeRange: "1-5",
        ratingsAndObjections: true,
        privacyAndTrust: true,
        honestyPledge: true
      },
      status: "submitted",
      statusLabel: "تم الاستلام — قيد المراجعة",
      submittedAt: WA.Storage.now()
    });
    showSuccess(application);
  };

  const init = () => {
    WA.UI.initSelect($("#joinRegion"), WA.Automotive.regionNames, "اختر المنطقة");
    renderSchedule();
    $("#fuelTypesJoin").innerHTML = WA.Automotive.fuels.map((fuel, index) => `<label class="checkbox-line"><input type="checkbox" value="${WA.UI.escapeHtml(fuel)}" ${index === 0 ? "checked" : ""}><span>${WA.UI.escapeHtml(fuel)}</span></label>`).join("");
    setSpecialties([]); setMakes([]);
    $("#joinRegion").addEventListener("change", updateCities);
    $("#joinCity").addEventListener("change", updateCoverage);
    $("#copySundaySchedule").addEventListener("click", copySunday);
    $("#openAllDays").addEventListener("click", () => $$(".day-open").forEach((input) => { input.checked = true; input.dispatchEvent(new Event("change")); }));
    $$('[data-join-next]').forEach((button) => button.addEventListener("click", () => {
      if (!validateStep(step)) return;
      const next = Number(button.dataset.joinNext);
      if (next === 4) review();
      showStep(next);
    }));
    $$('[data-join-back]').forEach((button) => button.addEventListener("click", () => showStep(Number(button.dataset.joinBack))));
    $("#joinForm").addEventListener("submit", submit);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
