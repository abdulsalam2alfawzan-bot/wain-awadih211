from pathlib import Path
from playwright.sync_api import sync_playwright
import json

root = Path(__file__).resolve().parents[1]
script = (root / 'assets/google-places.js').read_text(encoding='utf-8')
issues = []
evidence = {}
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path='/usr/bin/chromium', args=['--no-sandbox','--disable-dev-shm-usage'])
    page = browser.new_page(locale='ar-SA')
    calls = {'ok': 0, 'fail': 0}
    def route_handler(route):
        url = route.request.url
        if 'ChIJFAILPLACE999' in url:
            calls['fail'] += 1
            route.fulfill(status=503, content_type='application/json', body=json.dumps({'message':'تكامل Google غير متاح مؤقتًا'}, ensure_ascii=False))
        else:
            calls['ok'] += 1
            route.fulfill(status=200, content_type='application/json', body=json.dumps({
                'placeId':'ChIJCACHEPLACE123', 'displayName':'ورشة مرتبطة', 'rating':4.7,
                'userRatingCount':214, 'googleMapsUri':'https://maps.google.com/?cid=987',
                'formattedAddress':'الرياض، السعودية', 'businessStatus':'OPERATIONAL',
                'fetchedAt':'2026-07-21T00:00:00.000Z'
            }, ensure_ascii=False))
    page.route('https://example.test/api/google-place-details**', route_handler)
    html = f'''<!doctype html><html lang="ar" dir="rtl"><head><base href="https://example.test/"></head><body>
      <div id="ready" data-google-place-id="ChIJCACHEPLACE123" data-google-maps-url="https://maps.google.com/?q=riyadh"></div>
      <div id="failed" data-google-place-id="ChIJFAILPLACE999" data-google-maps-url="https://maps.google.com/?q=jeddah"></div>
      <script>window.WA={{UI:{{escapeHtml:(v)=>String(v).replace(/[&<>"']/g,'')}}}};</script>
      <script>{script}</script>
    </body></html>'''
    page.set_content(html, wait_until='domcontentloaded')
    try:
        details = page.evaluate("""async () => {
          const a = await WA.GooglePlaces.fetchDetails('ChIJCACHEPLACE123');
          const b = await WA.GooglePlaces.fetchDetails('ChIJCACHEPLACE123');
          await WA.GooglePlaces.enhance(document.querySelector('#ready'));
          await WA.GooglePlaces.enhance(document.querySelector('#failed'));
          return {
            first:a, second:b,
            readyStatus:document.querySelector('#ready').dataset.googleStatus,
            readyText:document.querySelector('#ready').textContent,
            failedStatus:document.querySelector('#failed').dataset.googleStatus,
            failedText:document.querySelector('#failed').textContent
          };
        }""")
        evidence = {'calls': calls, 'details': details}
        if calls['ok'] != 1: issues.append(f"Memory cache did not deduplicate requests: {calls}")
        if details.get('readyStatus') != 'ready' or '4.7' not in details.get('readyText','') or details.get('first',{}).get('userRatingCount') != 214 or not details.get('first',{}).get('googleMapsUri'): issues.append('Separate Google rating or map link did not render')
        if details.get('failedStatus') != 'error' or 'تعذر' not in details.get('failedText',''): issues.append('Google failure fallback did not render')
    except Exception as exc:
        issues.append(str(exc))
    browser.close()

out = {'passed': not issues, 'issues': issues, 'evidence': evidence, 'method': 'Production Google Places client executed in Chromium with a mocked same-origin API contract; verifies in-memory cache, separate rendering, and non-blocking fallback.'}
(root / 'tests/google_places_client_qa.json').write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(out, ensure_ascii=False, indent=2))
raise SystemExit(1 if issues else 0)
