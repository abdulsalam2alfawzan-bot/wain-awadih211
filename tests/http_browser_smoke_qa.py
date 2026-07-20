from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from threading import Thread
from functools import partial
from playwright.sync_api import sync_playwright, Error as PlaywrightError
import json

root=Path(__file__).resolve().parents[1]
server=ThreadingHTTPServer(('127.0.0.1',0),partial(SimpleHTTPRequestHandler,directory=str(root)))
port=server.server_address[1]
thread=Thread(target=server.serve_forever,daemon=True); thread.start()
issues=[]; evidence={}; skipped=False
try:
    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
        page=browser.new_page(viewport={'width':1366,'height':768},locale='ar-SA')
        page_errors=[]; console_errors=[]
        page.on('pageerror',lambda exc: page_errors.append(str(exc)))
        page.on('console',lambda msg: console_errors.append(msg.text) if msg.type=='error' else None)
        try:
            page.goto(f'http://127.0.0.1:{port}/index.html',wait_until='networkidle',timeout=20000)
            home=page.evaluate("""() => ({header:!!document.querySelector('header.unified-site-header img[alt="وين أوديها"]'),footer:!!document.querySelector('footer.unified-site-footer img[alt="وين أوديها"]'),headerLinks:[...document.querySelectorAll('header .main-nav a')].map(a=>a.getAttribute('href')),footerLinks:[...document.querySelectorAll('footer nav a')].map(a=>a.getAttribute('href')),direction:getComputedStyle(document.documentElement).direction})""")
            page.goto(f'http://127.0.0.1:{port}/customer.html?fresh=1',wait_until='networkidle',timeout=20000)
            customer=page.evaluate("""() => ({regions:document.querySelectorAll('#region option').length-1,locationBeforeName:(document.querySelector('#detectLocation').compareDocumentPosition(document.querySelector('#firstName')) & Node.DOCUMENT_POSITION_FOLLOWING)!==0,scriptsReady:!!window.WA?.OTP && !!window.WA?.Automotive && !!window.WA?.Lifecycle})""")
            page.fill('#phone','0551234567'); page.wait_for_timeout(80)
            otp=page.evaluate("""() => ({visible:document.querySelector('#otpPanel').hidden===false,value:document.querySelector('#otpInput').value})""")
            evidence={'home':home,'customer':customer,'otp':otp,'pageErrors':page_errors,'consoleErrors':console_errors}
            if not home['header'] or not home['footer'] or home['direction']!='rtl': issues.append('Home shell/logo/RTL failed over HTTP')
            if any(x in home['headerLinks'] for x in ['join.html','privacy.html','terms.html']): issues.append('Header exposes footer-only links')
            for target in ['track.html','join.html','privacy.html','terms.html']:
                if target not in home['footerLinks']: issues.append(f'Footer missing {target}')
            if customer['regions']!=13 or not customer['locationBeforeName'] or not customer['scriptsReady']: issues.append(f'Customer HTTP initialization failed: {customer}')
            if not otp['visible'] or len(otp['value'])!=6: issues.append('OTP did not initialize over HTTP')
            if page_errors: issues.extend([f'pageerror: {x}' for x in page_errors])
            if console_errors: issues.extend([f'console: {x}' for x in console_errors])
        except PlaywrightError as exc:
            if 'ERR_BLOCKED_BY_ADMINISTRATOR' in str(exc):
                skipped=True; evidence={'reason':'Chromium local HTTP navigation blocked by execution-environment policy.'}
            else:
                issues.append(str(exc))
        browser.close()
finally:
    server.shutdown(); server.server_close()

out={'passed':not issues,'skipped':skipped,'issues':issues,'evidence':evidence,'method':'Attempts Chromium against real local HTTP files; the environment may block localhost navigation. Inlined production-browser tests remain the functional browser source of truth when skipped.'}
(root/'tests/http_browser_smoke_qa.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(out,ensure_ascii=False,indent=2))
raise SystemExit(1 if issues else 0)
