const assert = (condition, message) => { if (!condition) throw new Error(message); };
const modulePath = require.resolve('../netlify/functions/google-place-details.js');
const originalFetch = global.fetch;
const originalKey = process.env.GOOGLE_MAPS_API_KEY;
const originalOrigins = process.env.GOOGLE_PLACES_ALLOWED_ORIGINS;

(async () => {
  process.env.GOOGLE_MAPS_API_KEY = 'server-only-test-key';
  process.env.GOOGLE_PLACES_ALLOWED_ORIGINS = 'https://wain.example';
  let captured = null;
  global.fetch = async (url, options) => {
    captured = { url: String(url), options };
    return {
      ok: true,
      status: 200,
      json: async () => ({
        id: 'ChIJTESTPLACE123',
        displayName: { text: 'ورشة موثقة' },
        rating: 4.6,
        userRatingCount: 128,
        googleMapsUri: 'https://maps.google.com/?cid=123',
        formattedAddress: 'الرياض، السعودية',
        businessStatus: 'OPERATIONAL'
      })
    };
  };
  delete require.cache[modulePath];
  const { handler } = require(modulePath);
  const event = {
    httpMethod: 'GET',
    headers: { origin: 'https://wain.example', referer: 'https://wain.example/admin-dashboard.html' },
    queryStringParameters: { placeId: 'ChIJTESTPLACE123', languageCode: 'ar', regionCode: 'SA' }
  };
  const result = await handler(event);
  const body = JSON.parse(result.body);
  assert(result.statusCode === 200, `proxy status ${result.statusCode}`);
  assert(body.rating === 4.6 && body.userRatingCount === 128, 'rating fields missing');
  assert(captured.url.includes('/v1/places/ChIJTESTPLACE123'), 'wrong Places API endpoint');
  assert(captured.options.headers['X-Goog-Api-Key'] === 'server-only-test-key', 'server key not used');
  assert(captured.options.headers['X-Goog-FieldMask'].includes('rating') && captured.options.headers['X-Goog-FieldMask'].includes('userRatingCount') && captured.options.headers['X-Goog-FieldMask'].includes('googleMapsUri'), 'field mask incomplete');
  assert(result.headers['Cache-Control'].includes('no-store'), 'Places content must not be persisted by response cache');

  const bad = await handler({ ...event, queryStringParameters: { placeId: 'bad' } });
  assert(bad.statusCode === 400, 'invalid Place ID not blocked');
  const blocked = await handler({ ...event, headers: { origin: 'https://evil.example', referer: 'https://evil.example/' } });
  assert(blocked.statusCode === 403, 'unapproved origin not blocked');
  console.log('ALL_GOOGLE_PLACES_PROXY_QA_PASSED');
})().finally(() => {
  global.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.GOOGLE_MAPS_API_KEY; else process.env.GOOGLE_MAPS_API_KEY = originalKey;
  if (originalOrigins === undefined) delete process.env.GOOGLE_PLACES_ALLOWED_ORIGINS; else process.env.GOOGLE_PLACES_ALLOWED_ORIGINS = originalOrigins;
}).catch((error) => { console.error(error); process.exitCode = 1; });
