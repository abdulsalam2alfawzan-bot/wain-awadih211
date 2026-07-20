from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import json, re

root=Path(__file__).resolve().parents[1]
html_files=sorted(root.glob('*.html'))
issues=[]
rows=[]
future_files={'workshop-login.html','workshop-dashboard.html','payment.html','receipt.html'}
admin_files={'admin-login.html','admin-dashboard.html'}
public_active={'index.html','customer.html','track.html','join.html','join-status.html','privacy.html','terms.html','404.html','workshop-accept.html'}
for path in html_files:
    soup=BeautifulSoup(path.read_text(encoding='utf-8'),'html.parser')
    header=soup.find('header',class_=lambda c:c and 'unified-site-header' in c)
    footer=soup.find('footer',class_=lambda c:c and 'unified-site-footer' in c)
    hlogo=header.find('img',src='assets/images/logo.png') if header else None
    flogo=footer.find('img',src='assets/images/logo.png') if footer else None
    main=soup.find('main')
    current=soup.find(attrs={'aria-current':'page'})
    links_ok=True
    for tag in soup.find_all(['a','link','script','img']):
        attr='href' if tag.name in ('a','link') else 'src'
        value=tag.get(attr)
        if not value or value.startswith(('#','mailto:','tel:','javascript:','data:')): continue
        parsed=urlparse(value)
        if parsed.scheme in ('http','https'): continue
        target=(root / parsed.path).resolve()
        if not str(target).startswith(str(root.resolve())) or not target.exists():
            issues.append(f'{path.name}: missing {value}')
            links_ok=False
    if not header: issues.append(f'{path.name}: missing header')
    if not footer: issues.append(f'{path.name}: missing footer')
    if not hlogo or hlogo.get('alt')!='وين أوديها': issues.append(f'{path.name}: invalid header logo')
    if not flogo or flogo.get('alt')!='وين أوديها': issues.append(f'{path.name}: invalid footer logo')
    if not main or main.get('id')!='main-content': issues.append(f'{path.name}: missing main-content')
    if not current: issues.append(f'{path.name}: missing aria-current')
    footer_hrefs=[a.get('href','') for a in footer.find_all('a')] if footer else []
    for required_footer in ['index.html','track.html','join.html','privacy.html','terms.html']:
        if required_footer not in footer_hrefs: issues.append(f'{path.name}: footer missing {required_footer}')
    header_hrefs=[a.get('href','') for a in header.find_all('a')] if header else []
    if path.name not in admin_files:
        for footer_only in ['join.html','privacy.html','terms.html']:
            if footer_only in header_hrefs: issues.append(f'{path.name}: header exposes footer-only link {footer_only}')
    if path.name in public_active:
        visible_text=' '.join(soup.stripped_strings)
        nav_hrefs=[a.get('href','') for n in soup.find_all('nav') for a in n.find_all('a')]
        forbidden=['workshop-login.html','workshop-dashboard.html','payment.html','receipt.html','service=parts','service=tow','service=maintenance']
        for item in forbidden:
            if any(item in href for href in nav_hrefs): issues.append(f'{path.name}: public navigation exposes future route {item}')
        if path.name in {'index.html','customer.html'} and any(term in visible_text for term in ['قطع الغيار','أحتاج سطحة','الصيانة الدورية كخدمة']):
            issues.append(f'{path.name}: active UI contains a future service')
    if path.name in future_files:
        text=' '.join(soup.stripped_strings)
        if 'غير متاح حاليًا' not in text and not (main and 'future-page' in (main.get('class') or [])): issues.append(f'{path.name}: not marked as unavailable')
    if path.name in admin_files:
        if not soup.find('meta',attrs={'name':'robots'}): issues.append(f'{path.name}: missing noindex')
    ids=[x.get('id') for x in soup.find_all(attrs={'id':True})]
    dup={x for x in ids if ids.count(x)>1}
    if dup: issues.append(f'{path.name}: duplicate ids {sorted(dup)}')
    rows.append({
        'page':path.name,'header':bool(header),'header_logo':bool(hlogo),'footer':bool(footer),'footer_logo':bool(flogo),
        'links':links_ok,'aria_current':bool(current),'result':'ناجح' if all([header,hlogo,footer,flogo,links_ok,current]) else 'فشل'
    })

css=(root/'assets/styles.css').read_text(encoding='utf-8')
required_css=['min-height: 100dvh','overflow-x: hidden','@media (max-width: 679px)','@media (prefers-reduced-motion: reduce)']
for token in required_css:
    if token not in css: issues.append(f'CSS missing {token}')
if css.count('{')!=css.count('}'): issues.append('CSS brace imbalance')

result={'pages':len(html_files),'matrix':rows,'issues':issues}
(root/'tests/stage1_static_qa.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pages':len(html_files),'passed':len(issues)==0,'issues':issues},ensure_ascii=False,indent=2))
raise SystemExit(1 if issues else 0)
