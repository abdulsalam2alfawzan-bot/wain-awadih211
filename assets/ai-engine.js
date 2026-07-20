(() => {
  "use strict";
  window.WA = window.WA || {};

  const normalize = (value) => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[^\u0600-\u06FFa-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const dangerRules = [
    { keys: ["فرامل ما تمسك", "فرامل ضعيفه جدا", "فقدت الفرامل", "بريك ما يمسك"], label: "ضعف أو فقدان واضح في الفرامل" },
    { keys: ["دركسون قفل", "ما اقدر اوجه", "فقد التوجيه", "الدركسون ما يتحرك"], label: "خلل خطير محتمل في التوجيه" },
    { keys: ["الحراره للاخير", "غليان", "المكينه تحتر", "حراره مرتفعه جدا"], label: "ارتفاع شديد في حرارة المحرك" },
    { keys: ["ريحه بنزين", "رائحه وقود", "تسريب بنزين", "تسرب وقود"], label: "احتمال وجود رائحة أو تسرب وقود" },
    { keys: ["دخان كثيف", "دخان كثير", "دخان من المكينه"], label: "خروج دخان كثيف" },
    { keys: ["وسط الطريق", "طريق سريع", "مكان خطر", "واقف بالشارع"], label: "توقف المركبة في موقع خطر" }
  ];

  const scenarios = [
    {
      id: "brakes",
      keywords: ["فرامل", "بريك", "دعسه الفرامل", "صوت مع الفرامل", "رجفه فرامل"],
      expectedIssue: "قد تكون الأعراض مرتبطة بنظام الفرامل أو أحد مكوناته، ولا يمكن تأكيد السبب إلا بعد الفحص الفعلي.",
      specialty: "فحص فرامل",
      urgency: "مرتفعة",
      nextStep: "قلل القيادة غير الضرورية وتوجه إلى ورشة متخصصة لفحص نظام الفرامل في أقرب وقت.",
      feeCategory: "medium",
      questions: ["هل تشعر أن مسافة التوقف أصبحت أطول؟", "هل تظهر لمبة تحذير للفرامل؟", "هل يوجد صوت طحن أو احتكاك؟"]
    },
    {
      id: "engine",
      keywords: ["رجفه", "رج", "تقطيع", "تنتيع", "ضعف عزم", "عزم", "مكينه", "محرك", "لمبه المكينه"],
      expectedIssue: "قد تكون الأعراض مرتبطة بأداء المحرك أو أحد الأنظمة المؤثرة على الاحتراق أو دخول الهواء، ولا يمكن تأكيد السبب إلا بعد الفحص.",
      specialty: "ميكانيكا وكهرباء محرك",
      urgency: "متوسطة",
      nextStep: "أجرِ فحصًا متخصصًا للمحرك وقراءة أنظمة السيارة قبل استبدال أي قطعة.",
      feeCategory: "complex",
      questions: ["هل تظهر لمبة المكينة أو لمبة تحذير أخرى؟", "هل تحدث المشكلة أثناء الوقوف فقط؟", "هل لاحظت ضعفًا واضحًا في العزم؟"]
    },
    {
      id: "ac",
      keywords: ["مكيف", "تبريد", "يبرد", "هواء حار", "كمبروسر", "المكيف حار"],
      expectedIssue: "قد تكون المشكلة مرتبطة بكفاءة نظام التكييف أو أحد مكوناته الكهربائية أو الميكانيكية، ولا يمكن تحديد السبب قبل الفحص.",
      specialty: "تكييف وكهرباء سيارات",
      urgency: "منخفضة",
      nextStep: "احجز فحصًا لنظام التكييف وتأكد من سبب ضعف التبريد قبل تنفيذ أي إصلاح.",
      feeCategory: "medium",
      questions: ["هل يبرد المكيف بصورة أفضل أثناء المشي؟", "هل قوة الهواء من الفتحات طبيعية؟", "هل تسمع صوتًا غير معتاد عند تشغيل المكيف؟"]
    },
    {
      id: "suspension",
      keywords: ["طقطقه", "مطب", "مطبات", "عفشه", "مساعد", "اهتزاز", "صوت من الامام", "دركسون يهتز"],
      expectedIssue: "قد تكون الأعراض مرتبطة بأحد مكونات التعليق أو التوجيه أو الأجزاء الأمامية، ويحتاج السبب إلى فحص مباشر.",
      specialty: "عفشة وتعليق وتوجيه",
      urgency: "متوسطة",
      nextStep: "أجرِ فحصًا للعفشة والتوجيه والأجزاء الأمامية قبل الاستمرار في الرحلات الطويلة.",
      feeCategory: "medium",
      questions: ["هل يظهر الصوت أكثر عند المطبات؟", "هل تشعر باهتزاز في المقود؟", "هل تميل السيارة إلى جهة أثناء السير؟"]
    },
    {
      id: "electrical",
      keywords: ["بطاريه", "ما تشتغل", "سلف", "انوار", "كهرباء", "تطفى", "تشغيل"],
      expectedIssue: "قد تكون الأعراض مرتبطة بمنظومة التشغيل أو الشحن أو أحد الدوائر الكهربائية، ولا يمكن الجزم قبل القياس والفحص.",
      specialty: "كهرباء سيارات",
      urgency: "متوسطة",
      nextStep: "أجرِ فحصًا كهربائيًا لمنظومة التشغيل والشحن قبل تغيير أي مكوّن.",
      feeCategory: "specialist",
      questions: ["هل تسمع صوت السلف عند محاولة التشغيل؟", "هل تضعف الأنوار عند التشغيل؟", "هل توقفت السيارة أثناء القيادة؟"]
    },
    {
      id: "transmission",
      keywords: ["قير", "ناقل", "تعشيق", "نتعه قير", "ما يغير", "تبديل"],
      expectedIssue: "قد تكون الأعراض مرتبطة بعمل ناقل الحركة أو نظام التحكم به، ولا يمكن تحديد السبب دون فحص متخصص.",
      specialty: "فحص ناقل حركة",
      urgency: "مرتفعة",
      nextStep: "تجنب الضغط على السيارة واحجز فحصًا متخصصًا لناقل الحركة في أقرب وقت.",
      feeCategory: "complex",
      questions: ["هل تظهر المشكلة عند التعشيق؟", "هل تحدث أثناء تبديل السرعات؟", "هل ظهرت لمبة تحذير؟"]
    }
  ];

  const generalQuestions = [
    "هل ظهرت لمبة تحذير في الطبلون؟",
    "هل بدأت المشكلة بصورة مفاجئة؟",
    "هل تؤثر المشكلة على قدرة السيارة على الحركة؟"
  ];

  const containsAny = (text, keys) => keys.some((key) => text.includes(normalize(key)));

  const detectDanger = (description, answers = []) => {
    const combined = normalize(`${description} ${answers.join(" ")}`);
    const matches = dangerRules.filter((rule) => containsAny(combined, rule.keys));
    return { isDangerous: matches.length > 0, reasons: matches.map((match) => match.label) };
  };

  const classify = (description) => {
    const text = normalize(description);
    const ranked = scenarios.map((scenario) => ({
      scenario,
      score: scenario.keywords.reduce((total, keyword) => total + (text.includes(normalize(keyword)) ? 1 : 0), 0)
    })).sort((a, b) => b.score - a.score);
    return ranked[0]?.score > 0 ? ranked[0] : { scenario: null, score: 0 };
  };

  const questionCountFor = ({ clean, classification, danger }) => {
    if (danger.isDangerous) return 0;
    if (!classification.scenario) return 3;
    const wordCount = clean.split(/\s+/).filter(Boolean).length;
    if (classification.score >= 2 && wordCount >= 9) return 0;
    if (classification.score >= 2 || wordCount >= 12) return 1;
    if (wordCount >= 7) return 2;
    return 3;
  };

  const assess = ({ description = "", vehicle = {}, answers = [] }) => {
    const clean = WA.Storage.sanitizeText(description, 1200);
    const danger = detectDanger(clean, answers);
    const classification = classify(clean);
    const baseLegal = "هذا توجيه فني مبدئي بناءً على المعلومات المدخلة، وليس تشخيصًا نهائيًا. التشخيص النهائي مسؤولية الورشة بعد الفحص الفعلي.";

    if (danger.isDangerous) {
      return {
        scenarioId: "danger",
        confidence: "مؤشر خطر يحتاج تصرفًا احترازيًا",
        questions: [],
        expectedIssue: `توجد مؤشرات خطرة محتملة: ${danger.reasons.join("، ")}. لا يمكن تأكيد السبب دون فحص فعلي.`,
        specialty: "فحص عاجل ومساندة آمنة",
        urgency: "عاجلة أو خطرة",
        nextStep: "قد تكون قيادة السيارة غير آمنة. أوقفها في مكان آمن إن أمكن، ولا تستمر في القيادة، واستخدم سطحة أو تواصل مع الجهة المناسبة بحسب الحالة.",
        legalNotice: `${baseLegal} عند وجود خطر مباشر على الأشخاص أو الطريق تواصل مع جهة الطوارئ المناسبة.`,
        dangerReasons: danger.reasons,
        feeCategory: "specialist"
      };
    }

    if (!classification.scenario) {
      const questionCount = questionCountFor({ clean, classification, danger });
      return {
        scenarioId: "general",
        confidence: "المعلومات محدودة",
        questions: generalQuestions.slice(0, questionCount),
        expectedIssue: "لا تتوفر معلومات كافية لتحديد المشكلة المتوقعة بدقة، لكن البداية الأنسب هي فحص وتشخيص عام.",
        specialty: "فحص وتشخيص عام",
        urgency: "غير محددة",
        nextStep: "ابدأ بفحص تشخيصي عام لدى ورشة مؤهلة، وامتنع عن القيادة إذا ظهرت أعراض تجعلها غير آمنة.",
        legalNotice: baseLegal,
        dangerReasons: [],
        feeCategory: "simple"
      };
    }

    const scenario = classification.scenario;
    const questionCount = questionCountFor({ clean, classification, danger });
    return {
      scenarioId: scenario.id,
      confidence: questionCount === 0 ? "توجيه أولي واضح من الوصف" : "توجيه يحتاج توضيحًا قصيرًا",
      questions: scenario.questions.slice(0, questionCount),
      expectedIssue: scenario.expectedIssue,
      specialty: scenario.specialty,
      urgency: scenario.urgency,
      nextStep: scenario.nextStep,
      legalNotice: baseLegal,
      dangerReasons: [],
      feeCategory: scenario.feeCategory
    };
  };

  const finalize = ({ description, vehicle, questions = [], answers = [] }) => {
    const merged = assess({ description, vehicle, answers });
    const danger = detectDanger(description, answers);
    if (danger.isDangerous) return { ...merged, questions, answers };
    const uncertainCount = answers.filter((answer) => answer === "غير متأكد").length;
    return {
      ...merged,
      questions,
      answers,
      confidence: questions.length === 0
        ? "توجيه أولي من الوصف المدخل"
        : uncertainCount >= Math.max(2, questions.length)
          ? "توجيه محدود بسبب عدم اليقين في الإجابات"
          : `توجيه أولي بعد ${questions.length} ${questions.length === 1 ? "سؤال توضيحي" : "أسئلة توضيحية"}`
    };
  };

  WA.AIEngine = { assess, finalize, detectDanger, normalize, questionCountFor };
})();
