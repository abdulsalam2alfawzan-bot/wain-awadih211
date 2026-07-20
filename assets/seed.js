(() => {
  "use strict";
  window.WA = window.WA || {};

  const seedVersion = 13;
  const qassimCities = ["بريدة", "عنيزة", "الرس", "البكيرية", "المذنب"];
  const makes = ["تويوتا", "نيسان", "هيونداي", "كيا", "فورد", "شيفروليه", "لكزس", "جي إم سي", "مازدا", "هوندا"];
  const workshopNames = ["مركز الفحص المتخصص", "ورشة المسار", "مركز تشخيص المركبات"];
  const specialties = ["فحص وتشخيص عام", "ميكانيكا وكهرباء محرك", "فحص فرامل", "تكييف وكهرباء سيارات", "عفشة وتعليق وتوجيه", "كهرباء سيارات", "فحص ناقل حركة"];
  const services = ["فحص وتشخيص عام", "فحص المحرك", "فحص الفرامل", "فحص التكييف", "فحص الكهرباء", "فحص العفشة", "فحص ناقل الحركة"];
  const schedules = WA.Automotive.weekdays.map((day) => ({
    day,
    open: day !== "الجمعة",
    allDay: false,
    period1: { from: "08:00", to: "12:00" },
    period2: { from: "16:00", to: "22:00" }
  }));

  const buildPartner = (city, cityIndex, variantIndex) => {
    const id = variantIndex === 0 ? `DEMO-WORKSHOP-${cityIndex + 1}` : `DEMO-WORKSHOP-${cityIndex + 1}-${variantIndex + 1}`;
    const rotatedMakes = [...makes.slice(variantIndex), ...makes.slice(0, variantIndex)];
    return {
      id,
      type: "workshop",
      stage: "stage_one",
      name: `${workshopNames[(cityIndex + variantIndex) % workshopNames.length]} — ${city}${variantIndex ? ` ${variantIndex + 1}` : ""}`,
      tradeName: `منشأة ${id}`,
      description: "ورشة مسجلة لاستقبال إحالات مشكلات السيارات.",
      region: "منطقة القصيم",
      city,
      address: `داخل مدينة ${city}`,
      exactLocation: `مدينة ${city}`,
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city)}`,
      googlePlaceId: "",
      googlePlaceLinkStatus: "unlinked",
      whatsapp: `0500${String(cityIndex * 10 + variantIndex).padStart(6, "0")}`.slice(0, 10),
      acceptanceContactName: "مسؤول استقبال الإحالات",
      acceptanceWhatsapp: `0500${String(cityIndex * 10 + variantIndex).padStart(6, "0")}`.slice(0, 10),
      commercialRegistration: `CR-WORKSHOP-${cityIndex + 1}-${variantIndex + 1}`,
      schedule: schedules,
      hours: "الأحد–الخميس والسبت: 8:00–12:00 و4:00–10:00",
      specialties,
      specialtiesPriority: specialties,
      services,
      servedMakes: rotatedMakes,
      makesPriority: rotatedMakes,
      fuelTypes: ["بنزين", "ديزل", "هجين"],
      coverageCities: [city],
      intakeCapacity: "available",
      availability: { status: "typical", note: "الورشة تستقبل عادةً هذا النوع من الطلبات، ويؤكد القبول من الرابط المرسل عبر واتساب." },
      ratingOverall: Number((4.1 + ((cityIndex + variantIndex) % 7) / 10).toFixed(1)),
      ratingCount: 12 + cityIndex * 3 + variantIndex * 2,
      fairnessRating: 0,
      fairnessCount: 0,
      commitment: ["مرتفع", "جيد جدًا", "جيد"][cityIndex % 3],
      responseScore: 80 + ((cityIndex + variantIndex) % 15),
      trustScore: 82 + ((cityIndex * 2 + variantIndex) % 14),
      partnershipStatus: "active",
      paymentStatus: "current",
      acceptsUrgent: false,
      isDemo: true,
      seedVersion
    };
  };

  const buildPartners = () => qassimCities.flatMap((city, cityIndex) => Array.from({ length: 9 }, (_, variantIndex) => variantIndex).map((variantIndex) => buildPartner(city, cityIndex, variantIndex)));

  const run = () => {
    const meta = WA.Storage.get("wa_meta");
    const built = buildPartners();
    const builtIds = new Set(built.map((partner) => partner.id));
    // نزيل فقط البيانات الأولية للقطاعات المؤجلة، ونحافظ على أي بيانات حقيقية أضافها المستخدم.
    const retained = WA.Storage.get("wa_partners").filter((row) => !row.isDemo || builtIds.has(row.id));
    WA.Storage.set("wa_partners", retained);
    built.forEach((partner) => {
      const previous = WA.Storage.findById("wa_partners", partner.id);
      WA.Storage.upsert("wa_partners", { ...previous, ...partner, createdAt: previous?.createdAt || WA.Storage.now() });
    });
    WA.Storage.set("wa_discounts", WA.Storage.get("wa_discounts").filter((row) => !row.isDemo));
    WA.Storage.set("wa_sessions", WA.Storage.get("wa_sessions").filter((row) => row.type !== "demo_credentials"));
    WA.Storage.set("wa_meta", {
      ...meta,
      seedVersion,
      stage: "stage_one_problem_whatsapp",
      seedAppliedAt: meta.seedAppliedAt || WA.Storage.now(),
      seedNotice: "تم تجهيز بيانات الورش للتحقق من الإرسال والقبول.",
      updatedAt: WA.Storage.now()
    });
  };

  WA.Seed = { run, buildPartners };
})();
