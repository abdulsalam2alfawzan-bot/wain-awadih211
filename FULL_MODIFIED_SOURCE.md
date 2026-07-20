# الكود الكامل للملفات المعدلة والجديدة

## MODIFIED: `404.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="الصفحة غير موجودة في منصة وين أوديها." name="description"/><meta content="width=device-width, initial-scale=1" name="viewport"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>الصفحة غير موجودة — وين أوديها؟</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head>
<body data-page="not-found"><header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الصفحة غير موجودة</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header><main class="section" id="main-content"><div class="container empty-state"><div class="path-icon" data-icon="search"></div><h1>الصفحة غير موجودة</h1><p>قد يكون الرابط غير صحيح أو تغيّر مسار الصفحة. اختر وجهتك من الخيارات التالية.</p><div class="button-row"><a class="btn btn-primary" href="index.html">الرئيسية</a><a class="btn btn-light" href="track.html">متابعة طلب</a></div></div></main><footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer><script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script></body></html>
```

## MODIFIED: `admin-dashboard.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/>
<meta content="#0b1d33" name="theme-color"/>
<meta content="noindex,nofollow,noarchive" name="robots"/>
<meta content="لوحة الإدارة الداخلية لمنصة وين أوديها." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'" http-equiv="Content-Security-Policy"/>
<title>لوحة الإدارة الداخلية — وين أوديها</title>
<link href="assets/images/favicon.png" rel="icon" type="image/png"/>
<link href="assets/styles.css" rel="stylesheet"/>
</head>
<body class="admin-page" data-page="admin-dashboard">
<header class="site-header unified-site-header admin-site-header">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell admin-header-shell">
<a aria-label="وين أوديها — لوحة الإدارة" class="brand unified-brand" href="admin-dashboard.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الإدارة الداخلية</span>
<div aria-live="polite" class="admin-user-summary">
<strong id="adminUserName">—</strong>
<span id="adminUserRole">—</span>
</div>
<button class="btn btn-ghost btn-sm" data-icon="lock" id="adminLogout" type="button">تسجيل الخروج</button>
</div>
</header>
<main class="admin-main" id="main-content">
<div class="container admin-shell">
<section aria-labelledby="adminTitle" class="admin-topbar">
<div>
<div class="kicker">تشغيل  والحسابات</div>
<h1 id="adminTitle">لوحة إدارة «وين أوديها»</h1>
<p>المؤشرات أدناه محسوبة مباشرة من السجلات المحفوظة في هذا المتصفح.</p>
</div>
<div class="admin-topbar-actions">
<button class="btn btn-light btn-sm" data-icon="refresh" id="adminRefresh" type="button">تحديث</button>
<button class="btn btn-light btn-sm" id="adminExport" type="button">تصدير CSV</button>
<button class="btn btn-light btn-sm" data-icon="print" id="adminPrint" type="button">طباعة</button>
</div>
</section>
<div class="warning-panel admin-security-notice" id="adminSecurityNotice">
<strong>تنبيه أمني:</strong> البوابة تعمل داخل مشروع ثابت وبياناتها في localStorage. إخفاء الرابط والصلاحيات في الواجهة لا يمثل حماية إنتاجية.
      </div>
<nav aria-label="أقسام لوحة الإدارة" class="admin-tabs" role="tablist">
<button aria-selected="true" class="admin-tab active" data-admin-tab="overview" data-permission="dashboard.view" role="tab" type="button">نظرة عامة</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="requests" data-permission="requests.view" role="tab" type="button">الطلبات ودفعات الورش</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="partners" data-permission="partners.view" role="tab" type="button">الشركاء</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="applications" data-permission="applications.view" role="tab" type="button">طلبات الانضمام</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="finance" data-permission="finance.view" role="tab" type="button">الحسابات</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="quality" data-permission="quality.view" role="tab" type="button">الجودة والاعتراضات</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="users" data-permission="*" role="tab" type="button">المستخدمون</button>
<button aria-selected="false" class="admin-tab" data-admin-tab="audit" data-permission="audit.view" role="tab" type="button">سجل التدقيق</button>
</nav>
<section class="admin-panel active" data-admin-panel="overview" id="panel-overview" role="tabpanel">
<div class="admin-metric-grid" id="adminMetrics"></div>
<div class="dashboard-grid two admin-overview-grid">
<article class="card">
<div class="admin-card-head"><div><h2>المتابعة التشغيلية</h2><p>أحدث الطلبات التي تحتاج إلى متابعة.</p></div></div>
<div class="admin-compact-list" id="overviewRequests"></div>
</article>
<article class="card">
<div class="admin-card-head"><div><h2>سلامة البيانات</h2><p>فحص العلاقات بين الجداول الحالية.</p></div></div>
<div id="integrityResult"></div>
</article>
</div>
</section>
<section class="admin-panel" data-admin-panel="requests" hidden="" id="panel-requests" role="tabpanel">
<div class="admin-filterbar">
<label class="form-field"><span>بحث</span><input id="requestSearch" placeholder="رقم الطلب، الجوال، المدينة أو السيارة" type="search"/></label>
<label class="form-field"><span>نوع الخدمة</span><select id="requestServiceFilter"><option value="">مسار مشكلة السيارة</option></select></label>
<label class="form-field"><span>الحالة</span><select id="requestStatusFilter"><option value="">جميع الحالات</option></select></label>
</div>
<div class="table-wrap admin-table-wrap">
<table>
<thead><tr><th>الطلب</th><th>العميل والسيارة</th><th>الخدمة والموقع</th><th>الحالة</th><th>الإحالات</th><th>آخر تحديث</th><th>الإجراءات</th></tr></thead>
<tbody id="requestsTableBody"></tbody>
</table>
</div>
</section>
<section class="admin-panel" data-admin-panel="partners" hidden="" id="panel-partners" role="tabpanel">
<div class="admin-filterbar">
<label class="form-field"><span>بحث</span><input id="partnerSearch" placeholder="اسم الشريك، المدينة أو رقم التواصل" type="search"/></label>
<label class="form-field"><span>النوع</span><select id="partnerTypeFilter"><option value="">جميع الأنواع</option></select></label>
<label class="form-field"><span>حالة الشراكة</span><select id="partnerStatusFilter"><option value="">جميع الحالات</option><option value="active">نشط</option><option value="suspended_operations">موقوف تشغيليًا</option><option value="suspended_financial">موقوف ماليًا</option><option value="cancelled">ملغى</option></select></label>
</div>
<div class="table-wrap admin-table-wrap"><table><thead><tr><th>الشريك</th><th>النوع والموقع</th><th>الثقة والتقييم</th><th>الشراكة</th><th>السداد</th><th>الرصيد</th><th>الإجراءات</th></tr></thead><tbody id="partnersTableBody"></tbody></table></div>
</section>
<section class="admin-panel" data-admin-panel="applications" hidden="" id="panel-applications" role="tabpanel">
<div class="admin-filterbar">
<label class="form-field"><span>بحث</span><input id="applicationSearch" placeholder="رقم الطلب، المنشأة أو المدينة" type="search"/></label>
<label class="form-field"><span>الحالة</span><select id="applicationStatusFilter"><option value="">جميع الحالات</option><option value="submitted">قيد المراجعة</option><option value="approved">معتمد</option><option value="rejected">مرفوض</option></select></label>
</div>
<div class="table-wrap admin-table-wrap"><table><thead><tr><th>رقم الطلب</th><th>المنشأة</th><th>النوع والموقع</th><th>الوثائق</th><th>الحالة</th><th>تاريخ التقديم</th><th>الإجراءات</th></tr></thead><tbody id="applicationsTableBody"></tbody></table></div>
</section>
<section class="admin-panel" data-admin-panel="finance" hidden="" id="panel-finance" role="tabpanel">
<div class="admin-metric-grid admin-metric-grid-small" id="financeMetrics"></div>
<div aria-label="أقسام الحسابات" class="admin-subtabs" role="tablist">
<button class="admin-subtab active" data-finance-view="fees" type="button">رسوم الوساطة</button>
<button class="admin-subtab" data-finance-view="invoices" type="button">الفواتير</button>
<button class="admin-subtab" data-finance-view="payments" type="button">المدفوعات</button>
</div>
<div data-finance-panel="fees" id="financeFees"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الرسم</th><th>الشريك</th><th>الطلب والإحالة</th><th>فئة التكلفة</th><th>المبلغ</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="feesTableBody"></tbody></table></div></div>
<div data-finance-panel="invoices" hidden="" id="financeInvoices"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الفاتورة</th><th>الشريك</th><th>الدورة</th><th>المبلغ</th><th>الاستحقاق</th><th>الاعتراض</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="invoicesTableBody"></tbody></table></div></div>
<div data-finance-panel="payments" hidden="" id="financePayments"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الدفعة</th><th>الشريك</th><th>الفاتورة</th><th>المبلغ</th><th>الطريقة</th><th>الإيصال</th><th>التاريخ</th></tr></thead><tbody id="paymentsTableBody"></tbody></table></div></div>
</section>
<section class="admin-panel" data-admin-panel="quality" hidden="" id="panel-quality" role="tabpanel">
<div aria-label="الجودة والاعتراضات" class="admin-subtabs" role="tablist">
<button class="admin-subtab active" data-quality-view="objections" type="button">الاعتراضات</button>
<button class="admin-subtab" data-quality-view="ratings" type="button">التقييمات</button>
</div>
<div data-quality-panel="objections"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الاعتراض</th><th>النوع</th><th>الشريك والطلب</th><th>السبب</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="objectionsTableBody"></tbody></table></div></div>
<div data-quality-panel="ratings" hidden=""><div class="table-wrap admin-table-wrap"><table><thead><tr><th>التقييم</th><th>الشريك</th><th>الطلب</th><th>الدرجة</th><th>عدالة الأسعار</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="ratingsTableBody"></tbody></table></div></div>
<div data-quality-panel="discounts" hidden=""><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الخصم</th><th>الشريك</th><th>النسبة والنطاق</th><th>المدة</th><th>الحالة</th><th>آخر تحديث</th><th>الإجراءات</th></tr></thead><tbody id="discountsTableBody"></tbody></table></div></div>
</section>
<section class="admin-panel" data-admin-panel="users" hidden="" id="panel-users" role="tabpanel">
<div class="admin-panel-actions"><button class="btn btn-primary btn-sm" data-icon="plus" id="createAdminUser" type="button">إضافة مستخدم</button></div>
<div class="table-wrap admin-table-wrap"><table><thead><tr><th>المستخدم</th><th>اسم الدخول</th><th>الدور</th><th>الحالة</th><th>آخر دخول</th><th>الإجراءات</th></tr></thead><tbody id="usersTableBody"></tbody></table></div>
</section>
<section class="admin-panel" data-admin-panel="audit" hidden="" id="panel-audit" role="tabpanel">
<div class="admin-filterbar">
<label class="form-field"><span>بحث في السجل</span><input id="auditSearch" placeholder="المستخدم، الإجراء أو رقم السجل" type="search"/></label>
<label class="form-field"><span>نوع السجل</span><select id="auditEntityFilter"><option value="">جميع الأنواع</option></select></label>
</div>
<div class="table-wrap admin-table-wrap"><table><thead><tr><th>التاريخ</th><th>المستخدم</th><th>الإجراء</th><th>السجل المتأثر</th><th>السبب</th><th>التفاصيل</th></tr></thead><tbody id="auditTableBody"></tbody></table></div>
</section>
</div>
</main>
<footer class="site-footer unified-site-footer admin-site-footer">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — لوحة الإدارة" class="footer-logo-link" href="admin-dashboard.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<p class="admin-footer-note">بوابة داخلية — لا تُستخدم كبديل عن Backend آمن في التشغيل الفعلي.</p><nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<dialog class="dialog admin-dialog" id="adminDetailDialog">
<div class="dialog-shell">
<div class="dialog-head"><h2 id="adminDetailTitle">التفاصيل</h2><button aria-label="إغلاق" class="dialog-close" data-close-dialog="adminDetailDialog" type="button">×</button></div>
<div id="adminDetailBody"></div>
</div>
</dialog>
<dialog class="dialog admin-dialog" id="adminActionDialog">
<form class="dialog-shell" id="adminActionForm">
<div class="dialog-head"><h2 id="adminActionTitle">تأكيد الإجراء</h2><button aria-label="إغلاق" class="dialog-close" data-close-dialog="adminActionDialog" type="button">×</button></div>
<p class="muted" id="adminActionDescription"></p>
<div id="adminActionExtra"></div>
<div class="form-field"><label class="required" for="adminActionReason">سبب الإجراء</label><textarea id="adminActionReason" maxlength="600" placeholder="اكتب سببًا واضحًا يظهر في سجل التدقيق" required=""></textarea></div>
<div class="button-row mt-16"><button class="btn btn-primary" type="submit">تأكيد</button><button class="btn btn-light" data-close-dialog="adminActionDialog" type="button">إلغاء</button></div>
</form>
</dialog>
<dialog class="dialog admin-dialog" id="adminUserDialog">
<form class="dialog-shell" id="adminUserForm">
<div class="dialog-head"><h2 id="adminUserDialogTitle">إضافة مستخدم</h2><button aria-label="إغلاق" class="dialog-close" data-close-dialog="adminUserDialog" type="button">×</button></div>
<input id="adminUserId" type="hidden"/>
<div class="form-grid two">
<div class="form-field"><label class="required" for="newAdminName">الاسم</label><input id="newAdminName" maxlength="100" required=""/></div>
<div class="form-field"><label class="required" for="newAdminUsername">اسم المستخدم</label><input dir="ltr" id="newAdminUsername" maxlength="40" minlength="4" pattern="[A-Za-z0-9._-]+" required=""/></div>
<div class="form-field"><label class="required" for="newAdminRole">الدور</label><select id="newAdminRole" required=""></select></div>
<div class="form-field"><label for="newAdminStatus">الحالة</label><select id="newAdminStatus"><option value="active">نشط</option><option value="disabled">معطل</option></select></div>
<div class="form-field admin-user-password-field"><label class="required" for="newAdminPassword">كلمة مرور مؤقتة</label><input autocomplete="new-password" dir="ltr" id="newAdminPassword" minlength="10" type="password"/></div>
</div>
<div class="button-row mt-16"><button class="btn btn-primary" type="submit">حفظ المستخدم</button><button class="btn btn-light" data-close-dialog="adminUserDialog" type="button">إلغاء</button></div>
</form>
</dialog>
<script defer="" src="assets/config.js"></script>
<script defer="" src="assets/automotive-data.js"></script>
<script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script>
<script defer="" src="assets/seed.js"></script>
<script defer="" src="assets/matching-engine.js"></script>
<script defer="" src="assets/lifecycle.js"></script>
<script defer="" src="assets/common.js"></script>
<script defer="" src="assets/admin-auth.js"></script>
<script defer="" src="assets/admin-dashboard.js"></script>
</body>
</html>

```

## MODIFIED: `admin-login.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/>
<meta content="#0b1d33" name="theme-color"/>
<meta content="noindex,nofollow,noarchive" name="robots"/>
<meta content="دخول أعضاء فريق وين أوديها إلى بوابة الإدارة الداخلية." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'" http-equiv="Content-Security-Policy"/>
<title>دخول فريق المشروع — وين أوديها</title>
<link href="assets/images/favicon.png" rel="icon" type="image/png"/>
<link href="assets/styles.css" rel="stylesheet"/>
</head>
<body class="admin-page" data-page="admin-login">
<header class="site-header unified-site-header admin-site-header">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الموقع العام" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">بوابة فريق المشروع</span>
<a class="btn btn-ghost btn-sm" data-icon="home" href="index.html">الموقع العام</a>
</div>
</header>
<main class="section auth-section admin-auth-section" id="main-content">
<div class="container auth-layout admin-auth-layout">
<section class="card auth-card">
<div class="section-head">
<div class="kicker">دخول داخلي</div>
<h1>إدارة عمليات «وين أوديها»</h1>
<p>استخدم حسابك الفردي. تظهر لك الأقسام والإجراءات المرتبطة بدورك فقط.</p>
</div>
<form class="form-grid" id="adminLoginForm" novalidate="">
<div class="form-field">
<label class="required" for="adminUsername">اسم المستخدم</label>
<input autocomplete="username" dir="ltr" id="adminUsername" maxlength="80" name="username" placeholder="username" required=""/>
</div>
<div class="form-field">
<label class="required" for="adminPassword">كلمة المرور</label>
<input autocomplete="current-password" dir="ltr" id="adminPassword" minlength="10" name="password" placeholder="••••••••••" required="" type="password"/>
</div>
<button class="btn btn-primary btn-block" data-icon="lock" id="adminLoginSubmit" type="submit">دخول لوحة الإدارة</button>
</form>
</section>
<aside class="auth-aside admin-security-aside">
<div aria-hidden="true" class="card-icon" data-icon="shield"></div>
<h2>وصول مخصص حسب الدور</h2>
<ul class="feature-checklist">
<li>حساب مستقل لكل عضو في الفريق.</li>
<li>صلاحيات للأقسام والإجراءات الحساسة.</li>
<li>سجل تدقيق يحفظ كل تعديل إداري.</li>
</ul>
<div class="legal-note">هذه الحماية مناسبة للعرض الداخلي على جهاز واحد فقط. التشغيل الفعلي يتطلب مصادقة وصلاحيات في Backend آمن.</div>
</aside>
</div>
</main>
<footer class="site-footer unified-site-footer admin-site-footer">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الموقع العام" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<p class="admin-footer-note">بوابة داخلية لأعضاء فريق المشروع المصرح لهم فقط.</p><nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script>
<script defer="" src="assets/automotive-data.js"></script>
<script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script>
<script defer="" src="assets/seed.js"></script>
<script defer="" src="assets/lifecycle.js"></script>
<script defer="" src="assets/common.js"></script>
<script defer="" src="assets/admin-auth.js"></script>
<script defer="" src="assets/admin-login.js"></script>
</body>
</html>

```

## MODIFIED: `assets/admin-dashboard.js`

```javascript
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const e = (value) => WA.UI.escapeHtml(value == null ? "" : value);
  const money = WA.UI.formatMoney;
  const date = (value) => WA.UI.formatDate(value);
  const state = { bundle: null, activeTab: "overview", action: null, financeView: "fees", qualityView: "objections" };

  const labels = {
    partnership: { active: "نشط", suspended_operations: "موقوف تشغيليًا", suspended_financial: "موقوف ماليًا", cancelled: "ملغى", pending: "بانتظار الاعتماد" },
    payment: { current: "منتظم", awaiting_payment: "بانتظار السداد", overdue: "متأخر", paid: "مسدد" },
    application: { submitted: "قيد المراجعة", approved: "معتمد", rejected: "مرفوض", cancelled: "ملغى" },
    fee: { unbilled: "غير مفوتر", pending: "غير مفوتر", statemented: "مرحّل", invoiced_due: "مفوتر", disputed: "معلق للاعتراض", paid: "مسدد", exempt: "معفى", cancelled: "ملغى" },
    invoice: { statement_only: "كشف مرحّل", payment_required: "واجب السداد", overdue: "متأخر", paid: "مسدد", under_review: "تحت المراجعة", rolled_forward: "مرحّل", cancelled: "ملغى" },
    objection: { new: "جديد", under_review: "قيد المراجعة", waiting_information: "بانتظار معلومات", accepted: "مقبول", accepted_partial: "مقبول جزئيًا", rejected: "مرفوض", closed: "مغلق" },
    rating: { published: "منشور", under_review: "تحت المراجعة", excluded: "غير محتسب", hidden: "مخفي" },
    discount: { approved: "معتمد", paused: "موقوف", rejected: "مرفوض" }
  };

  const can = (permission) => WA.AdminAuth.can(state.bundle?.user, permission);
  const roleLabel = (role) => WA.AdminAuth.roles[role]?.label || role;
  const badge = (text, kind = "") => `<span class="status-badge ${kind}">${e(text)}</span>`;
  const statusKind = (value) => /active|approved|paid|published|confirmed|service_received/.test(value || "") ? "success" : /overdue|suspended|rejected|cancelled|disputed|under_review|no_match/.test(value || "") ? "danger" : /pending|awaiting|submitted|new|statement/.test(value || "") ? "warning" : "";
  const rowEmpty = (colspan, text) => `<tr><td colspan="${colspan}"><div class="empty-state admin-empty"><h3>${e(text)}</h3></div></td></tr>`;
  const currentUser = () => state.bundle.user;

  const tables = () => ({
    customers: WA.Storage.get("wa_customers"), vehicles: WA.Storage.get("wa_vehicles"), requests: WA.Storage.get("wa_requests"),
    partners: WA.Storage.get("wa_partners"), referrals: WA.Storage.get("wa_referrals"), ratings: WA.Storage.get("wa_ratings"),
    objections: WA.Storage.get("wa_objections"), discounts: WA.Storage.get("wa_discounts"), fees: WA.Storage.get("wa_fees"),
    invoices: WA.Storage.get("wa_invoices"), payments: WA.Storage.get("wa_payments"), applications: WA.Storage.get("wa_join_applications"),
    users: WA.Storage.get("wa_admin_users"), audit: WA.Storage.get("wa_audit_logs")
  });

  const requestBundle = (request, data = tables()) => {
    const customer = data.customers.find((row) => row.id === request.customerId) || null;
    const vehicle = data.vehicles.find((row) => row.id === request.vehicleId) || request.vehicleSnapshot || null;
    const referrals = data.referrals.filter((row) => row.requestId === request.id).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
    const acceptedId = request.acceptedReferralId || request.activeReferralId || "";
    const active = referrals.find((row) => row.id === acceptedId && (row.acceptedAt || row.status === "accepted")) || null;
    const partner = active ? data.partners.find((row) => row.id === active.partnerId) : null;
    return { request, customer, vehicle, referrals, active, partner };
  };

  const audit = (action, entityType, entityId, before, after, reason, metadata = {}) => WA.AdminAuth.audit({ userId: currentUser().id, action, entityType, entityId, before, after, reason, metadata });

  const openDetail = (title, html) => {
    $("#adminDetailTitle").textContent = title;
    $("#adminDetailBody").innerHTML = html;
    WA.UI.decorateIcons($("#adminDetailBody"));
    $("#adminDetailDialog").showModal();
  };

  const closeDialog = (id) => {
    const dialog = document.getElementById(id);
    if (dialog?.open) dialog.close();
  };

  const confirmAction = ({ title, description, extra = "", handler }) => {
    state.action = handler;
    $("#adminActionTitle").textContent = title;
    $("#adminActionDescription").textContent = description;
    $("#adminActionExtra").innerHTML = extra;
    $("#adminActionReason").value = "";
    $("#adminActionDialog").showModal();
    setTimeout(() => $("#adminActionReason").focus(), 50);
  };

  const detailGrid = (items) => `<div class="guidance-grid admin-detail-grid">${items.map(([label, value]) => `<div class="guidance-item"><span>${e(label)}</span><strong>${e(value || "—")}</strong></div>`).join("")}</div>`;

  const renderMetrics = () => {
    const data = tables();
    const openRequests = data.requests.filter((row) => !["rated", "administratively_closed", "finally_closed"].includes(row.status)).length;
    const noMatch = data.requests.filter((row) => ["no_match", "no_acceptance"].includes(row.status)).length;
    const serviceReceived = data.referrals.filter((row) => row.resultStatus === "service_received" || row.serviceReceivedAt).length;
    const activePartners = data.partners.filter((row) => row.partnershipStatus === "active").length;
    const openObjections = data.objections.filter((row) => !["accepted", "accepted_partial", "rejected", "closed"].includes(row.status)).length;
    const outstanding = data.fees.filter((row) => !["paid", "exempt", "cancelled"].includes(row.status)).reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const overdue = data.invoices.filter((row) => row.status === "overdue").reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const pendingApps = data.applications.filter((row) => row.status === "submitted").length;
    const items = [
      ["إجمالي الطلبات", data.requests.length, "من جميع السجلات"], ["طلبات مفتوحة", openRequests, "تحتاج متابعة"],
      ["دون قبول/تغطية", noMatch, "طلبات تحتاج دفعة جديدة أو مراجعة"], ["الخدمات المؤكدة", serviceReceived, "إحالات وصلت إلى خدمة"],
      ["الشركاء النشطون", activePartners, "متاحون للمطابقة"], ["طلبات انضمام", pendingApps, "بانتظار المراجعة"],
      ["اعتراضات مفتوحة", openObjections, "تحتاج قرارًا"], ["رصيد غير مسدد", money(outstanding), `متأخر منه ${money(overdue)}`]
    ];
    $("#adminMetrics").innerHTML = items.map(([label, value, hint]) => `<article class="admin-metric-card"><span>${e(label)}</span><strong>${e(value)}</strong><small>${e(hint)}</small></article>`).join("");

    const financeItems = [
      ["رسوم مسجلة", data.fees.length],
      ["إجمالي الرسوم", money(data.fees.reduce((sum, row) => sum + Number(row.amount || 0), 0))],
      ["غير مسدد", money(outstanding)],
      ["مدفوعات", money(data.payments.filter((row) => row.status === "paid").reduce((sum, row) => sum + Number(row.amount || 0), 0))]
    ];
    $("#financeMetrics").innerHTML = financeItems.map(([label, value]) => `<article class="admin-metric-card"><span>${e(label)}</span><strong>${e(value)}</strong></article>`).join("");
  };

  const renderOverview = () => {
    const data = tables();
    const latest = [...data.requests]
      .filter((row) => !["rated", "finally_closed"].includes(row.status))
      .sort((a, b) => new Date(b.lastActivityAt || b.updatedAt || 0) - new Date(a.lastActivityAt || a.updatedAt || 0))
      .slice(0, 7);
    $("#overviewRequests").innerHTML = latest.length ? latest.map((request) => {
      const bundle = requestBundle(request, data);
      return `<button class="admin-list-row" type="button" data-action="request-view" data-id="${e(request.id)}"><span><strong>${e(request.humanId || request.id)}</strong><small>${e(bundle.customer?.firstName || "—")} — ${e(request.city || "—")}</small></span>${badge(WA.UI.statusLabel(request.status), statusKind(request.status))}</button>`;
    }).join("") : '<div class="empty-state admin-empty"><h3>لا توجد طلبات للمتابعة</h3></div>';
    const issues = WA.Storage.integrityCheck();
    $("#integrityResult").innerHTML = issues.length
      ? `<div class="error-panel"><strong>تم العثور على ${issues.length} ملاحظة</strong><ul>${issues.slice(0, 12).map((issue) => `<li>${e(issue)}</li>`).join("")}</ul></div>`
      : '<div class="success-panel"><strong>العلاقات سليمة</strong><p>لم يعثر الفحص الحالي على سجلات مرتبطة بمعرفات مفقودة.</p></div>';
  };

  const renderRequests = () => {
    const data = tables();
    const term = $("#requestSearch").value.trim().toLowerCase();
    const service = $("#requestServiceFilter").value;
    const status = $("#requestStatusFilter").value;
    const rows = [...data.requests].filter((request) => {
      const bundle = requestBundle(request, data);
      const hay = [request.humanId, request.id, request.city, request.region, bundle.customer?.firstName, bundle.customer?.phone, bundle.vehicle?.make, bundle.vehicle?.model].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!service || request.serviceType === service) && (!status || request.status === status);
    }).sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
    $("#requestsTableBody").innerHTML = rows.length ? rows.map((request) => {
      const bundle = requestBundle(request, data);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="request-view" data-id="${e(request.id)}">عرض</button>`];
      if (can("requests.manage")) {
        if (["administratively_closed", "finally_closed"].includes(request.status)) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="request-reopen" data-id="${e(request.id)}">إعادة فتح</button>`);
        else actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="request-close" data-id="${e(request.id)}">إغلاق إداري</button>`);
        if (request.acceptedReferralId && WA.Lifecycle.alternativeEligibility(request).allowed && request.status !== "finally_closed") actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="request-alternative" data-id="${e(request.id)}">دفعة بديلة</button>`);
      }
      return `<tr>
        <td><strong>${e(request.humanId || request.id)}</strong><small>${e(request.id)}</small></td>
        <td><strong>${e(bundle.customer?.firstName || "—")}</strong><small dir="ltr">${e(bundle.customer?.phone || "—")}</small><small>${e(WA.UI.vehicleText(bundle.vehicle || {}))}</small></td>
        <td><strong>${e(WA.UI.serviceLabel(request.serviceType))}</strong><small>${e(request.region || "")} — ${e(request.city || "—")}</small></td>
        <td>${badge(WA.UI.statusLabel(request.status), statusKind(request.status))}</td>
        <td><strong>${bundle.referrals.length}</strong><small>${e(bundle.partner?.name || "لا يوجد شريك حالي")}</small></td>
        <td>${e(date(request.lastActivityAt || request.updatedAt || request.createdAt))}</td>
        <td><div class="table-actions">${actions.join("")}</div></td>
      </tr>`;
    }).join("") : rowEmpty(7, "لا توجد طلبات مطابقة للفلاتر");
  };

  const partnerBalance = (partnerId, data) => data.fees.filter((fee) => fee.partnerId === partnerId && !["paid", "exempt", "cancelled"].includes(fee.status)).reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
  const renderPartners = () => {
    const data = tables();
    const term = $("#partnerSearch").value.trim().toLowerCase();
    const type = $("#partnerTypeFilter").value;
    const status = $("#partnerStatusFilter").value;
    const rows = [...data.partners].filter((partner) => {
      const hay = [partner.name, partner.tradeName, partner.city, partner.region, partner.whatsapp].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!type || partner.type === type) && (!status || partner.partnershipStatus === status);
    }).sort((a, b) => String(a.name).localeCompare(String(b.name), "ar"));
    $("#partnersTableBody").innerHTML = rows.length ? rows.map((partner) => {
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="partner-view" data-id="${e(partner.id)}">عرض</button>`];
      if (can("partners.manage")) {
        if (partner.partnershipStatus === "active") actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="partner-suspend" data-id="${e(partner.id)}">تعليق</button>`);
        else actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="partner-activate" data-id="${e(partner.id)}">تفعيل</button>`);
      }
      if (can("partners.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="partner-google-link" data-id="${e(partner.id)}">ربط Google</button>`);
      if (can("finance.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="partner-invoice" data-id="${e(partner.id)}">إصدار فاتورة</button>`);
      return `<tr><td><strong>${e(partner.name)}</strong><small dir="ltr">${e(partner.whatsapp || "—")}</small></td><td><strong>${e(WA.Config.partnerTypes[partner.type] || partner.type)}</strong><small>${e(partner.region || "")} — ${e(partner.city || "—")}</small></td><td><strong>${e(partner.trustScore ?? "—")}</strong><small>${e(partner.ratingOverall ?? "—")} / 5 من ${e(partner.ratingCount || 0)}</small></td><td>${badge(labels.partnership[partner.partnershipStatus] || partner.partnershipStatus, statusKind(partner.partnershipStatus))}</td><td>${badge(labels.payment[partner.paymentStatus] || partner.paymentStatus, statusKind(partner.paymentStatus))}</td><td>${e(money(partnerBalance(partner.id, data)))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا يوجد شركاء مطابقون للفلاتر");
  };

  const applicationDocumentStatus = (application) => {
    if (application.partnerType === "tow") return application.documents?.operationCardNumber ? "بطاقة تشغيل مسجلة" : "بطاقة التشغيل ناقصة";
    return application.documents?.commercialRegistration ? "سجل تجاري مسجل" : "السجل التجاري ناقص";
  };
  const renderApplications = () => {
    const data = tables();
    const term = $("#applicationSearch").value.trim().toLowerCase();
    const status = $("#applicationStatusFilter").value;
    const rows = [...data.applications].filter((application) => {
      const hay = [application.applicationNumber, application.businessName, application.tradeName, application.city, application.phone].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!status || application.status === status);
    }).sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0));
    $("#applicationsTableBody").innerHTML = rows.length ? rows.map((application) => {
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="application-view" data-id="${e(application.id)}">عرض</button>`];
      if (can("applications.manage") && application.status === "submitted") {
        actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="application-approve" data-id="${e(application.id)}">اعتماد</button>`);
        actions.push(`<button class="btn btn-danger btn-sm" type="button" data-action="application-reject" data-id="${e(application.id)}">رفض</button>`);
      }
      return `<tr><td><strong>${e(application.applicationNumber || application.id)}</strong></td><td><strong>${e(application.tradeName || application.businessName)}</strong><small dir="ltr">${e(application.phone || "—")}</small></td><td><strong>${e(WA.Config.partnerTypes[application.partnerType] || application.partnerType)}</strong><small>${e(application.region || "")} — ${e(application.city || "—")}</small></td><td>${e(applicationDocumentStatus(application))}</td><td>${badge(labels.application[application.status] || application.statusLabel || application.status, statusKind(application.status))}</td><td>${e(date(application.submittedAt || application.createdAt))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد طلبات انضمام مطابقة");
  };

  const renderFinance = () => {
    const data = tables();
    $("#feesTableBody").innerHTML = data.fees.length ? [...data.fees].sort((a, b) => new Date(b.earnedAt || b.createdAt || 0) - new Date(a.earnedAt || a.createdAt || 0)).map((fee) => {
      const partner = data.partners.find((row) => row.id === fee.partnerId);
      const referral = data.referrals.find((row) => row.id === fee.referralId);
      const request = referral ? data.requests.find((row) => row.id === referral.requestId) : null;
      const actions = [];
      if (can("finance.manage") && !["paid", "exempt"].includes(fee.status)) actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="fee-exempt" data-id="${e(fee.id)}">إعفاء</button>`);
      if (can("finance.manage") && fee.status === "exempt") actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="fee-restore" data-id="${e(fee.id)}">إعادة الرسم</button>`);
      return `<tr><td><strong>${e(fee.id)}</strong></td><td>${e(partner?.name || fee.partnerId)}</td><td><strong>${e(request?.humanId || "—")}</strong><small>${e(referral?.id || fee.referralId)}</small></td><td>${e(fee.feeCategory ? (WA.Config.referralFeeCategories[fee.feeCategory]?.label || fee.feeCategory) : WA.Lifecycle.bandLabel(fee.costBand))}</td><td><strong>${e(money(fee.amount))}</strong></td><td>${badge(labels.fee[fee.status] || fee.status, statusKind(fee.status))}</td><td>${e(date(fee.earnedAt || fee.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد رسوم وساطة مسجلة");

    $("#invoicesTableBody").innerHTML = data.invoices.length ? [...data.invoices].sort((a, b) => new Date(b.issuedAt || b.createdAt || 0) - new Date(a.issuedAt || a.createdAt || 0)).map((invoice) => {
      const partner = data.partners.find((row) => row.id === invoice.partnerId);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="invoice-view" data-id="${e(invoice.id)}">عرض</button>`];
      if (can("finance.manage") && ["payment_required", "overdue"].includes(invoice.status) && Number(invoice.amount || 0) > 0) actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="invoice-pay" data-id="${e(invoice.id)}">تسجيل سداد</button>`);
      return `<tr><td><strong>${e(invoice.number || invoice.id)}</strong></td><td>${e(partner?.name || invoice.partnerId)}</td><td>${e(invoice.cycle || "—")}</td><td><strong>${e(money(invoice.amount))}</strong></td><td>${e(invoice.dueAt ? date(invoice.dueAt) : "يُرحّل")}</td><td>${e(invoice.objectionDeadline ? date(invoice.objectionDeadline) : "—")}</td><td>${badge(labels.invoice[invoice.status] || invoice.status, statusKind(invoice.status))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد فواتير أو كشوف حساب");

    $("#paymentsTableBody").innerHTML = data.payments.length ? [...data.payments].sort((a, b) => new Date(b.paidAt || b.createdAt || 0) - new Date(a.paidAt || a.createdAt || 0)).map((payment) => {
      const partner = data.partners.find((row) => row.id === payment.partnerId);
      const invoice = data.invoices.find((row) => row.id === payment.invoiceId);
      return `<tr><td><strong>${e(payment.id)}</strong></td><td>${e(partner?.name || payment.partnerId)}</td><td>${e(invoice?.number || payment.invoiceId || "—")}</td><td><strong>${e(money(payment.amount))}</strong></td><td>${e(payment.method || "—")}</td><td>${e(payment.receiptNumber || "—")}</td><td>${e(date(payment.paidAt || payment.createdAt))}</td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد مدفوعات مسجلة");
  };

  const renderQuality = () => {
    const data = tables();
    $("#objectionsTableBody").innerHTML = data.objections.length ? [...data.objections].sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0)).map((objection) => {
      const partner = data.partners.find((row) => row.id === objection.partnerId);
      const request = data.requests.find((row) => row.id === objection.requestId);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="objection-view" data-id="${e(objection.id)}">عرض</button>`];
      if (can("objections.manage") && !["accepted", "accepted_partial", "rejected", "closed"].includes(objection.status)) {
        actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="objection-accept" data-id="${e(objection.id)}">قبول</button>`);
        actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="objection-partial" data-id="${e(objection.id)}">قبول جزئي</button>`);
        actions.push(`<button class="btn btn-danger btn-sm" type="button" data-action="objection-reject" data-id="${e(objection.id)}">رفض</button>`);
      }
      return `<tr><td><strong>${e(objection.id)}</strong></td><td>${e(objection.type || "—")}</td><td><strong>${e(partner?.name || objection.partnerId || "—")}</strong><small>${e(request?.humanId || objection.requestId || objection.invoiceId || "—")}</small></td><td>${e(objection.reason || "—")}</td><td>${badge(labels.objection[objection.status] || objection.status, statusKind(objection.status))}</td><td>${e(date(objection.submittedAt || objection.createdAt))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد اعتراضات مسجلة");

    $("#ratingsTableBody").innerHTML = data.ratings.length ? [...data.ratings].sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0)).map((rating) => {
      const partner = data.partners.find((row) => row.id === rating.partnerId);
      const request = data.requests.find((row) => row.id === rating.requestId);
      const actions = [];
      if (can("ratings.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="rating-toggle" data-id="${e(rating.id)}">${rating.status === "published" ? "إخفاء" : "إعادة النشر"}</button>`);
      return `<tr><td><strong>${e(rating.id)}</strong></td><td>${e(partner?.name || rating.partnerId)}</td><td>${e(request?.humanId || rating.requestId)}</td><td><strong>${e(rating.overall)} / 5</strong></td><td>${e(rating.fairness)} / 5</td><td>${badge(labels.rating[rating.status] || rating.status, statusKind(rating.status))}</td><td>${e(date(rating.submittedAt || rating.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد تقييمات مسجلة");

    $("#discountsTableBody").innerHTML = data.discounts.length ? [...data.discounts].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).map((discount) => {
      const partner = data.partners.find((row) => row.id === discount.partnerId);
      const actions = [];
      if (can("discounts.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="discount-toggle" data-id="${e(discount.id)}">${discount.status === "approved" ? "إيقاف" : "اعتماد"}</button>`);
      return `<tr><td><strong>${e(discount.title || discount.id)}</strong></td><td>${e(partner?.name || discount.partnerId)}</td><td><strong>${e(discount.percent)}%</strong><small>${e(discount.scope === "all" ? "جميع الخدمات" : (discount.includedServices || []).join("، "))}</small></td><td>${e(discount.continuousUntilStopped ? "مستمر حتى الإيقاف" : `حتى ${discount.endsAt || "—"}`)}</td><td>${badge(labels.discount[discount.status] || discount.status, statusKind(discount.status))}</td><td>${e(date(discount.updatedAt || discount.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد خصومات مسجلة");
  };

  const renderUsers = () => {
    const users = WA.Storage.get("wa_admin_users");
    $("#usersTableBody").innerHTML = users.length ? users.map((user) => `<tr><td><strong>${e(user.name)}</strong><small>${e(user.id)}</small></td><td dir="ltr">${e(user.username)}</td><td>${e(roleLabel(user.role))}</td><td>${badge(user.status === "active" ? "نشط" : "معطل", user.status === "active" ? "success" : "danger")}</td><td>${e(user.lastLoginAt ? date(user.lastLoginAt) : "لم يسجل الدخول")}</td><td><div class="table-actions"><button class="btn btn-light btn-sm" type="button" data-action="user-edit" data-id="${e(user.id)}">تعديل</button><button class="btn btn-light btn-sm" type="button" data-action="user-reset" data-id="${e(user.id)}">تغيير كلمة المرور</button></div></td></tr>`).join("") : rowEmpty(6, "لا يوجد مستخدمون إداريون");
  };

  const renderAudit = () => {
    const term = $("#auditSearch").value.trim().toLowerCase();
    const entity = $("#auditEntityFilter").value;
    const rows = WA.Storage.get("wa_audit_logs").filter((log) => {
      const hay = [log.userName, log.action, log.entityType, log.entityId, log.reason].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!entity || log.entityType === entity);
    }).sort((a, b) => new Date(b.at || b.createdAt || 0) - new Date(a.at || a.createdAt || 0));
    $("#auditTableBody").innerHTML = rows.length ? rows.map((log) => `<tr><td>${e(date(log.at || log.createdAt))}</td><td><strong>${e(log.userName || "النظام")}</strong><small>${e(roleLabel(log.userRole))}</small></td><td>${e(log.action)}</td><td><strong>${e(log.entityType)}</strong><small>${e(log.entityId || "—")}</small></td><td>${e(log.reason || "—")}</td><td><button class="btn btn-light btn-sm" type="button" data-action="audit-view" data-id="${e(log.id)}">عرض</button></td></tr>`).join("") : rowEmpty(6, "لا توجد سجلات تدقيق مطابقة");
  };

  const renderAll = () => {
    WA.Lifecycle.runSweep();
    renderMetrics();
    renderOverview();
    renderRequests();
    renderPartners();
    renderApplications();
    renderFinance();
    renderQuality();
    if (can("*")) renderUsers();
    if (can("audit.view")) renderAudit();
    WA.UI.decorateIcons(document);
  };

  const showRequest = (id) => {
    const data = tables();
    const request = data.requests.find((row) => row.id === id);
    if (!request) return;
    const bundle = requestBundle(request, data);
    const referrals = bundle.referrals.map((referral) => {
      const partner = data.partners.find((row) => row.id === referral.partnerId);
      const acceptPath = `workshop-accept.html?token=${encodeURIComponent(referral.acceptanceToken || "")}`;
      const acceptUrl = new URL(acceptPath, location.href).href;
      const message = WA.UI.buildWorkshopDispatchMessage({ request, vehicle: bundle.vehicle, referral, acceptanceUrl: acceptUrl });
      const whatsapp = partner?.whatsapp ? WA.UI.whatsappUrl(partner.whatsapp, message) : "";
      return `<li><strong>دفعة ${e(referral.batchNumber || 1)} — ${e(partner?.name || referral.partnerId)}</strong><span>${e(WA.UI.statusLabel(referral.status, "referral"))} — ${e(date(referral.sentAt || referral.createdAt))}</span><div class="button-row mt-8"><a class="btn btn-light btn-sm" href="${e(acceptPath)}" target="_blank" rel="noopener">فتح رابط القبول</a>${whatsapp ? `<a class="btn btn-primary btn-sm" href="${e(whatsapp)}" target="_blank" rel="noopener" data-action="referral-notified" data-id="${e(referral.id)}">إرسال عبر واتساب</a>` : ""}</div></li>`;
    }).join("") || "<li>لا توجد إحالات.</li>";
    openDetail(`الطلب ${request.humanId || request.id}`, `${detailGrid([
      ["العميل", `${bundle.customer?.firstName || "—"} — ${bundle.customer?.phone || "—"}`], ["السيارة", WA.UI.vehicleText(bundle.vehicle || {})],
      ["الخدمة", WA.UI.serviceLabel(request.serviceType)], ["الموقع", `${request.region || ""} — ${request.city || "—"}`],
      ["الحالة", WA.UI.statusLabel(request.status)], ["المشكلة/الاحتياج", request.problem || request.partName || request.maintenanceService || request.placeDescription || "—"],
      ["التخصص", request.ai?.specialty || "—"], ["الاستعجال", request.ai?.urgency || (request.serviceType === "tow" ? "عاجلة" : "—")]
    ])}<h3 class="mt-16">الإحالات</h3><ul class="admin-detail-list">${referrals}</ul>`);
  };

  const showPartner = (id) => {
    const data = tables();
    const partner = data.partners.find((row) => row.id === id);
    if (!partner) return;
    const referrals = data.referrals.filter((row) => row.partnerId === id).length;
    const ratings = data.ratings.filter((row) => row.partnerId === id && row.status === "published");
    openDetail(partner.name, detailGrid([
      ["النوع", WA.Config.partnerTypes[partner.type] || partner.type], ["الموقع", `${partner.region || ""} — ${partner.city || "—"} — ${partner.address || ""}`],
      ["واتساب", partner.whatsapp || "—"], ["حالة الشراكة", labels.partnership[partner.partnershipStatus] || partner.partnershipStatus],
      ["حالة السداد", labels.payment[partner.paymentStatus] || partner.paymentStatus], ["مؤشر الثقة", partner.trustScore ?? "—"],
      ["الإحالات", referrals], ["التقييمات المنشورة", ratings.length], ["Google Place ID", partner.googlePlaceId || "غير مرتبط"], ["حالة ربط Google", partner.googlePlaceLinkStatus || "غير مرتبط"], ["التغطية", (partner.coverageCities || []).join("، ")],
      ["التخصصات", (partner.specialtiesPriority || partner.specialties || []).join("، ")], ["العلامات", (partner.makesPriority || partner.servedMakes || []).join("، ")]
    ]));
  };

  const showApplication = (id) => {
    const app = WA.Storage.findById("wa_join_applications", id);
    if (!app) return;
    openDetail(`طلب الانضمام ${app.applicationNumber || app.id}`, `${detailGrid([
      ["المنشأة", app.tradeName || app.businessName], ["النوع", WA.Config.partnerTypes[app.partnerType] || app.partnerType],
      ["الموقع", `${app.region || ""} — ${app.city || "—"} — ${app.address || ""}`], ["واتساب", app.phone], ["Google Place ID", app.googlePlaceId || "غير مسجل"],
      ["السجل التجاري", app.documents?.commercialRegistration || "غير مطلوب/غير مسجل"], ["بطاقة التشغيل", app.documents?.operationCardNumber || "غير مطلوبة/غير مسجلة"],
      ["مدن التغطية", (app.coverageCities || []).join("، ")], ["الحالة", labels.application[app.status] || app.statusLabel || app.status]
    ])}<h3 class="mt-16">وصف النشاط</h3><p>${e(app.description || "—")}</p>`);
  };

  const showInvoice = (id) => {
    const data = tables();
    const invoice = data.invoices.find((row) => row.id === id);
    if (!invoice) return;
    const partner = data.partners.find((row) => row.id === invoice.partnerId);
    const feeRows = (invoice.feeIds || []).map((feeId) => data.fees.find((row) => row.id === feeId)).filter(Boolean);
    openDetail(`الفاتورة ${invoice.number || invoice.id}`, `${detailGrid([
      ["الشريك", partner?.name || invoice.partnerId], ["الدورة", invoice.cycle || "—"], ["الإجمالي", money(invoice.amount)],
      ["الحالة", labels.invoice[invoice.status] || invoice.status], ["تاريخ الإصدار", date(invoice.issuedAt || invoice.createdAt)],
      ["تاريخ الاستحقاق", invoice.dueAt ? date(invoice.dueAt) : "يُرحّل"], ["نهاية الاعتراض", invoice.objectionDeadline ? date(invoice.objectionDeadline) : "—"]
    ])}<h3 class="mt-16">العمليات (${feeRows.length})</h3><ul class="admin-detail-list">${feeRows.map((fee) => `<li>${e(fee.id)} — ${e(fee.feeCategory ? (WA.Config.referralFeeCategories[fee.feeCategory]?.label || fee.feeCategory) : WA.Lifecycle.bandLabel(fee.costBand))} — ${e(money(fee.amount))}</li>`).join("") || "<li>لا توجد عمليات.</li>"}</ul>`);
  };

  const showObjection = (id) => {
    const objection = WA.Storage.findById("wa_objections", id);
    if (!objection) return;
    openDetail(`الاعتراض ${objection.id}`, `${detailGrid([
      ["النوع", objection.type], ["الحالة", labels.objection[objection.status] || objection.status], ["الشريك", objection.partnerId],
      ["الطلب", objection.requestId || "—"], ["الإحالة", objection.referralId || "—"], ["الفاتورة", objection.invoiceId || "—"],
      ["السبب", objection.reason], ["القرار", objection.decision || "لم يصدر قرار"]
    ])}<h3 class="mt-16">التوضيح</h3><p>${e(objection.details || "—")}</p>`);
  };

  const showAudit = (id) => {
    const log = WA.Storage.findById("wa_audit_logs", id);
    if (!log) return;
    openDetail(`سجل التدقيق ${log.id}`, `${detailGrid([
      ["المستخدم", `${log.userName || "النظام"} — ${roleLabel(log.userRole)}`], ["الإجراء", log.action], ["نوع السجل", log.entityType],
      ["رقم السجل", log.entityId || "—"], ["التاريخ", date(log.at || log.createdAt)], ["السبب", log.reason || "—"]
    ])}<div class="admin-json-compare"><section><h3>القيمة السابقة</h3><pre>${e(JSON.stringify(log.before, null, 2) || "—")}</pre></section><section><h3>القيمة الجديدة</h3><pre>${e(JSON.stringify(log.after, null, 2) || "—")}</pre></section></div>`);
  };

  const alternativeRequest = (request, reason) => {
    const before = WA.Storage.deepClone(request);
    const result = WA.Lifecycle.requestAlternative(request.id, reason);
    const updated = WA.Storage.findById("wa_requests", request.id);
    audit("إرسال دفعة بديلة إلى الورش", "request", request.id, before, updated, reason, { referralIds: result.referrals.map((row) => row.id) });
    WA.UI.showToast(result.referrals.length === 3 ? "تم إرسال الطلب إلى ثلاث ورش جديدة" : "لم تتوفر ثلاث ورش بديلة", result.referrals.length === 3 ? "success" : "info");
  };

  const applicationToPartner = (application) => {
    const existing = WA.Storage.get("wa_partners").find((row) => row.applicationId === application.id);
    if (existing) return existing;
    const type = "workshop";
    const services = type === "maintenance" ? (application.maintenanceServices || [])
      : type === "parts" ? ["الاستفسار عن قطع الغيار", ...(application.partTypes || []).map((item) => `قطع ${item}`)]
        : type === "tow" ? ["طلبات عاجلة", "نقل وسحب المركبات"]
          : (application.specialtiesPriority || []);
    return WA.Storage.upsert("wa_partners", {
      id: WA.Storage.createId("PARTNER"), applicationId: application.id, type,
      name: application.tradeName || application.businessName, tradeName: application.tradeName || application.businessName,
      description: application.description || "", region: application.region, city: application.city, address: application.address,
      googleMapsUrl: application.googleMapsUrl, googlePlaceId: application.googlePlaceId || "", googlePlaceLinkStatus: application.googlePlaceId ? "linked_pending_verification" : "unlinked", whatsapp: application.acceptanceWhatsapp || application.phone, acceptanceWhatsapp: application.acceptanceWhatsapp || application.phone, acceptanceContactName: application.acceptanceContactName || "", secondaryPhone: application.secondaryPhone || "",
      commercialRegistration: application.documents?.commercialRegistration || "", operationCardNumber: application.documents?.operationCardNumber || "",
      operationCardExpiry: application.documents?.operationCardExpiry || "", towVehiclePlate: application.documents?.towVehiclePlate || "",
      schedule: application.schedule || [], specialties: application.specialtiesPriority || [], specialtiesPriority: application.specialtiesPriority || [],
      services, servedMakes: application.makesPriority || [], makesPriority: application.makesPriority || [], fuelTypes: application.fuelTypes || [],
      coverageCities: application.coverageCities || [application.city], towVehicleTypes: application.towVehicleTypes ? [application.towVehicleTypes] : [],
      partTypes: application.partTypes || [], availability: { status: "typical", note: "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب." },
      ratingOverall: 0, ratingCount: 0, fairnessRating: 0, fairnessCount: 0, commitment: "جديد", responseScore: 0, trustScore: 50,
      partnershipStatus: "active", paymentStatus: "current", intakeCapacity: application.intakeCapacity || "available", acceptsUrgent: false, stage: "stage_one", isDemo: false
    });
  };

  const resolveObjection = (objection, decision, reason) => {
    const before = WA.Storage.deepClone(objection);
    const status = decision === "accepted" ? "accepted" : decision === "partial" ? "accepted_partial" : "rejected";
    const updated = WA.Storage.upsert("wa_objections", { ...objection, status, decision: reason, decidedBy: currentUser().id, decidedAt: WA.Storage.now(), closedAt: WA.Storage.now() });
    const referral = objection.referralId ? WA.Storage.findById("wa_referrals", objection.referralId) : null;
    const fee = referral ? WA.Storage.get("wa_fees").find((row) => row.referralId === referral.id) : null;
    const rating = objection.ratingId ? WA.Storage.findById("wa_ratings", objection.ratingId) : null;
    const invoice = objection.invoiceId ? WA.Storage.findById("wa_invoices", objection.invoiceId) : null;
    if (decision === "accepted") {
      if (fee && fee.status !== "paid") WA.Storage.upsert("wa_fees", { ...fee, status: "exempt", exemptedAt: WA.Storage.now(), exemptionReason: reason });
      if (rating) WA.Storage.upsert("wa_ratings", { ...rating, status: "excluded", moderationReason: reason });
      if (invoice) WA.Storage.upsert("wa_invoices", { ...invoice, status: "cancelled", cancelledAt: WA.Storage.now(), cancellationReason: reason });
    } else if (decision === "rejected") {
      if (fee && fee.status === "disputed") WA.Storage.upsert("wa_fees", { ...fee, status: fee.invoiceIds?.length ? "invoiced_due" : "pending" });
      if (rating && rating.status === "under_review") WA.Storage.upsert("wa_ratings", { ...rating, status: "published" });
      if (invoice && invoice.status === "under_review") WA.Storage.upsert("wa_invoices", { ...invoice, status: Number(invoice.amount || 0) >= WA.Config.paymentThreshold ? "payment_required" : "statement_only" });
    }
    if (referral) WA.Storage.upsert("wa_referrals", { ...referral, objectionStatus: status, status: decision === "accepted" ? "closed" : referral.status === "disputed" ? "confirmed" : referral.status });
    audit(`قرار اعتراض: ${labels.objection[status]}`, "objection", objection.id, before, updated, reason);
  };

  const handleAction = (button) => {
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (!action) return;
    if (action === "referral-notified") { const referral = WA.Storage.findById("wa_referrals", id); if (referral) { const before = WA.Storage.deepClone(referral); const updated = WA.Lifecycle.markReferralNotified(id); audit("فتح إرسال إحالة عبر واتساب", "referral", id, before, updated, "إرسال يدوي عبر واتساب"); } return; }
    if (action === "request-view") return showRequest(id);
    if (action === "partner-view") return showPartner(id);
    if (action === "application-view") return showApplication(id);
    if (action === "invoice-view") return showInvoice(id);
    if (action === "objection-view") return showObjection(id);
    if (action === "audit-view") return showAudit(id);

    if (action.startsWith("request-")) {
      const request = WA.Storage.findById("wa_requests", id);
      if (!request) return;
      if (action === "request-close") confirmAction({ title: "إغلاق الطلب إداريًا", description: `سيتم إغلاق ${request.humanId || request.id} مع بقاء السجلات.`, handler: (reason) => { const before = WA.Storage.deepClone(request); const updated = WA.Storage.upsert("wa_requests", { ...request, status: "administratively_closed", administrativeClosedAt: WA.Storage.now(), lastActivityAt: WA.Storage.now() }); audit("إغلاق طلب إداريًا", "request", id, before, updated, reason); } });
      if (action === "request-reopen") confirmAction({ title: "إعادة فتح الطلب", description: `سيعود ${request.humanId || request.id} إلى المتابعة التشغيلية.`, handler: (reason) => { const before = WA.Storage.deepClone(request); const updated = WA.Storage.upsert("wa_requests", { ...request, status: request.acceptedReferralId ? "accepted" : "awaiting_workshop_acceptance", administrativeClosedAt: "", lastActivityAt: WA.Storage.now() }); audit("إعادة فتح طلب", "request", id, before, updated, reason); } });
      if (action === "request-alternative") confirmAction({ title: "إنشاء شريك بديل", description: "سيتم استبعاد الشركاء السابقين وتطبيق محرك المطابقة الحالي.", handler: (reason) => alternativeRequest(request, reason) });
      return;
    }

    if (action.startsWith("partner-")) {
      const partner = WA.Storage.findById("wa_partners", id);
      if (!partner) return;
      if (action === "partner-suspend") confirmAction({ title: "تعليق الشريك", description: "لن يظهر الشريك في الإحالات الجديدة حتى إعادة تفعيله.", extra: '<div class="form-field"><label for="adminPartnerSuspensionType">نوع التعليق</label><select id="adminPartnerSuspensionType"><option value="suspended_operations">تشغيلي</option><option value="suspended_financial">مالي</option></select></div>', handler: (reason) => { const before = WA.Storage.deepClone(partner); const status = $("#adminPartnerSuspensionType").value; const updated = WA.Storage.upsert("wa_partners", { ...partner, partnershipStatus: status, paymentStatus: status === "suspended_financial" ? "overdue" : partner.paymentStatus, suspensionReason: reason, suspendedAt: WA.Storage.now() }); audit("تعليق شريك", "partner", id, before, updated, reason); } });
      if (action === "partner-activate") confirmAction({ title: "إعادة تفعيل الشريك", description: "سيصبح الشريك مؤهلًا للمطابقة وفق بقية الشروط.", handler: (reason) => { const before = WA.Storage.deepClone(partner); const updated = WA.Storage.upsert("wa_partners", { ...partner, partnershipStatus: "active", paymentStatus: partner.paymentStatus === "overdue" ? "current" : partner.paymentStatus, suspensionReason: "", reactivatedAt: WA.Storage.now() }); audit("إعادة تفعيل شريك", "partner", id, before, updated, reason); } });
      if (action === "partner-google-link") confirmAction({ title: "ربط صفحة Google Maps", description: "أدخل Place ID بعد التحقق من تطابق اسم الورشة والعنوان.", extra: `<div class="form-field"><label class="required" for="adminGooglePlaceId">Google Place ID</label><input id="adminGooglePlaceId" dir="ltr" value="${e(partner.googlePlaceId || "")}" required maxlength="512"></div><div class="form-field"><label for="adminGoogleMapsUrl">رابط خرائط Google</label><input id="adminGoogleMapsUrl" type="url" value="${e(partner.googleMapsUrl || "")}" maxlength="1200"></div>`, handler: async (reason) => { const placeId = $("#adminGooglePlaceId").value.trim(); if (!WA.GooglePlaces.validPlaceId(placeId)) throw new Error("معرّف Google Place غير صالح"); const before = WA.Storage.deepClone(partner); let details = null; try { details = await WA.GooglePlaces.fetchDetails(placeId, { force: true }); } catch (error) { throw new Error(`تعذر التحقق من Google Maps: ${error.message}`); } const updated = WA.Storage.upsert("wa_partners", { ...partner, googlePlaceId: placeId, googleMapsUrl: $("#adminGoogleMapsUrl").value || partner.googleMapsUrl, googlePlaceLinkStatus: "verified", googlePlaceVerifiedAt: WA.Storage.now(), googlePlaceVerifiedName: "" }); audit("ربط Google Place", "partner", id, before, updated, reason, { googlePlaceId: placeId }); } });
      if (action === "partner-invoice") confirmAction({ title: "إصدار فاتورة/كشف", description: "سيستخدم النظام الرسوم غير المسددة وغير المتنازع عليها للشريك.", extra: '<div class="form-field"><label for="adminInvoiceReason">سبب الإصدار</label><select id="adminInvoiceReason"><option value="threshold">بلوغ حد السداد</option><option value="monthly">كشف شهري</option></select></div>', handler: (reason) => { const invoice = WA.Lifecycle.issueInvoice(id, $("#adminInvoiceReason").value); if (!invoice) throw new Error("لا توجد رسوم قابلة للإصدار"); audit("إصدار فاتورة", "invoice", invoice.id, null, invoice, reason); } });
      return;
    }

    if (action.startsWith("application-")) {
      const application = WA.Storage.findById("wa_join_applications", id);
      if (!application) return;
      if (action === "application-approve") confirmAction({ title: "اعتماد طلب الانضمام", description: "سيُنشأ سجل شريك نشط مرتبط بطلب الانضمام.", handler: (reason) => { const before = WA.Storage.deepClone(application); const partner = applicationToPartner(application); const updated = WA.Storage.upsert("wa_join_applications", { ...application, status: "approved", statusLabel: "تم الاعتماد", partnerId: partner.id, approvedAt: WA.Storage.now(), reviewedBy: currentUser().id, reviewReason: reason }); if (application.discount) WA.Storage.upsert("wa_discounts", { id: WA.Storage.createId("DISC"), partnerId: partner.id, title: "خصم عملاء وين أوديها", percent: application.discount.percent, scope: application.discount.scope, includedServices: application.discount.scope === "all" ? ["جميع الخدمات"] : [application.discount.services], conditions: application.discount.conditions || "", exclusions: "", startsAt: application.discount.startsAt, endsAt: application.discount.endsAt, continuousUntilStopped: application.discount.continuousUntilStopped, status: "approved", approvedAt: WA.Storage.now(), isDemo: false }); audit("اعتماد طلب انضمام", "join_application", id, before, updated, reason, { partnerId: partner.id }); } });
      if (action === "application-reject") confirmAction({ title: "رفض طلب الانضمام", description: "سيظهر سبب الرفض في سجل الطلب ولن يُنشأ شريك.", handler: (reason) => { const before = WA.Storage.deepClone(application); const updated = WA.Storage.upsert("wa_join_applications", { ...application, status: "rejected", statusLabel: "مرفوض", rejectedAt: WA.Storage.now(), reviewedBy: currentUser().id, reviewReason: reason }); audit("رفض طلب انضمام", "join_application", id, before, updated, reason); } });
      return;
    }

    if (action.startsWith("fee-")) {
      const fee = WA.Storage.findById("wa_fees", id);
      if (!fee) return;
      if (action === "fee-exempt") confirmAction({ title: "إعفاء رسم الوساطة", description: `${fee.id} بقيمة ${money(fee.amount)}.`, handler: (reason) => { const before = WA.Storage.deepClone(fee); const updated = WA.Storage.upsert("wa_fees", { ...fee, status: "exempt", exemptedAt: WA.Storage.now(), exemptionReason: reason }); audit("إعفاء رسم", "fee", id, before, updated, reason); } });
      if (action === "fee-restore") confirmAction({ title: "إعادة تفعيل الرسم", description: "سيعود الرسم إلى الرصيد غير المسدد.", handler: (reason) => { const before = WA.Storage.deepClone(fee); const updated = WA.Storage.upsert("wa_fees", { ...fee, status: fee.invoiceIds?.length ? "invoiced_due" : "pending", exemptedAt: "", exemptionReason: "" }); audit("إعادة رسم معفى", "fee", id, before, updated, reason); } });
      return;
    }

    if (action === "invoice-pay") {
      const invoice = WA.Storage.findById("wa_invoices", id);
      if (!invoice) return;
      confirmAction({ title: "تسجيل سداد الفاتورة", description: `${invoice.number || invoice.id} بقيمة ${money(invoice.amount)}.`, extra: '<div class="form-field"><label for="adminPaymentMethod">طريقة السداد</label><select id="adminPaymentMethod"><option value="bank_transfer">تحويل بنكي</option><option value="cash">نقدي</option><option value="other">أخرى</option></select></div>', handler: (reason) => { const payment = WA.Lifecycle.registerPayment(id, $("#adminPaymentMethod").value); audit("تسجيل سداد", "payment", payment.id, null, payment, reason, { invoiceId: id }); } });
      return;
    }

    if (action.startsWith("objection-")) {
      const objection = WA.Storage.findById("wa_objections", id);
      if (!objection) return;
      const decision = action === "objection-accept" ? "accepted" : action === "objection-partial" ? "partial" : "rejected";
      confirmAction({ title: `قرار الاعتراض: ${decision === "accepted" ? "قبول" : decision === "partial" ? "قبول جزئي" : "رفض"}`, description: "سيتم حفظ القرار وأثره في سجل التدقيق.", handler: (reason) => resolveObjection(objection, decision, reason) });
      return;
    }

    if (action === "rating-toggle") {
      const rating = WA.Storage.findById("wa_ratings", id);
      if (!rating) return;
      const next = rating.status === "published" ? "hidden" : "published";
      confirmAction({ title: next === "hidden" ? "إخفاء التقييم" : "إعادة نشر التقييم", description: "لا يمكن للشريك تنفيذ هذا الإجراء بنفسه.", handler: (reason) => { const before = WA.Storage.deepClone(rating); const updated = WA.Storage.upsert("wa_ratings", { ...rating, status: next, moderationReason: reason, moderatedAt: WA.Storage.now(), moderatedBy: currentUser().id }); audit(next === "hidden" ? "إخفاء تقييم" : "إعادة نشر تقييم", "rating", id, before, updated, reason); } });
      return;
    }

    if (action === "discount-toggle") {
      const discount = WA.Storage.findById("wa_discounts", id);
      if (!discount) return;
      const next = discount.status === "approved" ? "paused" : "approved";
      confirmAction({ title: next === "paused" ? "إيقاف الخصم" : "اعتماد الخصم", description: "سيؤثر الإجراء على عرض الخصم للعملاء.", handler: (reason) => { const before = WA.Storage.deepClone(discount); const updated = WA.Storage.upsert("wa_discounts", { ...discount, status: next, statusChangedAt: WA.Storage.now(), statusReason: reason }); audit(next === "paused" ? "إيقاف خصم" : "اعتماد خصم", "discount", id, before, updated, reason); } });
      return;
    }

    if (action === "user-edit") return openUserDialog(id);
    if (action === "user-reset") return openPasswordReset(id);
  };

  const openUserDialog = (id = "") => {
    const user = id ? WA.Storage.findById("wa_admin_users", id) : null;
    $("#adminUserDialogTitle").textContent = user ? "تعديل المستخدم" : "إضافة مستخدم";
    $("#adminUserId").value = user?.id || "";
    $("#newAdminName").value = user?.name || "";
    $("#newAdminUsername").value = user?.username || "";
    $("#newAdminUsername").disabled = Boolean(user);
    $("#newAdminRole").value = user?.role || "customer_service";
    $("#newAdminStatus").value = user?.status || "active";
    $("#newAdminPassword").value = "";
    $("#newAdminPassword").required = !user;
    $(".admin-user-password-field").hidden = Boolean(user);
    $("#adminUserDialog").showModal();
  };

  const openPasswordReset = (id) => {
    const user = WA.Storage.findById("wa_admin_users", id);
    if (!user) return;
    confirmAction({ title: "تغيير كلمة مرور المستخدم", description: `${user.name} — ${user.username}`, extra: '<div class="form-field"><label class="required" for="adminResetPassword">كلمة المرور المؤقتة الجديدة</label><input id="adminResetPassword" type="password" minlength="10" required autocomplete="new-password" dir="ltr"></div>', handler: async (reason) => { const password = $("#adminResetPassword").value; await WA.AdminAuth.resetPassword(user.id, password, currentUser()); audit("توثيق سبب إعادة كلمة المرور", "admin_user", user.id, null, null, reason); } });
  };

  const activateTab = (tab) => {
    const allowedButton = $(`[data-admin-tab="${tab}"]:not([hidden])`);
    if (!allowedButton) return;
    state.activeTab = tab;
    $$("[data-admin-tab]").forEach((button) => { const active = button.dataset.adminTab === tab; button.classList.toggle("active", active); button.setAttribute("aria-selected", String(active)); });
    $$("[data-admin-panel]").forEach((panel) => { const active = panel.dataset.adminPanel === tab; panel.classList.toggle("active", active); panel.hidden = !active; });
  };

  const configurePermissions = () => {
    $$('[data-permission]').forEach((element) => { if (!can(element.dataset.permission)) element.hidden = true; });
    const first = $("[data-admin-tab]:not([hidden])");
    if (first) activateTab(first.dataset.adminTab);
  };

  const initFilters = () => {
    Object.entries(WA.Config.serviceTypes).forEach(([value, label]) => $("#requestServiceFilter").add(new Option(label, value)));
    Object.entries(WA.Config.requestStatuses).forEach(([value, label]) => $("#requestStatusFilter").add(new Option(label, value)));
    $("#partnerTypeFilter").add(new Option(WA.Config.partnerTypes.workshop, "workshop"));
    Object.entries(WA.AdminAuth.roles).forEach(([value, role]) => $("#newAdminRole").add(new Option(role.label, value)));
    const entities = [...new Set(WA.Storage.get("wa_audit_logs").map((row) => row.entityType).filter(Boolean))];
    entities.sort().forEach((value) => $("#auditEntityFilter").add(new Option(value, value)));
  };

  const exportCsv = () => {
    if (!can("exports.use")) return WA.UI.showToast("ليست لديك صلاحية التصدير", "error");
    const map = { requests: ["wa_requests", "requests"], partners: ["wa_partners", "partners"], applications: ["wa_join_applications", "applications"], finance: [state.financeView === "fees" ? "wa_fees" : state.financeView === "invoices" ? "wa_invoices" : "wa_payments", state.financeView], quality: [state.qualityView === "objections" ? "wa_objections" : state.qualityView === "ratings" ? "wa_ratings" : "wa_discounts", state.qualityView], users: ["wa_admin_users", "admin-users"], audit: ["wa_audit_logs", "audit"] };
    const selected = map[state.activeTab] || ["wa_requests", "overview-requests"];
    const rows = WA.Storage.get(selected[0]);
    if (!rows.length) return WA.UI.showToast("لا توجد بيانات للتصدير", "info");
    const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
    const quote = (value) => `"${String(typeof value === "object" && value !== null ? JSON.stringify(value) : value ?? "").replace(/"/g, '""')}"`;
    const csv = `\uFEFF${keys.map(quote).join(",")}\n${rows.map((row) => keys.map((key) => quote(row[key])).join(",")).join("\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url; link.download = `wain-${selected[1]}-${new Date().toISOString().slice(0, 10)}.csv`; link.click();
    URL.revokeObjectURL(url);
    audit("تصدير CSV", selected[0], "", null, null, `تصدير قسم ${state.activeTab}`);
  };

  const bindEvents = () => {
    $("#adminLogout").addEventListener("click", () => { WA.AdminAuth.logout(); location.replace("admin-login.html"); });
    $("#adminRefresh").addEventListener("click", () => { renderAll(); WA.UI.showToast("تم تحديث البيانات", "success"); });
    $("#adminExport").addEventListener("click", exportCsv);
    $("#adminPrint").addEventListener("click", () => window.print());
    $$("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => activateTab(button.dataset.adminTab)));
    $$("[data-finance-view]").forEach((button) => button.addEventListener("click", () => { state.financeView = button.dataset.financeView; $$("[data-finance-view]").forEach((item) => item.classList.toggle("active", item === button)); $$("[data-finance-panel]").forEach((panel) => { panel.hidden = panel.dataset.financePanel !== state.financeView; }); }));
    $$("[data-quality-view]").forEach((button) => button.addEventListener("click", () => { state.qualityView = button.dataset.qualityView; $$("[data-quality-view]").forEach((item) => item.classList.toggle("active", item === button)); $$("[data-quality-panel]").forEach((panel) => { panel.hidden = panel.dataset.qualityPanel !== state.qualityView; }); }));
    ["#requestSearch", "#requestServiceFilter", "#requestStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderRequests));
    ["#partnerSearch", "#partnerTypeFilter", "#partnerStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderPartners));
    ["#applicationSearch", "#applicationStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderApplications));
    ["#auditSearch", "#auditEntityFilter"].forEach((selector) => $(selector).addEventListener("input", renderAudit));
    document.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]");
      if (action) handleAction(action);
      const close = event.target.closest("[data-close-dialog]");
      if (close) closeDialog(close.dataset.closeDialog);
    });
    $("#adminActionForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const reason = $("#adminActionReason").value.trim();
      if (!reason) return;
      try {
        if (typeof state.action === "function") await state.action(reason);
        closeDialog("adminActionDialog");
        renderAll();
        WA.UI.showToast("تم تنفيذ الإجراء وتسجيله", "success");
      } catch (error) { WA.UI.showToast(error.message || "تعذر تنفيذ الإجراء", "error"); }
    });
    $("#createAdminUser").addEventListener("click", () => openUserDialog());
    $("#adminUserForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const id = $("#adminUserId").value;
      try {
        if (id) {
          WA.AdminAuth.updateUser(id, { name: $("#newAdminName").value, role: $("#newAdminRole").value, status: $("#newAdminStatus").value }, currentUser(), "تحديث بيانات وصلاحية المستخدم");
        } else {
          await WA.AdminAuth.createUser({ name: $("#newAdminName").value, username: $("#newAdminUsername").value, role: $("#newAdminRole").value, password: $("#newAdminPassword").value }, currentUser());
        }
        closeDialog("adminUserDialog"); renderAll(); WA.UI.showToast("تم حفظ المستخدم", "success");
      } catch (error) { WA.UI.showToast(error.message || "تعذر حفظ المستخدم", "error"); }
    });
  };

  const init = () => {
    state.bundle = WA.AdminAuth.requireAuth("dashboard.view");
    if (!state.bundle) return;
    $("#adminUserName").textContent = state.bundle.user.name;
    $("#adminUserRole").textContent = roleLabel(state.bundle.user.role);
    configurePermissions();
    initFilters();
    bindEvents();
    renderAll();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();

```

## MODIFIED: `assets/automotive-data.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const models = {
    "تويوتا": ["كامري", "كورولا", "يارس", "أفالون", "راف فور", "لاندكروزر", "برادو", "هايلكس", "فورتشنر", "أخرى"],
    "نيسان": ["صني", "التيما", "مكسيما", "إكس تريل", "باترول", "باثفايندر", "نافارا", "كيكس", "أخرى"],
    "هيونداي": ["أكسنت", "إلنترا", "سوناتا", "أزيرا", "توسان", "سنتافي", "كريتا", "كونا", "أخرى"],
    "كيا": ["بيجاس", "ريو", "سيراتو", "K5", "K8", "سبورتاج", "سورينتو", "سيلتوس", "أخرى"],
    "فورد": ["توروس", "إكسبلورر", "إكسبيديشن", "إيدج", "إسكيب", "رينجر", "F-150", "أخرى"],
    "شيفروليه": ["ماليبو", "كابتيفا", "تاهو", "سوبربان", "ترافيرس", "سيلفرادو", "أخرى"],
    "لكزس": ["ES", "IS", "LS", "NX", "RX", "GX", "LX", "أخرى"],
    "مرسيدس": ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "أخرى"],
    "بي إم دبليو": ["الفئة 1", "الفئة 3", "الفئة 5", "الفئة 7", "X1", "X3", "X5", "X7", "أخرى"],
    "جي إم سي": ["تيرين", "أكاديا", "يوكن", "سييرا", "سافانا", "أخرى"],
    "مازدا": ["مازدا 3", "مازدا 6", "CX-3", "CX-5", "CX-9", "أخرى"],
    "هوندا": ["سيتي", "سيفيك", "أكورد", "HR-V", "CR-V", "بايلوت", "أخرى"],
    "ميتسوبيشي": ["أتراج", "لانسر", "ASX", "أوتلاندر", "باجيرو", "L200", "أخرى"],
    "سوزوكي": ["ديزاير", "سويفت", "سياز", "فيتارا", "جيمني", "أخرى"],
    "رينو": ["سيمبول", "ميجان", "داستر", "كوليوس", "أخرى"],
    "أودي": ["A3", "A4", "A6", "Q3", "Q5", "Q7", "أخرى"],
    "أخرى": ["أخرى"]
  };

  const regions = {
    "منطقة الرياض": ["الرياض", "الخرج", "المجمعة", "الدوادمي"],
    "منطقة مكة المكرمة": ["مكة المكرمة", "جدة", "الطائف"],
    "منطقة المدينة المنورة": ["المدينة المنورة", "ينبع"],
    "منطقة القصيم": ["بريدة", "عنيزة", "الرس", "البكيرية", "المذنب", "البدائع"],
    "المنطقة الشرقية": ["الدمام", "الخبر", "الظهران", "الأحساء", "الجبيل", "القطيف", "حفر الباطن"],
    "منطقة عسير": ["أبها", "خميس مشيط", "بيشة", "محايل عسير"],
    "منطقة تبوك": ["تبوك", "ضباء", "الوجه", "أملج"],
    "منطقة حائل": ["حائل"],
    "منطقة الحدود الشمالية": ["عرعر", "رفحاء", "طريف"],
    "منطقة جازان": ["جازان", "صبيا", "أبو عريش"],
    "منطقة نجران": ["نجران", "شرورة"],
    "منطقة الباحة": ["الباحة", "بلجرشي"],
    "منطقة الجوف": ["سكاكا", "القريات", "دومة الجندل"]
  };

  const cityCoordinates = {
    "الرياض": [24.7136, 46.6753], "الخرج": [24.1556, 47.3120], "المجمعة": [25.9047, 45.3646], "الدوادمي": [24.5077, 44.3924],
    "مكة المكرمة": [21.3891, 39.8579], "جدة": [21.4858, 39.1925], "الطائف": [21.2703, 40.4158],
    "المدينة المنورة": [24.5247, 39.5692], "ينبع": [24.0895, 38.0618],
    "بريدة": [26.3592, 43.9818], "عنيزة": [26.0843, 43.9936], "الرس": [25.8694, 43.4973], "البكيرية": [26.1442, 43.6578], "المذنب": [25.8601, 44.2223], "البدائع": [25.9947, 43.7340],
    "الدمام": [26.4207, 50.0888], "الخبر": [26.2172, 50.1971], "الظهران": [26.2361, 50.0393], "الأحساء": [25.3830, 49.5860], "الجبيل": [27.0174, 49.6225], "القطيف": [26.5652, 50.0115], "حفر الباطن": [28.4328, 45.9708],
    "أبها": [18.2164, 42.5053], "خميس مشيط": [18.3064, 42.7295], "بيشة": [20.0005, 42.5987], "محايل عسير": [18.5476, 42.0499],
    "تبوك": [28.3838, 36.5550], "ضباء": [27.3513, 35.6962], "الوجه": [26.2455, 36.4525], "أملج": [25.0213, 37.2685],
    "حائل": [27.5114, 41.7208],
    "عرعر": [30.9753, 41.0381], "رفحاء": [29.6208, 43.4931], "طريف": [31.6725, 38.6637],
    "جازان": [16.8892, 42.5511], "صبيا": [17.1495, 42.6254], "أبو عريش": [16.9689, 42.8325],
    "نجران": [17.5656, 44.2289], "شرورة": [17.4667, 47.1000],
    "الباحة": [20.0129, 41.4677], "بلجرشي": [19.8587, 41.5572],
    "سكاكا": [29.9697, 40.2064], "القريات": [31.3318, 37.3428], "دومة الجندل": [29.8158, 39.8664]
  };

  const toRadians = (value) => Number(value) * Math.PI / 180;
  const distanceKm = (lat1, lng1, lat2, lng2) => {
    const earth = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) ** 2;
    return earth * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const findNearestCity = (lat, lng) => {
    const latitude = Number(lat);
    const longitude = Number(lng);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
    let nearest = null;
    Object.entries(cityCoordinates).forEach(([city, coords]) => {
      const distance = distanceKm(latitude, longitude, coords[0], coords[1]);
      if (!nearest || distance < nearest.distanceKm) nearest = { city, region: Object.entries(regions).find(([, cities]) => cities.includes(city))?.[0] || "", distanceKm: distance };
    });
    return nearest ? { ...nearest, distanceKm: Number(nearest.distanceKm.toFixed(1)) } : null;
  };

  WA.Automotive = Object.freeze({
    makes: Object.keys(models), models, regions, cityCoordinates,
    regionNames: Object.keys(regions),
    allCities: Object.values(regions).flat(),
    mileages: ["أقل من 50 ألف كم", "من 50 إلى 100 ألف كم", "من 100 إلى 150 ألف كم", "من 150 إلى 200 ألف كم", "أكثر من 200 ألف كم"],
    fuels: ["بنزين", "ديزل", "كهربائية", "هجين", "غير محدد"],
    partTypes: ["وكالة", "تجارية", "لا يهم", "غير متأكد"],
    maintenanceServices: ["تغيير الزيت والفلاتر", "تغيير البطارية", "الإطارات", "فحص الفرامل", "خدمة التكييف", "فحص السوائل", "فحص دوري عام", "خدمة أخرى"],
    vehicleMovementOptions: ["تتحرك بشكل طبيعي", "تتحرك بصعوبة", "لا تتحرك", "غير متأكد"],
    weekdays: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    specialties: ["فحص وتشخيص عام", "ميكانيكا وكهرباء محرك", "فحص فرامل", "تكييف وكهرباء سيارات", "عفشة وتعليق وتوجيه", "كهرباء سيارات", "فحص ناقل حركة", "صيانة دورية وخدمات سريعة", "قطع غيار سيارات", "نقل وسحب المركبات"],
    getModels(make) { return models[make] || ["أخرى"]; },
    getCities(region) { return regions[region] || []; },
    getRegionForCity(city) { return Object.entries(regions).find(([, cities]) => cities.includes(city))?.[0] || ""; },
    findNearestCity,
    distanceKm,
    buildYears(start = 1990) {
      const years = [];
      const current = new Date().getFullYear() + 1;
      for (let year = current; year >= start; year -= 1) years.push(String(year));
      return years;
    },
    timeOptions() {
      const values = [];
      for (let hour = 0; hour < 24; hour += 1) [0, 30].forEach((minute) => values.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`));
      return values;
    }
  });
})();

```

## MODIFIED: `assets/common.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const escapeHtml = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const formatDate = (value, options = {}) => {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return new Intl.DateTimeFormat("ar-SA", { dateStyle: "medium", timeStyle: options.time === false ? undefined : "short" }).format(date);
  };
  const formatMoney = (value) => `${Number(value || 0).toLocaleString("ar-SA")} ر.س`;
  const serviceLabel = (type) => WA.Config.serviceTypes[type] || type;
  const statusLabel = (status, source = "request") => source === "referral" ? (WA.Config.referralStatuses[status] || status) : (WA.Config.requestStatuses[status] || status);

  const pageGuidance = {
    "index.html": "ابدأ بطلب مشكلة السيارة، والخدمة مجانية للعميل.",
    "customer.html": "صف مشكلة السيارة، وراجع التوجيه المبدئي، ثم وافق على مشاركة الملخص مع الورش المناسبة.",
    "track.html": "تابع قبول الورشة، وتواصل معها، واطلب بديلًا خلال 24 ساعة عند عدم الاتفاق.",
    "join.html": "اختر نوع نشاطك بدقة لتظهر لك المتطلبات المرتبطة بخدماتك فقط.",
    "join-status.html": "استخدم رقم طلب الانضمام ورقم الجوال للاطلاع على آخر تحديث.",
    "workshop-login.html": "دخول الورش العام غير متاح حاليًا؛ تستخدم الورشة رابط القبول الخاص المرسل إليها.",
    "workshop-dashboard.html": "هذه الصفحة محفوظة للمرحلة الثانية ولا تمثل خدمة متاحة حاليًا.",
    "payment.html": "الدفع الإلكتروني غير متاح حاليًا.",
    "receipt.html": "الإيصالات الإلكترونية غير متاحة حاليًا.",
    "privacy.html": "تعرف على البيانات التي نستخدمها لتشغيل الطلب وحماية حقوقك.",
    "terms.html": "توضح الشروط دور المنصة ومسؤولية مقدم الخدمة وآلية الرسوم والاعتراضات.",
    "404.html": "استخدم الرئيسية أو متابعة الطلب للوصول إلى الصفحة الصحيحة.",
    "admin-login.html": "بوابة داخلية مخصصة لأعضاء فريق المشروع المصرح لهم فقط.",
    "admin-dashboard.html": "تعرض الأقسام والإجراءات وفق الدور والصلاحيات المسندة إلى المستخدم."
  };

  const iconPaths = {
    home: '<path d="M3.5 10.5 12 3l8.5 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/>',
    back: '<path d="m15 18-6-6 6-6"/><path d="M9 12h11"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    car: '<path d="M5 16h14l-1.5-6h-11L5 16Z"/><path d="M3 16h18v3H3z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M7 10 9 6h6l2 4"/>',
    parts: '<path d="m14.7 6.3 3-3a4 4 0 0 1-5.2 5.2l-6.9 6.9a2 2 0 1 0 2.8 2.8l6.9-6.9a4 4 0 0 1 5.2-5.2l-3 3"/>',
    tow: '<path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 6V3h4v3"/>',
    maintenance: '<path d="M14.7 6.3a4 4 0 0 1-5.2 5.2l-5.8 5.8a2 2 0 1 0 2.8 2.8l5.8-5.8a4 4 0 0 1 5.2-5.2l-2.8 2.8-2.6-2.6 2.6-3Z"/>',
    whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.4 2.4 2.1 4.1 4.5 4.8l1.2-1.1 1.8.8c-.4 1.5-1.4 2.2-2.8 2-3.5-.6-6.2-3.4-6.7-6.8-.2-1.3.5-2.4 2-2.8l.9 1.8L9 8.5Z"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    track: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    partner: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><path d="M16 11a3 3 0 0 0 0-6M16 14a5 5 0 0 1 5 5v1"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3 7.5 7.5 9.5 4.5-2 7.5-5 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    refresh: '<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 1.1-8L20 12"/>',
    alert: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
    invoice: '<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6M9 8h2"/>',
    payment: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
    print: '<path d="M7 9V3h10v6M7 17v4h10v-4"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M16 13h1"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    money: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9H5v2M17 15h2v-2"/>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    save: '<path d="M5 3h12l2 2v16H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>'
  };

  const iconSvg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${iconPaths[name] || iconPaths.arrow}</svg>`;
  const inferIcon = (element) => {
    const text = element.textContent.trim();
    if (/واتساب/.test(text)) return "whatsapp";
    if (/نسخ/.test(text)) return "copy";
    if (/الرئيسية/.test(text)) return "home";
    if (/السابق|العودة/.test(text)) return "back";
    if (/متابعة|عرض الطلب|عرض الحالة/.test(text)) return "track";
    if (/موقع|الخريطة/.test(text)) return "location";
    if (/طباعة/.test(text)) return "print";
    if (/سداد|دفع/.test(text)) return "payment";
    if (/فاتورة|كشف/.test(text)) return "invoice";
    if (/اعتراض|تنبيه/.test(text)) return "alert";
    if (/بديل|أخرى/.test(text)) return "refresh";
    if (/إلغاء|إغلاق/.test(text)) return "close";
    if (/حفظ/.test(text)) return "save";
    if (/انضم|شريك|دخول/.test(text)) return "partner";
    if (/ابدأ|التالي|إرسال|تفعيل|تسجيل|فتح|ابحث|متابعة/.test(text)) return "arrow";
    return "";
  };

  const decorateIcons = (root = document) => {
    qsa("[data-icon], .btn, .utility-btn, .icon-action, .text-link, .nav-toggle", root).forEach((element) => {
      if (element.dataset.iconDecorated === "true") return;
      const name = element.dataset.icon || inferIcon(element);
      if (!name) return;
      const holder = document.createElement("span");
      holder.className = "ui-icon";
      holder.setAttribute("aria-hidden", "true");
      holder.innerHTML = iconSvg(name);
      element.prepend(holder);
      element.dataset.iconDecorated = "true";
    });
    qsa("[data-service-icon]", root).forEach((element) => {
      if (element.dataset.iconDecorated === "true") return;
      element.innerHTML = iconSvg(element.dataset.serviceIcon);
      element.dataset.iconDecorated = "true";
    });
    qsa(".card-icon[data-icon]", root).forEach((element) => {
      if (element.dataset.cardIconDecorated === "true") return;
      element.innerHTML = iconSvg(element.dataset.icon);
      element.dataset.cardIconDecorated = "true";
    });
  };

  const showToast = (message, type = "info") => {
    let region = qs("#toastRegion");
    if (!region) {
      region = document.createElement("div");
      region.id = "toastRegion";
      region.className = "toast-region";
      region.setAttribute("aria-live", "polite");
      document.body.appendChild(region);
    }
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    region.appendChild(toast);
    setTimeout(() => toast.remove(), 3600);
  };

  const copyText = async (text) => {
    try { await navigator.clipboard.writeText(text); showToast("تم النسخ", "success"); return true; }
    catch (_) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("copy");
      textarea.remove();
      showToast(result ? "تم النسخ" : "تعذر النسخ", result ? "success" : "error");
      return result;
    }
  };

  const whatsappUrl = (phone, message) => {
    const normalized = WA.Storage.normalizeWhatsapp(phone);
    return normalized ? `https://wa.me/${normalized}?text=${encodeURIComponent(message)}` : "";
  };

  const vehicleText = (vehicle) => `${vehicle.makeOther || vehicle.make} ${vehicle.modelOther || vehicle.model}${vehicle.year ? ` ${vehicle.year}` : ""}`.trim();
  const buildWhatsappMessage = ({ request, customer, vehicle }) => {
    const lines = ["السلام عليكم،", `معك ${customer.firstName}، وصلت إليكم عن طريق «وين أوديها» بخصوص الطلب رقم ${request.humanId}.`, "", `السيارة: ${vehicleText(vehicle)}.`];
    if (request.serviceType === "problem") lines.push(`الطلب: فحص مشكلة — ${request.problem}.`);
    if (request.serviceType === "parts") {
      if (vehicle.vin) lines.push(`رقم الهيكل: ${vehicle.vin}.`);
      lines.push(`القطعة المطلوبة: ${request.partName}.`, `النوع المفضل: ${request.partType}.`, "أرغب بالتأكد من التوفر والسعر والمطابقة للسيارة.");
    }
    if (request.serviceType === "tow") {
      lines.push(`موقع السيارة: ${request.preciseLocation}.`, `وصف المكان: ${request.placeDescription}.`, `حالة السيارة: ${request.vehicleMoves}.`);
      if (request.towDestination) lines.push(`الوجهة: ${request.towDestination}.`);
      lines.push("الطلب عاجل، وأرغب بالتنسيق معكم.");
    }
    if (request.serviceType === "maintenance") lines.push(`الخدمة المطلوبة: ${request.maintenanceService}.`, `نوع الوقود: ${vehicle.fuelType || "غير محدد"}.`, request.notes ? `ملاحظة: ${request.notes}.` : "", "أرغب بالتنسيق معكم.");
    if (request.serviceType === "problem") lines.push("", "أرغب بالتنسيق معكم.");
    return lines.filter(Boolean).join("\n");
  };

  const buildWorkshopDispatchMessage = ({ request, vehicle, referral, acceptanceUrl }) => {
    const fee = Number(referral?.feeAmount || request.referralFeeAmount || 1);
    return [
      "طلب جديد من «وين أوديها»",
      `رقم الطلب: ${request.humanId}`,
      `السيارة: ${vehicleText(vehicle || request.vehicleSnapshot || {})}`,
      `المدينة: ${request.city}`,
      `ملخص المشكلة: ${request.problem}`,
      `التخصص المتوقع: ${request.ai?.specialty || "فحص وتشخيص عام"}`,
      `درجة الاستعجال: ${request.ai?.urgency || "غير محددة"}`,
      `رسم الإحالة عند القبول: ${fee} ريال`,
      "بيانات التواصل مخفية حتى استقبال الورشة للطلب.",
      `رابط القبول: ${acceptanceUrl}`
    ].join("\n");
  };

  const availabilityText = (partner) => partner.availability?.status === "verified"
    ? `تم تحديث قابلية الاستقبال بتاريخ ${formatDate(partner.availability.verifiedAt, { time: false })}. يرجى تأكيد الموعد عبر واتساب.`
    : (partner.availability?.note || "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب.");

  const weekdayNames = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const scheduleForToday = (partner) => {
    const item = (partner.schedule || []).find((row) => row.day === weekdayNames[new Date().getDay()]);
    if (!item) return partner.hours || "تأكد عبر واتساب";
    if (!item.open) return "مغلق اليوم";
    if (item.allDay) return "مفتوح 24 ساعة";
    const slots = [item.period1, item.period2].filter(Boolean).map((slot) => `${slot.from}–${slot.to}`);
    return slots.join("، ") || "تأكد عبر واتساب";
  };

  const renderStars = (rating) => {
    const rounded = Math.round(Number(rating || 0));
    return `<span class="stars" aria-label="${escapeHtml(rating)} من 5">${"★".repeat(rounded)}${"☆".repeat(Math.max(0, 5 - rounded))}</span>`;
  };

  const getRequestBundle = (request) => {
    if (!request) return null;
    const customer = WA.Storage.findById("wa_customers", request.customerId);
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    const referrals = WA.Storage.get("wa_referrals").filter((row) => row.requestId === request.id).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
    const acceptedId = request.acceptedReferralId || request.activeReferralId || "";
    const activeReferral = referrals.find((row) => row.id === acceptedId && (row.acceptedAt || row.status === "accepted")) || null;
    const partner = activeReferral ? WA.Storage.findById("wa_partners", activeReferral.partnerId) : null;
    return { request, customer, vehicle, referrals, activeReferral, partner, discount: null };
  };

  const renderPartnerCard = ({ partner, referral, discount, matchReason = "", compact = false }) => {
    if (!partner) return "";
    const ratingHtml = Number(partner.ratingCount || 0) > 0
      ? `<span class="rating-source">تقييم وين أوديها</span>${renderStars(partner.ratingOverall)}<strong>${escapeHtml(partner.ratingOverall)} / 5</strong><small>بناءً على ${escapeHtml(partner.ratingCount)} تقييمًا موثقًا</small>`
      : '<span class="rating-source">تقييم وين أوديها</span><strong>ورشة جديدة</strong><small>لا توجد تقييمات موثقة كافية بعد</small>';
    const googleRatingHtml = `<div class="google-rating-block" data-google-place-id="${escapeHtml(partner.googlePlaceId || "")}" data-google-maps-url="${escapeHtml(partner.googleMapsUrl || "")}"><span class="google-source">Google Maps</span><strong>${partner.googlePlaceId ? "جاري تحديث التقييم…" : "غير مرتبط بعد"}</strong><small>يظهر منفصلًا عن تقييم وين أوديها</small></div>`;
    const discountServices = discount?.scope === "all" ? "جميع الخدمات" : ((discount?.includedServices || []).join("، ") || "خدمات مختارة");
    const discountHtml = discount ? `<section class="discount-box"><strong>${escapeHtml(discount.title)}: ${escapeHtml(discount.percent)}%</strong><span>${escapeHtml(discountServices)}</span><small>${escapeHtml(discount.conditions || "")}${discount.continuousUntilStopped ? " — مستمر حتى يوقفه الشريك." : ` — حتى ${escapeHtml(discount.endsAt)}`}</small></section>` : "";
    const mapLink = partner.googleMapsUrl ? `<a class="text-link" data-icon="location" href="${escapeHtml(partner.googleMapsUrl)}" target="_blank" rel="noopener noreferrer">فتح الموقع على خرائط Google</a>` : "";
    return `<article class="partner-card ${compact ? "partner-card-compact" : ""}">
      <div class="partner-head"><div><span class="pill">${escapeHtml(WA.Config.partnerTypes[partner.type] || partner.type)}</span><h2>${escapeHtml(partner.name)}</h2><p>${escapeHtml(partner.region || "")} — ${escapeHtml(partner.city)} — ${escapeHtml(partner.address || partner.exactLocation || "")}</p>${mapLink}</div><div class="rating-stack"><div class="rating-block">${ratingHtml}</div>${googleRatingHtml}</div></div>
      <div class="partner-metrics"><div><span>عدالة الأسعار</span><strong>${escapeHtml(partner.fairnessRating || "—")} / 5</strong><small>${escapeHtml(partner.fairnessCount || 0)} تقييمًا موثقًا</small></div><div><span>الالتزام</span><strong>${escapeHtml(partner.commitment || "—")}</strong><small>مستوى الالتزام المسجل</small></div><div><span>ساعات اليوم</span><strong>${escapeHtml(scheduleForToday(partner))}</strong><small>أكد الموعد عبر واتساب</small></div></div>
      <div class="info-panel"><strong>لماذا رُشح لك؟</strong><p>${escapeHtml(matchReason || referral?.matchReason || "يناسب نوع الخدمة والمدينة المسجلة في طلبك.")}</p></div>
      <div class="info-panel muted"><strong>الاستقبال</strong><p>${escapeHtml(availabilityText(partner))}</p></div>${discountHtml}
    </article>`;
  };

  const injectLayout = () => {
    qsa("[data-unified-header]").forEach((header) => {
      const toggle = qs(".nav-toggle", header);
      const nav = qs(".main-nav", header);
      if (!toggle || !nav) return;

      const closeMenu = () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      };

      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("open", !open);
        toggle.setAttribute("aria-label", open ? "فتح قائمة التنقل" : "إغلاق قائمة التنقل");
      });

      nav.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMenu();
          toggle.focus();
        }
      });

      document.addEventListener("click", (event) => {
        if (!header.contains(event.target)) closeMenu();
      });
    });
  };

  const initSelect = (select, options, placeholder = "اختر") => { if (select) select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}`; };
  const setButtonBusy = (button, busy, text = "جاري التنفيذ...") => { if (!button) return; if (busy) { button.dataset.originalText = button.textContent; button.textContent = text; button.disabled = true; button.setAttribute("aria-busy", "true"); } else { button.textContent = button.dataset.originalText || button.textContent; button.disabled = false; button.removeAttribute("aria-busy"); delete button.dataset.iconDecorated; decorateIcons(button.parentElement || document); } };
  const setActiveNav = () => {
    const page = location.pathname.split("/").pop() || "index.html";
    qsa(".main-nav a, .unified-footer-nav a").forEach((link) => {
      const target = (link.getAttribute("href") || "").split("?")[0].split("#")[0];
      if (target === page) link.setAttribute("aria-current", "page");
    });
  };
  const init = () => {
    WA.Storage.init();
    WA.Seed.run();
    WA.Lifecycle.runSweep();
    injectLayout();
    setActiveNav();
    decorateIcons();
    WA.GooglePlaces?.enhanceAll(document);
    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => { if (node.nodeType === Node.ELEMENT_NODE) { decorateIcons(node); WA.GooglePlaces?.enhanceAll(node); } })));
    observer.observe(document.body, { childList: true, subtree: true });
    document.documentElement.classList.add("js");
    document.body.classList.add("page-ready");
  };

  WA.UI = { qs, qsa, escapeHtml, formatDate, formatMoney, serviceLabel, statusLabel, showToast, copyText, whatsappUrl, buildWhatsappMessage, buildWorkshopDispatchMessage, availabilityText, renderStars, renderPartnerCard, getRequestBundle, initSelect, setButtonBusy, vehicleText, scheduleForToday, decorateIcons, iconSvg };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();

```

## MODIFIED: `assets/config.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  WA.Config = Object.freeze({
    appName: "وين أوديها",
    dataVersion: 13,
    stage: "stage_one_problem_whatsapp",
    stageOneService: "problem",
    dispatchBatchSize: 3,
    maxAcceptedReferralsPerRequest: 3,
    maxReferralsPerRequest: 9,
    alternativeWindowHours: 24,
    workshopResponseMinutes: 60,
    administrativeCloseDays: 5,
    otpLength: 6,
    otpExpiryMinutes: 5,
    googlePlacesEndpoint: "/api/google-place-details",
    paymentThreshold: 100,
    paymentDueDays: 10,
    objectionWindowDays: 15,
    invoiceIssueDay: 1,
    serviceTypes: Object.freeze({
      problem: "عندي مشكلة في السيارة"
    }),
    futureServiceTypes: Object.freeze({
      parts: "قطع الغيار — غير متاحة حاليًا",
      tow: "السطحات — غير متاحة حاليًا",
      maintenance: "الصيانة الدورية — غير متاحة حاليًا",
      pickup: "استلام السيارة وإدارة إصلاحها — غير متاحة حاليًا"
    }),
    partnerTypes: Object.freeze({
      workshop: "ورشة إصلاح وتشخيص",
      parts: "محل قطع غيار — غير متاح حاليًا",
      tow: "مقدم خدمة سطحة — غير متاح حاليًا",
      maintenance: "مركز صيانة دورية — غير متاح حاليًا"
    }),
    storageKeys: Object.freeze([
      "wa_customers", "wa_vehicles", "wa_requests", "wa_partners",
      "wa_referrals", "wa_ratings", "wa_objections", "wa_discounts",
      "wa_fees", "wa_invoices", "wa_claims", "wa_payments",
      "wa_join_applications", "wa_consents", "wa_sessions",
      "wa_admin_users", "wa_admin_sessions", "wa_audit_logs", "wa_meta"
    ]),
    referralFeeCategories: Object.freeze({
      simple: Object.freeze({ label: "طلب بسيط", amount: 1, examples: "فحص مبدئي أو مشكلة غير واضحة" }),
      light: Object.freeze({ label: "خدمة خفيفة", amount: 2, examples: "بطارية أو زيت أو فلاتر" }),
      medium: Object.freeze({ label: "خدمة متوسطة", amount: 3, examples: "فرامل أو تكييف أو تعليق" }),
      specialist: Object.freeze({ label: "خدمة تخصصية", amount: 4, examples: "كهرباء متقدمة أو تبريد أو برمجة" }),
      complex: Object.freeze({ label: "خدمة معقدة", amount: 5, examples: "محرك أو ناقل حركة أو أعطال كبيرة" })
    }),
    // تُبقى شرائح النسخة السابقة للتوافق مع السجلات القديمة فقط.
    costBands: Object.freeze({
      under_50: Object.freeze({ label: "أقل من 50 ريالًا", fee: 0 }),
      from_50_to_199: Object.freeze({ label: "من 50 إلى أقل من 200 ريال", fee: 5 }),
      from_200_to_400: Object.freeze({ label: "من 200 إلى 400 ريال", fee: 10 }),
      over_400: Object.freeze({ label: "أكثر من 400 ريال", fee: 25 })
    }),
    referralStatuses: Object.freeze({
      sent: "أُرسل للورشة",
      viewed: "اطلعت الورشة على الطلب",
      accepted: "قبلت الورشة الطلب",
      rejected: "رفضت الورشة الطلب",
      expired: "انتهت مهلة القبول",
      closed_prior_acceptance: "أُغلق لوجود قبول سابق",
      late_acceptance_attempt: "محاولة قبول بعد الإغلاق",
      contacted: "تم التواصل",
      appointment_set: "تم تحديد موعد",
      arrived: "وصل العميل",
      service_received: "تمت الخدمة",
      service_not_received: "لم تتم الخدمة",
      not_agreed: "لم يتم الاتفاق",
      alternative_requested: "طُلبت ورشة بديلة",
      disputed: "معترض عليها",
      under_review: "تحت المراجعة",
      confirmed: "مؤكدة",
      closed: "مغلقة",
      // توافق خلفي
      registered: "مسجلة",
      shown: "ظهرت للعميل",
      whatsapp_opened: "تم فتح واتساب",
      no_contact: "لم يتواصل العميل",
      contacted_not_arrived: "تواصل ولم يصل",
      arrived_no_service: "وصل ولم يتلق الخدمة",
      cost_pending: "بانتظار فئة التكلفة",
      partner_cost_confirmation: "بانتظار تأكيد الشريك للتكلفة",
      cost_disputed: "اختلاف على فئة التكلفة"
    }),
    requestStatuses: Object.freeze({
      draft: "مسودة",
      ready_for_dispatch: "جاهز للإرسال",
      awaiting_workshop_acceptance: "بانتظار قبول ورشة",
      accepted: "قبلته ورشة",
      no_acceptance: "لم تقبله أي ورشة",
      alternative_requested: "طُلبت ورشة بديلة",
      contacted: "تم التواصل",
      appointment_set: "تم تحديد موعد",
      arrived: "وصل العميل",
      service_received: "تمت الخدمة",
      service_not_received: "لم تتم الخدمة",
      not_agreed: "لم يتم الاتفاق",
      rated: "تم التقييم",
      administratively_closed: "مغلق إداريًا",
      finally_closed: "مغلق نهائيًا",
      // توافق خلفي
      matching: "جاري المطابقة",
      no_match: "لا يوجد تطابق حاليًا",
      referred: "تم ترشيح شريك",
      awaiting_result: "بانتظار نتيجة الإحالة",
      cost_pending: "بانتظار فئة تكلفة الخدمة"
    })
  });
})();

```

## MODIFIED: `assets/customer.js`

```javascript
(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  const progress = {
    customer: [15, "الموقع والتواصل"], vehicle: [32, "السيارة"], path: [48, "وصف المشكلة"],
    analyzing: [60, "التحليل"], questions: [70, "أسئلة توضيحية"], guidance: [82, "التوجيه المبدئي"],
    consent: [90, "الموافقة"], dispatching: [97, "إرسال الطلب"], result: [100, "تم إنشاء الطلب"], noMatch: [100, "نتيجة الإرسال"]
  };
  const emptyState = () => ({
    screen: "customer",
    customer: { firstName: "", phone: "", phoneVerifiedAt: "", phoneVerificationMode: "demo_otp" },
    otp: { challenge: null, input: "", verified: false },
    vehicle: { make: "", makeOther: "", model: "", modelOther: "", year: "", mileage: "", fuelType: "", vin: "" },
    region: "", city: "", preciseLocation: "", locationCoordinates: null, locationMethod: "manual", nearestCityDistanceKm: null,
    problem: "", safeToDriveAnswer: "", ai: null, questions: [], answers: [], questionIndex: 0,
    consents: { dataSharingAccepted: false, privacyAccepted: false, termsAccepted: false, marketingMessages: false }, requestId: "", referralIds: []
  });
  let state = emptyState();
  let draftTimer = 0;
  const saveDraft = () => { clearTimeout(draftTimer); draftTimer = setTimeout(() => WA.Lifecycle.saveDraft(state), 120); };
  const setProgress = (screen) => { const [percent,label]=progress[screen]||[0,"الطلب"]; $("#progressBar").style.width=`${percent}%`; $("#progressPercent").textContent=`${percent}%`; $("#progressLabel").textContent=label; $(".progress-track").setAttribute("aria-valuenow",String(percent)); };
  const showScreen = (screen, focus=true) => { $$(".flow-screen").forEach((item)=>item.classList.toggle("active",item.dataset.screen===screen)); state.screen=screen; setProgress(screen); const active=$(`.flow-screen[data-screen="${screen}"]`); if(active&&focus){active.focus({preventScroll:true});active.scrollIntoView({behavior:"smooth",block:"start"});} saveDraft(); };
  const setError = (id,message="") => { const target=$(`[data-error-for="${id}"]`); const field=$(`#${id}`); if(target)target.textContent=message; if(field)field.setAttribute("aria-invalid",message?"true":"false"); };
  const required = (id,message) => { const value=String($(`#${id}`)?.value||"").trim(); setError(id,value?"":message); return Boolean(value); };
  const updateModels = (selected="") => { const make=$("#make").value, model=$("#model"); if(!make){model.disabled=true;model.innerHTML='<option value="">اختر الشركة أولًا</option>';return;} model.disabled=false; WA.UI.initSelect(model,WA.Automotive.getModels(make),"اختر الموديل"); if(selected)model.value=selected; };
  const updateCities = (selected="") => { const region=$("#region").value, city=$("#city"); if(!region){city.disabled=true;city.innerHTML='<option value="">اختر المنطقة أولًا</option>';return;} city.disabled=false; WA.UI.initSelect(city,WA.Automotive.getCities(region),"اختر المدينة"); if(selected&&WA.Automotive.getCities(region).includes(selected))city.value=selected; };
  const updateOtherFields = () => { const otherMake=$("#make").value==="أخرى"; const otherModel=$("#model").value==="أخرى"||otherMake; $("#makeOtherField").hidden=!otherMake; $("#modelOtherField").hidden=!otherModel; $("#makeOther").required=otherMake; $("#modelOther").required=otherModel; };
  const normalizePhone = () => WA.Storage.sanitizePhone($("#phone").value);
  const resetOtp = (message="") => { state.otp={challenge:null,input:"",verified:false}; state.customer.phoneVerifiedAt=""; $("#otpPanel").hidden=true; $("#otpInput").value=""; $("#otpCodeDisplay").textContent=""; $("#otpStatus").textContent=message; setError("otpInput",""); };
  const createOtp = () => { const phone=normalizePhone(); if(!/^05\d{8}$/.test(phone)){resetOtp();return false;} state.otp.challenge=WA.OTP.create(phone,WA.Config.otpLength,WA.Config.otpExpiryMinutes); state.otp.input=state.otp.challenge.code; state.otp.verified=false; state.customer.phoneVerifiedAt=""; $("#otpPanel").hidden=false; $("#otpCodeDisplay").textContent=`رمز الاختبار: ${state.otp.challenge.code}`; $("#otpInput").value=state.otp.challenge.code; $("#otpStatus").textContent="تم إنشاء الرمز وكتابته تلقائيًا للاختبار. اضغط تحقق من الرمز."; saveDraft(); return true; };
  const verifyOtp = () => { const ok=WA.OTP.verify(state.otp.challenge,$("#otpInput").value,normalizePhone()); state.otp.input=WA.OTP.digits($("#otpInput").value); state.otp.verified=ok; state.customer.phoneVerifiedAt=ok?WA.Storage.now():""; setError("otpInput",ok?"":"الرمز غير مطابق أو انتهت صلاحيته"); $("#otpStatus").textContent=ok?"تم التحقق من رقم الجوال بنجاح.":"تحقق من الرمز ثم أعد المحاولة."; if(ok)WA.UI.showToast("تم التحقق من الجوال","success"); saveDraft(); return ok; };
  const sync = () => {
    state.customer.firstName=WA.Storage.sanitizeText($("#firstName").value,40); state.customer.phone=normalizePhone();
    state.vehicle.make=$("#make").value; state.vehicle.makeOther=WA.Storage.sanitizeText($("#makeOther").value,60); state.vehicle.model=$("#model").value; state.vehicle.modelOther=WA.Storage.sanitizeText($("#modelOther").value,60); state.vehicle.year=$("#year").value; state.vehicle.mileage=$("#mileage").value;
    state.region=$("#region").value; state.city=$("#city").value; state.preciseLocation=WA.Storage.sanitizeText($("#preciseLocation").value,400); state.problem=WA.Storage.sanitizeText($("#problem").value,1200); state.safeToDriveAnswer=$("#safeToDriveAnswer").value;
    state.otp.input=WA.OTP.digits($("#otpInput")?.value||state.otp.input);
    state.consents={dataSharingAccepted:$("#dataSharingAccepted").checked,privacyAccepted:$("#privacyAccepted").checked,termsAccepted:$("#termsAccepted").checked,marketingMessages:$("#marketingMessages").checked};
  };
  const hydrate = () => {
    $("#firstName").value=state.customer.firstName||""; $("#phone").value=state.customer.phone||""; $("#make").value=state.vehicle.make||""; updateModels(state.vehicle.model); $("#model").value=state.vehicle.model||""; $("#makeOther").value=state.vehicle.makeOther||""; $("#modelOther").value=state.vehicle.modelOther||""; $("#year").value=state.vehicle.year||""; $("#mileage").value=state.vehicle.mileage||""; $("#region").value=state.region||""; updateCities(state.city); $("#city").value=state.city||""; $("#preciseLocation").value=state.preciseLocation||""; $("#problem").value=state.problem||""; $("#safeToDriveAnswer").value=state.safeToDriveAnswer||"";
    $("#dataSharingAccepted").checked=Boolean(state.consents.dataSharingAccepted); $("#privacyAccepted").checked=Boolean(state.consents.privacyAccepted); $("#termsAccepted").checked=Boolean(state.consents.termsAccepted); $("#marketingMessages").checked=Boolean(state.consents.marketingMessages);
    if(state.otp?.challenge&&state.otp.challenge.phone===state.customer.phone){$("#otpPanel").hidden=false;$("#otpCodeDisplay").textContent=`رمز الاختبار: ${state.otp.challenge.code}`;$("#otpInput").value=state.otp.input||state.otp.challenge.code;$("#otpStatus").textContent=state.otp.verified?"تم التحقق من رقم الجوال بنجاح.":"اضغط تحقق من الرمز.";}
    if(state.locationCoordinates)$("#locationStatus").textContent=`تم اختيار ${state.city||"المدينة الأقرب"} تلقائيًا بدقة تقريبية ${Math.round(state.locationCoordinates.accuracy||0)} متر.`; updateOtherFields();
  };
  const validateCustomer = () => { let ok=required("region","اختر المنطقة"); ok=required("city","اختر المدينة")&&ok; ok=required("firstName","اكتب الاسم الأول")&&ok; const phone=normalizePhone(); const phoneOk=/^05\d{8}$/.test(phone); setError("phone",phoneOk?"":"أدخل رقم جوال سعودي بصيغة 05XXXXXXXX"); if(phoneOk&&!state.otp.challenge)createOtp(); const otpOk=phoneOk&&state.otp.verified&&WA.OTP.verify(state.otp.challenge,state.otp.input,phone); setError("otpInput",otpOk?"":"تحقق من رمز الجوال قبل المتابعة"); return ok&&phoneOk&&otpOk; };
  const validateVehicle = () => { let ok=required("make","اختر الشركة"); ok=required("model","اختر الموديل")&&ok; ok=required("year","اختر سنة الصنع")&&ok; if($("#make").value==="أخرى")ok=required("makeOther","اكتب اسم الشركة")&&ok; if($("#model").value==="أخرى"||$("#make").value==="أخرى")ok=required("modelOther","اكتب اسم الموديل")&&ok; return ok; };
  const validateProblem = () => { const value=String($("#problem").value||"").trim(); const ok=value.length>=12; setError("problem",ok?"":"اكتب وصفًا أوضح للمشكلة بما لا يقل عن 12 حرفًا"); return ok; };
  const animateSteps = (selector,done) => { const items=$$(selector);items.forEach((item)=>item.classList.remove("active","done"));let index=0;const next=()=>{if(index>0)items[index-1]?.classList.add("done");if(index>=items.length){setTimeout(done,180);return;}items[index].classList.add("active");index+=1;setTimeout(next,260);};next(); };
  const runAnalysis = () => { showScreen("analyzing");animateSteps("#analysisSteps .loader-step",()=>{const assessed=WA.AIEngine.assess({description:state.problem,vehicle:state.vehicle});state.ai=assessed;state.questions=(assessed.questions||[]).slice(0,3);state.answers=[];state.questionIndex=0;if(!state.questions.length)renderGuidance();else renderQuestion();}); };
  const renderQuestion = () => { if(state.questionIndex>=state.questions.length){state.ai=WA.AIEngine.finalize({description:state.problem,vehicle:state.vehicle,questions:state.questions,answers:state.answers});renderGuidance();return;} const total=state.questions.length;$("#questionTitle").textContent=`سؤال ${state.questionIndex+1} من ${total}`;$("#questionText").textContent=state.questions[state.questionIndex];$("#answerChoices").innerHTML=["نعم","لا","غير متأكد"].map((answer)=>`<button class="choice-btn${state.answers[state.questionIndex]===answer?" selected":""}" type="button" data-answer="${answer}">${answer}</button>`).join("");$("#questionNext").disabled=!state.answers[state.questionIndex];$("#questionNext").textContent=state.questionIndex===total-1?"عرض النتيجة":"التالي";$$('[data-answer]').forEach((button)=>button.addEventListener("click",()=>{state.answers[state.questionIndex]=button.dataset.answer;$$('[data-answer]').forEach((item)=>item.classList.toggle("selected",item===button));$("#questionNext").disabled=false;saveDraft();}));showScreen("questions"); };
  const renderGuidance = () => { state.ai=WA.AIEngine.finalize({description:state.problem,vehicle:state.vehicle,questions:state.questions,answers:state.answers});$("#expectedIssue").textContent=state.ai.expectedIssue;$("#specialty").textContent=state.ai.specialty;$("#urgency").textContent=state.ai.urgency;$("#nextStep").textContent=state.ai.nextStep;$("#legalNotice").textContent=state.ai.legalNotice;const danger=state.ai.dangerReasons?.length>0||/خطرة/.test(state.ai.urgency||"");$("#dangerPanel").hidden=!danger;$("#dangerPanel").innerHTML=danger?`<strong>تنبيه سلامة</strong><p>${WA.UI.escapeHtml(state.ai.nextStep)}</p>`:"";showScreen("guidance"); };
  const renderReview = () => { const rows=[["الاسم الأول",state.customer.firstName],["الجوال","تم التحقق"],["السيارة",WA.UI.vehicleText(state.vehicle)],["الموقع",`${state.region} — ${state.city}`],["التخصص المتوقع",state.ai?.specialty||"فحص وتشخيص عام"],["درجة الاستعجال",state.ai?.urgency||"غير محددة"],["ملخص المشكلة",state.problem]];$("#reviewContent").innerHTML=rows.map(([label,value])=>`<div class="guidance-item"><span>${WA.UI.escapeHtml(label)}</span><strong>${WA.UI.escapeHtml(value)}</strong></div>`).join("");showScreen("consent"); };
  const payload = () => ({requestId:state.requestId,serviceType:"problem",customer:{...state.customer,phoneVerified:true},vehicle:state.vehicle,consents:state.consents,region:state.region,city:state.city,preciseLocation:state.preciseLocation,locationCoordinates:state.locationCoordinates,locationMethod:state.locationMethod,nearestCityDistanceKm:state.nearestCityDistanceKm,problem:state.problem,safeToDriveAnswer:state.safeToDriveAnswer,ai:{...state.ai,questions:state.questions,answers:state.answers}});
  const createAndDispatch = () => { showScreen("dispatching");animateSteps('.flow-screen[data-screen="dispatching"] .loader-step',()=>{try{const created=WA.Lifecycle.createRequest(payload());state.requestId=created.request.id;const dispatch=WA.Lifecycle.dispatchToPartners(created.request.id,3);if(dispatch.referrals.length<3){$("#noMatchReason").textContent=dispatch.reason||"لا تتوفر ورش مناسبة في المدينة حاليًا.";showScreen("noMatch");return;}state.referralIds=dispatch.referrals.map((row)=>row.id);renderResult(dispatch.request,dispatch.referrals);}catch(error){WA.UI.showToast(error.message,"error");showScreen("consent");}}); };
  const renderResult = (request,referrals) => { const trackPath=`track.html?token=${encodeURIComponent(request.publicToken)}`;const link=new URL(trackPath,location.href).href;$("#resultHeader").innerHTML=`<strong>تم إنشاء طلبك بنجاح</strong><p>رقم الطلب: ${WA.UI.escapeHtml(request.humanId)}</p>`;$("#dispatchSummary").innerHTML=`<span>جاري إشعار ورش مناسبة بطلبك</span><span>بيانات التواصل محفوظة حتى استقبال الطلب</span><span>${WA.UI.escapeHtml(request.region)} — ${WA.UI.escapeHtml(request.city)}</span>`;$("#privateLink").value=link;$("#openTrackLink").href=trackPath;$("#copyPrivateLink").onclick=()=>WA.UI.copyText(link);WA.Lifecycle.clearDraft();showScreen("result"); };
  const detectLocation = () => { const button=$("#detectLocation");if(!navigator.geolocation){$("#locationStatus").textContent="المتصفح لا يدعم تحديد الموقع. اختر المنطقة والمدينة يدويًا.";return;}WA.UI.setButtonBusy(button,true,"جاري تحديد الموقع...");navigator.geolocation.getCurrentPosition((position)=>{const nearest=WA.Automotive.findNearestCity(position.coords.latitude,position.coords.longitude);state.locationCoordinates={lat:position.coords.latitude,lng:position.coords.longitude,accuracy:position.coords.accuracy,capturedAt:WA.Storage.now()};state.locationMethod="browser_geolocation";if(nearest){state.region=nearest.region;state.city=nearest.city;state.nearestCityDistanceKm=nearest.distanceKm;$("#region").value=nearest.region;updateCities(nearest.city);$("#city").value=nearest.city;$("#locationStatus").textContent=`تم اختيار ${nearest.city} في ${nearest.region} تلقائيًا. يمكنك تعديله يدويًا.`;if(!$("#preciseLocation").value)$("#preciseLocation").value=`موقع تقريبي قرب ${nearest.city}`;}else $("#locationStatus").textContent="تم التقاط الإحداثيات، وتعذر تحديد مدينة مدعومة. اخترها يدويًا.";WA.UI.setButtonBusy(button,false);sync();saveDraft();},(error)=>{$("#locationStatus").textContent=error.code===1?"لم تمنح إذن الموقع. اختر المنطقة والمدينة يدويًا.":"تعذر تحديد الموقع الآن. اختر المنطقة والمدينة يدويًا.";WA.UI.setButtonBusy(button,false);},{enableHighAccuracy:true,timeout:12000,maximumAge:60000}); };
  const initData = () => { WA.UI.initSelect($("#make"),WA.Automotive.makes,"اختر الشركة");WA.UI.initSelect($("#year"),WA.Automotive.buildYears(),"اختر السنة");WA.UI.initSelect($("#mileage"),WA.Automotive.mileages,"اختياري");WA.UI.initSelect($("#region"),WA.Automotive.regionNames,"اختر المنطقة"); };
  const bind = () => {
    $$('[data-back]').forEach((button)=>button.addEventListener("click",()=>showScreen(button.dataset.back)));
    $("#make").addEventListener("change",()=>{updateModels();updateOtherFields();sync();saveDraft();});$("#model").addEventListener("change",()=>{updateOtherFields();sync();saveDraft();});
    $("#region").addEventListener("change",()=>{state.locationMethod="manual";updateCities();sync();saveDraft();});$("#city").addEventListener("change",()=>{state.locationMethod="manual";sync();saveDraft();});$("#detectLocation").addEventListener("click",detectLocation);
    $("#phone").addEventListener("input",()=>{const phone=normalizePhone();if(state.otp.challenge?.phone&&state.otp.challenge.phone!==phone)resetOtp("تم تغيير الرقم؛ سيُنشأ رمز جديد عند اكتماله.");if(/^05\d{8}$/.test(phone)&&!state.otp.challenge)createOtp();sync();saveDraft();});
    $("#otpInput").addEventListener("input",()=>{state.otp.input=WA.OTP.digits($("#otpInput").value);state.otp.verified=false;state.customer.phoneVerifiedAt="";$("#otpStatus").textContent="اضغط تحقق من الرمز.";saveDraft();});
    $("#verifyOtp").addEventListener("click",verifyOtp);$("#resendOtp").addEventListener("click",()=>{createOtp();WA.UI.showToast("تم إنشاء رمز جديد","success");});
    $("#customerForm").addEventListener("submit",(event)=>{event.preventDefault();sync();if(!validateCustomer())return;showScreen("vehicle");});
    $("#vehicleForm").addEventListener("submit",(event)=>{event.preventDefault();sync();if(!validateVehicle())return;showScreen("path");});
    $("#pathForm").addEventListener("submit",(event)=>{event.preventDefault();sync();if(!validateProblem())return;runAnalysis();});
    $("#questionNext").addEventListener("click",()=>{if(!state.answers[state.questionIndex])return;state.questionIndex+=1;renderQuestion();});$("#questionBack").addEventListener("click",()=>{if(state.questionIndex>0){state.questionIndex-=1;renderQuestion();}else showScreen("path");});$("#guidanceNext").addEventListener("click",renderReview);
    $("#consentForm").addEventListener("submit",(event)=>{event.preventDefault();sync();if(!state.consents.dataSharingAccepted||!state.consents.privacyAccepted||!state.consents.termsAccepted){WA.UI.showToast("يلزم قبول المشاركة والخصوصية والشروط لإرسال الطلب","error");return;}createAndDispatch();});
    $$("input, select, textarea").forEach((field)=>field.addEventListener("change",()=>{sync();saveDraft();}));
  };
  const init = () => { initData();const params=new URLSearchParams(location.search);if(params.get("fresh")==="1")WA.Lifecycle.clearDraft();const draft=params.get("fresh")==="1"?null:WA.Lifecycle.loadDraft();if(draft)state={...emptyState(),...draft,customer:{...emptyState().customer,...draft.customer},otp:{...emptyState().otp,...draft.otp},vehicle:{...emptyState().vehicle,...draft.vehicle},consents:{...emptyState().consents,...draft.consents}};hydrate();bind();const allowed=Object.keys(progress);const start=allowed.includes(state.screen)&&!["dispatching","result","noMatch"].includes(state.screen)?state.screen:"customer";showScreen(start,false);if(start==="questions"&&state.questions.length)renderQuestion();if(start==="guidance"&&state.ai)renderGuidance();if(start==="consent"&&state.ai)renderReview(); };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();

```

## NEW: `assets/google-places.js`

```javascript
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

```

## MODIFIED: `assets/join.js`

```javascript
(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  let step = 1;
  let selectedSpecialties = [];
  let selectedMakes = [];
  const progress = { 1: [25, "بيانات الورشة"], 2: [50, "ساعات الاستقبال"], 3: [75, "التغطية والتخصص"], 4: [100, "المراجعة"] };

  const selectedValues = (select) => Array.from(select.selectedOptions || []).map((option) => option.value).filter(Boolean);
  const checkedValues = (selector) => $$(selector).filter((input) => input.checked).map((input) => input.value);

  const showStep = (next) => {
    step = next;
    $$('[data-join-step]').forEach((section) => section.classList.toggle("active", Number(section.dataset.joinStep) === next));
    const [percent, label] = progress[next] || [100, "اكتمل"];
    $("#joinProgressLabel").textContent = label;
    $("#joinProgressPercent").textContent = `${percent}%`;
    $("#joinProgressBar").style.width = `${percent}%`;
    $(".progress-track").setAttribute("aria-valuenow", String(percent));
    const active = $(`[data-join-step="${next}"]`);
    active?.focus({ preventScroll: true });
    active?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateCities = () => {
    const region = $("#joinRegion").value;
    const city = $("#joinCity");
    if (!region) {
      city.disabled = true;
      city.innerHTML = '<option value="">اختر المنطقة أولًا</option>';
      return;
    }
    city.disabled = false;
    WA.UI.initSelect(city, WA.Automotive.getCities(region), "اختر المدينة");
    updateCoverage();
  };

  const updateCoverage = () => {
    const region = $("#joinRegion").value;
    const basicCity = $("#joinCity").value;
    const coverage = $("#coverageCities");
    const previous = new Set(selectedValues(coverage));
    coverage.innerHTML = "";
    WA.Automotive.getCities(region).forEach((city) => {
      const option = new Option(city, city);
      option.selected = previous.has(city) || city === basicCity;
      coverage.add(option);
    });
  };

  const timeOptions = (selected = "") => WA.Automotive.timeOptions()
    .map((value) => `<option value="${value}"${value === selected ? " selected" : ""}>${value}</option>`).join("");

  const renderSchedule = () => {
    $("#dailyScheduleEditor").innerHTML = WA.Automotive.weekdays.map((day, index) => {
      const open = day !== "الجمعة";
      return `<article class="day-schedule" data-day="${WA.UI.escapeHtml(day)}">
        <div class="day-schedule-head">
          <strong>${WA.UI.escapeHtml(day)}</strong>
          <label class="switch-line"><input class="day-open" type="checkbox" ${open ? "checked" : ""}><span>مفتوح</span></label>
          <label class="switch-line"><input class="day-all-day" type="checkbox"><span>24 ساعة</span></label>
        </div>
        <div class="day-periods" ${open ? "" : "hidden"}>
          <div class="period-row period-one"><strong>الفترة الأولى</strong><label>من<select class="period1-from">${timeOptions(index === 5 ? "" : "08:00")}</select></label><label>إلى<select class="period1-to">${timeOptions(index === 5 ? "" : "12:00")}</select></label></div>
          <label class="checkbox-line second-period-toggle"><input class="has-second-period" type="checkbox" ${open ? "checked" : ""}><span>إضافة فترة ثانية</span></label>
          <div class="period-row period-two" ${open ? "" : "hidden"}><strong>الفترة الثانية</strong><label>من<select class="period2-from">${timeOptions(index === 5 ? "" : "16:00")}</select></label><label>إلى<select class="period2-to">${timeOptions(index === 5 ? "" : "22:00")}</select></label></div>
        </div>
      </article>`;
    }).join("");

    $$(".day-schedule").forEach((row) => {
      const open = $(".day-open", row);
      const allDay = $(".day-all-day", row);
      const periods = $(".day-periods", row);
      const second = $(".has-second-period", row);
      const secondRow = $(".period-two", row);
      open.addEventListener("change", () => {
        periods.hidden = !open.checked;
        allDay.disabled = !open.checked;
      });
      allDay.addEventListener("change", () => { periods.hidden = !open.checked || allDay.checked; });
      second.addEventListener("change", () => { secondRow.hidden = !second.checked; });
    });
  };

  const schedule = () => $$(".day-schedule").map((row) => {
    const open = $(".day-open", row).checked;
    const allDay = open && $(".day-all-day", row).checked;
    const hasSecond = open && !allDay && $(".has-second-period", row).checked;
    return {
      day: row.dataset.day,
      open,
      allDay,
      period1: open && !allDay ? { from: $(".period1-from", row).value, to: $(".period1-to", row).value } : null,
      period2: hasSecond ? { from: $(".period2-from", row).value, to: $(".period2-to", row).value } : null
    };
  });

  const copySunday = () => {
    const source = $$('.day-schedule')[0];
    if (!source) return;
    const values = {
      open: $(".day-open", source).checked,
      allDay: $(".day-all-day", source).checked,
      hasSecond: $(".has-second-period", source).checked,
      p1f: $(".period1-from", source).value,
      p1t: $(".period1-to", source).value,
      p2f: $(".period2-from", source).value,
      p2t: $(".period2-to", source).value
    };
    $$('.day-schedule').slice(1).forEach((row) => {
      $(".day-open", row).checked = values.open;
      $(".day-all-day", row).checked = values.allDay;
      $(".has-second-period", row).checked = values.hasSecond;
      $(".period1-from", row).value = values.p1f;
      $(".period1-to", row).value = values.p1t;
      $(".period2-from", row).value = values.p2f;
      $(".period2-to", row).value = values.p2t;
      $(".day-periods", row).hidden = !values.open || values.allDay;
      $(".period-two", row).hidden = !values.hasSecond;
    });
    WA.UI.showToast("تم نسخ ساعات الأحد", "success");
  };

  const renderPriority = ({ availableId, selectedId, source, selected, setSelected }) => {
    const available = source.filter((item) => !selected.includes(item));
    $(`#${availableId}`).innerHTML = available.map((item) => `<div class="selector-item"><span>${WA.UI.escapeHtml(item)}</span><button class="btn btn-light btn-sm" type="button" data-add-item="${WA.UI.escapeHtml(item)}">إضافة</button></div>`).join("") || '<p class="muted">أضفت جميع الخيارات.</p>';
    $(`#${selectedId}`).innerHTML = selected.map((item, index) => `<li class="selector-item"><span>${WA.UI.escapeHtml(item)}</span><span class="priority-actions"><button class="btn btn-ghost btn-sm" type="button" data-up="${index}" aria-label="رفع الأولوية">↑</button><button class="btn btn-ghost btn-sm" type="button" data-down="${index}" aria-label="خفض الأولوية">↓</button><button class="btn btn-ghost btn-sm" type="button" data-remove="${index}">إزالة</button></span></li>`).join("") || '<li class="muted">لم تختر شيئًا بعد.</li>';
    $$(`#${availableId} [data-add-item]`).forEach((button) => button.addEventListener("click", () => setSelected([...selected, button.dataset.addItem])));
    $$(`#${selectedId} [data-remove]`).forEach((button) => button.addEventListener("click", () => setSelected(selected.filter((_, index) => index !== Number(button.dataset.remove)))));
    $$(`#${selectedId} [data-up]`).forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.up); if (index <= 0) return; const copy = [...selected]; [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]]; setSelected(copy);
    }));
    $$(`#${selectedId} [data-down]`).forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.down); if (index >= selected.length - 1) return; const copy = [...selected]; [copy[index + 1], copy[index]] = [copy[index], copy[index + 1]]; setSelected(copy);
    }));
  };

  const setSpecialties = (items) => {
    selectedSpecialties = items;
    renderPriority({ availableId: "availableSpecialties", selectedId: "selectedSpecialties", source: WA.Automotive.specialties.filter((item) => !/قطع غيار|نقل وسحب|صيانة دورية/.test(item)), selected: selectedSpecialties, setSelected: setSpecialties });
  };
  const setMakes = (items) => {
    selectedMakes = items;
    renderPriority({ availableId: "availableMakes", selectedId: "selectedMakes", source: WA.Automotive.makes.filter((item) => item !== "أخرى"), selected: selectedMakes, setSelected: setMakes });
  };

  const validateStep = (number) => {
    if (number === 1) {
      const ids = ["businessName", "tradeName", "activityDescription", "acceptanceContactName", "joinRegion", "joinCity", "address", "googleMapsUrl", "googlePlaceId", "joinWhatsapp", "commercialRegistration", "registeredName"];
      let valid = ids.every((id) => Boolean(String($(`#${id}`).value || "").trim()));
      valid = valid && /^05\d{8}$/.test(WA.Storage.sanitizePhone($("#joinWhatsapp").value));
      try { new URL($("#googleMapsUrl").value); } catch (_) { valid = false; }
      valid = valid && WA.GooglePlaces.validPlaceId($("#googlePlaceId").value);
      if (!valid) WA.UI.showToast("أكمل بيانات الورشة وتحقق من رقم واتساب ورابط الخرائط وGoogle Place ID", "error");
      return valid;
    }
    if (number === 2) {
      const rows = schedule();
      let valid = rows.some((row) => row.open);
      rows.forEach((row) => {
        if (!row.open || row.allDay) return;
        valid = valid && Boolean(row.period1?.from && row.period1?.to && row.period1.from < row.period1.to);
        if (row.period2) valid = valid && Boolean(row.period2.from && row.period2.to && row.period2.from < row.period2.to);
      });
      if (!valid) WA.UI.showToast("افتح يومًا واحدًا على الأقل وتحقق من أوقات الفترات", "error");
      return valid;
    }
    if (number === 3) {
      const valid = selectedValues($("#coverageCities")).length > 0 && selectedSpecialties.length > 0 && selectedMakes.length > 0 && checkedValues('#fuelTypesJoin input[type="checkbox"]').length > 0;
      if (!valid) WA.UI.showToast("أكمل مدن التغطية والتخصصات والسيارات وأنواع الوقود", "error");
      return valid;
    }
    return true;
  };

  const review = () => {
    const openDays = schedule().filter((row) => row.open).map((row) => row.day).join("، ");
    const items = [
      ["الورشة", $("#tradeName").value],
      ["مسؤول القبول", $("#acceptanceContactName").value],
      ["الموقع", `${$("#joinRegion").value} — ${$("#joinCity").value}`],
      ["Google Place ID", $("#googlePlaceId").value],
      ["أيام الاستقبال", openDays],
      ["التخصص الرئيسي", selectedSpecialties[0] || "—"],
      ["بقية التخصصات", selectedSpecialties.slice(1).join("، ") || "—"],
      ["مدن التغطية", selectedValues($("#coverageCities")).join("، ")],
      ["حالة الاستقبال", document.querySelector('input[name="intakeCapacity"]:checked')?.value === "available" ? "نستقبل طلبات" : document.querySelector('input[name="intakeCapacity"]:checked')?.value === "limited" ? "استقبال محدود" : "متوقف مؤقتًا"]
    ];
    $("#joinReview").innerHTML = items.map(([label, value]) => `<div class="guidance-item"><span>${WA.UI.escapeHtml(label)}</span><strong>${WA.UI.escapeHtml(value)}</strong></div>`).join("");
  };

  const showSuccess = (application) => {
    $("#joinApplicationNumber").textContent = application.applicationNumber;
    $("#joinStatusLink").href = `join-status.html?token=${encodeURIComponent(application.publicToken)}`;
    $$('[data-join-step]').forEach((section) => section.classList.remove("active"));
    $("#joinSuccess").classList.add("active");
    $("#joinSuccess").focus();
  };

  const submit = (event) => {
    event.preventDefault();
    const form = $("#joinForm");
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (!["agreementAccepted", "feesAccepted", "ratingsAccepted", "privacyTrustAccepted", "honestyPledge"].every((id) => $(`#${id}`).checked)) {
      WA.UI.showToast("يلزم قبول جميع الموافقات والتعهد", "error"); return;
    }
    const phone = WA.Storage.sanitizePhone($("#joinWhatsapp").value);
    const businessName = WA.Storage.sanitizeText($("#businessName").value, 100);
    const duplicate = WA.Storage.get("wa_join_applications").find((row) => row.phone === phone && row.businessName === businessName && !["rejected", "cancelled"].includes(row.status));
    if (duplicate) { WA.UI.showToast(`يوجد طلب سابق برقم ${duplicate.applicationNumber}`, "info"); showSuccess(duplicate); return; }
    const application = WA.Storage.upsert("wa_join_applications", {
      id: WA.Storage.createId("APP"),
      applicationNumber: `JOIN-${Math.floor(10000 + Math.random() * 90000)}`,
      publicToken: WA.Storage.randomToken("join"),
      partnerType: "workshop",
      stage: "stage_one",
      businessName,
      tradeName: WA.Storage.sanitizeText($("#tradeName").value, 100),
      description: WA.Storage.sanitizeText($("#activityDescription").value, 500),
      acceptanceContactName: WA.Storage.sanitizeText($("#acceptanceContactName").value, 80),
      region: $("#joinRegion").value,
      city: $("#joinCity").value,
      address: WA.Storage.sanitizeText($("#address").value, 250),
      googleMapsUrl: $("#googleMapsUrl").value,
      googlePlaceId: WA.Storage.sanitizeText($("#googlePlaceId").value, 512),
      googlePlaceLinkStatus: "pending_verification",
      phone,
      acceptanceWhatsapp: phone,
      secondaryPhone: WA.Storage.sanitizePhone($("#secondaryPhone").value),
      documents: {
        commercialRegistration: WA.Storage.sanitizeText($("#commercialRegistration").value, 40),
        registeredName: WA.Storage.sanitizeText($("#registeredName").value, 120),
        commercialExpiry: $("#commercialExpiry").value
      },
      schedule: schedule(),
      coverageCities: selectedValues($("#coverageCities")),
      specialtiesPriority: selectedSpecialties,
      makesPriority: selectedMakes,
      fuelTypes: checkedValues('#fuelTypesJoin input[type="checkbox"]'),
      intakeCapacity: document.querySelector('input[name="intakeCapacity"]:checked')?.value || "available",
      agreements: {
        partnership: true,
        threeWorkshopDispatch: true,
        firstAcceptanceClosesBatch: true,
        acceptedLeadFees: true,
        feeRange: "1-5",
        ratingsAndObjections: true,
        privacyAndTrust: true,
        honestyPledge: true
      },
      status: "submitted",
      statusLabel: "تم الاستلام — قيد المراجعة",
      submittedAt: WA.Storage.now()
    });
    showSuccess(application);
  };

  const init = () => {
    WA.UI.initSelect($("#joinRegion"), WA.Automotive.regionNames, "اختر المنطقة");
    renderSchedule();
    $("#fuelTypesJoin").innerHTML = WA.Automotive.fuels.map((fuel, index) => `<label class="checkbox-line"><input type="checkbox" value="${WA.UI.escapeHtml(fuel)}" ${index === 0 ? "checked" : ""}><span>${WA.UI.escapeHtml(fuel)}</span></label>`).join("");
    setSpecialties([]); setMakes([]);
    $("#joinRegion").addEventListener("change", updateCities);
    $("#joinCity").addEventListener("change", updateCoverage);
    $("#copySundaySchedule").addEventListener("click", copySunday);
    $("#openAllDays").addEventListener("click", () => $$(".day-open").forEach((input) => { input.checked = true; input.dispatchEvent(new Event("change")); }));
    $$('[data-join-next]').forEach((button) => button.addEventListener("click", () => {
      if (!validateStep(step)) return;
      const next = Number(button.dataset.joinNext);
      if (next === 4) review();
      showStep(next);
    }));
    $$('[data-join-back]').forEach((button) => button.addEventListener("click", () => showStep(Number(button.dataset.joinBack))));
    $("#joinForm").addEventListener("submit", submit);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();

```

## MODIFIED: `assets/lifecycle.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const now = () => WA.Storage.now();
  const plusHours = (dateValue, hours) => new Date(new Date(dateValue).getTime() + Number(hours) * 3600000).toISOString();
  const touchRequest = (request, patch = {}) => WA.Storage.upsert("wa_requests", { ...request, ...patch, lastActivityAt: now() });
  const findCustomer = (phone) => WA.Storage.get("wa_customers").find((row) => row.phone === WA.Storage.sanitizePhone(phone)) || null;
  const findRequestByToken = (token) => WA.Storage.get("wa_requests").find((row) => row.publicToken === token) || null;
  const findRequestByHumanId = (humanId) => WA.Storage.get("wa_requests").find((row) => row.humanId === String(humanId || "").trim().toUpperCase()) || null;
  const findReferralByAcceptanceToken = (token) => WA.Storage.get("wa_referrals").find((row) => row.acceptanceToken === token) || null;
  const stageOneFee = (category) => WA.Config.referralFeeCategories[category] || WA.Config.referralFeeCategories.simple;
  const feeForBand = (band) => WA.Config.costBands[band]?.fee ?? null;
  const bandLabel = (band) => WA.Config.costBands[band]?.label || band || "غير محددة";

  const saveCustomerAndVehicle = ({ customer, vehicle, consents = {} }) => WA.Storage.transaction(() => {
    const phone = WA.Storage.sanitizePhone(customer.phone);
    if (!/^05\d{8}$/.test(phone)) throw new Error("رقم الجوال غير صالح");
    if (customer.phoneVerified !== true || !customer.phoneVerifiedAt) throw new Error("يلزم التحقق من رقم الجوال قبل إنشاء الطلب");
    const existingCustomer = findCustomer(phone);
    const customerRecord = WA.Storage.upsert("wa_customers", {
      id: existingCustomer?.id || WA.Storage.createId("CUS"),
      firstName: WA.Storage.sanitizeText(customer.firstName, 40),
      phone,
      phoneVerified: true,
      phoneVerifiedAt: customer.phoneVerifiedAt,
      phoneVerificationMode: WA.Storage.sanitizeText(customer.phoneVerificationMode || "demo_otp", 40),
      operationalMessages: true,
      marketingMessages: Boolean(consents.marketingMessages)
    });

    WA.Storage.upsert("wa_consents", {
      id: WA.Storage.createId("CNS"),
      customerId: customerRecord.id,
      privacyAccepted: Boolean(consents.privacyAccepted),
      termsAccepted: Boolean(consents.termsAccepted),
      dataSharingAccepted: Boolean(consents.dataSharingAccepted),
      operationalMessages: true,
      marketingMessages: Boolean(consents.marketingMessages),
      source: "stage_one_customer_flow",
      acceptedAt: now()
    });

    const make = WA.Storage.sanitizeText(vehicle.make, 60);
    const model = WA.Storage.sanitizeText(vehicle.model, 60);
    const year = WA.Storage.sanitizeText(vehicle.year, 4);
    const existingVehicle = WA.Storage.get("wa_vehicles").find((row) => row.customerId === customerRecord.id
      && row.make === make && row.model === model && row.year === year);
    const vehicleRecord = WA.Storage.upsert("wa_vehicles", {
      id: existingVehicle?.id || WA.Storage.createId("VEH"),
      customerId: customerRecord.id,
      make,
      makeOther: WA.Storage.sanitizeText(vehicle.makeOther, 60),
      model,
      modelOther: WA.Storage.sanitizeText(vehicle.modelOther, 60),
      year,
      mileage: WA.Storage.sanitizeText(vehicle.mileage, 60),
      fuelType: WA.Storage.sanitizeText(vehicle.fuelType, 30),
      vin: WA.Storage.sanitizeText(vehicle.vin, 40).toUpperCase()
    });
    return { customer: customerRecord, vehicle: vehicleRecord };
  });

  const createRequest = (payload) => WA.Storage.transaction(() => {
    if ((payload.serviceType || "problem") !== "problem") throw new Error("الخدمة المتاحة حاليًا هي مسار مشكلة السيارة فقط");
    if (!payload.consents?.dataSharingAccepted) throw new Error("يجب الموافقة على مشاركة ملخص الطلب مع الورش المناسبة");
    const saved = saveCustomerAndVehicle(payload);
    const current = payload.requestId ? WA.Storage.findById("wa_requests", payload.requestId) : null;
    const category = payload.ai?.feeCategory || "simple";
    const pricing = stageOneFee(category);
    const request = WA.Storage.upsert("wa_requests", {
      id: current?.id || WA.Storage.createId("REQ"),
      humanId: current?.humanId || `WA-${String(Date.now()).slice(-6)}`,
      publicToken: current?.publicToken || WA.Storage.randomToken("req"),
      customerId: saved.customer.id,
      vehicleId: saved.vehicle.id,
      serviceType: "problem",
      stage: "stage_one",
      region: WA.Storage.sanitizeText(payload.region, 80),
      city: WA.Storage.sanitizeText(payload.city, 80),
      preciseLocation: WA.Storage.sanitizeText(payload.preciseLocation, 400),
      locationCoordinates: payload.locationCoordinates || null,
      locationMethod: WA.Storage.sanitizeText(payload.locationMethod || "manual", 40),
      nearestCityDistanceKm: Number.isFinite(Number(payload.nearestCityDistanceKm)) ? Number(payload.nearestCityDistanceKm) : null,
      problem: WA.Storage.sanitizeText(payload.problem, 1200),
      safeToDriveAnswer: WA.Storage.sanitizeText(payload.safeToDriveAnswer, 30),
      ai: payload.ai || null,
      vehicleSnapshot: saved.vehicle,
      referralFeeCategory: category,
      referralFeeLabel: pricing.label,
      referralFeeAmount: pricing.amount,
      status: current?.status || "ready_for_dispatch",
      activeReferralId: current?.activeReferralId || "",
      acceptedReferralId: current?.acceptedReferralId || "",
      dispatchBatchNumber: Number(current?.dispatchBatchNumber || 0),
      alternativeDeadline: current?.alternativeDeadline || "",
      lastActivityAt: now(),
      administrativeClosedAt: current?.administrativeClosedAt || ""
    });
    return { request, ...saved };
  });

  const requestReferrals = (requestId) => WA.Storage.get("wa_referrals")
    .filter((row) => row.requestId === requestId)
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

  const createInvitation = ({ request, partner, batchNumber, order, matchReason }) => WA.Storage.upsert("wa_referrals", {
    id: WA.Storage.createId("REF"),
    requestId: request.id,
    partnerId: partner.id,
    serviceType: "problem",
    order,
    batchNumber,
    acceptanceToken: WA.Storage.randomToken("accept"),
    status: "sent",
    matchReason: WA.Storage.sanitizeText(matchReason, 800),
    feeCategory: request.referralFeeCategory,
    feeAmount: Number(request.referralFeeAmount || 1),
    sentAt: now(),
    expiresAt: plusHours(now(), WA.Config.workshopResponseMinutes / 60),
    viewedAt: "",
    acceptedAt: "",
    rejectedAt: "",
    closedAt: "",
    attemptedAfterCloseAt: "",
    customerDataRevealedAt: "",
    resultStatus: "",
    alternativeReason: "",
    feeId: "",
    objectionStatus: ""
  });

  const dispatchToPartners = (requestId, limit = WA.Config.dispatchBatchSize) => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) throw new Error("الطلب غير موجود");
    if (request.acceptedReferralId) throw new Error("لا يمكن إرسال دفعة جديدة قبل إنهاء نتيجة الورشة المقبولة");
    const previous = requestReferrals(requestId);
    const excludedPartnerIds = [...new Set(previous.map((row) => row.partnerId))];
    const acceptedCount = previous.filter((row) => row.acceptedAt).length;
    if (acceptedCount >= WA.Config.maxAcceptedReferralsPerRequest) throw new Error("وصل الطلب إلى الحد الأقصى من الإحالات المقبولة");
    const batchNumber = Number(request.dispatchBatchNumber || 0) + 1;
    const matched = WA.Matching.matchBatch({ request, excludedPartnerIds, limit });
    if (matched.partners.length < Number(limit || WA.Config.dispatchBatchSize)) {
      const reason = matched.partners.length
        ? `تتوفر ${matched.partners.length} ورش مطابقة فقط، بينما يتطلب إرسال الطلب توفر ثلاث ورش مناسبة.`
        : matched.reason;
      touchRequest(request, { status: "no_acceptance", noMatchReason: reason, dispatchBatchNumber: batchNumber });
      return { request: WA.Storage.findById("wa_requests", requestId), referrals: [], reason };
    }
    const startOrder = previous.length;
    const referrals = matched.partners.map((entry, index) => createInvitation({
      request,
      partner: entry.partner,
      batchNumber,
      order: startOrder + index + 1,
      matchReason: entry.reason
    }));
    const updated = touchRequest(request, {
      status: "awaiting_workshop_acceptance",
      dispatchBatchNumber: batchNumber,
      activeReferralId: "",
      acceptedReferralId: "",
      dispatchedAt: now(),
      noMatchReason: ""
    });
    return { request: updated, referrals, reason: matched.reason };
  });

  const createReferral = (requestId, partnerId, matchReason = "") => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    const partner = WA.Storage.findById("wa_partners", partnerId);
    if (!request || !partner) throw new Error("تعذر إنشاء الإحالة بسبب بيانات ناقصة");
    const previous = requestReferrals(requestId);
    if (previous.some((row) => row.partnerId === partnerId)) throw new Error("لا يمكن إرسال الطلب إلى الورشة نفسها مرتين");
    const batchNumber = Number(request.dispatchBatchNumber || 0) || 1;
    return createInvitation({ request, partner, batchNumber, order: previous.length + 1, matchReason });
  });

  const markReferralViewed = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    if (referral.status !== "sent") return referral;
    return WA.Storage.upsert("wa_referrals", { ...referral, status: "viewed", viewedAt: referral.viewedAt || now() });
  };

  const getWorkshopAcceptanceView = (token) => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) return null;
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    const partner = WA.Storage.findById("wa_partners", referral.partnerId);
    if (!request || !partner) return null;
    markReferralViewed(referral.id);
    const refreshed = WA.Storage.findById("wa_referrals", referral.id);
    const acceptedByThisWorkshop = request.acceptedReferralId === referral.id;
    const closedByAnother = Boolean(request.acceptedReferralId && request.acceptedReferralId !== referral.id);
    const customer = acceptedByThisWorkshop ? WA.Storage.findById("wa_customers", request.customerId) : null;
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    return { referral: refreshed, request, partner, vehicle, customer, acceptedByThisWorkshop, closedByAnother };
  };

  const ensureAcceptanceFee = (referralId) => WA.Storage.transaction(() => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral?.acceptedAt) return null;
    const existing = WA.Storage.get("wa_fees").find((row) => row.referralId === referralId && row.type === "stage_one_accepted_lead");
    if (existing) return existing;
    const amount = Number(referral.feeAmount || 1);
    const fee = WA.Storage.upsert("wa_fees", {
      id: WA.Storage.createId("FEE"),
      referralId,
      requestId: referral.requestId,
      partnerId: referral.partnerId,
      type: "stage_one_accepted_lead",
      feeCategory: referral.feeCategory || "simple",
      amount,
      event: "قبول الطلب وكشف بيانات العميل للورشة الأولى",
      status: "unbilled",
      eligibleAt: referral.acceptedAt,
      invoiceIds: [],
      paidAt: ""
    });
    WA.Storage.upsert("wa_referrals", { ...referral, feeId: fee.id });
    return fee;
  });

  const acceptReferral = (token) => WA.Storage.transaction(() => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) throw new Error("رابط القبول غير صالح");
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (!request) throw new Error("الطلب غير موجود");

    if (request.acceptedReferralId && request.acceptedReferralId !== referral.id) {
      const updatedLate = WA.Storage.upsert("wa_referrals", {
        ...referral,
        status: "late_acceptance_attempt",
        attemptedAfterCloseAt: now()
      });
      return { accepted: false, closed: true, referral: updatedLate, request };
    }
    if (request.acceptedReferralId === referral.id) {
      return { accepted: true, alreadyAccepted: true, referral, request, fee: ensureAcceptanceFee(referral.id) };
    }
    if (["rejected", "expired", "closed_prior_acceptance"].includes(referral.status)) {
      return { accepted: false, closed: true, referral, request };
    }
    if (referral.expiresAt && new Date(referral.expiresAt).getTime() < Date.now()) {
      const expired = WA.Storage.upsert("wa_referrals", { ...referral, status: "expired", expiredAt: now() });
      return { accepted: false, expired: true, referral: expired, request };
    }

    const acceptedAt = now();
    const acceptedReferral = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: "accepted",
      acceptedAt,
      customerDataRevealedAt: acceptedAt
    });
    requestReferrals(request.id)
      .filter((row) => row.batchNumber === referral.batchNumber && row.id !== referral.id && !["rejected", "expired"].includes(row.status))
      .forEach((row) => WA.Storage.upsert("wa_referrals", { ...row, status: "closed_prior_acceptance", closedAt: acceptedAt }));
    const updatedRequest = touchRequest(request, {
      status: "accepted",
      activeReferralId: acceptedReferral.id,
      acceptedReferralId: acceptedReferral.id,
      acceptedAt,
      alternativeDeadline: plusHours(acceptedAt, WA.Config.alternativeWindowHours)
    });
    const fee = ensureAcceptanceFee(acceptedReferral.id);
    return { accepted: true, referral: WA.Storage.findById("wa_referrals", acceptedReferral.id), request: updatedRequest, fee };
  });

  const rejectReferral = (token, reason = "") => WA.Storage.transaction(() => {
    const referral = findReferralByAcceptanceToken(token);
    if (!referral) throw new Error("رابط الطلب غير صالح");
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (request?.acceptedReferralId) return { rejected: false, closed: true, referral, request };
    const updated = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: "rejected",
      rejectionReason: WA.Storage.sanitizeText(reason, 300),
      rejectedAt: now()
    });
    const currentBatch = requestReferrals(referral.requestId).filter((row) => row.batchNumber === referral.batchNumber);
    if (currentBatch.every((row) => ["rejected", "expired"].includes(row.id === updated.id ? updated.status : row.status))) {
      touchRequest(request, { status: "no_acceptance", noAcceptanceAt: now() });
    }
    return { rejected: true, referral: updated, request: WA.Storage.findById("wa_requests", referral.requestId) };
  });

  const alternativeEligibility = (request) => {
    if (!request?.acceptedReferralId || !request.alternativeDeadline) return { allowed: false, reason: "لا توجد ورشة مقبولة حاليًا." };
    const acceptedCount = requestReferrals(request.id).filter((row) => row.acceptedAt).length;
    if (acceptedCount >= WA.Config.maxAcceptedReferralsPerRequest) return { allowed: false, reason: "وصل الطلب إلى الحد الأقصى من الإحالات المقبولة." };
    if (new Date(request.alternativeDeadline).getTime() < Date.now()) return { allowed: false, reason: "انتهت مهلة طلب الورشة البديلة البالغة 24 ساعة. يمكنك إنشاء طلب جديد." };
    return { allowed: true, deadline: request.alternativeDeadline };
  };

  const requestAlternative = (requestId, reason = "") => WA.Storage.transaction(() => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) throw new Error("الطلب غير موجود");
    const eligibility = alternativeEligibility(request);
    if (!eligibility.allowed) throw new Error(eligibility.reason);
    const active = WA.Storage.findById("wa_referrals", request.acceptedReferralId);
    if (active) WA.Storage.upsert("wa_referrals", {
      ...active,
      status: "alternative_requested",
      resultStatus: "not_agreed",
      alternativeReason: WA.Storage.sanitizeText(reason, 300),
      alternativeRequestedAt: now()
    });
    touchRequest(request, {
      status: "alternative_requested",
      acceptedReferralId: "",
      activeReferralId: "",
      acceptedAt: "",
      alternativeDeadline: ""
    });
    return dispatchToPartners(request.id, WA.Config.dispatchBatchSize);
  });

  const updateReferralOutcome = (referralId, outcome, source = "customer") => WA.Storage.transaction(() => {
    const allowed = ["contacted", "appointment_set", "arrived", "service_received", "service_not_received", "not_agreed"];
    if (!allowed.includes(outcome)) throw new Error("حالة المتابعة غير صالحة");
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral?.acceptedAt) throw new Error("لا يمكن تحديث النتيجة قبل قبول الورشة");
    const updated = WA.Storage.upsert("wa_referrals", {
      ...referral,
      status: outcome,
      resultStatus: outcome,
      resultSource: source,
      resultUpdatedAt: now(),
      serviceReceivedAt: outcome === "service_received" ? (referral.serviceReceivedAt || now()) : referral.serviceReceivedAt
    });
    const request = WA.Storage.findById("wa_requests", referral.requestId);
    if (request) touchRequest(request, { status: outcome });
    return updated;
  });

  const createRating = (payload) => WA.Storage.transaction(() => {
    const referral = WA.Storage.findById("wa_referrals", payload.referralId);
    const request = WA.Storage.findById("wa_requests", payload.requestId);
    if (!referral || !request || referral.requestId !== request.id || !referral.acceptedAt) throw new Error("لا يمكن التقييم دون إحالة مقبولة");
    const existing = WA.Storage.get("wa_ratings").find((row) => row.referralId === referral.id);
    if (existing) return existing;
    const overall = Number(payload.overall);
    if (!Number.isFinite(overall) || overall < 1 || overall > 5) throw new Error("اختر تقييمًا عامًا من 1 إلى 5");
    const rating = WA.Storage.upsert("wa_ratings", {
      id: WA.Storage.createId("RAT"),
      requestId: request.id,
      referralId: referral.id,
      partnerId: referral.partnerId,
      overall,
      responseSpeed: Number(payload.responseSpeed || overall),
      clarity: Number(payload.clarity || overall),
      commitment: Number(payload.commitment || overall),
      reception: Number(payload.reception || overall),
      serviceQuality: Number(payload.serviceQuality || overall),
      recommend: payload.recommend === "yes" || payload.recommend === true,
      comment: WA.Storage.sanitizeText(payload.comment, 800),
      status: "published",
      submittedAt: now()
    });
    touchRequest(request, { status: "rated", ratedAt: now() });
    return rating;
  });

  const createObjection = (payload) => WA.Storage.transaction(() => {
    const referral = payload.referralId ? WA.Storage.findById("wa_referrals", payload.referralId) : null;
    const invoice = payload.invoiceId ? WA.Storage.findById("wa_invoices", payload.invoiceId) : null;
    if (payload.invoiceId) {
      if (!invoice || invoice.partnerId !== payload.partnerId) throw new Error("بيانات الفاتورة غير متطابقة");
      if (invoice.objectionDeadline && new Date(invoice.objectionDeadline).getTime() < Date.now()) throw new Error("انتهت مهلة الاعتراض");
    } else if (!referral || referral.partnerId !== payload.partnerId) throw new Error("بيانات الاعتراض غير متطابقة");
    const objection = WA.Storage.upsert("wa_objections", {
      id: WA.Storage.createId("OBJ"),
      requestId: referral?.requestId || "",
      referralId: referral?.id || "",
      invoiceId: invoice?.id || "",
      partnerId: payload.partnerId,
      ratingId: payload.ratingId || "",
      type: payload.type,
      reason: WA.Storage.sanitizeText(payload.reason, 250),
      details: WA.Storage.sanitizeText(payload.details, 1000),
      status: "new",
      decision: "",
      submittedAt: now(),
      closedAt: ""
    });
    if (referral) WA.Storage.upsert("wa_referrals", { ...referral, objectionStatus: "new" });
    if (invoice) WA.Storage.upsert("wa_invoices", { ...invoice, status: "under_review", objectionId: objection.id });
    return objection;
  });

  const markWhatsappOpened = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) return null;
    return WA.Storage.upsert("wa_referrals", { ...referral, whatsappOpenedAt: now() });
  };
  const markReferralNotified = (referralId) => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return WA.Storage.upsert("wa_referrals", { ...referral, notifiedAt: referral.notifiedAt || now(), notificationChannel: "whatsapp_manual" });
  };
  const markReferralShown = markReferralViewed;
  const confirmArrival = (referralId, source = "customer") => updateReferralOutcome(referralId, "arrived", source);
  const confirmServiceReceived = (referralId, source = "customer") => updateReferralOutcome(referralId, "service_received", source);
  const updateReferralStatus = (referralId, status, source = "partner") => {
    if (["contacted", "appointment_set", "arrived", "service_received", "service_not_received", "not_agreed"].includes(status)) return updateReferralOutcome(referralId, status, source);
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return WA.Storage.upsert("wa_referrals", { ...referral, status, statusSource: source, statusUpdatedAt: now() });
  };

  const registerCostBand = (referralId, costBand, source = "legacy", reason = "") => {
    const referral = WA.Storage.findById("wa_referrals", referralId);
    if (!referral) throw new Error("الإحالة غير موجودة");
    return { disputed: false, referral: WA.Storage.upsert("wa_referrals", { ...referral, costBand, costBandLabel: bandLabel(costBand), costSource: source, costChangeReason: WA.Storage.sanitizeText(reason, 500) }), fee: referral.feeId ? WA.Storage.findById("wa_fees", referral.feeId) : null };
  };
  const ensureFee = (referralId) => ensureAcceptanceFee(referralId);

  const outstandingFees = (partnerId) => WA.Storage.get("wa_fees").filter((fee) => fee.partnerId === partnerId && !["paid", "exempt", "cancelled"].includes(fee.status));
  const issueInvoice = (partnerId, reason = "monthly", at = new Date()) => WA.Storage.transaction(() => {
    const fees = outstandingFees(partnerId).filter((fee) => fee.status !== "disputed");
    if (!fees.length) return null;
    const total = fees.reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
    const cycle = `${at.getFullYear()}-${String(at.getMonth() + 1).padStart(2, "0")}`;
    const existing = WA.Storage.get("wa_invoices").find((row) => row.partnerId === partnerId && row.cycle === cycle && !["paid", "cancelled"].includes(row.status));
    const objectionDeadline = new Date(at); objectionDeadline.setDate(objectionDeadline.getDate() + WA.Config.objectionWindowDays);
    const dueAt = new Date(at); dueAt.setDate(dueAt.getDate() + WA.Config.paymentDueDays);
    const paymentRequired = total >= WA.Config.paymentThreshold;
    const invoice = WA.Storage.upsert("wa_invoices", {
      ...(existing || {}),
      id: existing?.id || WA.Storage.createId("INV"),
      number: existing?.number || `INV-${at.getFullYear()}${String(at.getMonth() + 1).padStart(2, "0")}-${String(Date.now()).slice(-5)}`,
      partnerId,
      cycle,
      issueReason: reason,
      feeIds: fees.map((fee) => fee.id),
      amount: total,
      paymentRequired,
      status: paymentRequired ? "payment_required" : "carried_forward",
      issuedAt: existing?.issuedAt || at.toISOString(),
      dueAt: paymentRequired ? (existing?.dueAt || dueAt.toISOString()) : "",
      objectionDeadline: existing?.objectionDeadline || objectionDeadline.toISOString(),
      paidAt: existing?.paidAt || ""
    });
    fees.forEach((fee) => WA.Storage.upsert("wa_fees", { ...fee, invoiceIds: [...new Set([...(fee.invoiceIds || []), invoice.id])], status: paymentRequired ? "invoiced_due" : "statemented" }));
    return invoice;
  });
  const maybeIssueInvoices = (at = new Date()) => WA.Storage.get("wa_partners").forEach((partner) => {
    const total = outstandingFees(partner.id).filter((fee) => fee.status !== "disputed").reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
    if (total >= WA.Config.paymentThreshold || at.getDate() === WA.Config.invoiceIssueDay) issueInvoice(partner.id, total >= WA.Config.paymentThreshold ? "threshold" : "monthly", at);
  });
  const registerPayment = (invoiceId, method = "bank_transfer") => WA.Storage.transaction(() => {
    const invoice = WA.Storage.findById("wa_invoices", invoiceId);
    if (!invoice) throw new Error("الفاتورة غير موجودة");
    const existing = WA.Storage.get("wa_payments").find((row) => row.invoiceId === invoice.id);
    if (existing) return existing;
    const payment = WA.Storage.upsert("wa_payments", { id: WA.Storage.createId("PAY"), invoiceId: invoice.id, partnerId: invoice.partnerId, amount: invoice.amount, method, status: "paid", receiptNumber: `RC-${Date.now().toString().slice(-8)}`, paidAt: now() });
    WA.Storage.upsert("wa_invoices", { ...invoice, status: "paid", paidAt: payment.paidAt });
    (invoice.feeIds || []).forEach((id) => { const fee = WA.Storage.findById("wa_fees", id); if (fee) WA.Storage.upsert("wa_fees", { ...fee, status: "paid", paidAt: payment.paidAt }); });
    return payment;
  });
  const sweepOverdueInvoices = (at = new Date()) => WA.Storage.get("wa_invoices").forEach((invoice) => {
    if (invoice.status === "payment_required" && invoice.dueAt && new Date(invoice.dueAt).getTime() < at.getTime()) WA.Storage.upsert("wa_invoices", { ...invoice, status: "overdue" });
  });
  const sweepExpiredDispatches = (at = new Date()) => {
    WA.Storage.get("wa_referrals").forEach((referral) => {
      if (!["sent", "viewed"].includes(referral.status) || !referral.expiresAt || new Date(referral.expiresAt).getTime() >= at.getTime()) return;
      WA.Storage.upsert("wa_referrals", { ...referral, status: "expired", expiredAt: at.toISOString() });
      const request = WA.Storage.findById("wa_requests", referral.requestId);
      const batch = requestReferrals(referral.requestId).filter((row) => row.batchNumber === referral.batchNumber);
      if (request && !request.acceptedReferralId && batch.every((row) => ["expired", "rejected"].includes(row.id === referral.id ? "expired" : row.status))) touchRequest(request, { status: "no_acceptance", noAcceptanceAt: at.toISOString() });
    });
  };
  const sweepAdministrativeClosures = (at = new Date()) => {
    const cutoff = at.getTime() - WA.Config.administrativeCloseDays * 86400000;
    WA.Storage.get("wa_requests").forEach((request) => {
      if (["rated", "administratively_closed", "finally_closed"].includes(request.status)) return;
      const last = new Date(request.lastActivityAt || request.updatedAt || request.createdAt).getTime();
      if (Number.isFinite(last) && last < cutoff) touchRequest(request, { status: "administratively_closed", administrativeClosedAt: at.toISOString() });
    });
  };

  const saveDraft = (draft) => {
    const sessions = WA.Storage.get("wa_sessions").filter((row) => row.type !== "customer_draft");
    sessions.push({ id: "CUSTOMER-DRAFT", type: "customer_draft", draft: WA.Storage.deepClone(draft), updatedAt: now(), expiresAt: plusHours(now(), 168) });
    WA.Storage.set("wa_sessions", sessions);
  };
  const loadDraft = () => {
    const session = WA.Storage.get("wa_sessions").find((row) => row.type === "customer_draft");
    return !session || new Date(session.expiresAt).getTime() < Date.now() ? null : WA.Storage.deepClone(session.draft);
  };
  const clearDraft = () => WA.Storage.remove("wa_sessions", (row) => row.type === "customer_draft");
  const referralEventState = (referral) => ({ accepted: Boolean(referral?.acceptedAt), serviceReceived: referral?.resultStatus === "service_received", feeCreated: Boolean(referral?.feeId) });
  const runSweep = () => { sweepExpiredDispatches(); maybeIssueInvoices(); sweepOverdueInvoices(); sweepAdministrativeClosures(); };

  WA.Lifecycle = {
    findCustomer, findRequestByToken, findRequestByHumanId, findReferralByAcceptanceToken,
    saveCustomerAndVehicle, createRequest, createReferral, dispatchToPartners, getWorkshopAcceptanceView,
    acceptReferral, rejectReferral, markReferralViewed, markReferralShown, markReferralNotified, markWhatsappOpened,
    requestAlternative, alternativeEligibility, updateReferralOutcome, confirmArrival, confirmServiceReceived,
    createRating, createObjection, ensureAcceptanceFee, ensureFee, registerCostBand, updateReferralStatus,
    issueInvoice, maybeIssueInvoices, registerPayment, sweepOverdueInvoices, sweepExpiredDispatches,
    sweepAdministrativeClosures, runSweep, saveDraft, loadDraft, clearDraft, referralEventState,
    feeForBand, bandLabel, outstandingFees,
    confirmIntake: (referralId, source) => confirmServiceReceived(referralId, source),
    issueClaim: (partnerId, reason) => issueInvoice(partnerId, reason === "threshold" ? "threshold" : "monthly"),
    maybeIssueClaims: () => maybeIssueInvoices()
  };
})();

```

## NEW: `assets/otp.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};
  const digits = (value) => String(value || "").replace(/\D/g, "");
  const generate = (length = 6) => {
    const size = length === 4 ? 4 : 6;
    const max = 10 ** size;
    let value;
    if (window.crypto?.getRandomValues) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      value = array[0] % max;
    } else value = Math.floor(Math.random() * max);
    return String(value).padStart(size, "0");
  };
  const create = (phone, length = 6, ttlMinutes = 5) => {
    const generatedAt = new Date();
    return { phone: digits(phone), code: generate(length), generatedAt: generatedAt.toISOString(), expiresAt: new Date(generatedAt.getTime() + ttlMinutes * 60000).toISOString(), length };
  };
  const verify = (challenge, input, phone) => Boolean(challenge && challenge.phone === digits(phone) && challenge.code === digits(input) && new Date(challenge.expiresAt).getTime() >= Date.now());
  WA.OTP = Object.freeze({ digits, generate, create, verify });
})();

```

## MODIFIED: `assets/seed.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const seedVersion = 13;
  const qassimCities = ["بريدة", "عنيزة", "الرس", "البكيرية", "المذنب"];
  const makes = ["تويوتا", "نيسان", "هيونداي", "كيا", "فورد", "شيفروليه", "لكزس", "جي إم سي", "مازدا", "هوندا"];
  const workshopNames = ["مركز الفحص المتخصص", "ورشة المسار", "مركز تشخيص المركبات"];
  const specialties = ["فحص وتشخيص عام", "ميكانيكا وكهرباء محرك", "فحص فرامل", "تكييف وكهرباء سيارات", "عفشة وتعليق وتوجيه", "كهرباء سيارات", "فحص ناقل حركة"];
  const services = ["فحص وتشخيص عام", "فحص المحرك", "فحص الفرامل", "فحص التكييف", "فحص الكهرباء", "فحص العفشة", "فحص ناقل الحركة"];
  const schedules = WA.Automotive.weekdays.map((day) => ({
    day,
    open: day !== "الجمعة",
    allDay: false,
    period1: { from: "08:00", to: "12:00" },
    period2: { from: "16:00", to: "22:00" }
  }));

  const buildPartner = (city, cityIndex, variantIndex) => {
    const id = variantIndex === 0 ? `DEMO-WORKSHOP-${cityIndex + 1}` : `DEMO-WORKSHOP-${cityIndex + 1}-${variantIndex + 1}`;
    const rotatedMakes = [...makes.slice(variantIndex), ...makes.slice(0, variantIndex)];
    return {
      id,
      type: "workshop",
      stage: "stage_one",
      name: `${workshopNames[(cityIndex + variantIndex) % workshopNames.length]} — ${city}${variantIndex ? ` ${variantIndex + 1}` : ""}`,
      tradeName: `منشأة ${id}`,
      description: "ورشة مسجلة لاستقبال إحالات مشكلات السيارات.",
      region: "منطقة القصيم",
      city,
      address: `داخل مدينة ${city}`,
      exactLocation: `مدينة ${city}`,
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city)}`,
      googlePlaceId: "",
      googlePlaceLinkStatus: "unlinked",
      whatsapp: `0500${String(cityIndex * 10 + variantIndex).padStart(6, "0")}`.slice(0, 10),
      acceptanceContactName: "مسؤول استقبال الإحالات",
      acceptanceWhatsapp: `0500${String(cityIndex * 10 + variantIndex).padStart(6, "0")}`.slice(0, 10),
      commercialRegistration: `CR-WORKSHOP-${cityIndex + 1}-${variantIndex + 1}`,
      schedule: schedules,
      hours: "الأحد–الخميس والسبت: 8:00–12:00 و4:00–10:00",
      specialties,
      specialtiesPriority: specialties,
      services,
      servedMakes: rotatedMakes,
      makesPriority: rotatedMakes,
      fuelTypes: ["بنزين", "ديزل", "هجين"],
      coverageCities: [city],
      intakeCapacity: "available",
      availability: { status: "typical", note: "الورشة تستقبل عادةً هذا النوع من الطلبات، ويؤكد القبول من الرابط المرسل عبر واتساب." },
      ratingOverall: Number((4.1 + ((cityIndex + variantIndex) % 7) / 10).toFixed(1)),
      ratingCount: 12 + cityIndex * 3 + variantIndex * 2,
      fairnessRating: 0,
      fairnessCount: 0,
      commitment: ["مرتفع", "جيد جدًا", "جيد"][cityIndex % 3],
      responseScore: 80 + ((cityIndex + variantIndex) % 15),
      trustScore: 82 + ((cityIndex * 2 + variantIndex) % 14),
      partnershipStatus: "active",
      paymentStatus: "current",
      acceptsUrgent: false,
      isDemo: true,
      seedVersion
    };
  };

  const buildPartners = () => qassimCities.flatMap((city, cityIndex) => Array.from({ length: 9 }, (_, variantIndex) => variantIndex).map((variantIndex) => buildPartner(city, cityIndex, variantIndex)));

  const run = () => {
    const meta = WA.Storage.get("wa_meta");
    const built = buildPartners();
    const builtIds = new Set(built.map((partner) => partner.id));
    // نزيل فقط البيانات الأولية للقطاعات المؤجلة، ونحافظ على أي بيانات حقيقية أضافها المستخدم.
    const retained = WA.Storage.get("wa_partners").filter((row) => !row.isDemo || builtIds.has(row.id));
    WA.Storage.set("wa_partners", retained);
    built.forEach((partner) => {
      const previous = WA.Storage.findById("wa_partners", partner.id);
      WA.Storage.upsert("wa_partners", { ...previous, ...partner, createdAt: previous?.createdAt || WA.Storage.now() });
    });
    WA.Storage.set("wa_discounts", WA.Storage.get("wa_discounts").filter((row) => !row.isDemo));
    WA.Storage.set("wa_sessions", WA.Storage.get("wa_sessions").filter((row) => row.type !== "demo_credentials"));
    WA.Storage.set("wa_meta", {
      ...meta,
      seedVersion,
      stage: "stage_one_problem_whatsapp",
      seedAppliedAt: meta.seedAppliedAt || WA.Storage.now(),
      seedNotice: "تم تجهيز بيانات الورش للتحقق من الإرسال والقبول.",
      updatedAt: WA.Storage.now()
    });
  };

  WA.Seed = { run, buildPartners };
})();

```

## MODIFIED: `assets/storage.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const memory = new Map();
  const arrayKeys = new Set(WA.Config.storageKeys.filter((key) => key !== "wa_meta"));
  const now = () => new Date().toISOString();
  const deepClone = (value) => JSON.parse(JSON.stringify(value));

  const sanitizeText = (value, max = 500) => String(value ?? "")
    .replace(/[<>`]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

  const sanitizePhone = (value) => {
    const digits = String(value ?? "").replace(/\D/g, "");
    if (/^05\d{8}$/.test(digits)) return digits;
    if (/^9665\d{8}$/.test(digits)) return `0${digits.slice(3)}`;
    if (/^5\d{8}$/.test(digits)) return `0${digits}`;
    return digits.slice(0, 10);
  };

  const normalizeWhatsapp = (value) => {
    const phone = sanitizePhone(value);
    if (/^05\d{8}$/.test(phone)) return `966${phone.slice(1)}`;
    const digits = String(value ?? "").replace(/\D/g, "");
    return /^9665\d{8}$/.test(digits) ? digits : "";
  };

  const parse = (raw, fallback) => {
    try { return raw == null ? fallback : JSON.parse(raw); }
    catch (_) { return fallback; }
  };

  const rawGet = (key) => {
    try { return localStorage.getItem(key); }
    catch (_) { return memory.has(key) ? memory.get(key) : null; }
  };

  const rawSet = (key, value) => {
    const serialized = JSON.stringify(value);
    try { localStorage.setItem(key, serialized); }
    catch (_) { memory.set(key, serialized); }
    return value;
  };

  const get = (key) => {
    const fallback = arrayKeys.has(key) ? [] : {};
    const value = parse(rawGet(key), fallback);
    if (arrayKeys.has(key)) return Array.isArray(value) ? value : [];
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  };

  const set = (key, value) => rawSet(key, value);

  const normalizeRecord = (record) => {
    if (!record || typeof record !== "object" || Array.isArray(record)) return record;
    const copy = {};
    Object.entries(record).forEach(([key, value]) => {
      if (typeof value === "string") copy[key] = sanitizeText(value, key.toLowerCase().includes("url") ? 1200 : 2500);
      else if (Array.isArray(value)) copy[key] = value.map((item) => typeof item === "string" ? sanitizeText(item, 600) : normalizeRecord(item));
      else if (value && typeof value === "object") copy[key] = normalizeRecord(value);
      else copy[key] = value;
    });
    return copy;
  };

  const createId = (prefix) => `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  const randomToken = (prefix = "tok") => {
    const bytes = new Uint8Array(16);
    if (window.crypto?.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
    return `${prefix}_${Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
  };

  const upsert = (key, record, identity = "id") => {
    if (!arrayKeys.has(key)) throw new Error(`المفتاح ${key} ليس جدولًا`);
    const rows = get(key);
    const clean = normalizeRecord(record);
    const timestamp = now();
    const index = rows.findIndex((row) => row?.[identity] === clean?.[identity]);
    if (index >= 0) rows[index] = { ...rows[index], ...clean, updatedAt: timestamp };
    else rows.push({ ...clean, createdAt: clean.createdAt || timestamp, updatedAt: timestamp });
    set(key, rows);
    return deepClone(index >= 0 ? rows[index] : rows[rows.length - 1]);
  };

  const insertUnique = (key, record, uniqueFields = ["id"]) => {
    const duplicate = get(key).find((row) => uniqueFields.every((field) => row?.[field] === record?.[field]));
    return duplicate ? deepClone(duplicate) : upsert(key, record);
  };

  const remove = (key, predicate) => {
    const rows = get(key);
    const next = rows.filter((row) => !predicate(row));
    set(key, next);
    return rows.length - next.length;
  };

  const findById = (key, id) => get(key).find((row) => row?.id === id) || null;

  const transaction = (callback) => {
    const snapshot = {};
    WA.Config.storageKeys.forEach((key) => { snapshot[key] = rawGet(key); });
    try { return callback(); }
    catch (error) {
      Object.entries(snapshot).forEach(([key, value]) => {
        if (value === null) {
          try { localStorage.removeItem(key); } catch (_) { memory.delete(key); }
        } else {
          try { localStorage.setItem(key, value); } catch (_) { memory.set(key, value); }
        }
      });
      throw error;
    }
  };

  const ensureKeys = () => WA.Config.storageKeys.forEach((key) => {
    if (rawGet(key) === null) set(key, arrayKeys.has(key) ? [] : {});
  });

  const migrateLegacy = () => {
    const meta = get("wa_meta");
    const currentVersion = Number(meta.dataVersion || 0);
    if (currentVersion >= WA.Config.dataVersion) return;

    const requests = get("wa_requests").map((request) => ({
      ...request,
      publicToken: request.publicToken || randomToken("req"),
      humanId: request.humanId || request.id,
      region: request.region || WA.Automotive.getRegionForCity(request.city),
      status: request.status || "referred",
      stage: request.stage || (request.serviceType === "problem" ? "stage_one" : "legacy_future_service"),
      acceptedReferralId: request.acceptedReferralId || request.activeReferralId || "",
      dispatchBatchNumber: Number(request.dispatchBatchNumber || 0),
      alternativeDeadline: request.alternativeDeadline || "",
      locationMethod: request.locationMethod || (request.locationCoordinates ? "browser_geolocation" : "manual"),
      nearestCityDistanceKm: Number.isFinite(Number(request.nearestCityDistanceKm)) ? Number(request.nearestCityDistanceKm) : null,
      lastActivityAt: request.lastActivityAt || request.updatedAt || request.createdAt || now()
    }));

    const referrals = get("wa_referrals").map((referral) => ({
      ...referral,
      partnerId: referral.partnerId || referral.workshopId || "",
      order: referral.order || 1,
      status: referral.status || "registered",
      serviceReceivedAt: referral.serviceReceivedAt || (referral.intakeStartedAt ? referral.intakeStartedAt : ""),
      costBand: referral.costBand || "",
      costSource: referral.costSource || "",
      costPartnerConfirmedAt: referral.costPartnerConfirmedAt || "",
      batchNumber: Number(referral.batchNumber || 1),
      acceptanceToken: referral.acceptanceToken || randomToken("accept"),
      sentAt: referral.sentAt || referral.registeredAt || referral.createdAt || now(),
      acceptedAt: referral.acceptedAt || "",
      feeCategory: referral.feeCategory || "simple",
      feeAmount: Number(referral.feeAmount || 1)
    }));

    const partners = get("wa_partners").map((partner) => ({
      ...partner,
      type: partner.type || "workshop",
      region: partner.region || WA.Automotive.getRegionForCity(partner.city),
      coverageCities: partner.coverageCities?.length ? partner.coverageCities : (partner.city ? [partner.city] : []),
      specialtiesPriority: partner.specialtiesPriority || partner.specialties || [],
      makesPriority: partner.makesPriority || partner.servedMakes || [],
      fuelTypes: partner.fuelTypes || ["بنزين"],
      partnershipStatus: partner.partnershipStatus || "active",
      paymentStatus: partner.paymentStatus || "current",
      intakeCapacity: partner.intakeCapacity || "available",
      stage: partner.stage || (partner.type === "workshop" ? "stage_one" : "legacy_future_service"),
      googlePlaceId: partner.googlePlaceId || "",
      googlePlaceLinkStatus: partner.googlePlaceLinkStatus || (partner.googlePlaceId ? "pending_verification" : "unlinked"),
      googlePlaceVerifiedAt: partner.googlePlaceVerifiedAt || "",
      isDemo: typeof partner.isDemo === "boolean" ? partner.isDemo : String(partner.id || "").startsWith("DEMO-")
    }));

    const discounts = get("wa_discounts").map((discount) => ({
      ...discount,
      scope: discount.scope || ((discount.includedServices || []).some((item) => item === "جميع الخدمات") ? "all" : "selected"),
      includedServices: discount.includedServices || [],
      continuousUntilStopped: discount.continuousUntilStopped !== false,
      endsAt: discount.continuousUntilStopped === false ? (discount.endsAt || "") : ""
    }));

    const legacyClaims = get("wa_claims");
    if (!get("wa_invoices").length && legacyClaims.length) {
      set("wa_invoices", legacyClaims.map((claim) => ({
        ...claim,
        number: claim.number || claim.id,
        issueReason: claim.reason || "legacy_migration",
        objectionDeadline: claim.objectionDeadline || "",
        legacyMigrated: true
      })));
    }

    set("wa_requests", requests);
    set("wa_referrals", referrals);
    set("wa_partners", partners);
    set("wa_discounts", discounts);
    set("wa_meta", { ...meta, dataVersion: WA.Config.dataVersion, migratedAt: now(), updatedAt: now() });
  };

  const integrityCheck = () => {
    const issues = [];
    const ids = (key) => new Set(get(key).map((row) => row.id));
    const customers = ids("wa_customers");
    const vehicles = ids("wa_vehicles");
    const requests = ids("wa_requests");
    const partners = ids("wa_partners");
    const referrals = ids("wa_referrals");
    const invoices = ids("wa_invoices");

    get("wa_vehicles").forEach((row) => { if (!customers.has(row.customerId)) issues.push(`المركبة ${row.id} مرتبطة بعميل غير موجود`); });
    get("wa_requests").forEach((row) => {
      if (!customers.has(row.customerId)) issues.push(`الطلب ${row.id} مرتبط بعميل غير موجود`);
      if (!vehicles.has(row.vehicleId)) issues.push(`الطلب ${row.id} مرتبط بمركبة غير موجودة`);
    });
    get("wa_referrals").forEach((row) => {
      if (!requests.has(row.requestId)) issues.push(`الإحالة ${row.id} مرتبطة بطلب غير موجود`);
      if (!partners.has(row.partnerId)) issues.push(`الإحالة ${row.id} مرتبطة بشريك غير موجود`);
    });
    get("wa_ratings").forEach((row) => { if (!referrals.has(row.referralId)) issues.push(`التقييم ${row.id} مرتبط بإحالة غير موجودة`); });
    get("wa_fees").forEach((row) => {
      if (!referrals.has(row.referralId)) issues.push(`الرسم ${row.id} مرتبط بإحالة غير موجودة`);
      if (!partners.has(row.partnerId)) issues.push(`الرسم ${row.id} مرتبط بشريك غير موجود`);
    });
    get("wa_payments").forEach((row) => { if (row.invoiceId && !invoices.has(row.invoiceId)) issues.push(`الدفعة ${row.id} مرتبطة بفاتورة غير موجودة`); });
    const adminUsers = ids("wa_admin_users");
    get("wa_admin_sessions").forEach((row) => { if (!adminUsers.has(row.userId)) issues.push(`جلسة الإدارة ${row.id} مرتبطة بمستخدم غير موجود`); });
    get("wa_audit_logs").forEach((row) => { if (row.userId && !adminUsers.has(row.userId)) issues.push(`سجل التدقيق ${row.id} مرتبط بمستخدم غير موجود`); });
    return issues;
  };

  const init = () => {
    ensureKeys();
    migrateLegacy();
    const meta = get("wa_meta");
    set("wa_meta", { ...meta, dataVersion: WA.Config.dataVersion, initializedAt: meta.initializedAt || now(), updatedAt: now() });
  };

  WA.Storage = { init, get, set, upsert, insertUnique, remove, findById, transaction, createId, randomToken, sanitizeText, sanitizePhone, normalizeWhatsapp, deepClone, now, integrityCheck };
})();

```

## MODIFIED: `assets/styles.css`

```css
:root {
  --navy-950: #071426;
  --navy-900: #0b1d33;
  --navy-800: #12304f;
  --blue-600: #1769aa;
  --teal-600: #0a7d72;
  --teal-500: #0f9487;
  --teal-100: #dff6f2;
  --amber-600: #a65c00;
  --amber-100: #fff2d8;
  --red-700: #a1242d;
  --red-100: #fde9eb;
  --green-700: #146c43;
  --green-100: #e4f7ed;
  --slate-900: #172033;
  --slate-700: #405069;
  --slate-600: #59677d;
  --slate-400: #95a0b2;
  --slate-300: #c7cfda;
  --slate-200: #e2e7ee;
  --slate-100: #f1f4f8;
  --white: #fff;
  --surface: #fff;
  --page: #f6f8fb;
  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 8px 24px rgba(7, 20, 38, .07);
  --shadow: 0 18px 50px rgba(7, 20, 38, .11);
  --focus: 0 0 0 3px rgba(23, 105, 170, .28);
  --container: 1180px;
  font-family: Tahoma, Arial, "Segoe UI", sans-serif;
  color-scheme: light;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--page);
  color: var(--slate-900);
  font-family: inherit;
  line-height: 1.75;
  text-align: right;
  -webkit-font-smoothing: antialiased;
}
img, svg { max-width: 100%; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea, summary { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
[hidden] { display: none !important; }

:focus-visible { outline: none; box-shadow: var(--focus); }
.skip-link {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  transform: translateY(-150%);
  background: var(--white);
  color: var(--navy-900);
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 800;
}
.skip-link:focus { transform: translateY(0); }

.container { width: min(calc(100% - 32px), var(--container)); margin-inline: auto; }
.section { padding: 56px 0; }
.section.alt { background: var(--white); }
.section-head { max-width: 720px; margin-bottom: 28px; }
.section-head.center { text-align: center; margin-inline: auto; }
.section-head h1, .section-head h2 { margin: 6px 0 8px; line-height: 1.35; }
.section-head p { margin: 0; color: var(--slate-600); }
.kicker, .eyebrow { color: var(--teal-600); font-size: .88rem; font-weight: 800; letter-spacing: .01em; }
.muted { color: var(--slate-600); }
.small { font-size: .88rem; }
.mt-8 { margin-top: 8px; }
.mt-16 { margin-top: 16px; }
.mt-24 { margin-top: 24px; }
.mb-0 { margin-bottom: 0; }
.text-center { text-align: center; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, .96);
  border-bottom: 1px solid var(--slate-200);
  backdrop-filter: blur(10px);
}
.nav-shell { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { display: inline-flex; align-items: center; gap: 10px; min-width: max-content; }
.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  color: var(--white);
  background: linear-gradient(145deg, var(--teal-500), var(--navy-800));
  font-weight: 900;
  font-size: 1.2rem;
  box-shadow: 0 9px 22px rgba(10, 125, 114, .2);
}
.brand span:last-child { display: grid; line-height: 1.35; }
.brand strong { font-size: 1rem; }
.brand small { color: var(--slate-600); font-size: .72rem; }
.nav-toggle {
  border: 1px solid var(--slate-300);
  border-radius: 10px;
  background: var(--white);
  padding: 8px 12px;
  color: var(--navy-900);
  font-weight: 800;
}
.main-nav {
  position: absolute;
  inset-inline: 16px;
  top: 74px;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 14px;
  box-shadow: var(--shadow);
}
.main-nav.open { display: flex; }
.main-nav a { padding: 10px 12px; border-radius: 9px; color: var(--slate-700); font-weight: 700; }
.main-nav a:hover, .main-nav a[aria-current="page"] { background: var(--teal-100); color: var(--teal-600); }

.hero {
  overflow: hidden;
  padding: 68px 0 54px;
  background:
    radial-gradient(circle at 8% 20%, rgba(15, 148, 135, .17), transparent 28%),
    radial-gradient(circle at 90% 70%, rgba(23, 105, 170, .15), transparent 30%),
    linear-gradient(160deg, #f7fbfc, #edf3f8);
}
.hero-grid { display: grid; gap: 34px; align-items: center; }
.hero h1 { margin: 10px 0 16px; font-size: clamp(2rem, 8vw, 4.3rem); line-height: 1.2; letter-spacing: -.04em; }
.hero h1 span { color: var(--teal-600); }
.hero p { max-width: 720px; color: var(--slate-600); font-size: 1.04rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.hero-assurances { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.hero-assurances span { padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.78); border: 1px solid var(--slate-200); color: var(--slate-700); font-size: .82rem; font-weight: 700; }
.hero-panel { background: rgba(255,255,255,.9); border: 1px solid rgba(255,255,255,.9); border-radius: var(--radius-lg); padding: 22px; box-shadow: var(--shadow); }
.hero-panel h2 { margin: 0 0 8px; }
.hero-panel .main-path-card { margin-top: 14px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 11px 18px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-weight: 800;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:disabled { cursor: not-allowed; opacity: .55; transform: none; }
.btn-primary { background: var(--teal-600); color: var(--white); box-shadow: 0 11px 25px rgba(10,125,114,.22); }
.btn-primary:hover { background: #086d64; }
.btn-dark { background: var(--navy-900); color: var(--white); }
.btn-light { background: var(--white); color: var(--navy-900); border-color: var(--slate-300); }
.btn-danger { background: var(--red-700); color: var(--white); }
.btn-warning { background: var(--amber-600); color: var(--white); }
.btn-ghost { background: transparent; color: var(--navy-900); border-color: var(--slate-300); }
.btn-sm { min-height: 38px; padding: 7px 12px; border-radius: 9px; font-size: .88rem; }
.btn-block { width: 100%; }
.button-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }

.main-path-card, .service-card, .card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}
.main-path-card {
  border: 2px solid rgba(10,125,114,.32);
  background: linear-gradient(145deg, var(--white), #f0fbf9);
}
.main-path-card h2, .service-card h3, .card h3 { margin: 6px 0; }
.main-path-card p, .service-card p, .card p { margin: 0; color: var(--slate-600); }
.path-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 14px; background: var(--teal-100); color: var(--teal-600); font-size: 1.35rem; font-weight: 900; }
.other-services { display: grid; gap: 12px; margin-top: 14px; }
.service-card { transition: transform .18s ease, border-color .18s ease; }
.service-card:hover { transform: translateY(-2px); border-color: var(--teal-500); }
.demo-badge, .pill, .status-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  padding: 4px 9px;
  font-size: .75rem;
  font-weight: 800;
}
.demo-badge { background: var(--amber-100); color: var(--amber-600); margin-bottom: 10px; }
.pill { background: var(--teal-100); color: var(--teal-600); }
.status-badge { background: var(--slate-100); color: var(--slate-700); }
.status-badge.success { background: var(--green-100); color: var(--green-700); }
.status-badge.warning { background: var(--amber-100); color: var(--amber-600); }
.status-badge.danger { background: var(--red-100); color: var(--red-700); }

.stats-grid, .cards-grid, .portal-grid, .metric-grid { display: grid; gap: 14px; }
.stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.stat-card { padding: 18px; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); }
.stat-card strong { display: block; font-size: 1.5rem; color: var(--navy-900); }
.stat-card span { color: var(--slate-600); font-size: .88rem; }
.portal-grid .card { transition: transform .18s ease; }
.portal-grid .card:hover { transform: translateY(-3px); }

.flow-shell { padding: 28px 0 64px; }
.flow-layout { display: grid; gap: 20px; align-items: start; }
.flow-sidebar { background: var(--navy-900); color: var(--white); border-radius: var(--radius-lg); padding: 20px; }
.flow-sidebar h1 { margin: 0 0 6px; font-size: 1.35rem; }
.flow-sidebar p { margin: 0; color: #c5d1df; font-size: .9rem; }
.progress-wrap { margin-top: 18px; }
.progress-meta { display: flex; justify-content: space-between; gap: 10px; font-size: .8rem; color: #c5d1df; }
.progress-track { height: 8px; background: rgba(255,255,255,.13); border-radius: 99px; overflow: hidden; margin-top: 8px; }
.progress-bar { height: 100%; width: 0; background: linear-gradient(90deg, var(--teal-500), #45c9ba); border-radius: inherit; transition: width .3s ease; }
.flow-content { min-width: 0; }
.flow-screen { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); }
.flow-screen:not(.active) { display: none; }
.flow-screen h2 { margin: 0 0 8px; line-height: 1.4; }
.flow-screen > p:first-of-type { margin-top: 0; color: var(--slate-600); }
.screen-actions { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--slate-200); }
.service-choice-grid { display: grid; gap: 12px; margin-top: 20px; }
.service-choice {
  width: 100%;
  text-align: right;
  border: 1px solid var(--slate-200);
  background: var(--white);
  border-radius: var(--radius);
  padding: 18px;
  color: var(--slate-900);
}
.service-choice.primary { border: 2px solid var(--teal-500); background: #f3fbfa; }
.service-choice.selected { box-shadow: var(--focus); border-color: var(--blue-600); }
.service-choice strong { display: block; font-size: 1.05rem; }
.service-choice span { color: var(--slate-600); font-size: .88rem; }

.form-grid { display: grid; gap: 16px; }
.form-field { display: grid; gap: 7px; min-width: 0; }
.form-field label, .form-field legend { font-weight: 800; color: var(--slate-900); }
.required::after { content: " *"; color: var(--red-700); }
.form-field input, .form-field select, .form-field textarea {
  width: 100%;
  min-height: 47px;
  border: 1px solid var(--slate-300);
  border-radius: 11px;
  padding: 10px 12px;
  background: var(--white);
  color: var(--slate-900);
}
.form-field textarea { min-height: 120px; resize: vertical; }
.form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--blue-600); box-shadow: var(--focus); outline: 0; }
.field-hint { color: var(--slate-600); font-size: .82rem; }
.field-error { color: var(--red-700); font-size: .82rem; min-height: 1em; }
fieldset { margin: 0; padding: 0; border: 0; }
.checkbox-line, .radio-line { display: flex; align-items: flex-start; gap: 9px; }
.checkbox-line input, .radio-line input { width: 19px; height: 19px; margin-top: 3px; accent-color: var(--teal-600); }
.checkbox-stack { display: grid; gap: 10px; }
.inline-fields { display: grid; gap: 12px; }
.choice-grid { display: grid; gap: 10px; }
.choice-btn { border: 1px solid var(--slate-300); background: var(--white); color: var(--slate-900); border-radius: 11px; padding: 12px; font-weight: 700; }
.choice-btn.selected { border-color: var(--teal-600); background: var(--teal-100); color: var(--teal-600); }

.loading-shell { display: grid; place-items: center; min-height: 320px; text-align: center; }
.loader-ring { width: 58px; height: 58px; border: 5px solid var(--slate-200); border-top-color: var(--teal-600); border-radius: 50%; animation: spin .9s linear infinite; }
.loader-steps { display: grid; gap: 8px; margin-top: 20px; width: min(100%, 420px); }
.loader-step { display: flex; align-items: center; gap: 9px; text-align: right; padding: 9px 12px; border-radius: 9px; background: var(--slate-100); color: var(--slate-600); }
.loader-step.active { background: var(--teal-100); color: var(--teal-600); }
.loader-step.done::before { content: "✓"; font-weight: 900; color: var(--green-700); }
.skeleton { position: relative; overflow: hidden; background: var(--slate-200); border-radius: 8px; }
.skeleton::after { content: ""; position: absolute; inset: 0; transform: translateX(100%); background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); animation: shimmer 1.2s infinite; }
.skeleton-line { height: 15px; margin-bottom: 10px; }
.skeleton-line.short { width: 58%; }

.guidance-grid { display: grid; gap: 12px; margin-top: 18px; }
.guidance-item { border: 1px solid var(--slate-200); border-radius: 13px; padding: 16px; background: #fbfcfe; }
.guidance-item span { display: block; color: var(--slate-600); font-size: .82rem; }
.guidance-item strong { display: block; margin-top: 4px; }
.danger-panel { border: 2px solid #d34a57; background: var(--red-100); color: #6e1219; border-radius: var(--radius); padding: 18px; }
.legal-note { margin-top: 16px; border-right: 4px solid var(--blue-600); background: #eef6fd; padding: 13px 15px; border-radius: 9px; color: var(--slate-700); font-size: .88rem; }
.info-panel { margin-top: 13px; border-right: 4px solid var(--teal-500); background: #f2faf9; padding: 13px 15px; border-radius: 9px; }
.info-panel.muted { border-color: var(--slate-400); background: var(--slate-100); }
.info-panel p { margin: 4px 0 0; color: var(--slate-700); }
.warning-panel { border-right: 4px solid var(--amber-600); background: var(--amber-100); padding: 14px; border-radius: 10px; }
.error-panel { border-right: 4px solid var(--red-700); background: var(--red-100); padding: 14px; border-radius: 10px; color: #6e1219; }
.success-panel { border-right: 4px solid var(--green-700); background: var(--green-100); padding: 14px; border-radius: 10px; color: #0d4f30; }

.partner-card { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); }
.partner-head { display: grid; gap: 16px; border-bottom: 1px solid var(--slate-200); padding-bottom: 16px; }
.partner-head h2 { margin: 7px 0 2px; }
.partner-head p { margin: 0; color: var(--slate-600); }
.rating-block { display: grid; gap: 2px; }
.rating-block small { color: var(--slate-600); }
.stars { color: #d98b00; letter-spacing: 2px; white-space: nowrap; }
.partner-metrics { display: grid; gap: 10px; margin-top: 16px; }
.partner-metrics > div { border: 1px solid var(--slate-200); border-radius: 11px; padding: 12px; }
.partner-metrics span, .partner-metrics small { display: block; color: var(--slate-600); font-size: .8rem; }
.partner-metrics strong { display: block; margin: 2px 0; }
.discount-box { display: grid; gap: 5px; margin-top: 14px; border: 1px dashed var(--teal-600); background: var(--teal-100); border-radius: 12px; padding: 14px; }
.discount-box small { color: var(--slate-700); }

.request-header { background: var(--navy-900); color: var(--white); border-radius: var(--radius-lg); padding: 22px; margin-bottom: 18px; }
.request-header h1 { margin: 3px 0; }
.request-header p { margin: 0; color: #c5d1df; }
.request-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.request-meta span { background: rgba(255,255,255,.1); padding: 6px 10px; border-radius: 999px; font-size: .8rem; }
.timeline { display: grid; gap: 0; }
.timeline-item { display: grid; grid-template-columns: 24px 1fr; gap: 10px; position: relative; padding-bottom: 18px; }
.timeline-item:not(:last-child)::before { content: ""; position: absolute; right: 11px; top: 22px; bottom: 0; width: 2px; background: var(--slate-200); }
.timeline-dot { width: 24px; height: 24px; border-radius: 50%; background: var(--teal-100); color: var(--teal-600); display: grid; place-items: center; font-size: .72rem; font-weight: 900; z-index: 1; }
.timeline-body { border: 1px solid var(--slate-200); border-radius: 11px; padding: 12px; background: var(--white); }
.timeline-body strong { display: block; }
.timeline-body small { color: var(--slate-600); }

.tabs { display: flex; gap: 7px; overflow-x: auto; padding-bottom: 7px; margin-bottom: 18px; scrollbar-width: thin; }
.tab-btn { min-width: max-content; border: 1px solid var(--slate-300); background: var(--white); border-radius: 999px; padding: 8px 13px; color: var(--slate-700); font-weight: 800; }
.tab-btn.active { background: var(--navy-900); color: var(--white); border-color: var(--navy-900); }
.tab-panel:not(.active) { display: none; }
.dashboard-grid { display: grid; gap: 18px; }
.table-wrap { overflow-x: auto; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); }
table { width: 100%; border-collapse: collapse; min-width: 760px; }
th, td { padding: 12px 13px; border-bottom: 1px solid var(--slate-200); text-align: right; vertical-align: top; }
th { background: var(--slate-100); color: var(--slate-700); font-size: .84rem; }
td { font-size: .9rem; }
.table-actions { display: flex; flex-wrap: wrap; gap: 6px; }
.empty-state { text-align: center; padding: 38px 18px; border: 1px dashed var(--slate-300); border-radius: var(--radius); background: var(--white); }
.empty-state h2, .empty-state h3 { margin: 8px 0; }
.empty-state p { color: var(--slate-600); }

.dialog {
  width: min(calc(100% - 28px), 620px);
  border: 0;
  border-radius: var(--radius-lg);
  padding: 0;
  box-shadow: 0 28px 80px rgba(0,0,0,.25);
}
.dialog::backdrop { background: rgba(7,20,38,.65); }
.dialog-shell { padding: 20px; }
.dialog-head { display: flex; justify-content: space-between; gap: 12px; align-items: start; margin-bottom: 14px; }
.dialog-head h2 { margin: 0; }
.dialog-close { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--slate-300); background: var(--white); }

.toast-region { position: fixed; bottom: 16px; inset-inline: 16px; z-index: 2000; display: grid; gap: 8px; pointer-events: none; }
.toast { max-width: 520px; margin-inline: auto; padding: 12px 15px; border-radius: 11px; background: var(--navy-900); color: var(--white); box-shadow: var(--shadow); pointer-events: auto; }
.toast-success { background: var(--green-700); }
.toast-error { background: var(--red-700); }

.site-footer { background: var(--navy-950); color: var(--white); padding: 46px 0 18px; }
.footer-grid { display: grid; gap: 24px; }
.footer-grid > div { display: grid; align-content: start; gap: 7px; }
.footer-grid p, .footer-grid a, .footer-grid small { color: #b8c6d8; }
.footer-grid a:hover { color: var(--white); }
.footer-bottom { margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.12); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; color: #9fb0c5; font-size: .8rem; }
.footer-brand .brand-mark { width: 38px; height: 38px; }
.noscript-banner { background: var(--red-700); color: var(--white); padding: 10px; text-align: center; font-weight: 800; }

.receipt { max-width: 760px; margin-inline: auto; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
.receipt-head { display: flex; justify-content: space-between; gap: 15px; border-bottom: 1px solid var(--slate-200); padding-bottom: 14px; }
.receipt-row { display: flex; justify-content: space-between; gap: 14px; padding: 11px 0; border-bottom: 1px dashed var(--slate-200); }
.receipt-total { font-size: 1.25rem; font-weight: 900; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes shimmer { to { transform: translateX(-100%); } }

@media (min-width: 680px) {
  .other-services, .service-choice-grid, .cards-grid, .portal-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .service-choice-grid .service-choice.primary { grid-column: 1 / -1; }
  .form-grid.two, .inline-fields { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .choice-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .guidance-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .partner-head { grid-template-columns: 1fr auto; }
  .partner-metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .stats-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .footer-grid { grid-template-columns: 1.6fr 1fr 1fr; }
  .toast-region { right: auto; left: 18px; width: 420px; }
}

@media (min-width: 900px) {
  .nav-toggle { display: none; }
  .main-nav { position: static; display: flex; flex-direction: row; padding: 0; border: 0; box-shadow: none; background: transparent; }
  .hero-grid { grid-template-columns: 1.15fr .85fr; }
  .flow-layout { grid-template-columns: 270px minmax(0, 1fr); }
  .flow-sidebar { position: sticky; top: 92px; }
  .flow-screen { padding: 30px; }
  .dashboard-grid.two { grid-template-columns: 1.25fr .75fr; }
}

@media print {
  .site-header, .site-footer, .btn, .screen-actions, .no-print { display: none !important; }
  body { background: var(--white); }
  .receipt, .card, .partner-card { box-shadow: none; border-color: #aaa; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}

/* تشغيل المسارات الجديدة ونموذج الشريك */
.error-text { min-height: 1.25em; margin: 5px 0 0; color: var(--red-700); font-size: .82rem; font-weight: 700; }
.urgent-choice { border-color: #d34a57 !important; background: linear-gradient(145deg, #fff, var(--red-100)); }
.urgent-choice .path-icon { background: var(--red-100); color: var(--red-700); }
.urgent-panel { border: 2px solid #d34a57; background: var(--red-100); color: #6e1219; border-radius: var(--radius); padding: 16px; }
.location-capture { display: grid; gap: 10px; padding: 14px; border: 1px dashed var(--teal-600); border-radius: 12px; background: var(--teal-100); }
.location-capture strong, .location-capture small { display: block; }
.location-capture small { color: var(--slate-700); }
.sticky-action-card { position: sticky; bottom: max(10px, env(safe-area-inset-bottom)); z-index: 20; padding: 12px; background: rgba(255,255,255,.94); border: 1px solid var(--slate-200); border-radius: 14px; box-shadow: 0 10px 35px rgba(7,31,58,.15); backdrop-filter: blur(10px); }
.cost-confirmation { display: grid; gap: 10px; padding: 15px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
.action-align { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.vertical { flex-direction: column; align-items: stretch; }
.day-picker { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; }
.day-chip { position: relative; display: flex; align-items: center; justify-content: center; min-height: 48px; padding: 9px 12px; border: 1px solid var(--slate-300); border-radius: 11px; background: var(--white); cursor: pointer; font-weight: 800; }
.day-chip input { position: absolute; opacity: 0; pointer-events: none; }
.day-chip:has(input:checked) { border-color: var(--teal-600); background: var(--teal-100); color: var(--navy-900); box-shadow: inset 0 0 0 1px var(--teal-600); }
.day-chip:focus-within { outline: 3px solid rgba(26,148,137,.25); outline-offset: 2px; }
.priority-selector { display: grid; gap: 14px; }
.selector-list, .selected-priority-list { display: grid; gap: 8px; min-height: 120px; padding: 10px; border: 1px solid var(--slate-300); border-radius: 12px; background: var(--white); }
.selector-item { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border: 1px solid var(--slate-200); border-radius: 10px; background: var(--slate-100); }
.selector-item button { flex: 0 0 auto; }
.selected-priority-list { counter-reset: priority; background: #f7fbfb; }
.selected-priority-list .selector-item { counter-increment: priority; border-color: #b8ddd8; background: var(--white); }
.selected-priority-list .selector-item::before { content: counter(priority); width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; background: var(--navy-900); color: var(--white); font-size: .75rem; font-weight: 900; }
.priority-actions { display: flex; gap: 5px; margin-inline-start: auto; }
.checkbox-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; }
.honesty-pledge { padding: 15px; border: 2px solid var(--navy-900); border-radius: 12px; background: #f8fbff; line-height: 1.9; }
.fee-policy-box { display: grid; gap: 7px; padding: 15px; border-radius: 12px; background: var(--navy-900); color: var(--white); }
.fee-policy-box strong { font-size: 1.02rem; }
.fee-policy-box small { color: #c4d1e0; }

@media (min-width: 680px) {
  .day-picker { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .priority-selector { grid-template-columns: 1fr 1fr; }
  .checkbox-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
}

@media (max-width: 679px) {
  .sticky-action-card .btn, .sticky-action-card a.btn { width: 100%; }
  .selector-item { align-items: flex-start; }
  .priority-actions { margin-inline-start: 0; }
}

/* تحسينات التنقل والترتيب البصري والنماذج المخصصة */
body { animation: page-enter .22s ease both; }
@keyframes page-enter { from { opacity: .01; transform: translateY(4px); } to { opacity: 1; transform: none; } }
.utility-strip { border-bottom: 1px solid var(--slate-200); background: #f8fafc; }
.utility-actions { min-height: 38px; display: flex; align-items: center; justify-content: flex-start; gap: 8px; }
.utility-btn { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 5px 10px; border: 0; border-radius: 9px; background: transparent; color: var(--navy-800); font-weight: 800; font-size: .82rem; }
.utility-btn:hover { background: var(--teal-100); color: var(--teal-600); }
.page-guidance { display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: start; margin-bottom: 26px; padding: 15px 17px; border: 1px solid rgba(255,255,255,.14); border-radius: var(--radius); background: rgba(255,255,255,.06); }
.page-guidance strong { color: #d9fff9; }
.page-guidance p { margin: 0; color: #c3d0df; }
.light-kicker { color: #8de1d6; }
.section-head.compact { margin-bottom: 14px; }
.section-head.compact h3 { margin: 0 0 4px; }
.activity-block { padding: 18px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: #fbfcfe; }
.contact-card { display: grid; gap: 16px; padding: 20px; border-radius: var(--radius-lg); background: linear-gradient(145deg, var(--navy-900), var(--navy-800)); color: var(--white); box-shadow: var(--shadow); }
.contact-card h2 { margin: 2px 0 5px; }
.contact-card p { margin: 0; color: #c8d6e5; }
.contact-card .kicker { color: #83e0d4; }
.contact-actions .btn-light { border-color: rgba(255,255,255,.4); background: rgba(255,255,255,.1); color: var(--white); }
.private-link-card { display: grid; gap: 16px; padding: 18px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); box-shadow: var(--shadow-sm); }
.private-link-card h2 { margin: 7px 0 2px; font-size: 1.1rem; }
.private-link-card p { margin: 0; color: var(--slate-600); }
.compact-link-row { display: grid; grid-template-columns: minmax(0,1fr) auto auto; gap: 8px; align-items: center; }
.compact-link-row input { min-width: 0; height: 44px; border: 1px solid var(--slate-300); border-radius: 10px; padding: 8px 11px; direction: ltr; text-align: left; background: var(--slate-100); }
.icon-action { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--slate-300); border-radius: 10px; background: var(--white); color: var(--navy-900); font-weight: 800; }
.alternative-action { border-color: #e0a038; background: var(--amber-100); color: #7b4200; }
.daily-schedule-list { display: grid; gap: 12px; }
.day-schedule { padding: 16px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); }
.day-schedule-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; }
.switch-line { display: inline-flex; align-items: center; gap: 9px; font-weight: 900; }
.switch-line input { width: 21px; height: 21px; accent-color: var(--teal-600); }
.day-periods { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--slate-200); }
.period-row { display: grid; grid-template-columns: 1fr; gap: 8px; align-items: end; }
.period-row label { display: grid; gap: 5px; color: var(--slate-600); font-size: .84rem; }
.period-row select { width: 100%; }
.second-period-toggle { margin: 12px 0; }
.schedule-summary { padding: 14px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
.schedule-summary h3 { margin-top: 0; }
.schedule-summary-row { display: flex; justify-content: space-between; gap: 14px; padding: 8px 0; border-bottom: 1px dashed var(--slate-300); }
.schedule-summary-row:last-child { border-bottom: 0; }

@media (min-width: 680px) {
  .contact-card { grid-template-columns: 1fr auto; align-items: center; }
  .private-link-card { grid-template-columns: minmax(180px,.5fr) minmax(0,1.5fr); align-items: center; }
  .period-row { grid-template-columns: 130px repeat(2,minmax(0,1fr)); }
}
@media (max-width: 679px) {
  .section { padding: 38px 0; }
  .flow-shell { padding-top: 16px; }
  .flow-screen, .card, .partner-card { padding: 16px; }
  .compact-link-row { grid-template-columns: 1fr auto; }
  .compact-link-row input { grid-column: 1 / -1; }
  .alternative-action { grid-column: 1 / -1; }
  .contact-actions .btn { width: 100%; }
  .utility-actions { justify-content: space-between; }
}

/* الهوية النهائية وتجربة النشر */
:root {
  --navy-950: #061321;
  --navy-900: #0a2038;
  --navy-800: #123b5c;
  --teal-600: #087d73;
  --teal-500: #0d9789;
  --teal-100: #e2f7f4;
  --page: #f5f7fa;
  --surface: #ffffff;
  --radius-sm: 11px;
  --radius: 17px;
  --radius-lg: 26px;
  --shadow-sm: 0 8px 24px rgba(6, 27, 48, .065);
  --shadow: 0 22px 60px rgba(6, 27, 48, .12);
  --container: 1160px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Tahoma, Arial, sans-serif;
}

body {
  min-width: 320px;
  background:
    linear-gradient(180deg, rgba(228, 238, 246, .45), transparent 320px),
    var(--page);
  font-size: 16px;
  line-height: 1.72;
}

h1, h2, h3 { color: var(--navy-950); letter-spacing: -.018em; }
p { text-wrap: pretty; }
.container { width: min(calc(100% - 28px), var(--container)); }
.section { padding: clamp(42px, 7vw, 78px) 0; }
.section-head { margin-bottom: clamp(22px, 4vw, 34px); }
.section-head h1, .section-head h2 { font-weight: 900; }
.section-head h2 { font-size: clamp(1.65rem, 4vw, 2.45rem); }
.kicker, .eyebrow { font-size: .82rem; letter-spacing: .025em; }

.ui-icon {
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  width: 1.15em;
  height: 1.15em;
  line-height: 1;
}
.ui-icon svg, [data-service-icon] svg, .card-icon svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.site-header { box-shadow: 0 7px 24px rgba(7, 29, 51, .055); }
.utility-strip { background: #f7fafc; }
.utility-actions { min-height: 36px; }
.utility-btn {
  min-height: 34px;
  border-radius: 999px;
  padding-inline: 11px;
  color: var(--slate-700);
}
.utility-btn .ui-icon { color: var(--teal-600); }
.nav-shell { min-height: 68px; }
.brand-mark { width: 44px; height: 44px; border-radius: 14px; }
.brand strong { font-size: 1.02rem; }
.brand small { font-size: .72rem; }
.nav-toggle { min-height: 42px; display: inline-flex; align-items: center; gap: 7px; }
.main-nav a { min-height: 44px; display: flex; align-items: center; }

.hero {
  padding: clamp(52px, 8vw, 92px) 0 clamp(48px, 7vw, 78px);
  background:
    radial-gradient(circle at 8% 14%, rgba(13,151,137,.18), transparent 30%),
    radial-gradient(circle at 92% 78%, rgba(23,105,170,.14), transparent 32%),
    linear-gradient(155deg, #fbfdfd 0%, #edf4f8 100%);
}
.hero-grid { gap: clamp(30px, 6vw, 68px); }
.hero-copy { position: relative; z-index: 1; }
.hero h1 { max-width: 820px; margin: 12px 0 18px; font-size: clamp(2.25rem, 8vw, 4.65rem); line-height: 1.13; }
.hero h1 span { display: inline-block; margin-top: 4px; }
.hero p { max-width: 680px; font-size: clamp(1rem, 2vw, 1.14rem); line-height: 1.9; }
.hero-actions .btn { min-width: 150px; }
.hero-assurances span { display: inline-flex; align-items: center; gap: 6px; padding: 7px 11px; }
.hero-assurances .ui-icon { color: var(--teal-600); }
.hero-panel { padding: clamp(18px, 4vw, 28px); border-color: rgba(255,255,255,.95); }
.main-path-card { padding: 22px; }
.other-services { gap: 10px; }
.service-card { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 13px; padding: 15px; }
.service-card h3 { margin-top: 0; }
.service-card .path-icon { width: 44px; height: 44px; }
.urgent-service { border-color: rgba(161,36,45,.22); }
.urgent-service .path-icon { color: var(--red-700); background: var(--red-100); }

.btn {
  min-height: 48px;
  border-radius: 13px;
  padding: 11px 18px;
  font-size: .94rem;
  box-shadow: none;
}
.btn-primary { box-shadow: 0 11px 25px rgba(8,125,115,.20); }
.btn-light { background: rgba(255,255,255,.94); }
.btn:active { transform: translateY(0) scale(.985); }
.btn .ui-icon { font-size: 1.08rem; }
.icon-action { min-height: 46px; }

.card, .partner-card, .flow-screen, .private-link-card, .day-schedule, .activity-block {
  border-color: #dfe6ed;
  box-shadow: var(--shadow-sm);
}
.card, .partner-card { padding: clamp(17px, 3vw, 23px); }
.card:hover { border-color: #c8d8e2; }
.path-icon, .card-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: var(--teal-100);
  color: var(--teal-600);
}
.path-icon svg, .card-icon svg { width: 25px; height: 25px; }

.journey-grid { display: grid; gap: 14px; }
.journey-card {
  position: relative;
  padding: 22px;
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: var(--shadow-sm);
}
.journey-card h3 { margin: 16px 0 7px; }
.journey-card p { margin: 0; color: var(--slate-600); }
.step-number { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--navy-900); color: var(--white); font-weight: 900; }
.value-section { background: linear-gradient(150deg, #f5fbfa, #f5f7fa); }
.value-grid { display: grid; gap: 30px; align-items: center; }
.benefit-list { display: grid; gap: 12px; }
.benefit-item { display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: start; padding: 18px; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); box-shadow: var(--shadow-sm); }
.benefit-item > .ui-icon { width: 42px; height: 42px; padding: 10px; border-radius: 13px; color: var(--teal-600); background: var(--teal-100); }
.benefit-item h3 { margin: 0 0 5px; }
.benefit-item p { margin: 0; color: var(--slate-600); }
.partner-cta-section { padding-block: 42px; }
.partner-cta { display: grid; gap: 22px; align-items: center; padding: clamp(24px, 5vw, 42px); border-radius: var(--radius-lg); color: var(--white); background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); box-shadow: var(--shadow); }
.partner-cta h2 { margin: 6px 0 9px; color: var(--white); }
.partner-cta p { margin: 0; color: #cad7e4; }
.partner-cta .btn-light { border-color: rgba(255,255,255,.35); background: rgba(255,255,255,.10); color: var(--white); }
.trust-cards .card-icon { margin-bottom: 13px; }
.mobile-action-bar { display: none; }

.flow-shell { padding-top: 22px; }
.flow-sidebar { background: linear-gradient(160deg, var(--navy-950), var(--navy-800)); }
.flow-screen { padding: clamp(18px, 4vw, 30px); }
.flow-screen h2 { font-size: clamp(1.35rem, 4vw, 1.9rem); }
.progress-track { height: 9px; }
.service-choice { min-height: 92px; transition: border-color .18s ease, transform .18s ease, background .18s ease; }
.service-choice:hover { border-color: var(--teal-500); transform: translateY(-1px); }
.form-field input, .form-field select, .form-field textarea { min-height: 50px; border-radius: 12px; background: #fff; }
.form-field textarea { min-height: 126px; }
.field-hint { line-height: 1.6; }
.screen-actions { position: relative; margin-top: 26px; }
.loading-shell { min-height: 350px; }
.loader-step { border: 1px solid var(--slate-200); }
.success-panel, .warning-panel, .danger-panel, .legal-note { border-radius: 14px; }
.contact-card { padding: clamp(20px, 4vw, 28px); }
.private-link-card { background: #fbfcfe; }
.compact-link-row input { background: var(--white); }

.partner-head { gap: 18px; }
.partner-head h2 { margin-bottom: 5px; }
.partner-metrics > div, .guidance-item { border-radius: 13px; }
.discount-box { border-radius: 14px; }
.info-panel { border-radius: 13px; }
.rating-block { min-width: 150px; }

.tabs { scrollbar-width: thin; border-radius: 14px; padding: 6px; background: #eaf0f5; }
.tab-btn { min-height: 42px; border-radius: 10px; white-space: nowrap; }
.tab-btn.active { background: var(--white); color: var(--teal-600); box-shadow: 0 4px 14px rgba(7,29,51,.08); }
.table-wrap { border-radius: 14px; }
.dialog-shell { border-radius: 20px; }
.empty-state { border-radius: var(--radius-lg); }
.empty-state .path-icon { margin-inline: auto; }

.site-footer { margin-top: 24px; }
.page-guidance { grid-template-columns: auto 1fr; background: rgba(255,255,255,.075); }
.guidance-icon { display: grid; place-items: center; width: 38px; height: 38px; padding: 9px; border-radius: 12px; background: rgba(13,151,137,.18); color: #8fe2d8; }
.footer-grid { gap: 28px; }
.footer-grid > div { align-content: start; }
.footer-grid a { width: fit-content; }
.footer-bottom { gap: 10px; }

.noscript-banner { padding: 12px 16px; text-align: center; background: var(--amber-100); color: #734100; font-weight: 800; }
.toast { border-radius: 13px; box-shadow: var(--shadow); }

@media (min-width: 680px) {
  .journey-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .value-grid { grid-template-columns: .9fr 1.1fr; gap: 54px; }
  .partner-cta { grid-template-columns: 1fr auto; }
}

@media (min-width: 900px) {
  .journey-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .main-nav { gap: 2px; }
  .main-nav a { padding-inline: 13px; }
}

@media (max-width: 679px) {
  body { padding-bottom: 0; }
  .container { width: min(calc(100% - 22px), var(--container)); }
  .utility-actions { justify-content: flex-start; }
  .utility-btn { flex: 0 0 auto; }
  .nav-shell { min-height: 62px; }
  .brand-mark { width: 40px; height: 40px; }
  .brand small { display: none; }
  .nav-toggle span:not(.ui-icon) { display: none; }
  .nav-toggle { width: 42px; padding: 8px; justify-content: center; }
  .main-nav { inset-inline: 11px; top: 64px; }
  .hero { padding-top: 44px; }
  .hero h1 { font-size: clamp(2.1rem, 11vw, 3.2rem); }
  .hero-actions { display: grid; grid-template-columns: 1fr; }
  .hero-actions .btn { width: 100%; }
  .hero-assurances { gap: 6px; }
  .hero-assurances span { font-size: .76rem; }
  .service-card { padding: 14px; }
  .partner-cta .button-row { display: grid; }
  .partner-cta .btn { width: 100%; }
  .flow-layout { gap: 14px; }
  .flow-sidebar { border-radius: 18px; padding: 17px; }
  .flow-sidebar .legal-note { display: none; }
  .flow-screen { border-radius: 18px; }
  .screen-actions {
    position: sticky;
    bottom: max(0px, env(safe-area-inset-bottom));
    z-index: 12;
    margin-inline: -16px;
    margin-bottom: -16px;
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,.96);
    box-shadow: 0 -10px 24px rgba(7,29,51,.08);
    backdrop-filter: blur(10px);
  }
  .screen-actions .btn { flex: 1 1 130px; }
  .partner-head { display: grid; }
  .rating-block { width: 100%; }
  .partner-metrics { grid-template-columns: 1fr; }
  .contact-card { border-radius: 18px; }
  .private-link-card { border-radius: 16px; }
  .tabs { margin-inline: -2px; overflow-x: auto; flex-wrap: nowrap; }
  .tab-btn { flex: 0 0 auto; }
  .footer-grid { gap: 24px; }
  .footer-bottom { align-items: flex-start; }
  body[data-page="home"] { padding-bottom: calc(76px + env(safe-area-inset-bottom)); }
  .mobile-action-bar {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    z-index: 90;
    display: block;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    border-top: 1px solid var(--slate-200);
    background: rgba(255,255,255,.96);
    box-shadow: 0 -12px 30px rgba(7,29,51,.12);
    backdrop-filter: blur(12px);
  }
  .mobile-action-bar .btn { min-height: 52px; }
}

@media (prefers-reduced-motion: no-preference) {
  .flow-screen.active, .tab-panel.active { animation: content-in .22s ease both; }
  @keyframes content-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
}
.service-choice { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 13px; align-items: center; }
.service-choice-icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 14px; color: var(--teal-600); background: var(--teal-100); }
.service-choice-icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.service-choice-copy { min-width: 0; }
.urgent-choice .service-choice-icon { color: var(--red-700); background: var(--red-100); }
.auth-section { min-height: 68vh; display: grid; align-items: center; }
.auth-layout { display: grid; gap: 18px; align-items: stretch; }
.auth-card { align-self: stretch; }
.auth-aside { padding: clamp(22px, 5vw, 36px); border-radius: var(--radius-lg); color: var(--white); background: linear-gradient(145deg, var(--navy-950), var(--navy-800)); box-shadow: var(--shadow); }
.auth-aside h2 { color: var(--white); margin: 16px 0 10px; }
.auth-aside .card-icon { color: #91e4da; background: rgba(255,255,255,.1); }
.auth-aside .legal-note { color: #d2deea; background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.12); }
.feature-checklist { display: grid; gap: 10px; margin: 16px 0 22px; padding: 0; list-style: none; }
.feature-checklist li { position: relative; padding-inline-start: 26px; color: #dbe6ef; }
.feature-checklist li::before { content: "✓"; position: absolute; inset-inline-start: 0; top: 0; color: #75d8cc; font-weight: 900; }
.legal-document { max-width: 900px; padding: clamp(22px, 5vw, 44px); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); background: var(--white); box-shadow: var(--shadow-sm); }
.legal-document section { padding: 22px 0; border-top: 1px solid var(--slate-200); }
.legal-document section:first-of-type { border-top: 0; }
.legal-document h2 { margin: 0 0 8px; font-size: 1.25rem; }
.legal-document p { margin: 0; color: var(--slate-700); }
.payment-layout { max-width: 820px; }
.payment-method { min-height: 50px; padding: 12px 14px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
@media (min-width: 760px) { .auth-layout { grid-template-columns: minmax(0,1fr) minmax(300px,.78fr); } }
@media (max-width: 679px) {
  .screen-actions {
    position: static;
    margin-inline: 0;
    margin-bottom: 0;
    padding: 18px 0 0;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }
}

/* الصفحة الرئيسية المختصرة — Zero Scrolling */

body[data-page="home"] {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  height: 100vh;
  height: 100dvh;
  overflow-x: hidden;
  padding-bottom: 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(15, 148, 135, .13), transparent 32%),
    radial-gradient(circle at 88% 78%, rgba(23, 105, 170, .11), transparent 34%),
    linear-gradient(155deg, #fbfdfd 0%, #edf4f8 100%);
}

body[data-page="home"] > .announcement-ticker,
body[data-page="home"] > [data-site-header],
body[data-page="home"] > .home-footer,
body[data-page="home"] > noscript {
  flex-shrink: 0;
}

body[data-page="home"] > [data-site-header]:empty {
  min-height: clamp(3.35rem, 7vh, 4.05rem);
}

body[data-page="home"] .site-header {
  position: relative;
  top: auto;
  flex-shrink: 0;
  background: rgba(255, 255, 255, .96);
  box-shadow: 0 6px 20px rgba(7, 29, 51, .055);
}

body[data-page="home"] .utility-strip {
  display: none;
}

body[data-page="home"] .nav-shell {
  min-height: clamp(3.35rem, 7vh, 4.05rem);
  gap: clamp(.45rem, 1.4vw, 1rem);
}

body[data-page="home"] .brand {
  gap: clamp(.45rem, 1vw, .7rem);
}

body[data-page="home"] .brand-mark {
  width: clamp(2.35rem, 5.2vh, 2.7rem);
  height: clamp(2.35rem, 5.2vh, 2.7rem);
  border-radius: clamp(.7rem, 1.5vw, .9rem);
  font-size: clamp(1rem, 2.3vh, 1.18rem);
}

body[data-page="home"] .brand strong {
  font-size: clamp(.9rem, 2vh, 1rem);
}

body[data-page="home"] .brand small {
  font-size: clamp(.64rem, 1.45vh, .72rem);
}

body[data-page="home"] .main-nav a {
  min-height: clamp(2.35rem, 5.2vh, 2.75rem);
  padding: clamp(.35rem, .9vh, .55rem) clamp(.55rem, 1.2vw, .85rem);
  font-size: clamp(.78rem, 1.7vh, .9rem);
}

body[data-page="home"] .nav-toggle {
  min-height: 2.55rem;
  min-width: 2.55rem;
}

.announcement-ticker {
  position: relative;
  z-index: 120;
  display: flex;
  align-items: center;
  min-height: clamp(1.85rem, 4vh, 2.25rem);
  overflow: hidden;
  color: var(--white);
  background: linear-gradient(135deg, var(--navy-950), var(--navy-800));
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}

.announcement-ticker::before,
.announcement-ticker::after {
  content: "";
  position: absolute;
  inset-block: 0;
  z-index: 2;
  width: clamp(.8rem, 4vw, 3.5rem);
  pointer-events: none;
}

.announcement-ticker::before {
  inset-inline-start: 0;
  background: linear-gradient(to left, transparent, var(--navy-950));
}

.announcement-ticker::after {
  inset-inline-end: 0;
  background: linear-gradient(to right, transparent, var(--navy-950));
}

.announcement-ticker__track {
  display: flex;
  flex: 0 0 auto;
  width: max-content;
  min-width: max-content;
  direction: rtl;
  will-change: transform;
  animation: home-ticker-rtl 52s linear infinite;
}

.announcement-ticker__group {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  min-width: max-content;
  white-space: nowrap;
}

.announcement-ticker__group span {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.85rem, 4vh, 2.25rem);
  padding-inline: clamp(.65rem, 1.4vw, 1.05rem);
  white-space: nowrap;
  font-size: clamp(.68rem, 1.55vh, .79rem);
  font-weight: 800;
  line-height: 1;
}

.announcement-ticker__group span:not(:last-child)::after {
  content: "•";
  margin-inline-start: clamp(1.1rem, 2.5vw, 1.9rem);
  color: #7fe1d5;
}

.announcement-ticker:hover .announcement-ticker__track,
.announcement-ticker:focus-within .announcement-ticker__track {
  animation-play-state: paused;
}

@keyframes home-ticker-rtl {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(50%, 0, 0);
  }
}

.home-main {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
}

.home-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  overflow: hidden;
  padding-block: clamp(.85rem, 3.2vh, 2.25rem);
}

.home-hero::before,
.home-hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  pointer-events: none;
}

.home-hero::before {
  width: min(54vw, 36rem);
  aspect-ratio: 1;
  inset-block-start: -40%;
  inset-inline-end: -18%;
  border: 1px solid rgba(10, 125, 114, .10);
  box-shadow:
    0 0 0 clamp(2rem, 5vw, 4rem) rgba(10, 125, 114, .03),
    0 0 0 clamp(4rem, 10vw, 8rem) rgba(23, 105, 170, .02);
}

.home-hero::after {
  width: clamp(9rem, 24vw, 20rem);
  aspect-ratio: 1;
  inset-block-end: -35%;
  inset-inline-start: -8%;
  background: rgba(15, 148, 135, .055);
  filter: blur(1px);
}

.home-hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(.55rem, 1.75vh, 1.05rem);
  max-width: 58rem;
  min-height: 0;
  text-align: center;
}

.home-hero .eyebrow {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.75rem, 3.6vh, 2.1rem);
  padding: .24rem clamp(.65rem, 1.4vw, .85rem);
  border: 1px solid rgba(10, 125, 114, .18);
  border-radius: 999px;
  background: rgba(255, 255, 255, .72);
  color: var(--teal-600);
  box-shadow: 0 6px 18px rgba(7, 20, 38, .04);
  font-size: clamp(.68rem, 1.55vh, .82rem);
  font-weight: 900;
  line-height: 1.2;
}

.home-hero h1 {
  max-width: 56rem;
  margin: 0;
  color: var(--navy-950);
  font-size: clamp(2rem, min(7.2vw, 7.6vh), 4.5rem);
  line-height: 1.08;
  letter-spacing: -.04em;
  text-wrap: balance;
}

.home-hero h1 span {
  display: block;
  margin-top: clamp(.2rem, .8vh, .45rem);
  color: var(--teal-600);
}

.home-hero__description {
  max-width: 46rem;
  margin: 0;
  color: var(--slate-700);
  font-size: clamp(.88rem, min(2.7vw, 2.15vh), 1.08rem);
  line-height: 1.65;
  text-wrap: balance;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(.35rem, 1vh, .7rem) clamp(.65rem, 1.5vw, 1rem);
}

.home-primary-cta {
  min-width: clamp(11.5rem, 23vw, 14.5rem);
  min-height: clamp(2.9rem, 6.4vh, 3.45rem);
  padding: clamp(.6rem, 1.2vh, .8rem) clamp(1.2rem, 2.8vw, 1.8rem);
  border-radius: clamp(.75rem, 1.4vw, .95rem);
  font-size: clamp(.92rem, 2vh, 1.05rem);
  box-shadow: 0 13px 28px rgba(10, 125, 114, .23);
}

.home-track-link {
  display: inline-flex;
  align-items: center;
  gap: .38rem;
  min-height: clamp(2.45rem, 5.2vh, 2.8rem);
  padding: .35rem .55rem;
  border-radius: .65rem;
  color: var(--slate-700);
  font-size: clamp(.78rem, 1.75vh, .9rem);
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: .28rem;
  transition: color .18s ease, background .18s ease, text-decoration-color .18s ease;
}

.home-track-link:hover {
  color: var(--teal-600);
  background: rgba(255, 255, 255, .62);
  text-decoration-color: currentColor;
}

.home-track-link .ui-icon {
  color: var(--teal-600);
}

.home-trust-points {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(.35rem, 1vw, .55rem);
}

.home-trust-points span {
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  min-height: clamp(1.85rem, 4vh, 2.2rem);
  padding: .28rem clamp(.5rem, 1.2vw, .7rem);
  color: var(--slate-700);
  background: rgba(255, 255, 255, .75);
  border: 1px solid rgba(199, 207, 218, .78);
  border-radius: 999px;
  font-size: clamp(.67rem, 1.48vh, .79rem);
  font-weight: 800;
  line-height: 1.15;
  box-shadow: 0 6px 18px rgba(7, 20, 38, .035);
}

.home-trust-points .ui-icon {
  color: var(--teal-600);
}

.home-service-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(.4rem, 1vw, .65rem);
}

.home-service-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .42rem;
  min-height: clamp(2rem, 4.3vh, 2.45rem);
  padding: .35rem clamp(.7rem, 1.5vw, .95rem);
  border: 1px solid;
  border-radius: 999px;
  background: rgba(255, 255, 255, .82);
  font-size: clamp(.72rem, 1.6vh, .84rem);
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 7px 18px rgba(7, 20, 38, .045);
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}

.home-service-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 11px 24px rgba(7, 20, 38, .09);
  background: var(--white);
}

.home-service-pill > svg {
  width: clamp(1rem, 2.1vh, 1.2rem);
  height: clamp(1rem, 2.1vh, 1.2rem);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.home-service-pill--parts {
  color: #87520a;
  border-color: #e5c88f;
}

.home-service-pill--tow {
  color: var(--red-700);
  border-color: #e9bbc0;
}

.home-service-pill--maintenance {
  color: var(--teal-600);
  border-color: #abd9d3;
}

.home-footer {
  flex-shrink: 0;
  color: #d6e1ec;
  background: var(--navy-950);
  border-top: 1px solid rgba(255, 255, 255, .10);
}

.home-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(.25rem, .7vh, .45rem) clamp(.55rem, 1.5vw, .95rem);
  min-height: clamp(2.55rem, 5.3vh, 3.2rem);
  padding-block: clamp(.25rem, .65vh, .42rem);
}

.home-footer__copyright {
  color: #aebed0;
  font-size: clamp(.67rem, 1.48vh, .78rem);
  white-space: nowrap;
}

.home-footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .12rem clamp(.55rem, 1.5vw, .9rem);
}

.home-footer__links a {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.85rem, 3.8vh, 2.15rem);
  padding: .18rem .28rem;
  border-radius: .4rem;
  color: #c4d2e0;
  font-size: clamp(.66rem, 1.46vh, .78rem);
  font-weight: 700;
}

.home-footer__links a:hover,
.home-footer__links a:focus-visible {
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: .22rem;
}

@media (min-width: 900px) {
  .home-footer__inner {
    justify-content: space-between;
  }

  .announcement-ticker__group span {
    padding-inline: clamp(.85rem, 1.6vw, 1.25rem);
  }
}

@media (max-width: 679px) {
  body[data-page="home"] .brand small {
    display: none;
  }

  body[data-page="home"] .nav-shell {
    min-height: clamp(3.15rem, 6.6vh, 3.65rem);
  }

  body[data-page="home"] .main-nav {
    top: clamp(3.2rem, 6.8vh, 3.75rem);
  }

  .home-hero__content {
    gap: clamp(.46rem, 1.45vh, .8rem);
  }

  .home-hero h1 {
    max-width: 23rem;
    font-size: clamp(1.62rem, min(8.3vw, 6.25vh), 2.45rem);
    line-height: 1.1;
  }

  .home-hero__description {
    max-width: 23rem;
    font-size: clamp(.82rem, min(3.6vw, 1.95vh), .96rem);
    line-height: 1.55;
  }

  .home-hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .home-primary-cta {
    width: min(100%, 21rem);
  }

  .home-trust-points,
  .home-service-pills {
    max-width: 24rem;
  }

  .home-trust-points span,
  .home-service-pill {
    min-height: 2rem;
  }

  .home-footer__inner {
    align-content: center;
    gap: .12rem .45rem;
  }

  .home-footer__links {
    gap: .05rem .5rem;
  }
}

@media (max-height: 700px) {
  .home-hero {
    padding-block: .55rem;
  }

  .home-hero__content {
    gap: .42rem;
  }

  .home-hero .eyebrow {
    min-height: 1.55rem;
    font-size: .67rem;
  }

  .home-hero h1 {
    font-size: clamp(1.75rem, min(7vw, 6.8vh), 3.25rem);
  }

  .home-hero__description {
    font-size: clamp(.78rem, 1.8vh, .9rem);
    line-height: 1.45;
  }

  .home-primary-cta {
    min-height: 2.65rem;
  }

  .home-trust-points span,
  .home-service-pill {
    min-height: 1.75rem;
    padding-block: .2rem;
  }

  .home-footer__inner {
    min-height: 2.7rem;
    padding-block: .28rem;
  }
}

@media (max-height: 620px) {
  .home-hero .eyebrow {
    display: none;
  }

  .home-trust-points span {
    padding-inline: .42rem;
    font-size: .65rem;
  }

  .home-service-pill {
    font-size: .68rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .announcement-ticker {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .announcement-ticker::-webkit-scrollbar {
    display: none;
  }

  .announcement-ticker::before,
  .announcement-ticker::after {
    display: none;
  }

  .announcement-ticker__track {
    animation: none !important;
    transform: none !important;
  }

  .announcement-ticker__group[aria-hidden="true"] {
    display: none;
  }
}

@media (min-width: 900px) {
  body[data-page="home"] .nav-toggle {
    display: none;
  }
}


@media (min-height: 700px) {
  body[data-page="home"] {
    overflow-y: clip;
  }
}

@media (max-height: 699px) {
  body[data-page="home"] {
    height: auto;
    overflow-y: auto;
  }
}

/* توحيد الواجهات المختصرة والمرنة في جميع الصفحات */
body:not([data-page="home"]) {display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;overflow-x:hidden}
body:not([data-page="home"])>[data-site-header],body:not([data-page="home"])>[data-site-footer]{flex-shrink:0}
body:not([data-page="home"])>main{flex:1 1 auto;min-height:0}
.brand-logo{display:block;width:clamp(8.8rem,16vw,11.5rem);height:auto;max-height:3rem;object-fit:contain}
.footer-brand .brand-logo{filter:brightness(0) invert(1);opacity:.96;max-height:2.6rem}
.nav-shell{min-height:clamp(3.6rem,7vh,4.4rem)}
.utility-strip{flex-shrink:0}.utility-actions{min-height:2.15rem}
.flow-shell{padding:clamp(.75rem,2vh,1.4rem) 0 clamp(1.2rem,3vh,2.2rem)}
.flow-layout{gap:clamp(.75rem,2vw,1.25rem)}
.flow-sidebar{padding:clamp(.9rem,2vw,1.25rem);border-radius:clamp(.9rem,2vw,1.35rem)}
.flow-screen{padding:clamp(1rem,2.4vw,1.6rem);border-radius:clamp(.9rem,2vw,1.35rem)}
.flow-screen h2{font-size:clamp(1.2rem,3vw,1.65rem)}
.form-grid{gap:clamp(.75rem,1.5vh,1rem)}
.form-field{gap:.35rem}.form-field input,.form-field select,.form-field textarea{min-height:clamp(2.75rem,5.5vh,3.1rem);padding:.55rem .7rem}
.form-field textarea{min-height:clamp(5.5rem,15vh,8rem)}
.screen-actions{margin-top:clamp(.9rem,2vh,1.25rem);padding-top:clamp(.75rem,1.8vh,1rem)}
.section{padding:clamp(1.25rem,4vh,2.6rem) 0}.section-head{margin-bottom:clamp(.9rem,2vh,1.4rem)}
.card,.partner-card,.activity-block{padding:clamp(.9rem,2vw,1.25rem)}
.auth-section{min-height:auto;align-items:center}.auth-layout{gap:clamp(.8rem,2vw,1.2rem)}
.tabs{position:sticky;top:0;z-index:20;margin-bottom:.8rem;background:#eaf0f5;padding:.35rem;border-radius:.8rem}
.tab-panel{max-height:calc(100dvh - 12rem);overflow:auto;padding-inline:.15rem}
.dashboard-grid{gap:clamp(.75rem,1.8vw,1rem)}
.site-footer{padding:clamp(1.1rem,3vh,1.8rem) 0 .75rem;margin-top:0}.page-guidance{margin-bottom:1rem;padding:.75rem 1rem}.footer-grid{gap:1rem}.footer-bottom{margin-top:1rem;padding-top:.65rem}
.btn{min-height:clamp(2.75rem,5.5vh,3rem);padding:.55rem 1rem}
.empty-state{padding:clamp(1.25rem,4vh,2rem)}
@media(max-width:899px){.brand-logo{width:clamp(7.6rem,34vw,9.5rem)}.main-nav{top:3.8rem}.flow-sidebar{position:static}.tab-panel{max-height:none;overflow:visible}.site-footer .page-guidance{display:none}.footer-grid{grid-template-columns:1fr 1fr}.footer-grid>div:first-child{grid-column:1/-1}}
@media(max-width:679px){.utility-actions{justify-content:space-between}.flow-shell{padding-top:.55rem}.flow-sidebar p,.flow-sidebar .legal-note{display:none}.flow-sidebar h1{font-size:1rem}.progress-wrap{margin-top:.55rem}.screen-actions{position:sticky;bottom:0;z-index:18;margin-inline:-1rem;margin-bottom:-1rem;padding:.65rem 1rem calc(.65rem + env(safe-area-inset-bottom));background:rgba(255,255,255,.97);box-shadow:0 -8px 20px rgba(7,29,51,.08)}.footer-grid{grid-template-columns:1fr}.footer-grid>div:first-child{display:none}.site-footer{padding:.75rem 0}.footer-bottom{justify-content:center;text-align:center}.brand-logo{width:7.8rem}}
@media(max-height:700px) and (min-width:700px){.site-footer{padding:.55rem 0}.site-footer .page-guidance,.site-footer .footer-grid>div:first-child p{display:none}.footer-grid{grid-template-columns:1fr 1fr 1fr}.footer-bottom{margin-top:.45rem;padding-top:.4rem}.section{padding:1rem 0}.auth-section{min-height:0}.flow-shell{padding:.55rem 0}.flow-screen{padding:1rem}.tab-panel{max-height:calc(100dvh - 10.5rem)}}


/* Header and Footer الموحدان — قبول إلزامي لجميع الصفحات */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
}

body > main {
  flex: 1 0 auto;
  width: 100%;
}

body > .site-header,
body > .site-footer,
body > .announcement-ticker,
body > noscript {
  flex-shrink: 0;
}

.unified-site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0;
  background: rgba(255, 255, 255, .97);
  border-bottom: 1px solid var(--slate-200);
  box-shadow: 0 7px 22px rgba(7, 29, 51, .065);
  backdrop-filter: blur(12px);
}

.unified-header-shell {
  position: relative;
  min-height: clamp(3.65rem, 7vh, 4.4rem);
  display: flex;
  align-items: center;
  gap: clamp(.55rem, 1.5vw, 1.05rem);
}

.unified-brand {
  flex: 0 0 auto;
  min-width: 0;
  padding-block: .28rem;
}

.brand-logo {
  display: block;
  width: clamp(8.3rem, 15vw, 11rem);
  height: auto;
  max-height: clamp(2.5rem, 5.5vh, 3rem);
  object-fit: contain;
  object-position: center;
}

.current-page-label {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  min-height: 1.8rem;
  padding: .22rem .62rem;
  border: 1px solid #cce5e1;
  border-radius: 999px;
  color: var(--teal-600);
  background: var(--teal-100);
  font-size: clamp(.68rem, 1.5vw, .8rem);
  font-weight: 900;
  white-space: nowrap;
}

.unified-main-nav {
  margin-inline-start: auto;
}

.unified-main-nav a[aria-current="page"] {
  color: var(--teal-600);
  background: var(--teal-100);
  box-shadow: inset 0 0 0 1px rgba(8, 125, 115, .12);
}

.unified-site-header .nav-toggle {
  flex: 0 0 auto;
}

.unified-site-footer {
  margin-top: auto;
  padding: clamp(.75rem, 2vh, 1rem) 0;
  color: #d6e1ec;
  background: var(--navy-950);
  border-top: 1px solid rgba(255, 255, 255, .12);
}

.unified-footer-shell {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(.65rem, 2vw, 1.25rem);
}

.footer-logo-link {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: .65rem;
}

.footer-logo-plate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .26rem .48rem;
  border-radius: .65rem;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, .15);
}

.footer-logo {
  display: block;
  width: clamp(7.2rem, 13vw, 9rem);
  height: auto;
  max-height: 2.35rem;
  object-fit: contain;
}

.unified-footer-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .15rem clamp(.45rem, 1.4vw, .8rem);
}

.unified-footer-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: .2rem .35rem;
  border-radius: .45rem;
  color: #c5d3e1;
  font-size: clamp(.68rem, 1.45vw, .8rem);
  font-weight: 800;
}

.unified-footer-nav a:hover,
.unified-footer-nav a:focus-visible,
.unified-footer-nav a[aria-current="page"] {
  color: #fff;
  background: rgba(255, 255, 255, .1);
  text-decoration: underline;
  text-underline-offset: .22rem;
}

.unified-footer-copy {
  color: #aebed0;
  font-size: clamp(.66rem, 1.35vw, .76rem);
  white-space: nowrap;
}

body[data-page="home"] > .site-header {
  flex-shrink: 0;
}

body[data-page="home"] > .home-footer {
  flex-shrink: 0;
  margin-top: 0;
}

body[data-page="home"] .unified-site-header {
  position: relative;
}

@media (min-width: 900px) {
  .unified-site-header .nav-toggle {
    display: none;
  }

  .unified-site-header .main-nav {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .12rem;
    margin-inline-start: auto;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .unified-site-header .main-nav a {
    min-height: 2.45rem;
    padding: .4rem clamp(.48rem, .8vw, .72rem);
    font-size: clamp(.73rem, .95vw, .85rem);
    white-space: nowrap;
  }
}

@media (max-width: 899px) {
  .unified-header-shell {
    min-height: 3.65rem;
  }

  .brand-logo {
    width: clamp(7.5rem, 28vw, 9.2rem);
    max-height: 2.55rem;
  }

  .current-page-label {
    margin-inline-start: auto;
  }

  .unified-site-header .main-nav {
    top: calc(100% + .35rem);
    inset-inline: 0;
    max-height: min(70vh, 28rem);
    overflow-y: auto;
  }

  .unified-site-header .main-nav a {
    min-height: 2.75rem;
  }
}

@media (max-width: 560px) {
  .unified-header-shell {
    gap: .4rem;
  }

  .brand-logo {
    width: clamp(6.8rem, 31vw, 8rem);
  }

  .current-page-label {
    max-width: 7.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .unified-site-header .nav-toggle {
    width: 2.65rem;
    min-width: 2.65rem;
    padding: .45rem;
  }

  .unified-site-header .nav-toggle > span:not(.ui-icon) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  .unified-footer-shell {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: .5rem;
  }

  .footer-logo {
    width: 7.2rem;
  }

  .unified-footer-nav {
    gap: .08rem .38rem;
  }

  .unified-footer-nav a {
    min-height: 1.85rem;
    font-size: .68rem;
  }
}

@media print {
  .unified-site-header,
  .unified-site-footer {
    display: none !important;
  }
}

/* بوابة الإدارة الداخلية */
.admin-page {
  background:
    linear-gradient(180deg, rgba(228, 238, 246, .62), transparent 26rem),
    var(--page);
}

.admin-site-header {
  position: sticky;
  top: 0;
  z-index: 1100;
}

.admin-header-shell {
  min-height: clamp(3.8rem, 7vh, 4.55rem);
}

.admin-user-summary {
  display: grid;
  margin-inline-start: auto;
  text-align: end;
  line-height: 1.35;
}

.admin-user-summary strong {
  color: var(--navy-950);
  font-size: .86rem;
}

.admin-user-summary span {
  color: var(--slate-600);
  font-size: .72rem;
}

.admin-auth-section {
  padding-block: clamp(1.5rem, 5vh, 4rem);
}

.admin-auth-layout {
  max-width: 980px;
  margin-inline: auto;
}

.admin-security-aside {
  min-height: 100%;
}

.admin-main {
  flex: 1 1 auto;
  min-height: 0;
  padding: clamp(.75rem, 2.2vh, 1.35rem) 0 clamp(1.2rem, 3vh, 2rem);
}

.admin-shell {
  display: grid;
  gap: clamp(.75rem, 1.6vh, 1rem);
}

.admin-topbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(.9rem, 2vw, 1.25rem);
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, .95);
  box-shadow: var(--shadow-sm);
}

.admin-topbar h1 {
  margin: .2rem 0 .25rem;
  font-size: clamp(1.35rem, 3vw, 2rem);
}

.admin-topbar p {
  margin: 0;
  color: var(--slate-600);
  font-size: .86rem;
}

.admin-topbar-actions,
.admin-panel-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .45rem;
}

.admin-security-notice {
  margin: 0;
  font-size: .82rem;
}

.admin-tabs,
.admin-subtabs {
  display: flex;
  gap: .35rem;
  overflow-x: auto;
  padding: .38rem;
  border: 1px solid var(--slate-200);
  border-radius: .9rem;
  background: #eaf0f5;
  scrollbar-width: thin;
}

.admin-tabs {
  position: sticky;
  top: clamp(3.8rem, 7vh, 4.55rem);
  z-index: 50;
}

.admin-tab,
.admin-subtab {
  flex: 0 0 auto;
  min-height: 2.45rem;
  padding: .45rem .78rem;
  border: 0;
  border-radius: .65rem;
  color: var(--slate-700);
  background: transparent;
  font-weight: 900;
  font-size: .79rem;
  white-space: nowrap;
}

.admin-tab.active,
.admin-subtab.active {
  color: var(--teal-600);
  background: var(--white);
  box-shadow: 0 5px 15px rgba(7, 29, 51, .09);
}

.admin-panel {
  min-height: 0;
}

.admin-panel.active {
  animation: admin-panel-in .18s ease both;
}

@keyframes admin-panel-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}

.admin-metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .65rem;
  margin-bottom: .85rem;
}

.admin-metric-card {
  min-width: 0;
  padding: clamp(.85rem, 2vw, 1.1rem);
  border: 1px solid var(--slate-200);
  border-radius: .9rem;
  background: var(--white);
  box-shadow: var(--shadow-sm);
}

.admin-metric-card span,
.admin-metric-card small {
  display: block;
  color: var(--slate-600);
  font-size: .73rem;
}

.admin-metric-card strong {
  display: block;
  margin: .16rem 0;
  color: var(--navy-950);
  font-size: clamp(1.25rem, 3vw, 1.85rem);
  line-height: 1.2;
}

.admin-card-head {
  display: flex;
  justify-content: space-between;
  gap: .8rem;
  margin-bottom: .75rem;
}

.admin-card-head h2 {
  margin: 0 0 .18rem;
  font-size: 1.05rem;
}

.admin-card-head p {
  margin: 0;
  color: var(--slate-600);
  font-size: .78rem;
}

.admin-compact-list {
  display: grid;
  gap: .42rem;
}

.admin-list-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .7rem;
  min-height: 3.25rem;
  padding: .62rem .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .75rem;
  background: #fbfcfe;
  text-align: right;
}

.admin-list-row:hover {
  border-color: #b9d7d3;
  background: #f4fbfa;
}

.admin-list-row span:first-child {
  display: grid;
  min-width: 0;
}

.admin-list-row small,
.admin-table-wrap td small {
  display: block;
  color: var(--slate-600);
  font-size: .7rem;
  line-height: 1.45;
}

.admin-filterbar {
  display: grid;
  grid-template-columns: minmax(220px, 1.4fr) repeat(2, minmax(150px, .65fr));
  gap: .65rem;
  margin-bottom: .7rem;
  padding: .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .85rem;
  background: var(--white);
}

.admin-filterbar .form-field {
  gap: .25rem;
}

.admin-filterbar .form-field > span {
  color: var(--slate-600);
  font-size: .7rem;
  font-weight: 800;
}

.admin-filterbar input,
.admin-filterbar select {
  min-height: 2.6rem;
}

.admin-table-wrap {
  max-height: calc(100dvh - 14.5rem);
  overflow: auto;
  background: var(--white);
}

.admin-table-wrap table {
  min-width: 980px;
}

.admin-table-wrap thead {
  position: sticky;
  top: 0;
  z-index: 4;
}

.admin-table-wrap th,
.admin-table-wrap td {
  padding: .62rem .72rem;
  font-size: .78rem;
}

.admin-table-wrap td strong {
  display: block;
}

.admin-empty {
  padding: 1.1rem;
  box-shadow: none;
}

.admin-empty h3 {
  margin: 0;
  font-size: .9rem;
}

.admin-subtabs {
  width: fit-content;
  max-width: 100%;
  margin-bottom: .7rem;
}

.admin-detail-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.admin-detail-list {
  display: grid;
  gap: .45rem;
  margin: 0;
  padding-inline-start: 1.2rem;
}

.admin-detail-list li {
  padding: .45rem .55rem;
  border: 1px solid var(--slate-200);
  border-radius: .65rem;
  background: var(--slate-100);
}

.admin-json-compare {
  display: grid;
  gap: .7rem;
  margin-top: 1rem;
}

.admin-json-compare section {
  min-width: 0;
}

.admin-json-compare h3 {
  margin: 0 0 .35rem;
  font-size: .9rem;
}

.admin-json-compare pre {
  max-height: 260px;
  overflow: auto;
  margin: 0;
  padding: .75rem;
  border-radius: .7rem;
  color: #e5edf5;
  background: var(--navy-950);
  direction: ltr;
  text-align: left;
  font-size: .7rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.admin-dialog {
  width: min(calc(100% - 1.25rem), 760px);
}

.admin-dialog textarea {
  min-height: 6rem;
}

.admin-footer-note {
  margin: 0;
  color: #c5d3e1;
  text-align: center;
  font-size: .75rem;
}

.admin-site-footer {
  margin-top: auto;
}

.admin-page .status-badge {
  white-space: nowrap;
}

@media (min-width: 720px) {
  .admin-metric-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .admin-metric-grid-small {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .admin-json-compare {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .admin-user-summary {
    display: none;
  }

  .admin-tabs {
    top: 3.65rem;
  }

  .admin-table-wrap {
    max-height: none;
  }
}

@media (max-width: 679px) {
  .admin-header-shell .current-page-label {
    display: none;
  }

  .admin-header-shell .brand-logo {
    width: 7rem;
  }

  .admin-header-shell .btn {
    min-height: 2.45rem;
    padding-inline: .65rem;
    font-size: .72rem;
  }

  .admin-main {
    padding-top: .5rem;
  }

  .admin-topbar {
    align-items: stretch;
  }

  .admin-topbar-actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .admin-topbar-actions .btn {
    min-width: 0;
    padding-inline: .45rem;
    font-size: .69rem;
  }

  .admin-security-notice {
    font-size: .72rem;
  }

  .admin-tabs {
    margin-inline: -.15rem;
  }

  .admin-filterbar {
    grid-template-columns: 1fr;
    padding: .6rem;
  }

  .admin-metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-metric-card strong {
    font-size: 1.15rem;
  }

  .admin-overview-grid {
    grid-template-columns: 1fr;
  }

  .admin-detail-grid {
    grid-template-columns: 1fr;
  }

  .admin-site-footer .unified-footer-shell {
    grid-template-columns: 1fr;
  }

  .admin-site-footer .footer-logo-link {
    display: none;
  }
}

@media print {
  .admin-site-header,
  .admin-site-footer,
  .admin-tabs,
  .admin-topbar-actions,
  .admin-security-notice,
  .admin-filterbar,
  .table-actions {
    display: none !important;
  }

  .admin-panel:not(.active) {
    display: none !important;
  }

  .admin-table-wrap {
    max-height: none;
    overflow: visible;
    border: 0;
  }
}

/* المرحلة الأولى: مشكلة السيارة + الموقع + واتساب */
.stage-one-home .stage-one-disclaimer,
.stage-one-disclaimer {
  max-width: 48rem;
  margin: 0;
  padding: clamp(.65rem, 1.4vh, .85rem) clamp(.8rem, 1.8vw, 1rem);
  border: 1px solid #c8dce9;
  border-radius: .85rem;
  color: var(--slate-700);
  background: rgba(255, 255, 255, .78);
  font-size: clamp(.7rem, 1.55vh, .84rem);
  line-height: 1.6;
}

.dispatch-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: .55rem;
  margin-top: .9rem;
}

.dispatch-summary span {
  display: grid;
  place-items: center;
  min-height: 4.25rem;
  padding: .65rem;
  border: 1px solid var(--slate-200);
  border-radius: .8rem;
  color: var(--slate-700);
  background: var(--slate-100);
  text-align: center;
  font-size: .78rem;
}

.dispatch-summary strong {
  color: var(--teal-600);
  font-size: 1.15rem;
}

.stage-one-join .flow-sidebar {
  background: linear-gradient(155deg, var(--navy-950), var(--navy-800));
}

.stage-one-join .choice-grid .radio-line {
  min-height: 3rem;
  padding: .65rem .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .75rem;
  background: var(--white);
}

.compact-page {
  display: grid;
  align-items: center;
  padding-block: clamp(1.2rem, 5vh, 3rem);
}

.narrow-container {
  width: min(calc(100% - 1.4rem), 760px);
  margin-inline: auto;
}

.future-page {
  background:
    radial-gradient(circle at 15% 15%, rgba(13, 151, 137, .12), transparent 30%),
    var(--page);
}

.future-feature-card {
  text-align: center;
}

.future-feature-card .card-icon {
  margin-inline: auto;
}

.future-feature-card h1 {
  margin: .5rem 0;
  font-size: clamp(1.5rem, 5vw, 2.2rem);
}

.future-feature-card > p {
  max-width: 42rem;
  margin-inline: auto;
  color: var(--slate-600);
}

.future-feature-card .info-panel {
  text-align: right;
}

.track-layout {
  display: grid;
  gap: clamp(.75rem, 2vw, 1.2rem);
}

.stage-one-pending-card {
  border-color: #b8ddd8;
  background: linear-gradient(145deg, #fff, #f1fbf9);
}

.acceptance-privacy-note {
  padding: .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .75rem;
  color: var(--slate-600);
  background: var(--slate-100);
  font-size: .8rem;
}

@media (max-width: 679px) {
  .dispatch-summary {
    grid-template-columns: 1fr;
  }

  .dispatch-summary span {
    min-height: 3.2rem;
  }

  .stage-one-home .home-trust-points {
    gap: .3rem;
  }

  .stage-one-home .home-trust-points span {
    font-size: .66rem;
    padding-inline: .45rem;
  }
}

@media (max-height: 720px) and (min-width: 700px) {
  .stage-one-home .stage-one-disclaimer {
    padding-block: .45rem;
    line-height: 1.4;
  }
}


/* الموقع في بداية الرحلة، OTP، وتقييم Google Maps */
.location-first-card { display:grid; gap:.55rem; padding:clamp(.85rem,2vw,1.15rem); border:1px solid #b8ddd8; border-radius:var(--radius); background:linear-gradient(145deg,#f8fffe,#e9f8f5); }
.otp-panel { display:grid; gap:1rem; padding:clamp(1rem,2.5vw,1.35rem); border:1px solid #b8d4ea; border-radius:var(--radius); background:#f4f9fd; }
.otp-panel h3,.otp-panel p { margin:.2rem 0 0; }
.otp-demo-code { display:flex; align-items:center; justify-content:center; min-height:3.4rem; padding:.65rem 1rem; border:2px dashed var(--blue-600); border-radius:.9rem; background:#fff; color:var(--navy-900); font-size:clamp(1.25rem,4vw,1.8rem); font-weight:900; letter-spacing:.18em; direction:ltr; }
.otp-actions { display:flex; align-items:end; gap:.5rem; flex-wrap:wrap; }
.rating-stack { display:grid; gap:.65rem; min-width:min(100%,18rem); }
.rating-source,.google-source { display:block; color:var(--slate-600); font-size:.72rem; font-weight:900; }
.google-rating-block { display:grid; gap:.12rem; padding:.75rem .85rem; border:1px solid #d9dee5; border-radius:.75rem; background:#fff; }
.google-rating-block[data-google-status="ready"] { border-color:#b9d9c7; background:#f8fcfa; }
.google-rating-block[data-google-status="error"] { border-color:#ead1a1; background:#fffaf0; }
.google-rating-block strong { color:var(--slate-900); }
.google-rating-block small { color:var(--slate-600); }
.google-rating-block .text-link { margin-top:.25rem; font-size:.78rem; }
@media (max-width:679px){ .otp-actions .btn{flex:1 1 9rem;} .partner-head{grid-template-columns:1fr;} .rating-stack{min-width:0;} }

```

## MODIFIED: `assets/track.js`

```javascript
(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  let currentRequest = null;
  let currentReferral = null;
  let customerMessage = "";

  const acceptedReferralFor = (request) => request?.acceptedReferralId ? WA.Storage.findById("wa_referrals", request.acceptedReferralId) : null;
  const referralsFor = (requestId) => WA.Storage.get("wa_referrals").filter((row) => row.requestId === requestId).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  const formatDeadline = (value) => value ? WA.UI.formatDate(value) : "";

  const statusHtml = (request, referrals) => {
    const accepted = acceptedReferralFor(request);
    if (accepted) return `<div class="success-panel"><strong>قبلت ورشة طلبك</strong><p>تم كشف بيانات التواصل للورشة المقبولة فقط، وأُغلق الطلب أمام بقية ورش الدفعة.</p></div>`;
    if (request.status === "no_acceptance" || request.status === "no_match") return `<div class="warning-panel"><strong>لم يتم قبول الطلب حتى الآن</strong><p>${WA.UI.escapeHtml(request.noMatchReason || "لم تقبل أي ورشة ضمن المهلة الحالية، ويستطيع فريق التشغيل إرسال الطلب إلى دفعة أخرى.")}</p></div>`;
    const active = referrals.filter((row) => ["sent", "viewed"].includes(row.status)).length;
    return `<div class="info-panel"><strong>بانتظار استجابة ورشة</strong><p>يجري البحث عن ورشة مناسبة دون مشاركة بيانات التواصل. ستظهر بيانات الورشة عند استقبال الطلب.</p></div>`;
  };

  const timelineHtml = (request, referrals) => {
    const batches = [...new Set(referrals.map((row) => Number(row.batchNumber || 1)))];
    const items = [`<div class="timeline-item"><span class="timeline-dot">✓</span><div class="timeline-body"><strong>تم إنشاء الطلب</strong><small>${WA.UI.formatDate(request.createdAt || request.updatedAt)}</small></div></div>`];
    batches.forEach((batch) => {
      const rows = referrals.filter((row) => Number(row.batchNumber || 1) === batch);
      const accepted = rows.find((row) => row.acceptedAt);
      items.push(`<div class="timeline-item"><span class="timeline-dot">${batch}</span><div class="timeline-body"><strong>الدفعة ${batch}: أُرسل إلى ${rows.length} ورش</strong><small>${accepted ? "قبلت ورشة واحدة وأُغلقت بقية الفرص" : rows.every((row) => ["rejected", "expired"].includes(row.status)) ? "انتهت دون قبول" : "بانتظار القبول"}</small></div></div>`);
      if (accepted) items.push(`<div class="timeline-item"><span class="timeline-dot">✓</span><div class="timeline-body"><strong>تم قبول الطلب</strong><small>${WA.UI.formatDate(accepted.acceptedAt)}</small></div></div>`);
    });
    return items.join("");
  };

  const renderOutcomeChoices = () => {
    const choices = [
      ["contacted", "تم التواصل"], ["appointment_set", "تم تحديد موعد"], ["arrived", "وصلت إلى الورشة"],
      ["service_received", "تمت الخدمة"], ["service_not_received", "لم تتم الخدمة"], ["not_agreed", "لم أتفق معها"]
    ];
    $("#outcomeChoices").innerHTML = choices.map(([value, label]) => `<button type="button" class="choice-btn${currentReferral?.resultStatus === value ? " selected" : ""}" data-outcome="${value}">${label}</button>`).join("");
    $$("[data-outcome]").forEach((button) => button.addEventListener("click", () => {
      try {
        currentReferral = WA.Lifecycle.updateReferralOutcome(currentReferral.id, button.dataset.outcome, "customer");
        WA.UI.showToast("تم تحديث نتيجة الإحالة", "success");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    }));
  };

  const renderRequest = (requestId) => {
    const request = WA.Storage.findById("wa_requests", requestId);
    if (!request) return;
    currentRequest = request;
    const customer = WA.Storage.findById("wa_customers", request.customerId);
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    const referrals = referralsFor(request.id);
    currentReferral = acceptedReferralFor(request);
    $("#lookupCard").hidden = true;
    $("#requestView").hidden = false;
    $("#requestTitle").textContent = request.humanId;
    $("#requestSubtitle").textContent = `${WA.UI.vehicleText(vehicle || request.vehicleSnapshot || {})} — ${request.city || ""}`;
    $("#requestMeta").innerHTML = `<span>${WA.UI.statusLabel(request.status)}</span><span>${request.ai?.specialty || "فحص وتشخيص عام"}</span><span>${request.ai?.urgency || "استعجال غير محدد"}</span>`;
    $("#statusPanel").innerHTML = statusHtml(request, referrals);
    $("#requestTimeline").innerHTML = timelineHtml(request, referrals);
    const trackPath = `track.html?token=${encodeURIComponent(request.publicToken)}`;
    const fullLink = new URL(trackPath, location.href).href;
    $("#trackPrivateLink").value = fullLink;
    $("#copyTrackLink").onclick = () => WA.UI.copyText(fullLink);

    if (currentReferral) {
      const partner = WA.Storage.findById("wa_partners", currentReferral.partnerId);
      $("#partnerPanel").innerHTML = WA.UI.renderPartnerCard({ partner, referral: currentReferral, matchReason: currentReferral.matchReason });
      $("#contactPanel").hidden = false;
      $("#outcomePanel").hidden = false;
      $("#ratingPanel").hidden = Boolean(WA.Storage.get("wa_ratings").find((row) => row.referralId === currentReferral.id));
      customerMessage = WA.UI.buildWhatsappMessage({ request, customer, vehicle, partner });
      $("#customerWhatsapp").href = WA.UI.whatsappUrl(partner?.whatsapp, customerMessage);
      $("#customerWhatsapp").onclick = () => WA.Lifecycle.markWhatsappOpened(currentReferral.id);
      $("#copyCustomerMessage").onclick = () => WA.UI.copyText(customerMessage);
      renderOutcomeChoices();
      const eligibility = WA.Lifecycle.alternativeEligibility(request);
      $("#alternativePanel").hidden = !eligibility.allowed;
      $("#alternativeHelp").textContent = eligibility.allowed
        ? `يمكن طلب بديل حتى ${formatDeadline(eligibility.deadline)}. سنستبعد الورشة الحالية ونبحث عن ورشة أخرى مناسبة.`
        : eligibility.reason;
    } else {
      $("#partnerPanel").innerHTML = "";
      $("#contactPanel").hidden = true;
      $("#outcomePanel").hidden = true;
      $("#alternativePanel").hidden = true;
      $("#ratingPanel").hidden = true;
    }
  };

  const resolveRequest = () => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      const request = WA.Lifecycle.findRequestByToken(token);
      if (request) { renderRequest(request.id); return; }
      $("#trackError").textContent = "الرابط غير صالح أو لم يعد متاحًا.";
    }
  };

  const bind = () => {
    $("#trackForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const request = WA.Lifecycle.findRequestByHumanId($("#requestNumber").value);
      const phone = WA.Storage.sanitizePhone($("#trackPhone").value);
      const customer = request ? WA.Storage.findById("wa_customers", request.customerId) : null;
      if (!request || !customer || customer.phone !== phone) { $("#trackError").textContent = "لم نجد طلبًا مطابقًا لرقم الطلب والجوال."; return; }
      $("#trackError").textContent = "";
      history.replaceState(null, "", `track.html?token=${encodeURIComponent(request.publicToken)}`);
      renderRequest(request.id);
    });

    $("#requestAlternative").addEventListener("click", () => {
      const reason = $("#alternativeReason").value;
      if (!reason) { WA.UI.showToast("اختر سبب عدم الاتفاق", "error"); return; }
      if (!confirm("سيتم إغلاق الإحالة الحالية والبحث عن ورشة أخرى. هل تريد المتابعة؟")) return;
      try {
        const result = WA.Lifecycle.requestAlternative(currentRequest.id, reason);
        WA.UI.showToast(result.referrals.length === 3 ? "بدأ البحث عن ورشة أخرى" : "لم تتوفر ورشة بديلة حاليًا", result.referrals.length === 3 ? "success" : "info");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    });

    $("#ratingForm").addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        WA.Lifecycle.createRating({
          requestId: currentRequest.id, referralId: currentReferral.id,
          overall: $("#ratingOverall").value, recommend: $("#ratingRecommend").value,
          comment: $("#ratingComment").value
        });
        WA.UI.showToast("شكرًا، تم حفظ تقييمك", "success");
        renderRequest(currentRequest.id);
      } catch (error) { WA.UI.showToast(error.message, "error"); }
    });
  };

  const init = () => { bind(); resolveRequest(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();

```

## MODIFIED: `customer.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/>
<meta content="#0b1d33" name="theme-color"/>
<meta content="أنشئ طلب مشكلة السيارة في وين أوديها واحصل على توجيه فني مبدئي وإحالة إلى ورش مناسبة." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>ابدأ طلبك — وين أوديها</title>
<link href="assets/images/favicon.png" rel="icon" type="image/png"/>
<link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="customer">
<noscript><div class="noscript-banner">فعّل JavaScript لإكمال الطلب وحفظ تقدمك.</div></noscript>
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">ابدأ طلبك</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a aria-current="page" href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="flow-shell" id="main-content">
<div class="container flow-layout stage-one-flow">
<aside aria-label="تقدم الطلب" class="flow-sidebar">
<div class="kicker">طلب مشكلة السيارة</div>
<h1>عندي مشكلة في السيارة</h1>
<p>حدد موقعك، ثم أدخل بياناتك وسيارتك بخطوات قصيرة.</p>
<div class="progress-wrap">
<div class="progress-meta"><span id="progressLabel">بياناتك</span><span id="progressPercent">0%</span></div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-track" role="progressbar"><div class="progress-bar" id="progressBar"></div></div>
</div>
<div class="legal-note mt-24">الخدمة مجانية للعميل. النتيجة توجيه فني مبدئي وليست تشخيصًا نهائيًا.</div>
</aside>
<div aria-live="polite" class="flow-content">
<section class="flow-screen active" data-screen="customer" tabindex="-1">
<div class="kicker">1 — الموقع والتواصل</div>
<h2>ابدأ من موقعك</h2>
<p>نستخدم المنطقة والمدينة لاختيار الورش المناسبة، ويمكنك تعديل الاختيار يدويًا في أي وقت.</p>
<div class="location-first-card">
<button class="btn btn-light btn-block" data-icon="location" id="detectLocation" type="button">تحديد موقعي تلقائيًا</button>
<div class="field-hint" id="locationStatus" role="status">لم تتم مشاركة الموقع.</div>
</div>
<form id="customerForm" novalidate="">
<div class="form-grid two mt-16">
<div class="form-field"><label class="required" for="region">المنطقة</label><select id="region" required=""></select><span class="field-error" data-error-for="region"></span></div>
<div class="form-field"><label class="required" for="city">المدينة</label><select disabled="" id="city" required=""><option value="">اختر المنطقة أولًا</option></select><span class="field-error" data-error-for="city"></span></div>
<div class="form-field"><label class="required" for="firstName">الاسم الأول</label><input autocomplete="given-name" id="firstName" maxlength="40" required=""/><span class="field-error" data-error-for="firstName"></span></div>
<div class="form-field"><label class="required" for="phone">رقم الجوال السعودي</label><input autocomplete="tel" id="phone" inputmode="tel" maxlength="10" placeholder="05XXXXXXXX" required=""/><span class="field-error" data-error-for="phone"></span></div>
</div>
<section class="otp-panel mt-16" hidden="" id="otpPanel">
<div><span class="pill">تحقق تجريبي</span><h3>رمز التحقق</h3><p>في الاختبار يظهر الرمز ويُكتب تلقائيًا. عند الإطلاق يُستبدل برسالة SMS أو واتساب رسمية.</p></div>
<div aria-live="polite" class="otp-demo-code" id="otpCodeDisplay"></div>
<div class="form-grid two">
<div class="form-field"><label class="required" for="otpInput">أدخل رمز التحقق</label><input autocomplete="one-time-code" id="otpInput" inputmode="numeric" maxlength="6"/><span class="field-error" data-error-for="otpInput"></span></div>
<div class="otp-actions"><button class="btn btn-light" id="verifyOtp" type="button">تحقق من الرمز</button><button class="btn btn-ghost" id="resendOtp" type="button">إنشاء رمز جديد</button></div>
</div>
<div class="field-hint" id="otpStatus" role="status"></div>
</section>
<div class="form-field mt-16"><label for="preciseLocation">وصف الموقع — اختياري</label><input id="preciseLocation" maxlength="400" placeholder="مثال: حي الريان، قرب محطة كذا"/></div>
<div class="screen-actions"><a class="btn btn-ghost" href="index.html">إلغاء</a><button class="btn btn-primary" id="customerNext" type="submit">التالي</button></div>
</form>
</section>
<section class="flow-screen" data-screen="vehicle" tabindex="-1">
<div class="kicker">2 — السيارة</div><h2>اختر بيانات سيارتك</h2><p>اختر الشركة أولًا لتظهر موديلاتها فقط.</p>
<form id="vehicleForm" novalidate="">
<div class="form-grid two">
<div class="form-field"><label class="required" for="make">الشركة المصنعة</label><select id="make" required=""></select><span class="field-error" data-error-for="make"></span></div>
<div class="form-field" hidden="" id="makeOtherField"><label class="required" for="makeOther">اسم الشركة</label><input id="makeOther" maxlength="60"/><span class="field-error" data-error-for="makeOther"></span></div>
<div class="form-field"><label class="required" for="model">الموديل</label><select disabled="" id="model" required=""><option value="">اختر الشركة أولًا</option></select><span class="field-error" data-error-for="model"></span></div>
<div class="form-field" hidden="" id="modelOtherField"><label class="required" for="modelOther">اسم الموديل</label><input id="modelOther" maxlength="60"/><span class="field-error" data-error-for="modelOther"></span></div>
<div class="form-field"><label class="required" for="year">سنة الصنع</label><select id="year" required=""></select><span class="field-error" data-error-for="year"></span></div>
<div class="form-field"><label for="mileage">ممشى السيارة — اختياري</label><select id="mileage"></select></div>
</div>
<div class="screen-actions"><button class="btn btn-ghost" data-back="customer" type="button">السابق</button><button class="btn btn-primary" type="submit">التالي</button></div>
</form>
</section>
<section class="flow-screen" data-screen="path" tabindex="-1">
<div class="kicker">4 — وصف المشكلة</div><h2>وش المشكلة في سيارتك؟</h2><p>اشرح المشكلة بطريقتك، ولا تحتاج إلى معرفة المصطلحات الفنية.</p>
<form id="pathForm" novalidate="">
<div class="form-field"><label class="required" for="problem">وصف المشكلة</label><textarea id="problem" maxlength="1200" placeholder="مثال: السيارة ترج إذا وقفت عند الإشارة وتظهر لمبة المكينة" required=""></textarea><span class="field-hint">اذكر متى تظهر المشكلة وأي صوت أو لمبة أو رائحة لاحظتها.</span><span class="field-error" data-error-for="problem"></span></div>
<div class="form-field mt-16"><label for="safeToDriveAnswer">هل ترى أن قيادة السيارة آمنة الآن؟</label><select id="safeToDriveAnswer"><option value="">غير محدد</option><option>نعم</option><option>لا</option><option>غير متأكد</option></select><span class="field-hint">عند الشك أو وجود فرامل ضعيفة أو حرارة شديدة أو رائحة وقود، لا تستمر في القيادة.</span></div>
<div class="screen-actions"><button class="btn btn-ghost" data-back="vehicle" type="button">السابق</button><button class="btn btn-primary" type="submit">حلّل الوصف</button></div>
</form>
</section>
<section class="flow-screen" data-screen="analyzing" tabindex="-1">
<div class="loading-shell"><div aria-hidden="true" class="loader-ring"></div><h2>نراجع وصفك</h2><p>نحدد التخصص والاستعجال، ونطرح أسئلة إضافية فقط عند الحاجة.</p><div class="loader-steps" id="analysisSteps"><div class="loader-step">فهم الأعراض</div><div class="loader-step">فحص مؤشرات الخطر</div><div class="loader-step">تحديد الحاجة إلى أسئلة</div></div></div>
</section>
<section class="flow-screen" data-screen="questions" tabindex="-1">
<div class="kicker" id="questionTitle">سؤال توضيحي</div><h2 id="questionText"></h2><p>اختر الإجابة الأقرب، ويمكنك اختيار «غير متأكد».</p><div class="choice-grid" id="answerChoices"></div><div class="screen-actions"><button class="btn btn-ghost" id="questionBack" type="button">السابق</button><button class="btn btn-primary" disabled="" id="questionNext" type="button">التالي</button></div>
</section>
<section class="flow-screen" data-screen="guidance" tabindex="-1">
<div class="kicker">5 — التوجيه المبدئي</div><h2>هذا هو الاتجاه الأقرب</h2><div class="danger-panel" hidden="" id="dangerPanel"></div>
<div class="guidance-grid"><div class="guidance-item"><span>المشكلة المتوقعة مبدئيًا</span><strong id="expectedIssue"></strong></div><div class="guidance-item"><span>التخصص المناسب</span><strong id="specialty"></strong></div><div class="guidance-item"><span>درجة الاستعجال</span><strong id="urgency"></strong></div><div class="guidance-item"><span>ما ينبغي فعله الآن</span><strong id="nextStep"></strong></div></div>
<div class="legal-note mt-16" id="legalNotice"></div>
<div class="screen-actions"><button class="btn btn-ghost" data-back="path" type="button">تعديل الوصف</button><button class="btn btn-primary" id="guidanceNext" type="button">متابعة إرسال الطلب</button></div>
</section>
<section class="flow-screen" data-screen="consent" tabindex="-1">
<div class="kicker">6 — الموافقة والإرسال</div><h2>راجع المشاركة قبل الإرسال</h2><p>سنشارك ملخص الحالة مع عدد محدود من الورش المناسبة دون بيانات التواصل، ثم نعرض لك الورشة التي تستقبل الطلب.</p>
<div class="guidance-grid" id="reviewContent"></div>
<form id="consentForm" novalidate="">
<div class="checkbox-stack mt-24">
<label class="checkbox-line"><input id="dataSharingAccepted" required="" type="checkbox"/><span>أوافق على مشاركة ملخص الطلب وبيانات السيارة مع ورش مناسبة، ومشاركة اسمي الأول ورقم جوالي مع الورشة التي تستقبل الطلب.</span></label>
<label class="checkbox-line"><input id="privacyAccepted" required="" type="checkbox"/><span>أوافق على <a href="privacy.html" rel="noopener" target="_blank">سياسة الخصوصية</a> واستخدام البيانات لتنفيذ الطلب ومتابعته.</span></label>
<label class="checkbox-line"><input id="termsAccepted" required="" type="checkbox"/><span>أوافق على <a href="terms.html" rel="noopener" target="_blank">الشروط وحدود مسؤولية المنصة</a>.</span></label>
<label class="checkbox-line"><input id="marketingMessages" type="checkbox"/><span>أوافق اختياريًا على الرسائل التسويقية. رسائل الطلب التشغيلية لا تعتمد على هذا الخيار.</span></label>
</div>
<div class="screen-actions"><button class="btn btn-ghost" data-back="guidance" type="button">السابق</button><button class="btn btn-primary" type="submit">إنشاء الطلب وإرساله</button></div>
</form>
</section>
<section class="flow-screen" data-screen="dispatching" tabindex="-1">
<div class="loading-shell"><div aria-hidden="true" class="loader-ring"></div><h2>ننشىء طلبك ونجهز إرساله</h2><div class="loader-steps"><div class="loader-step">إنشاء رقم الطلب</div><div class="loader-step">اختيار ورش مناسبة</div><div class="loader-step">تجهيز الإحالة ومتابعة الاستجابة</div></div></div>
</section>
<section class="flow-screen" data-screen="result" tabindex="-1">
<div class="success-panel" id="resultHeader"></div>
<div class="stage-one-pending-card mt-16"><span class="status-badge warning">جاري البحث</span><h2>جاري البحث عن ورشة مناسبة</h2><p>لن تُشارك بيانات التواصل إلا مع الورشة التي تستقبل الطلب. تابع الحالة من رابطك الخاص.</p><div class="dispatch-summary" id="dispatchSummary"></div></div>
<section class="private-link-card mt-24"><div><span class="pill">احتفظ به</span><h2>رابط طلبك الخاص</h2><p>للمتابعة وطلب ورشة بديلة خلال 24 ساعة من قبول الورشة.</p></div><div class="compact-link-row"><input aria-label="رابط الطلب الخاص" id="privateLink" readonly=""/><button aria-label="نسخ رابط الطلب" class="icon-action" id="copyPrivateLink" type="button">نسخ</button><a class="icon-action" href="track.html" id="openTrackLink">فتح المتابعة</a></div></section>
</section>
<section class="flow-screen" data-screen="noMatch" tabindex="-1"><div class="empty-state"><h2>لم نجد ورشة مناسبة حاليًا</h2><p id="noMatchReason"></p><p>حفظنا طلبك. يمكنك تعديل المدينة أو إعادة المحاولة لاحقًا.</p><div class="screen-actions"><button class="btn btn-light" data-back="customer" type="button">تعديل الموقع</button><a class="btn btn-primary" href="index.html">الرئيسية</a></div></div></section>
</div>
</div>
</main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/otp.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/ai-engine.js"></script><script defer="" src="assets/matching-engine.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script><script defer="" src="assets/customer.js"></script>
</body>
</html>

```

## MODIFIED: `index.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/>
<meta content="وين أوديها منصة مجانية للعميل تساعدك على فهم مشكلة سيارتك مبدئيًا والوصول إلى ورشة مناسبة." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>وين أوديها — قل لنا وش فيها ونقول لك وين توديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="home">
<div aria-label="مزايا وين أوديها" class="announcement-ticker" role="region"><div class="announcement-ticker__track"><div class="announcement-ticker__group"><span>🚗 صف مشكلة سيارتك</span><span>💸 الخدمة مجانية للعميل</span><span>🧭 توجيه فني مبدئي</span><span>🔧 ورش مناسبة حسب طلبك</span><span>🔒 مشاركة بياناتك بموافقتك</span><span>⭐ تابع الطلب وقيّم التجربة</span></div><div aria-hidden="true" class="announcement-ticker__group"><span>🚗 صف مشكلة سيارتك</span><span>💸 الخدمة مجانية للعميل</span><span>🧭 توجيه فني مبدئي</span><span>🔧 ورش مناسبة حسب طلبك</span><span>🔒 مشاركة بياناتك بموافقتك</span><span>⭐ تابع الطلب وقيّم التجربة</span></div></div></div>
<noscript><div class="noscript-banner">فعّل JavaScript لإكمال طلبك وحفظ تقدمك.</div></noscript>
<header class="site-header unified-site-header" data-unified-header=""><a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a><div class="container nav-shell unified-header-shell"><a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html"><img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/></a><span aria-current="page" class="current-page-label">الرئيسية</span><button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button><nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a aria-current="page" href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav></div></header>
<main class="home-main" id="main-content">
<section aria-labelledby="home-title" class="home-hero stage-one-home"><div class="container home-hero__content"><div class="eyebrow">خدمة واضحة ومباشرة</div><h1 id="home-title">عندك مشكلة في السيارة؟<span>قل لنا وش فيها، ونقول لك وين توديها.</span></h1><p class="home-hero__description">صف المشكلة بطريقتك، ونحدد لك التخصص ودرجة الاستعجال مبدئيًا، ثم نساعدك على الوصول إلى ورشة مناسبة والتواصل معها بسهولة.</p><div class="home-hero__actions"><a class="btn btn-primary home-primary-cta" data-icon="car" href="customer.html?fresh=1">ابدأ طلبك مجانًا</a><a class="home-track-link" data-icon="track" href="track.html">تابع طلبك السابق</a></div><div aria-label="عناصر الثقة" class="home-trust-points"><span data-icon="check">صفر إلى ثلاثة أسئلة فقط عند الحاجة</span><span data-icon="shield">مشاركة البيانات بموافقتك</span><span data-icon="star">طلب بديل خلال 24 ساعة</span></div><div class="stage-one-disclaimer"><strong>مهم:</strong> النتيجة توجيه فني مبدئي وليست تشخيصًا نهائيًا. التشخيص والأسعار والإصلاح والضمان مسؤولية الورشة بعد الفحص الفعلي.</div></div></section>
</main>
<footer class="site-footer unified-site-footer home-footer" data-unified-footer=""><div class="container unified-footer-shell"><a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a><nav aria-label="روابط الموقع" class="unified-footer-nav"><a aria-current="page" href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav><span class="unified-footer-copy">© 2026 وين أوديها</span></div></footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script>
</body>
</html>

```

## MODIFIED: `join-status.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/><meta content="متابعة حالة طلب الانضمام إلى شبكة شركاء وين أوديها." name="description"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>حالة طلب الانضمام — وين أوديها؟</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="join-status">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">متابعة الانضمام</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header><main class="section" id="main-content"><div class="container">
<section class="card" id="joinLookup"><div class="section-head"><div class="kicker">متابعة طلب الشراكة</div><h1>حالة طلب الانضمام</h1><p>أدخل رقم طلب الانضمام ورقم الجوال للاطلاع على آخر تحديث.</p></div><form class="form-grid two" id="joinLookupForm"><div class="form-field"><label class="required" for="joinNumber">رقم الطلب</label><input id="joinNumber" placeholder="JOIN-12345" required=""/></div><div class="form-field"><label class="required" for="joinPhone">رقم الجوال</label><input id="joinPhone" inputmode="tel" maxlength="10" required=""/></div><button class="btn btn-primary" type="submit">عرض الحالة</button></form></section>
<section class="card" hidden="" id="joinResult"><div class="kicker">طلب الشراكة</div><div id="joinResultContent"></div><div class="button-row mt-16"><a class="btn btn-light" href="join-status.html">بحث آخر</a><a class="btn btn-primary" href="index.html">الرئيسية</a></div></section>
<section class="empty-state" hidden="" id="joinNotFound"><h1>لم نعثر على طلب الانضمام</h1><p>تحقق من رقم الطلب والجوال ثم أعد المحاولة.</p><a class="btn btn-primary" href="join-status.html">المحاولة مرة أخرى</a></section>
</div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer><script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script><script defer="" src="assets/join-status.js"></script>
</body></html>
```

## MODIFIED: `join.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/>
<meta content="#0b1d33" name="theme-color"/>
<meta content="قدّم طلب انضمام ورشتك إلى شبكة وين أوديها للمرحلة الأولى." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>انضم بورشتك — وين أوديها</title>
<link href="assets/images/favicon.png" rel="icon" type="image/png"/>
<link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="join">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">انضم بورشتك</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="flow-shell stage-one-join" id="main-content">
<div class="container flow-layout">
<aside class="flow-sidebar">
<div class="kicker light-kicker">شراكة </div>
<h1>استقبل طلبات مناسبة لتخصص ورشتك</h1>
<p>نسجل تخصصاتك ومدينتك وساعات عملك، ثم نرسل لك فرص إحالة مناسبة عبر واتساب.</p>
<div class="progress-wrap">
<div class="progress-meta"><span id="joinProgressLabel">بيانات الورشة</span><span id="joinProgressPercent">25%</span></div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-track" role="progressbar"><div class="progress-bar" id="joinProgressBar"></div></div>
</div>
<div class="legal-note mt-24">يتم قبول الإحالة عبر رابط خاص يصل إلى الورشة. أول ورشة تقبل تحصل على بيانات العميل.</div>
</aside>
<div class="flow-content">
<form id="joinForm" novalidate="">
<input id="partnerType" type="hidden" value="workshop"/>
<section class="flow-screen active" data-join-step="1" tabindex="-1">
<div class="kicker">الخطوة 1 من 4</div>
<h2>بيانات الورشة</h2>
<p>أدخل بيانات التواصل والموقع التي سيعتمد عليها فريق التشغيل.</p>
<div class="form-grid two">
<div class="form-field"><label class="required" for="businessName">اسم المنشأة</label><input id="businessName" maxlength="100" required=""/></div>
<div class="form-field"><label class="required" for="tradeName">الاسم التجاري</label><input id="tradeName" maxlength="100" required=""/></div>
<div class="form-field"><label class="required" for="activityDescription">وصف مختصر للنشاط</label><textarea id="activityDescription" maxlength="500" required=""></textarea></div>
<div class="form-field"><label class="required" for="acceptanceContactName">اسم المسؤول عن قبول الطلبات</label><input id="acceptanceContactName" maxlength="80" required=""/></div>
<div class="form-field"><label class="required" for="joinRegion">المنطقة</label><select id="joinRegion" required=""></select></div>
<div class="form-field"><label class="required" for="joinCity">المدينة</label><select disabled="" id="joinCity" required=""><option value="">اختر المنطقة أولًا</option></select></div>
<div class="form-field"><label class="required" for="address">العنوان</label><input id="address" maxlength="250" required=""/></div>
<div class="form-field"><label class="required" for="googleMapsUrl">رابط الموقع على خرائط Google</label><input id="googleMapsUrl" maxlength="1200" placeholder="https://maps.google.com/..." required="" type="url"/></div>
<div class="form-field"><label class="required" for="googlePlaceId">معرّف Google Place ID</label><input dir="ltr" id="googlePlaceId" maxlength="512" placeholder="ChIJ..." required=""/><span class="field-hint">يستخدم لجلب تقييم Google Maps بعد التحقق من تطابق المنشأة.</span></div>
<div class="form-field"><label class="required" for="joinWhatsapp">واتساب استقبال الإحالات</label><input id="joinWhatsapp" inputmode="tel" maxlength="10" placeholder="05XXXXXXXX" required=""/></div>
<div class="form-field"><label for="secondaryPhone">رقم تواصل إضافي</label><input id="secondaryPhone" inputmode="tel" maxlength="10"/></div>
<div class="form-field"><label class="required" for="commercialRegistration">رقم السجل التجاري</label><input id="commercialRegistration" maxlength="40" required=""/></div>
<div class="form-field"><label class="required" for="registeredName">اسم المنشأة حسب السجل</label><input id="registeredName" maxlength="120" required=""/></div>
<div class="form-field"><label for="commercialExpiry">تاريخ انتهاء السجل</label><input id="commercialExpiry" type="date"/></div>
</div>
<div class="screen-actions"><a class="btn btn-ghost" href="index.html">إلغاء</a><button class="btn btn-primary" data-join-next="2" type="button">التالي</button></div>
</section>
<section class="flow-screen" data-join-step="2" tabindex="-1">
<div class="kicker">الخطوة 2 من 4</div>
<h2>ساعات الاستقبال</h2>
<p>حدد أوقات الرد على الطلبات لكل يوم. يمكن إضافة فترة ثانية.</p>
<div class="button-row mt-16"><button class="btn btn-light btn-sm" id="copySundaySchedule" type="button">نسخ ساعات الأحد</button><button class="btn btn-ghost btn-sm" id="openAllDays" type="button">فتح جميع الأيام</button></div>
<div class="daily-schedule-list mt-16" id="dailyScheduleEditor"></div>
<div class="screen-actions"><button class="btn btn-ghost" data-join-back="1" type="button">السابق</button><button class="btn btn-primary" data-join-next="3" type="button">التالي</button></div>
</section>
<section class="flow-screen" data-join-step="3" tabindex="-1">
<div class="kicker">الخطوة 3 من 4</div>
<h2>التغطية والتخصص</h2>
<p>تُستخدم هذه البيانات لاختيار الورشة ضمن الدفعة المناسبة.</p>
<div class="form-field"><label class="required" for="coverageCities">مدن التغطية</label><select id="coverageCities" multiple="" required="" size="7"></select><span class="field-hint">تُضاف المدينة الأساسية تلقائيًا، ويمكن تحديد مدن إضافية.</span></div>
<section class="activity-block mt-24">
<div class="section-head compact"><h3>تخصصات الورشة</h3><p>رتب التخصصات حسب الأولوية؛ الأول هو التخصص الرئيسي.</p></div>
<div class="priority-selector"><div><h3>المتاح</h3><div class="selector-list" id="availableSpecialties"></div></div><div><h3>المختار</h3><ol class="selected-priority-list" id="selectedSpecialties"></ol></div></div>
</section>
<section class="activity-block mt-24">
<div class="section-head compact"><h3>السيارات التي تخدمها</h3><p>رتب الشركات حسب الأولوية.</p></div>
<div class="priority-selector"><div><h3>المتاح</h3><div class="selector-list" id="availableMakes"></div></div><div><h3>المختار</h3><ol class="selected-priority-list" id="selectedMakes"></ol></div></div>
<fieldset class="form-field mt-24"><legend class="required">أنواع الوقود التي تخدمها</legend><div class="checkbox-grid" id="fuelTypesJoin"></div></fieldset>
</section>
<fieldset class="form-field mt-24"><legend class="required">القدرة الحالية على استقبال طلبات جديدة</legend><div class="choice-grid"><label class="radio-line"><input checked="" name="intakeCapacity" type="radio" value="available"/><span>نستقبل طلبات</span></label><label class="radio-line"><input name="intakeCapacity" type="radio" value="limited"/><span>استقبال محدود</span></label><label class="radio-line"><input name="intakeCapacity" type="radio" value="paused"/><span>متوقف مؤقتًا</span></label></div></fieldset>
<div class="screen-actions"><button class="btn btn-ghost" data-join-back="2" type="button">السابق</button><button class="btn btn-primary" data-join-next="4" type="button">مراجعة الطلب</button></div>
</section>
<section class="flow-screen" data-join-step="4" tabindex="-1">
<div class="kicker">الخطوة 4 من 4</div>
<h2>المراجعة والموافقة</h2>
<div class="guidance-grid" id="joinReview"></div>
<div class="fee-policy-box mt-24"><h3>رسوم إحالة </h3><p>يظهر الرسم قبل قبول الطلب، ويتراوح من ريال واحد إلى 5 ريالات حسب فئة الطلب. يستحق الرسم عند قبول الورشة وكشف بيانات العميل، وليس عند إرسال الإشعار.</p></div>
<div class="checkbox-stack mt-24">
<label class="checkbox-line"><input id="agreementAccepted" required="" type="checkbox"/><span>أوافق على شروط الشراكة وآلية إرسال الطلب إلى ثلاث ورش وإغلاقه لأول قبول.</span></label>
<label class="checkbox-line"><input id="feesAccepted" required="" type="checkbox"/><span>أوافق على رسوم الإحالة من ريال إلى 5 ريالات، وأنها تستحق عند قبول الطلب وكشف بيانات العميل.</span></label>
<label class="checkbox-line"><input id="ratingsAccepted" required="" type="checkbox"/><span>أوافق على سياسة التقييمات والاعتراضات واسترجاع الرسم في الحالات المؤهلة فقط.</span></label>
<label class="checkbox-line"><input id="privacyTrustAccepted" required="" type="checkbox"/><span>ألتزم بحماية بيانات العميل وعدم استخدامها للتسويق أو مشاركتها.</span></label>
<label class="checkbox-line honesty-pledge"><input id="honestyPledge" required="" type="checkbox"/><span>أتعهد بصحة البيانات، وعدم قبول طلب خارج تخصص الورشة، والتواصل مع العميل بصدق وسرعة، وسداد الرسوم المستحقة.</span></label>
</div>
<div class="screen-actions"><button class="btn btn-ghost" data-join-back="3" type="button">السابق</button><button class="btn btn-primary" type="submit">إرسال طلب الانضمام</button></div>
</section>
<section class="flow-screen" id="joinSuccess" tabindex="-1">
<div class="success-panel"><strong>تم استلام طلب الورشة</strong><p>رقم الطلب: <span id="joinApplicationNumber"></span></p></div>
<p>سيراجع فريق التشغيل البيانات ويتواصل مع مسؤول قبول الطلبات.</p>
<div class="screen-actions"><a class="btn btn-primary" href="join-status.html" id="joinStatusLink">متابعة طلب الانضمام</a><a class="btn btn-light" href="index.html">الرئيسية</a></div>
</section>
</form>
</div>
</div>
</main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a aria-current="page" href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script><script defer="" src="assets/join.js"></script>
</body>
</html>
```

## MODIFIED: `netlify.toml`

```toml
[build]
  publish = "."
  functions = "netlify/functions"

[[redirects]]
  from = "/api/google-place-details"
  to = "/.netlify/functions/google-place-details"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

```

## NEW: `netlify/functions/google-place-details.js`

```javascript
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

```

## MODIFIED: `payment.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="noindex" name="robots"/><meta content="لا يتم دفع قيمة الإصلاح أو شحن رصيد الورشة من هذه الصفحة. تُدار رسوم الإحالات وفق الإجراءات المعتمدة." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>الدفع الإلكتروني — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head>
<body data-page="future">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الدفع الإلكتروني غير متاح حاليًا</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page future-page" id="main-content"><div class="container narrow-container"><section class="card future-feature-card"><div aria-hidden="true" class="card-icon" data-icon="clock"></div><div class="kicker">غير متاح حاليًا</div><h1>الدفع الإلكتروني غير متاح حاليًا</h1><p>لا يتم دفع قيمة الإصلاح أو شحن رصيد الورشة من هذه الصفحة. تُدار رسوم الإحالات وفق الإجراءات المعتمدة.</p><div class="info-panel"><strong>المتاح حاليًا</strong><p>ابدأ طلب «عندي مشكلة في السيارة»، أو تابع طلبك الحالي. الخدمة المتاحة هي طلب مشكلة السيارة ومتابعته عبر الموقع وواتساب.</p></div><div class="button-row mt-24"><a class="btn btn-primary" href="customer.html?fresh=1">ابدأ طلب مشكلة السيارة</a><a class="btn btn-light" href="track.html">متابعة طلب</a></div></section></div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script>
</body></html>
```

## MODIFIED: `privacy.html`

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="سياسة خصوصية  لمنصة وين أوديها." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>سياسة الخصوصية — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head><body data-page="privacy"><header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الخصوصية</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header><main class="section" id="main-content"><article class="container legal-document"><div class="section-head"><div class="kicker"></div><h1>سياسة الخصوصية</h1><p>نستخدم أقل قدر ضروري من البيانات لإنشاء الطلب وإرساله ومتابعته.</p></div><section><h2>البيانات التي نجمعها</h2><p>الاسم الأول، رقم الجوال، بيانات السيارة، المدينة، وصف المشكلة، إجابات الأسئلة التوضيحية، التوجيه المبدئي، الموافقات، الطلبات والإحالات والتقييمات.</p></section><section><h2>مشاركة ملخص الطلب</h2><p>بعد موافقتك يُرسل ملخص الحالة وبيانات السيارة إلى ثلاث ورش مناسبة دون اسمك أو رقم جوالك. ترى الورش قبل القبول رقم الطلب والسيارة والمدينة والملخص والتخصص والاستعجال ورسم الإحالة.</p></section><section><h2>كشف بيانات التواصل</h2><p>يكشف الاسم الأول ورقم الجوال للورشة التي تقبل الطلب أولًا فقط. تُغلق الفرصة أمام الورشتين الأخريين ولا تظهر لهما بيانات التواصل.</p></section><section><h2>الاستخدام والمتابعة</h2><p>تستخدم البيانات لتنفيذ الطلب، التواصل التشغيلي، طلب ورشة بديلة خلال 24 ساعة، التقييم، معالجة الاعتراضات وتحسين جودة المطابقة. لا تُستخدم للتسويق دون موافقة مستقلة.</p></section><section><h2>روابط الطلب</h2><p>رابط المتابعة خاص بطلبك. احتفظ به ولا تشاركه مع غير من تثق به، لأنه يتيح الاطلاع على حالة الطلب.</p></section><section><h2>حدود النسخة الحالية</h2><p>النسخة الحالية تحفظ البيانات في متصفح الجهاز لأغراض التشغيل والاختبار. قبل التشغيل التجاري يجب نقل البيانات إلى قاعدة مركزية آمنة وتطبيق مصادقة وصلاحيات وسجلات وصول.</p></section></article><section class="container legal-document"><h2>التحقق والموقع وتقييم Google Maps</h2><p>يستخدم رمز التحقق التجريبي داخل المتصفح للاختبار فقط ولا يرسل رسالة حقيقية. عند تفعيل الموقع، تُستخدم الإحداثيات لاختيار أقرب مدينة مدعومة ويمكن تعديلها يدويًا. يظهر تقييم Google Maps منفصلًا عن تقييمات وين أوديها، ويُجلب عند العرض من خلال تكامل خادمي دون حفظ مفتاح Google داخل الواجهة.</p></section></main><footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a aria-current="page" href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer><script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script></body></html>
```

## MODIFIED: `receipt.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="noindex" name="robots"/><meta content="إصدار الإيصالات والدفع الإلكتروني غير متاحين من الواجهة العامة حاليًا." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>الإيصالات الإلكترونية — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head>
<body data-page="future">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الإيصالات الإلكترونية غير متاحة حاليًا</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page future-page" id="main-content"><div class="container narrow-container"><section class="card future-feature-card"><div aria-hidden="true" class="card-icon" data-icon="clock"></div><div class="kicker">غير متاح حاليًا</div><h1>الإيصالات الإلكترونية غير متاحة حاليًا</h1><p>إصدار الإيصالات والدفع الإلكتروني غير متاحين من الواجهة العامة حاليًا.</p><div class="info-panel"><strong>المتاح حاليًا</strong><p>ابدأ طلب «عندي مشكلة في السيارة»، أو تابع طلبك الحالي. الخدمة المتاحة هي طلب مشكلة السيارة ومتابعته عبر الموقع وواتساب.</p></div><div class="button-row mt-24"><a class="btn btn-primary" href="customer.html?fresh=1">ابدأ طلب مشكلة السيارة</a><a class="btn btn-light" href="track.html">متابعة طلب</a></div></section></div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script>
</body></html>
```

## MODIFIED: `terms.html`

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="شروط استخدام  لمنصة وين أوديها." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>الشروط وحدود المسؤولية — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head><body data-page="terms"><header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">الشروط</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header><main class="section" id="main-content"><article class="container legal-document"><div class="section-head"><div class="kicker">استخدام واضح ومسؤول</div><h1>الشروط وحدود المسؤولية</h1><p>باستخدام الخدمة فإنك تقر بفهم طبيعة التوجيه والإحالة في «وين أوديها».</p></div><section><h2>طبيعة الخدمة</h2><p>«وين أوديها» منصة توجيه وإحالة مجانية للعميل، وليست ورشة أو جهة تشخيص نهائي أو ضمان لأعمال الورشة أو أسعارها.</p></section><section><h2>التوجيه الفني</h2><p>النتيجة مبنية على المعلومات المدخلة وتستخدم صياغة احتمالية. التشخيص النهائي والسعر والإصلاح والضمان مسؤولية الورشة بعد الفحص الفعلي.</p></section><section><h2>إرسال الطلب والقبول</h2><p>بعد الموافقة يرسل ملخص الطلب إلى ثلاث ورش مناسبة دون بيانات التواصل. أول ورشة تقبل تحصل على بيانات العميل، ويغلق الطلب أمام بقية ورش الدفعة.</p></section><section><h2>السلامة</h2><p>عند وجود ضعف في الفرامل أو التوجيه، ارتفاع شديد في الحرارة، رائحة أو تسرب وقود، دخان كثيف أو أي مؤشر خطر، لا تستمر في القيادة إذا كان ذلك غير آمن واستخدم جهة مناسبة أو سطحة خارج المنصة.</p></section><section><h2>الورشة البديلة</h2><p>يمكن طلب ورشة بديلة خلال 24 ساعة من قبول الورشة الأولى، مع بقاء رقم الطلب واستبعاد الورشة السابقة. بعد انتهاء المهلة يلزم إنشاء طلب جديد.</p></section><section><h2>رسوم الورشة</h2><p>يدفع الشريك رسم إحالة من ريال إلى 5 ريالات حسب فئة الطلب عند قبوله وكشف بيانات العميل. لا يستحق الرسم لمجرد إرسال الطلب أو فتح رابط القبول أو رفضه.</p></section><section><h2>التقييم</h2><p>لا يسمح بالتقييم إلا لإحالة مسجلة. يرتبط التقييم بالطلب والورشة ويمكن مراجعته عند وجود اعتراض موثق.</p></section></article><section class="container legal-document"><h2>مصادر التقييم</h2><p>تقييم Google Maps مصدر خارجي مستقل ولا يمثل ضمانًا لجودة الخدمة، كما لا يُدمج حسابيًا مع تقييمات العملاء الموثقة داخل وين أوديها.</p></section></main><footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a aria-current="page" href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer><script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script></body></html>
```

## NEW: `tests/geo_otp_google_qa.js`

```javascript
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

```

## NEW: `tests/google_places_proxy_qa.js`

```javascript
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

```

## MODIFIED: `tests/qa-unit.js`

```javascript
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { webcrypto } = require('crypto');

class LocalStorageMock {
  constructor() { this.store = new Map(); }
  getItem(key) { return this.store.has(key) ? this.store.get(key) : null; }
  setItem(key, value) { this.store.set(key, String(value)); }
  removeItem(key) { this.store.delete(key); }
  clear() { this.store.clear(); }
}

const context = {
  console, Date, Math, Intl, JSON, Array, Object, String, Number, Boolean,
  RegExp, Error, Map, Set, Uint8Array, localStorage: new LocalStorageMock(),
  crypto: webcrypto, setTimeout, clearTimeout
};
context.window = context;
context.globalThis = context;
vm.createContext(context);

const root = path.resolve(__dirname, '..');
[
  'assets/config.js', 'assets/automotive-data.js', 'assets/storage.js',
  'assets/seed.js', 'assets/ai-engine.js', 'assets/matching-engine.js',
  'assets/lifecycle.js'
].forEach((file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file }));

const { WA } = context;
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const log = (message) => console.log(`✓ ${message}`);

WA.Storage.init();
WA.Seed.run();

assert(WA.Config.stage === 'stage_one_problem_whatsapp', 'Stage-one config missing');
assert(Object.keys(WA.Config.serviceTypes).join(',') === 'problem', 'More than one active service exposed');
log('النطاق التشغيلي مقصور على مسار مشكلة السيارة');

const partners = WA.Storage.get('wa_partners');
assert(partners.length === 45, `Expected 45 workshop test records, got ${partners.length}`);
assert(partners.every((row) => row.type === 'workshop' && row.partnershipStatus === 'active'), 'Future partner types remain in stage-one seed');
assert(WA.Storage.get('wa_discounts').length === 0, 'Stage-one seed should not expose discounts');
log('بيانات الاختبار تشمل ورش المرحلة الأولى فقط وتدعم الدفعات البديلة');

const descriptions = [
  'السيارة ترج إذا وقفت وتظهر لمبة المكينة وصار العزم ضعيف فجأة عند الإشارة',
  'المكيف يبرد أثناء المشي',
  'فيه صوت',
  'الفرامل ما تمسك وفيه ريحة بنزين والسيارة في طريق سريع'
];
const counts = descriptions.map((description) => WA.AIEngine.assess({ description }).questions.length);
assert(counts.every((count) => count >= 0 && count <= 3), `Question count outside 0–3: ${counts.join(',')}`);
assert(counts.includes(0) && counts.some((count) => count > 0), 'Dynamic 0–3 questions not demonstrated');
const danger = WA.AIEngine.assess({ description: descriptions[3] });
assert(danger.questions.length === 0 && /خطرة/.test(danger.urgency) && danger.nextStep.includes('لا تستمر'), 'Danger flow failed');
log('التحليل يطرح صفرًا إلى ثلاثة أسئلة ويوقف الأسئلة عند مؤشرات الخطر');

const analysis = WA.AIEngine.finalize({
  description: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة',
  vehicle: { make: 'تويوتا', model: 'كامري' },
  questions: WA.AIEngine.assess({ description: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة' }).questions,
  answers: ['نعم', 'نعم', 'لا']
});

const payload = {
  serviceType: 'problem',
  customer: { firstName: 'عبدالله', phone: '0551234567', phoneVerified: true, phoneVerifiedAt: new Date().toISOString(), phoneVerificationMode: 'demo_otp' },
  vehicle: { make: 'تويوتا', model: 'كامري', year: '2022', mileage: 'من 50 إلى 100 ألف كم' },
  region: 'منطقة القصيم', city: 'بريدة', preciseLocation: 'حي الريان',
  problem: 'السيارة ترج إذا وقفت وتظهر لمبة المكينة',
  safeToDriveAnswer: 'غير متأكد', ai: analysis,
  consents: { dataSharingAccepted: true, privacyAccepted: true, termsAccepted: true, marketingMessages: false }
};

let consentBlocked = false;
try { WA.Lifecycle.createRequest({ ...payload, consents: { ...payload.consents, dataSharingAccepted: false } }); } catch (_) { consentBlocked = true; }
assert(consentBlocked, 'Request created without data-sharing consent');
const created = WA.Lifecycle.createRequest(payload);
assert(created.request.humanId.startsWith('WA-') && created.request.publicToken, 'Request identity/token missing');
assert(created.request.serviceType === 'problem' && created.request.referralFeeAmount >= 1 && created.request.referralFeeAmount <= 5, 'Stage-one fee classification invalid');
log('الموافقة إلزامية ورقم الطلب وفئة الرسم من 1 إلى 5 محفوظان');

const dispatched = WA.Lifecycle.dispatchToPartners(created.request.id);
assert(dispatched.referrals.length === 3, `Expected exact batch of 3, got ${dispatched.referrals.length}`);
assert(new Set(dispatched.referrals.map((row) => row.partnerId)).size === 3, 'Duplicate workshop in batch');
dispatched.referrals.forEach((referral) => {
  assert(referral.acceptanceToken && referral.status === 'sent', 'Acceptance invitation invalid');
  assert(!('phone' in referral) && !('firstName' in referral) && !('customerPhone' in referral), 'PII leaked into pre-acceptance referral');
});
assert(WA.Storage.get('wa_fees').length === 0, 'Fee created before acceptance');
log('الطلب يرسل إلى ثلاث ورش فريدة دون بيانات شخصية أو رسم مسبق');

const first = dispatched.referrals[0];
const firstView = WA.Lifecycle.getWorkshopAcceptanceView(first.acceptanceToken);
assert(firstView && !firstView.customer && !firstView.acceptedByThisWorkshop, 'Customer data exposed before acceptance');
const accepted = WA.Lifecycle.acceptReferral(first.acceptanceToken);
assert(accepted.accepted && accepted.fee && accepted.fee.amount === created.request.referralFeeAmount, 'First acceptance or fee creation failed');
const acceptedRequest = WA.Storage.findById('wa_requests', created.request.id);
assert(acceptedRequest.acceptedReferralId === first.id && acceptedRequest.alternativeDeadline, 'Accepted request not linked/deadline missing');
const otherRows = WA.Storage.get('wa_referrals').filter((row) => row.requestId === created.request.id && row.batchNumber === 1 && row.id !== first.id);
assert(otherRows.every((row) => row.status === 'closed_prior_acceptance'), 'Other workshops were not closed');
assert(WA.Storage.get('wa_fees').filter((row) => row.referralId === first.id).length === 1, 'Acceptance fee duplicated');
const afterAcceptView = WA.Lifecycle.getWorkshopAcceptanceView(first.acceptanceToken);
assert(afterAcceptView.customer?.phone === payload.customer.phone, 'Accepted workshop did not receive customer data');
const late = WA.Lifecycle.acceptReferral(otherRows[0].acceptanceToken);
assert(!late.accepted && late.closed, 'Late acceptance was not blocked');
assert(WA.Storage.get('wa_fees').filter((row) => row.referralId === otherRows[0].id).length === 0, 'Late workshop was charged');
log('أول قبول يكشف البيانات ويغلق الدفعة ويحتسب الرسم مرة واحدة فقط');

const eligibility = WA.Lifecycle.alternativeEligibility(acceptedRequest);
assert(eligibility.allowed, 'Alternative should be allowed within 24 hours');
const secondBatch = WA.Lifecycle.requestAlternative(created.request.id, 'لم نتفق على الموعد');
assert(secondBatch.referrals.length === 3, 'Second batch did not contain 3 workshops');
const firstPartnerIds = new Set(dispatched.referrals.map((row) => row.partnerId));
assert(secondBatch.referrals.every((row) => !firstPartnerIds.has(row.partnerId)), 'Previous workshops reused in alternative batch');
const secondAccepted = WA.Lifecycle.acceptReferral(secondBatch.referrals[0].acceptanceToken);
assert(secondAccepted.accepted, 'Second batch acceptance failed');
log('البديل خلال 24 ساعة يحتفظ بالطلب ويرسل إلى ثلاث ورش جديدة');

const currentRequest = WA.Storage.findById('wa_requests', created.request.id);
WA.Storage.upsert('wa_requests', { ...currentRequest, alternativeDeadline: new Date(Date.now() - 1000).toISOString() });
assert(!WA.Lifecycle.alternativeEligibility(WA.Storage.findById('wa_requests', created.request.id)).allowed, 'Alternative allowed after deadline');
let lateAlternativeBlocked = false;
try { WA.Lifecycle.requestAlternative(created.request.id, 'بعد المهلة'); } catch (_) { lateAlternativeBlocked = true; }
assert(lateAlternativeBlocked, 'Alternative request not blocked after 24 hours');
log('طلب البديل يتوقف بعد انتهاء مهلة 24 ساعة');

// Reopen the deadline only for testing the third accepted referral and the maximum.
WA.Storage.upsert('wa_requests', { ...WA.Storage.findById('wa_requests', created.request.id), alternativeDeadline: new Date(Date.now() + 3600000).toISOString() });
const thirdBatch = WA.Lifecycle.requestAlternative(created.request.id, 'الموقع غير مناسب');
assert(thirdBatch.referrals.length === 3, 'Third batch failed');
const thirdAccepted = WA.Lifecycle.acceptReferral(thirdBatch.referrals[0].acceptanceToken);
assert(thirdAccepted.accepted, 'Third acceptance failed');
assert(!WA.Lifecycle.alternativeEligibility(WA.Storage.findById('wa_requests', created.request.id)).allowed, 'More than 3 accepted referrals permitted');
log('الحد الأقصى ثلاث إحالات مقبولة للحالة نفسها');

const rating = WA.Lifecycle.createRating({
  requestId: created.request.id,
  referralId: thirdBatch.referrals[0].id,
  overall: 5,
  responseSpeed: 5,
  clarity: 4,
  commitment: 5,
  reception: 5,
  serviceQuality: 4,
  recommend: 'yes',
  comment: '<script>bad</script> تجربة ممتازة'
});
assert(rating.status === 'published' && !rating.comment.includes('<'), 'Verified rating/sanitization failed');
assert(WA.Storage.get('wa_ratings').filter((row) => row.referralId === rating.referralId).length === 1, 'Rating duplicated');
log('التقييم مرتبط بإحالة مقبولة ومُعقّم وغير مكرر');

const notified = WA.Lifecycle.markReferralNotified(secondBatch.referrals[1].id);
assert(notified.notifiedAt && notified.notificationChannel === 'whatsapp_manual', 'WhatsApp manual dispatch not recorded');
log('تسجيل فتح الإرسال اليدوي عبر واتساب');

const issues = WA.Storage.integrityCheck();
assert(issues.length === 0, `Integrity issues: ${issues.join('; ')}`);
log('سلامة العلاقات بين العملاء والسيارات والطلبات والإحالات والرسوم والتقييمات');

console.log('\nALL_UNIT_QA_PASSED');

```

## MODIFIED: `track.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/>
<meta content="تابع طلبك في وين أوديها برقم الطلب والجوال أو من رابط الطلب الخاص." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>متابعة الطلب — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="track">
<noscript><div class="noscript-banner">فعّل JavaScript لعرض الطلب.</div></noscript>
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">متابعة الطلب</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a aria-current="page" href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page" id="main-content">
<div class="container track-layout">
<section class="card track-lookup" id="lookupCard">
<div class="section-head compact"><div class="kicker">متابعة الطلب</div><h1>ارجع لطلبك</h1><p>استخدم رقم الطلب والجوال، أو افتح الرابط الخاص الذي حفظته.</p></div>
<form id="trackForm" novalidate="">
<div class="form-grid two"><div class="form-field"><label class="required" for="requestNumber">رقم الطلب</label><input autocomplete="off" id="requestNumber" placeholder="WA-10425" required=""/></div><div class="form-field"><label class="required" for="trackPhone">رقم الجوال</label><input autocomplete="tel" id="trackPhone" inputmode="tel" maxlength="10" placeholder="05XXXXXXXX" required=""/></div></div>
<div class="error-text" id="trackError" role="alert"></div><button class="btn btn-primary btn-block mt-16" type="submit">عرض الطلب</button>
</form>
</section>
<section hidden="" id="requestView">
<div class="request-header"><div class="kicker light-kicker">طلبك</div><h1 id="requestTitle"></h1><p id="requestSubtitle"></p><div class="request-meta" id="requestMeta"></div></div>
<div id="statusPanel"></div>
<div class="mt-16" id="partnerPanel"></div>
<section class="contact-card mt-16" hidden="" id="contactPanel"><div><div class="kicker">بعد القبول</div><h2>تواصل مع الورشة</h2><p>اذكر رقم الطلب عند التواصل أو الحضور.</p></div><div class="button-row contact-actions"><a class="btn btn-primary" href="#" id="customerWhatsapp" rel="noopener" target="_blank">فتح واتساب</a><button class="btn btn-light" id="copyCustomerMessage" type="button">نسخ الرسالة</button></div></section>
<section class="card mt-16" hidden="" id="outcomePanel"><div class="section-head compact"><h2>ماذا حدث مع الورشة؟</h2><p>تساعدنا المتابعة على تحسين الترشيح وقياس جودة الاستجابة.</p></div><div class="choice-grid outcome-grid" id="outcomeChoices"></div></section>
<section class="card mt-16" hidden="" id="alternativePanel"><div class="section-head compact"><div class="kicker">خلال 24 ساعة</div><h2>لم تتفق مع الورشة؟</h2><p id="alternativeHelp">نحفظ بياناتك ونبحث لك عن ورشة أخرى مع استبعاد الورشة السابقة.</p></div><div class="form-field"><label class="required" for="alternativeReason">سبب عدم الاتفاق</label><select id="alternativeReason"><option value="">اختر السبب</option><option>لم تتواصل الورشة</option><option>لم نتفق على الموعد</option><option>لم نتفق على السعر</option><option>الورشة لا تقدم الخدمة المطلوبة</option><option>موقع الورشة غير مناسب</option><option>لم أرغب في الاستمرار</option><option>سبب آخر</option></select></div><button class="btn btn-warning btn-block mt-16" id="requestAlternative" type="button">أريد ورشة أخرى</button></section>
<section class="card mt-16" hidden="" id="ratingPanel"><div class="section-head compact"><h2>قيّم تجربتك</h2><p>يرتبط التقييم بهذه الإحالة ولا يظهر اسمك علنًا.</p></div><form id="ratingForm"><div class="form-grid two"><div class="form-field"><label class="required" for="ratingOverall">التقييم العام</label><select id="ratingOverall" required=""><option value="">اختر</option><option value="5">5 — ممتاز</option><option value="4">4 — جيد جدًا</option><option value="3">3 — جيد</option><option value="2">2 — ضعيف</option><option value="1">1 — سيئ</option></select></div><div class="form-field"><label for="ratingRecommend">هل تنصح بالورشة؟</label><select id="ratingRecommend"><option value="yes">نعم</option><option value="no">لا</option></select></div></div><div class="form-field mt-16"><label for="ratingComment">تعليق اختياري</label><textarea id="ratingComment" maxlength="800"></textarea></div><button class="btn btn-primary btn-block mt-16" type="submit">إرسال التقييم</button></form></section>
<section class="card mt-16"><div class="section-head compact"><h2>سجل الإرسال والقبول</h2></div><div class="timeline" id="requestTimeline"></div></section>
<section class="private-link-card mt-16"><div><span class="pill">رابطك الخاص</span><h2>احتفظ به للعودة السريعة</h2></div><div class="compact-link-row"><input aria-label="رابط الطلب" id="trackPrivateLink" readonly=""/><button class="icon-action" id="copyTrackLink" type="button">نسخ</button><a class="icon-action" href="index.html">الرئيسية</a></div></section>
</section>
</div>
</main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a aria-current="page" href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/matching-engine.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script><script defer="" src="assets/track.js"></script>
</body>
</html>

```

## MODIFIED: `workshop-accept.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/>
<meta content="رابط قبول طلب ورشة من وين أوديها." name="description"/>
<meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/>
<title>قبول طلب ورشة — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/>
</head>
<body data-page="workshop-accept">
<noscript><div class="noscript-banner">فعّل JavaScript لعرض الطلب.</div></noscript>
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">قبول طلب ورشة</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page" id="main-content"><div class="container narrow-container"><section class="card" id="acceptanceCard"><div class="loading-shell"><div class="loader-ring"></div><h1>جاري فتح الطلب</h1></div></section></div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/matching-engine.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script><script defer="" src="assets/workshop-accept.js"></script>
</body>
</html>

```

## MODIFIED: `workshop-dashboard.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="noindex" name="robots"/><meta content="تتم إدارة قبول الإحالات حاليًا عبر الرابط الخاص المرسل للورشة." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>لوحة الورشة — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head>
<body data-page="future">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">لوحة الورشة غير متاحة حاليًا</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page future-page" id="main-content"><div class="container narrow-container"><section class="card future-feature-card"><div aria-hidden="true" class="card-icon" data-icon="clock"></div><div class="kicker">غير متاح حاليًا</div><h1>لوحة الورشة غير متاحة حاليًا</h1><p>تتم إدارة قبول الإحالات حاليًا عبر الرابط الخاص المرسل للورشة.</p><div class="info-panel"><strong>المتاح حاليًا</strong><p>ابدأ طلب «عندي مشكلة في السيارة»، أو تابع طلبك الحالي. الخدمة المتاحة هي طلب مشكلة السيارة ومتابعته عبر الموقع وواتساب.</p></div><div class="button-row mt-24"><a class="btn btn-primary" href="customer.html?fresh=1">ابدأ طلب مشكلة السيارة</a><a class="btn btn-light" href="track.html">متابعة طلب</a></div></section></div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script>
</body></html>
```

## MODIFIED: `workshop-login.html`

```html
<!DOCTYPE html>

<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/><meta content="#0b1d33" name="theme-color"/><meta content="noindex" name="robots"/><meta content="تستقبل الورش الطلبات حاليًا من روابط القبول الخاصة التي تصل عبر قنوات التشغيل المعتمدة." name="description"/><meta content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" http-equiv="Content-Security-Policy"/><title>بوابة الورش — وين أوديها</title><link href="assets/images/favicon.png" rel="icon" type="image/png"/><link href="assets/styles.css" rel="stylesheet"/></head>
<body data-page="future">
<header class="site-header unified-site-header" data-unified-header="">
<a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
<div class="container nav-shell unified-header-shell">
<a aria-label="وين أوديها — الرئيسية" class="brand unified-brand" href="index.html">
<img alt="وين أوديها" class="brand-logo" height="283" src="assets/images/logo.png" width="900"/>
</a>
<span aria-current="page" class="current-page-label">بوابة الورش غير متاحة حاليًا</span>
<button aria-controls="mainNav" aria-expanded="false" aria-label="فتح قائمة التنقل" class="nav-toggle" data-icon="menu" type="button"><span>القائمة</span></button>
<nav aria-label="التنقل الرئيسي" class="main-nav unified-main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a></nav>
</div>
</header>
<main class="section compact-page future-page" id="main-content"><div class="container narrow-container"><section class="card future-feature-card"><div aria-hidden="true" class="card-icon" data-icon="clock"></div><div class="kicker">غير متاح حاليًا</div><h1>بوابة الورش غير متاحة حاليًا</h1><p>تستقبل الورش الطلبات حاليًا من روابط القبول الخاصة التي تصل عبر قنوات التشغيل المعتمدة.</p><div class="info-panel"><strong>المتاح حاليًا</strong><p>ابدأ طلب «عندي مشكلة في السيارة»، أو تابع طلبك الحالي. الخدمة المتاحة هي طلب مشكلة السيارة ومتابعته عبر الموقع وواتساب.</p></div><div class="button-row mt-24"><a class="btn btn-primary" href="customer.html?fresh=1">ابدأ طلب مشكلة السيارة</a><a class="btn btn-light" href="track.html">متابعة طلب</a></div></section></div></main>
<footer class="site-footer unified-site-footer" data-unified-footer="">
<div class="container unified-footer-shell">
<a aria-label="وين أوديها — الرئيسية" class="footer-logo-link" href="index.html"><span class="footer-logo-plate"><img alt="وين أوديها" class="footer-logo" height="283" src="assets/images/logo.png" width="900"/></span></a>
<nav aria-label="روابط الموقع" class="unified-footer-nav"><a href="index.html">الرئيسية</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="privacy.html">الخصوصية</a><a href="terms.html">الشروط</a></nav>
<span class="unified-footer-copy">© 2026 وين أوديها</span>
</div>
</footer>
<script defer="" src="assets/config.js"></script><script defer="" src="assets/automotive-data.js"></script><script defer="" src="assets/storage.js"></script><script defer="" src="assets/google-places.js"></script><script defer="" src="assets/seed.js"></script><script defer="" src="assets/lifecycle.js"></script><script defer="" src="assets/common.js"></script>
</body></html>
```
