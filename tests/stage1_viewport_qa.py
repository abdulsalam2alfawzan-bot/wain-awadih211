from pathlib import Path
import json, base64
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

root=Path(__file__).resolve().parents[1]
css=(root/'assets/styles.css').read_text(encoding='utf-8')
logo='data:image/png;base64,'+base64.b64encode((root/'assets/images/logo.png').read_bytes()).decode()
pages=['index.html','customer.html','track.html','join.html','join-status.html','privacy.html','terms.html','404.html','workshop-login.html','workshop-dashboard.html','payment.html','receipt.html','admin-login.html','admin-dashboard.html','workshop-accept.html']
viewports=[(360,800),(390,844),(768,1024),(1366,768),(1920,1080)]
results=[]; issues=[]

def renderable(path):
    soup=BeautifulSoup(path.read_text(encoding='utf-8'),'html.parser')
    for meta in soup.find_all('meta',attrs={'http-equiv':lambda x: x and x.lower()=='content-security-policy'}): meta.decompose()
    for script in soup.find_all('script'): script.decompose()
    for link in soup.find_all('link',rel=lambda x: x and 'stylesheet' in x): link.decompose()
    style=soup.new_tag('style'); style.string=css; soup.head.append(style)
    for img in soup.find_all('img'): img['src']=logo
    return str(soup)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    context=browser.new_context(locale='ar-SA',reduced_motion='reduce')
    for width,height in viewports:
        page=context.new_page(); page.set_viewport_size({'width':width,'height':height})
        for item in pages:
            try:
                page.set_content(renderable(root/item),wait_until='domcontentloaded',timeout=15000)
                page.wait_for_timeout(30)
                data=page.evaluate('''() => ({
                  width: document.documentElement.scrollWidth,
                  client: document.documentElement.clientWidth,
                  header: !!document.querySelector('header.unified-site-header'),
                  footer: !!document.querySelector('footer.unified-site-footer'),
                  hlogo: !!document.querySelector('header img[alt="وين أوديها"]'),
                  flogo: !!document.querySelector('footer img[alt="وين أوديها"]'),
                  direction: getComputedStyle(document.documentElement).direction,
                  bodyDisplay: getComputedStyle(document.body).display
                })''')
                ok=data['header'] and data['footer'] and data['hlogo'] and data['flogo'] and data['direction']=='rtl' and data['width']<=data['client']+1
                if not ok: issues.append({'page':item,'viewport':f'{width}x{height}','data':data})
                results.append({'page':item,'viewport':f'{width}x{height}','ok':ok,'horizontal_overflow':max(0,data['width']-data['client'])})
            except Exception as exc:
                issues.append({'page':item,'viewport':f'{width}x{height}','error':str(exc)})
        page.close()
    browser.close()

out={'checks':len(results),'issues':issues,'results':results,'method':'Playwright set_content with production HTML and inlined production CSS; scripts removed for static responsive layout validation.'}
(root/'tests/stage1_viewport_qa.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'checks':len(results),'passed':not issues,'issue_count':len(issues),'issues':issues[:5]},ensure_ascii=False,indent=2))
raise SystemExit(1 if issues else 0)
