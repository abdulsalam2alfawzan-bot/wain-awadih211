(() => {
  "use strict";
  window.WA = window.WA || {};

  const supportsMake = (partner, vehicle) => {
    const make = vehicle.makeOther || vehicle.make;
    const supported = partner.makesPriority || partner.servedMakes || [];
    return supported.includes("جميع الشركات") || supported.includes(make) || supported.includes("أخرى");
  };

  const supportsService = (partner, request) => {
    const specialty = request.ai?.specialty || "فحص وتشخيص عام";
    const specialties = partner.specialtiesPriority || partner.specialties || [];
    const services = partner.services || [];
    return specialties.includes(specialty)
      || services.includes(specialty)
      || specialties.includes("فحص وتشخيص عام")
      || services.includes("فحص وتشخيص عام");
  };

  const eligible = (partner, request, excluded) => {
    if (excluded.has(partner.id)) return false;
    if (partner.type !== "workshop") return false;
    if (partner.partnershipStatus !== "active") return false;
    if ((partner.intakeCapacity || "available") === "paused") return false;
    if (!['current', 'awaiting_payment'].includes(partner.paymentStatus || 'current')) return false;
    const coverage = partner.coverageCities || (partner.city ? [partner.city] : []);
    if (!coverage.includes(request.city)) return false;
    if (!supportsMake(partner, request.vehicleSnapshot || {})) return false;
    return supportsService(partner, request);
  };

  const score = (partner, request) => {
    const vehicle = request.vehicleSnapshot || {};
    const make = vehicle.makeOther || vehicle.make;
    const specialty = request.ai?.specialty || "فحص وتشخيص عام";
    const makes = partner.makesPriority || partner.servedMakes || [];
    const specialties = partner.specialtiesPriority || partner.specialties || [];
    const makeIndex = makes.indexOf(make);
    const specialtyIndex = specialties.indexOf(specialty);
    let total = 0;
    total += makeIndex >= 0 ? Math.max(4, 18 - makeIndex * 2) : 2;
    total += specialtyIndex >= 0 ? Math.max(5, 24 - specialtyIndex * 3) : 4;
    total += (partner.intakeCapacity || "available") === "limited" ? 2 : 7;
    total += Number(partner.trustScore || 0) * 0.3;
    total += Number(partner.responseScore || 0) * 0.2;
    total += Number(partner.ratingOverall || 0) * 4;
    total += Math.min(Number(partner.ratingCount || 0), 50) * 0.1;
    return total;
  };

  const rankedPartners = ({ request, excludedPartnerIds = [] }) => {
    const excluded = new Set(excludedPartnerIds);
    return WA.Storage.get("wa_partners")
      .filter((partner) => eligible(partner, request, excluded))
      .map((partner) => ({ partner, score: score(partner, request) }))
      .sort((a, b) => b.score - a.score || String(a.partner.id).localeCompare(String(b.partner.id), "ar"));
  };

  const matchBatch = ({ request, excludedPartnerIds = [], limit = WA.Config.dispatchBatchSize }) => {
    const ranked = rankedPartners({ request, excludedPartnerIds });
    const matches = ranked.slice(0, Math.max(1, Number(limit || 3))).map(({ partner, score: value }, index) => ({
      partner,
      score: value,
      rank: index + 1,
      reason: `الورشة تغطي مدينة ${request.city}، وتخدم علامة السيارة، وتناسب تخصص ${request.ai?.specialty || "الفحص والتشخيص"}.`
    }));
    return {
      partners: matches,
      reason: matches.length
        ? `تم العثور على ${matches.length} ${matches.length === 1 ? "ورشة مناسبة" : "ورش مناسبة"}.`
        : `لم نجد حاليًا ورشة مسجلة تطابق التخصص والسيارة في مدينة ${request.city}.`
    };
  };

  // توافق مع الواجهات القديمة التي تتوقع شريكًا واحدًا.
  const match = (options) => {
    const batch = matchBatch({ ...options, limit: 1 });
    return batch.partners.length
      ? { partner: batch.partners[0].partner, reason: batch.partners[0].reason }
      : { partner: null, reason: batch.reason };
  };

  const getDiscount = () => null;

  WA.Matching = { match, matchBatch, rankedPartners, supportsMake, getDiscount };
})();
