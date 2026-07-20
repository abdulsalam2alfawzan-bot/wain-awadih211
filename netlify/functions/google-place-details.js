"use strict";

const allowedPlaceId = /^[A-Za-z0-9_-]{8,512}$/;
const parseOrigins = () => String(process.env.GOOGLE_PLACES_ALLOWED_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean);
const originAllowed = (event) => {
  const allowed = parseOrigins();
  const origin = event.headers.origin || "";
  const referer = event.headers.referer || "";
  if (allowed.length) return allowed.some((item) => origin === item || referer.startsWith(`${item}/`) || referer === item);
  if (!origin && !referer) return true;
  const host = String(event.headers["x-forwarded-host"] || event.headers.host || "").toLowerCase();
  const sameHost = (value) => { try { return new URL(value).host.toLowerCase() === host; } catch (_) { return false; } };
  return Boolean(host) && (sameHost(origin) || sameHost(referer));
};
const response = (statusCode, body, origin = "") => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, max-age=0",
    "X-Content-Type-Options": "nosniff",
    "Vary": "Origin"
  };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return { statusCode, headers, body: JSON.stringify(body) };
};

exports.handler = async (event) => {
  const origin = event.headers.origin || "";
  if (event.httpMethod !== "GET") return response(405, { message: "الطريقة غير مسموحة" }, origin);
  if (!originAllowed(event)) return response(403, { message: "المصدر غير مصرح له" }, origin);
  const placeId = String(event.queryStringParameters?.placeId || "").trim();
  if (!allowedPlaceId.test(placeId)) return response(400, { message: "معرّف Google Place غير صالح" }, origin);
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return response(503, { message: "تكامل Google Places غير مهيأ على الخادم" }, origin);
  const languageCode = /^[a-z]{2,3}(-[A-Z]{2})?$/.test(event.queryStringParameters?.languageCode || "") ? event.queryStringParameters.languageCode : "ar";
  const regionCode = /^[A-Z]{2}$/.test(event.queryStringParameters?.regionCode || "") ? event.queryStringParameters.regionCode : "SA";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);
  try {
    const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`);
    url.searchParams.set("languageCode", languageCode);
    url.searchParams.set("regionCode", regionCode);
    const googleResponse = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,googleMapsUri,formattedAddress,businessStatus"
      },
      signal: controller.signal
    });
    const data = await googleResponse.json().catch(() => ({}));
    if (!googleResponse.ok) return response(googleResponse.status === 404 ? 404 : 502, { message: "تعذر جلب بيانات المنشأة من Google Maps" }, origin);
    return response(200, {
      placeId: data.id || placeId,
      displayName: data.displayName?.text || "",
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? null,
      googleMapsUri: data.googleMapsUri || "",
      formattedAddress: data.formattedAddress || "",
      businessStatus: data.businessStatus || "",
      fetchedAt: new Date().toISOString()
    }, origin);
  } catch (error) {
    return response(error.name === "AbortError" ? 504 : 502, { message: error.name === "AbortError" ? "انتهت مهلة الاتصال بخدمة Google Maps" : "تعذر الاتصال بخدمة Google Maps" }, origin);
  } finally { clearTimeout(timer); }
};
