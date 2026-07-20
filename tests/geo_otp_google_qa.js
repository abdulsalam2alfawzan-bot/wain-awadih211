const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
const context={window:{},console,Date,Math,Intl,URL,setTimeout,clearTimeout,crypto:require('crypto').webcrypto}; context.window.window=context.window; context.window.crypto=context.crypto; context.WA=context.window.WA={}; vm.createContext(context);
for(const f of ['assets/config.js','assets/automotive-data.js','assets/otp.js']){vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context,{filename:f});context.WA=context.window.WA;}
const A=context.window.WA.Automotive, O=context.window.WA.OTP;
const assert=(v,m)=>{if(!v)throw new Error(m)};
const expected={
  'منطقة الرياض':['الرياض','الخرج','المجمعة','الدوادمي'],
  'منطقة مكة المكرمة':['مكة المكرمة','جدة','الطائف'],
  'منطقة المدينة المنورة':['المدينة المنورة','ينبع'],
  'منطقة القصيم':['بريدة','عنيزة','الرس','البكيرية','المذنب','البدائع'],
  'المنطقة الشرقية':['الدمام','الخبر','الظهران','الأحساء','الجبيل','القطيف','حفر الباطن'],
  'منطقة عسير':['أبها','خميس مشيط','بيشة','محايل عسير'],
  'منطقة تبوك':['تبوك','ضباء','الوجه','أملج'],
  'منطقة حائل':['حائل'],
  'منطقة الحدود الشمالية':['عرعر','رفحاء','طريف'],
  'منطقة جازان':['جازان','صبيا','أبو عريش'],
  'منطقة نجران':['نجران','شرورة'],
  'منطقة الباحة':['الباحة','بلجرشي'],
  'منطقة الجوف':['سكاكا','القريات','دومة الجندل']
};
assert(A.regionNames.length===13,`regions=${A.regionNames.length}`);
assert(A.allCities.length===44,`cities=${A.allCities.length}`);
for(const [region,cities] of Object.entries(expected)) assert(JSON.stringify(A.getCities(region))===JSON.stringify(cities),`city list mismatch: ${region}`);
assert(Object.keys(A.cityCoordinates).length===44,'Missing supported-city coordinates');
const nearest=A.findNearestCity(24.7136,46.6753); assert(nearest.city==='الرياض'&&nearest.region==='منطقة الرياض','nearest Riyadh');
const ch4=O.create('0551234567',4,5), ch6=O.create('0551234567',6,5);
assert(/^\d{4}$/.test(ch4.code)&&/^\d{6}$/.test(ch6.code),'otp 4/6 format');
assert(O.verify(ch6,ch6.code,'0551234567'),'otp verify'); assert(!O.verify(ch6,ch6.code,'0551234568'),'otp bound to phone');
const html=fs.readFileSync(path.join(root,'customer.html'),'utf8');
assert(html.indexOf('id="detectLocation"')<html.indexOf('id="firstName"'),'location must be first');
assert(html.includes('id="otpPanel"'),'otp panel');
const join=fs.readFileSync(path.join(root,'join.html'),'utf8'); assert(join.includes('id="googlePlaceId"'),'place id field');
const gp=fs.readFileSync(path.join(root,'netlify/functions/google-place-details.js'),'utf8'); assert(gp.includes('GOOGLE_MAPS_API_KEY')&&gp.includes('X-Goog-FieldMask'),'server integration');
const publicPages=['index.html','customer.html','track.html'];
for(const page of publicPages){
  const source=fs.readFileSync(path.join(root,page),'utf8');
  const header=source.match(/<nav class="main-nav"[\s\S]*?<\/nav>/)?.[0]||'';
  const footer=source.match(/<footer[\s\S]*?<\/footer>/)?.[0]||'';
  assert(!/join\.html|privacy\.html|terms\.html/.test(header),`${page}: partner/legal links must not be in header`);
  assert(/join\.html/.test(footer)&&/privacy\.html/.test(footer)&&/terms\.html/.test(footer),`${page}: required footer links missing`);
}
console.log('ALL_GEO_OTP_GOOGLE_QA_PASSED');
