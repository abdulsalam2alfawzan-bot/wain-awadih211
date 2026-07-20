from pathlib import Path
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
import base64, json

root=Path(__file__).resolve().parents[1]
css=(root/'assets/styles.css').read_text(encoding='utf-8')
logo='data:image/png;base64,'+base64.b64encode((root/'assets/images/logo.png').read_bytes()).decode()

def inline_page(name):
    soup=BeautifulSoup((root/name).read_text(encoding='utf-8'),'html.parser')
    for meta in soup.find_all('meta',attrs={'http-equiv':lambda x:x and x.lower()=='content-security-policy'}): meta.decompose()
    for link in soup.find_all('link',rel=lambda x:x and 'stylesheet' in x): link.decompose()
    style=soup.new_tag('style'); style.string=css; soup.head.append(style)
    base=soup.new_tag('base',href='https://example.test/'); soup.head.insert(0,base)
    for img in soup.find_all('img'): img['src']=logo
    for tag in list(soup.find_all('script',src=True)):
        src=tag.get('src')
        code=(root/src).read_text(encoding='utf-8')
        code=code.replace('new URL(trackPath,location.href).href','new URL(trackPath,document.baseURI).href')
        code=code.replace('new URL(acceptPath,location.href).href','new URL(acceptPath,document.baseURI).href')
        new=soup.new_tag('script'); new.string=code; tag.replace_with(new)
    return str(soup)

issues=[]; evidence={}
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    page=browser.new_page(viewport={'width':390,'height':844},locale='ar-SA')
    page.on('pageerror',lambda exc: issues.append(f'pageerror: {exc}'))
    page.set_content(inline_page('customer.html'),wait_until='domcontentloaded',timeout=20000)
    page.wait_for_timeout(250)
    try:
        # Location is first and can auto-fill a supported region/city.
        page.evaluate("""() => Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { getCurrentPosition: (ok) => ok({coords:{latitude:24.7136,longitude:46.6753,accuracy:25}}) } })""")
        page.click('#detectLocation')
        page.wait_for_timeout(100)
        auto_location=page.evaluate("""() => ({region:document.querySelector('#region').value,city:document.querySelector('#city').value,method:document.querySelector('#locationStatus').textContent})""")
        if auto_location.get('region')!='منطقة الرياض' or auto_location.get('city')!='الرياض': issues.append(f'Geolocation did not select Riyadh: {auto_location}')

        # Manual editing must override the automatic choice immediately.
        page.select_option('#region','منطقة القصيم'); page.select_option('#city','بريدة')
        page.fill('#firstName','عبدالله')

        # Demo OTP is generated, auto-filled, invalidated when phone changes, and must be verified.
        page.fill('#phone','0551234567'); page.wait_for_timeout(80)
        first_otp=page.evaluate("""() => ({shown:document.querySelector('#otpPanel').hidden===false,code:document.querySelector('#otpInput').value,phone:WA.Lifecycle.loadDraft()?.otp?.challenge?.phone||''})""")
        page.fill('#phone','0551234568'); page.wait_for_timeout(80)
        page.click('#customerForm button[type="submit"]')
        blocked_screen=page.evaluate("() => document.querySelector('.flow-screen.active')?.dataset.screen")
        if blocked_screen != 'customer': issues.append('Customer advanced before OTP verification')
        second_otp=page.evaluate("""() => ({shown:document.querySelector('#otpPanel').hidden===false,code:document.querySelector('#otpInput').value,status:document.querySelector('#otpStatus').textContent})""")
        if not first_otp.get('shown') or not second_otp.get('shown') or len(second_otp.get('code',''))!=6: issues.append(f'OTP generation/autofill failed: {first_otp} / {second_otp}')
        page.click('#verifyOtp')
        page.click('#customerForm button[type="submit"]')
        page.wait_for_selector('[data-screen="vehicle"].active',timeout=3000)

        page.select_option('#make','تويوتا'); page.select_option('#model','كامري'); page.select_option('#year','2022'); page.click('#vehicleForm button[type="submit"]')
        page.fill('#problem','السيارة ترج إذا وقفت وتظهر لمبة المكينة وصار العزم ضعيف فجأة عند الإشارة'); page.click('#pathForm button[type="submit"]')
        page.wait_for_selector('[data-screen="guidance"].active',timeout=6000)
        page.click('#guidanceNext')
        page.check('#dataSharingAccepted'); page.check('#privacyAccepted'); page.check('#termsAccepted'); page.click('#consentForm button[type="submit"]')
        page.wait_for_selector('[data-screen="result"].active',timeout=7000)
        evidence=page.evaluate('''() => ({
          active: document.querySelector('.flow-screen.active')?.dataset.screen,
          requests: WA.Storage.get('wa_requests').length,
          referrals: WA.Storage.get('wa_referrals').length,
          fees: WA.Storage.get('wa_fees').length,
          referralStatuses: WA.Storage.get('wa_referrals').map(r=>r.status),
          questionCount: WA.Storage.get('wa_requests')[0]?.ai?.questions?.length,
          privateLink: document.querySelector('#privateLink')?.value,
          region: WA.Storage.get('wa_requests')[0]?.region,
          city: WA.Storage.get('wa_requests')[0]?.city,
          verified: WA.Storage.get('wa_customers')[0]?.phoneVerified,
          verifiedAt: WA.Storage.get('wa_customers')[0]?.phoneVerifiedAt,
          phone: WA.Storage.get('wa_customers')[0]?.phone,
          locationMethod: WA.Storage.get('wa_requests')[0]?.locationMethod,
          header: !!document.querySelector('header.unified-site-header img[alt="وين أوديها"]'),
          footer: !!document.querySelector('footer.unified-site-footer img[alt="وين أوديها"]')
        })''')
        evidence['autoLocation']=auto_location; evidence['otp']={'first':first_otp,'second':second_otp}
        if evidence.get('active')!='result': issues.append('Customer flow did not reach result')
        if evidence.get('requests')!=1 or evidence.get('referrals')!=3: issues.append(f'Unexpected request/referral counts {evidence}')
        if evidence.get('fees')!=0: issues.append('Fee created before workshop acceptance')
        if evidence.get('region')!='منطقة القصيم' or evidence.get('city')!='بريدة': issues.append('Manual location edit did not persist to request')
        if evidence.get('verified') is not True or evidence.get('phone')!='0551234568': issues.append('Verified OTP metadata was not persisted')
        if not evidence.get('privateLink','').startswith('https://example.test/track.html?token='): issues.append('Private tracking link missing')
        if not evidence.get('header') or not evidence.get('footer'): issues.append('Header/footer logo missing in customer journey')
    except Exception as exc:
        issues.append(f'flow error: {exc}')

    # Workshop join flow requires a valid Place ID field and stores it for later server verification.
    join_page=browser.new_page(viewport={"width":390,"height":844},locale="ar-SA")
    join_errors=[]
    join_page.on("pageerror",lambda exc: join_errors.append(str(exc)))
    join_page.set_content(inline_page("join.html"),wait_until="domcontentloaded",timeout=20000)
    join_page.wait_for_timeout(200)
    try:
        join_page.fill("#businessName","ورشة اختبار الربط")
        join_page.fill("#tradeName","ورشة الاختبار")
        join_page.fill("#activityDescription","ورشة فحص وتشخيص وميكانيكا وكهرباء سيارات")
        join_page.fill("#acceptanceContactName","أحمد")
        join_page.select_option("#joinRegion","منطقة القصيم")
        join_page.select_option("#joinCity","بريدة")
        join_page.fill("#address","بريدة")
        join_page.fill("#googleMapsUrl","https://maps.google.com/?q=Buraidah")
        join_page.fill("#googlePlaceId","ChIJTESTPLACE123")
        join_page.fill("#joinWhatsapp","0557654321")
        join_page.fill("#commercialRegistration","1010123456")
        join_page.fill("#registeredName","ورشة الاختبار")
        join_page.click('[data-join-next="2"]')
        join_page.click('[data-join-next="3"]')
        join_page.click('#availableSpecialties [data-add-item]')
        join_page.click('#availableMakes [data-add-item]')
        join_page.click('[data-join-next="4"]')
        for selector in ["#agreementAccepted","#feesAccepted","#ratingsAccepted","#privacyTrustAccepted","#honestyPledge"]: join_page.check(selector)
        join_page.click('#joinForm button[type="submit"]')
        join_page.wait_for_selector('#joinSuccess.active',timeout=4000)
        join_evidence=join_page.evaluate("""() => ({ applications: WA.Storage.get('wa_join_applications').length, application: WA.Storage.get('wa_join_applications')[0], success: document.querySelector('#joinSuccess')?.classList.contains('active') })""")
        evidence["join"]={"applications":join_evidence.get("applications"),"partnerType":join_evidence.get("application",{}).get("partnerType"),"placeId":join_evidence.get("application",{}).get("googlePlaceId"),"success":join_evidence.get("success")}
        if join_errors: issues.extend([f"join pageerror: {x}" for x in join_errors])
        if join_evidence.get("applications")!=1 or join_evidence.get("application",{}).get("partnerType")!="workshop" or join_evidence.get("application",{}).get("googlePlaceId")!="ChIJTESTPLACE123" or not join_evidence.get("success"): issues.append("Workshop join flow failed")
    except Exception as exc:
        issues.append(f"join flow error: {exc}")
    join_page.close()

    denial_page=browser.new_page(viewport={"width":360,"height":800},locale="ar-SA")
    denial_errors=[]
    denial_page.on("pageerror",lambda exc: denial_errors.append(str(exc)))
    denial_page.set_content(inline_page("customer.html"),wait_until="domcontentloaded",timeout=20000)
    denial_page.evaluate("""() => Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { getCurrentPosition: (_ok, fail) => fail({code:1}) } })""")
    denial_page.click('#detectLocation'); denial_page.wait_for_timeout(60)
    denial_evidence=denial_page.evaluate("""() => ({status:document.querySelector('#locationStatus').textContent,regionDisabled:document.querySelector('#region').disabled,cityDisabled:document.querySelector('#city').disabled})""")
    evidence['locationDenied']=denial_evidence
    if denial_errors: issues.extend([f"location denial pageerror: {x}" for x in denial_errors])
    if 'اختر المنطقة والمدينة يدويًا' not in denial_evidence.get('status','') or denial_evidence.get('regionDisabled'): issues.append('Manual location fallback failed after permission denial')
    denial_page.close()
    browser.close()

out={'passed':not issues,'issues':issues,'evidence':evidence,'method':'Playwright executes production customer and join HTML with production JavaScript inlined on a 390x844 mobile viewport, including mocked browser geolocation.'}
(root/'tests/stage1_browser_flow_qa.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(out,ensure_ascii=False,indent=2))
raise SystemExit(1 if issues else 0)
