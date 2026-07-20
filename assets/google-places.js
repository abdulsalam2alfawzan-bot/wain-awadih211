(() => {
  "use strict";
  window.WA = window.WA || {};
  const memoryCache = new Map();
  const inflight = new Map();
  const ttlMs = 5 * 60 * 1000;
  const endpoint = "/api/google-place-details";
  const validPlaceId = (value) => /^[A-Za-z0-9_-]{8,512}$/.test(String(value || "").trim());
  const safeUrl = (value) => {
    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();
      const validHost = host === "maps.app.goo.gl" || host.startsWith("maps.google.")
        || ((host === "google.com" || host.startsWith("www.google.")) && url.pathname.startsWith("/maps"));
      return url.protocol === "https:" && validHost ? url.href : "";
    } catch (_) { return ""; }
  };

  const fetchDetails = async (placeId, { force = false } = {}) => {
    const id = String(placeId || "").trim();
    if (!validPlaceId(id)) throw new Error("لم يتم ربط الورشة بمعرّف Google Place صالح.");
    const cached = memoryCache.get(id);
    if (!force && cached && Date.now() - cached.fetchedAt < ttlMs) return cached.data;
    if (!force && inflight.has(id)) return inflight.get(id);
    const task = fetch(`${endpoint}?placeId=${encodeURIComponent(id)}&languageCode=ar&regionCode=SA`, { headers: { Accept: "application/json" }, credentials: "same-origin" })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "تعذر تحديث بيانات Google Maps الآن.");
        const clean = {
          placeId: data.placeId || id,
          displayName: data.displayName || "",
          rating: Number.isFinite(Number(data.rating)) ? Number(data.rating) : null,
          userRatingCount: Number.isFinite(Number(data.userRatingCount)) ? Number(data.userRatingCount) : null,
          googleMapsUri: safeUrl(data.googleMapsUri),
          formattedAddress: data.formattedAddress || "",
          businessStatus: data.businessStatus || "",
          fetchedAt: data.fetchedAt || new Date().toISOString()
        };
        memoryCache.set(id, { fetchedAt: Date.now(), data: clean });
        return clean;
      })
      .finally(() => inflight.delete(id));
    inflight.set(id, task);
    return task;
  };

  const render = (node, result, fallbackUrl = "") => {
    if (!node) return;
    const link = result?.googleMapsUri || safeUrl(fallbackUrl);
    if (result?.rating != null && result?.userRatingCount != null) {
      node.innerHTML = `<span class="google-source">Google Maps</span><strong>${Number(result.rating).toFixed(1)} / 5</strong><small>بناءً على ${Number(result.userRatingCount).toLocaleString("ar-SA")} مراجعة</small>${link ? `<a class="text-link" href="${WA.UI.escapeHtml(link)}" target="_blank" rel="noopener noreferrer">عرض على Google Maps</a>` : ""}`;
      node.dataset.googleStatus = "ready";
    } else {
      node.innerHTML = `<span class="google-source">Google Maps</span><strong>لا يوجد تقييم متاح</strong>${link ? `<a class="text-link" href="${WA.UI.escapeHtml(link)}" target="_blank" rel="noopener noreferrer">فتح الخريطة</a>` : ""}`;
      node.dataset.googleStatus = "empty";
    }
  };

  const enhance = async (node) => {
    if (!node || node.dataset.googleEnhanced === "true") return;
    node.dataset.googleEnhanced = "true";
    const id = node.dataset.googlePlaceId || "";
    const fallbackUrl = node.dataset.googleMapsUrl || "";
    if (!validPlaceId(id)) {
      node.innerHTML = `<span class="google-source">Google Maps</span><strong>غير مرتبط بعد</strong>${safeUrl(fallbackUrl) ? `<a class="text-link" href="${WA.UI.escapeHtml(safeUrl(fallbackUrl))}" target="_blank" rel="noopener noreferrer">فتح الخريطة</a>` : ""}`;
      node.dataset.googleStatus = "unlinked";
      return;
    }
    node.innerHTML = '<span class="google-source">Google Maps</span><strong>جاري تحديث التقييم…</strong><small>يُعرض منفصلًا عن تقييم وين أوديها</small>';
    try { render(node, await fetchDetails(id), fallbackUrl); }
    catch (error) {
      node.innerHTML = `<span class="google-source">Google Maps</span><strong>تعذر تحديث التقييم الآن</strong><small>${WA.UI.escapeHtml(error.message)}</small>${safeUrl(fallbackUrl) ? `<a class="text-link" href="${WA.UI.escapeHtml(safeUrl(fallbackUrl))}" target="_blank" rel="noopener noreferrer">فتح الخريطة</a>` : ""}`;
      node.dataset.googleStatus = "error";
    }
  };
  const enhanceAll = (root = document) => [...root.querySelectorAll("[data-google-place-id]")].forEach(enhance);
  WA.GooglePlaces = Object.freeze({ endpoint, validPlaceId, fetchDetails, enhance, enhanceAll, clearMemoryCache: () => memoryCache.clear() });
})();
