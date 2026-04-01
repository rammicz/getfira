(function () {
  'use strict';

  // --- Translations ---
  var translations = {
    cs: {
      // Nav
      'nav-features': 'Funkce',
      'nav-benefits': 'Výhody',
      'nav-how-it-works': 'Jak to funguje',
      'nav-contact': 'Kontakt',
      // Meta
      'meta-description': 'GetFira.io přináší rostoucím firmám real-time dashboardy, forecasting a finanční reporty, abyste mohli dělat lepší rozhodnutí rychleji.',
      'og-title': 'GetFira.io — Finanční přehled pro rostoucí firmy',
      'og-description': 'Real-time dashboardy, forecasting a finanční reporty pro rostoucí firmy.',
      // Hero
      'hero-title': 'Finanční přehled pro rostoucí firmy',
      'hero-subtitle': 'GetFira.io spojuje vaše finanční data na jedné platformě s real-time dashboardy, automatickým forecastingem a reporty, které dávají smysl — abyste se mohli soustředit na růst firmy, ne na honění tabulek.',
      'hero-cta-primary': 'Vyzkoušet zdarma',
      'hero-cta-secondary': 'Zobrazit funkce',
      // Social proof
      'proof-companies': 'Firem důvěřuje GetFira.io',
      'proof-transactions': 'Zpracovaných transakcí',
      'proof-uptime': 'Garantovaná dostupnost',
      // Features
      'features-title': 'Vše, co potřebujete pro řízení financí',
      'features-subtitle': 'Od denních dashboardů po roční uzávěrky — GetFira.io se postará o těžkou práci, aby váš tým mohl dělat sebevědomá rozhodnutí založená na datech.',
      'feature-dashboard-title': 'Real-time Dashboard & KPI',
      'feature-dashboard-desc': 'Sledujte tržby, náklady, marže a stav hotovosti na první pohled. GetFira.io aktualizuje vaše KPI v reálném čase, takže vždy víte, jak na tom vaše firma je — žádné ruční exporty, žádná zastaralá čísla.',
      'feature-forecast-title': 'Forecasting: Skutečnost vs Plán',
      'feature-forecast-desc': 'Porovnejte svůj finanční plán se skutečnými výsledky měsíc po měsíci. GetFira.io automaticky zvýrazňuje odchylky, abyste mohli včas zachytit problémy a upravit strategii dříve, než se stanou nákladnými překvapeními.',
      'feature-reports-title': 'Finanční reporty',
      'feature-reports-desc': 'Generujte výkazy P&L, rozvahy a cash flow reporty okamžitě. GetFira.io strukturuje vaše data do přehledných, standardizovaných reportů připravených pro vaše vedení, investory nebo účetní.',
      'feature-invoices-title': 'Správa faktur & bankovních transakcí',
      'feature-invoices-desc': 'Importujte bankovní transakce a párujte je s fakturami automaticky. GetFira.io snižuje ruční práci s odsouhlasením a udržuje vaše účetnictví přesné díky inteligentním pravidlům párování, která si můžete přizpůsobit.',
      'feature-contracts-title': 'Sledování ziskovosti zakázek',
      'feature-contracts-desc': 'Zjistěte přesně, které zakázky jsou ziskové a které vyčerpávají zdroje. GetFira.io sleduje tržby a náklady na úrovni jednotlivých zakázek, abyste mohli s jistotou vyjednávat, přerozdělovat nebo ukončovat spolupráce.',
      'feature-vat-title': 'DPH compliance',
      'feature-vat-desc': 'Zůstaňte v souladu s předpisy díky vestavěným výpočtům a reportům DPH. GetFira.io pracuje s českými účetními standardy od základu, automaticky třídí transakce podle sazby DPH a připravuje souhrny připravené k podání.',
      // Benefits
      'benefits-title': 'Proč si finanční týmy vybírají GetFira.io',
      'benefits-subtitle': 'Méně času na ruční práci, více času na rozhodnutí, která mají smysl.',
      'benefit-1-title': 'Ušetřete 20+ hodin měsíčně',
      'benefit-1-desc': 'Automatizujte sběr dat, odsouhlasení a reportování, které vám zabírají celý týden. GetFira.io stahuje data z vašich bankovních zdrojů a účetních nástrojů, páruje transakce a vytváří reporty — a vrací vašemu týmu více než 20 hodin měsíčně na analýzu a strategii.',
      'benefit-2-title': 'Přesnost v reálném čase, které můžete věřit',
      'benefit-2-desc': 'Přestaňte pracovat se včerejšími čísly. GetFira.io se průběžně synchronizuje s vašimi datovými zdroji, takže každý dashboard, report a forecast odráží vaši aktuální finanční pozici — ne to, jak vypadala při posledním exportu.',
      'benefit-3-title': 'Konsolidace více subjektů',
      'benefit-3-desc': 'Řídíte více firem nebo dceřiných společností? GetFira.io konsoliduje finanční data ze všech vašich subjektů do jednoho zobrazení. Sledujte metriky na úrovni skupiny i jednotlivých subjektů bez žonglování se samostatnými tabulkami nebo systémy.',
      'benefit-4-title': 'Bezproblémové bankovní integrace',
      'benefit-4-desc': 'Připojte své bankovní účty a nechte GetFira.io, ať se postará o zbytek. Transakce přicházejí automaticky a jsou párovány s vašimi fakturami a účetními záznamy. Žádné CSV uploady, žádné chyby z kopírování, žádné bolesti hlavy z odsouhlasení.',
      'benefit-5-title': 'České účetní standardy od základu',
      'benefit-5-desc': 'GetFira.io je postavena s českými účetními standardy v jádru. Kategorie DPH, účtová osnova a formáty reportů odpovídají místním požadavkům od začátku — takže zůstáváte v souladu s předpisy bez extra konfigurace nebo doplňků třetích stran.',
      // How it works
      'how-title': 'Jak to funguje',
      'how-subtitle': 'Začněte za minuty, ne za měsíce.',
      'step-1-title': 'Připojte svá data',
      'step-1-desc': 'Propojte své bankovní účty, importujte faktury a připojte své stávající účetní nástroje. GetFira.io vše stáhne na jedno místo automaticky.',
      'step-2-title': 'Automatická analýza',
      'step-2-desc': 'GetFira.io třídí transakce, vytváří dashboardy a generuje reporty bez manuálního zásahu. Váš finanční obraz se aktualizuje v reálném čase.',
      'step-3-title': 'Dělejte lepší rozhodnutí',
      'step-3-desc': 'S jasnými daty na dosah ruky můžete sledovat trendy, zachytit problémy včas a alokovat zdroje tam, kde mají největší dopad.',
      // Contact
      'contact-title': 'Spojte se s námi',
      'contact-subtitle': 'Připraveni vnést přehled do svých financí? Napište nám a ozveme se vám do jednoho pracovního dne.',
      'form-name': 'Jméno',
      'form-email': 'E-mail',
      'form-company': 'Název firmy',
      'form-message': 'Zpráva',
      'form-consent': 'Souhlasím se zpracováním osobních údajů v souladu se Zásadami ochrany osobních údajů. GetFira.io použije tyto informace pouze k odpovědi na můj dotaz.',
      'form-consent-error': 'Potvrďte prosím, že souhlasíte se zpracováním údajů.',
      'form-submit': 'Odeslat zprávu',
      'form-success-title': 'Zpráva odeslána',
      'form-success-desc': 'Děkujeme, že jste nás kontaktovali. Ozveme se vám do jednoho pracovního dne.',
      // Footer
      'footer-brand': '&copy; 2026 GetFira.io. Vyvinula <a href="https://abago.cz" target="_blank" rel="noopener">abago.cz</a>',
      'footer-privacy': 'Zásady ochrany osobních údajů',
      'footer-terms': 'Obchodní podmínky',
      // Validation messages
      'error-name': 'Zadejte prosím své jméno.',
      'error-email': 'Zadejte prosím platnou e-mailovou adresu.',
      'error-company': 'Zadejte prosím název firmy.',
      'error-message': 'Zadejte prosím zprávu.'
    },
    en: {
      // Nav
      'nav-features': 'Features',
      'nav-benefits': 'Benefits',
      'nav-how-it-works': 'How It Works',
      'nav-contact': 'Contact',
      // Meta
      'meta-description': 'GetFira.io gives growing businesses real-time dashboards, forecasting, and financial reports so you can make better decisions faster.',
      'og-title': 'GetFira.io — Financial clarity for growing businesses',
      'og-description': 'Real-time dashboards, forecasting, and financial reports for growing businesses.',
      // Hero
      'hero-title': 'Financial clarity for growing businesses',
      'hero-subtitle': 'GetFira.io brings your financial data together into one platform with real-time dashboards, automated forecasting, and reports that actually make sense — so you can focus on growing your business, not chasing spreadsheets.',
      'hero-cta-primary': 'Start Free Trial',
      'hero-cta-secondary': 'See Features',
      // Social proof
      'proof-companies': 'Companies trust GetFira.io',
      'proof-transactions': 'Transactions processed',
      'proof-uptime': 'Uptime guaranteed',
      // Features
      'features-title': 'Everything you need to run your finances',
      'features-subtitle': 'From daily dashboards to year-end reports, GetFira.io handles the heavy lifting so your team can make confident, data-driven decisions.',
      'feature-dashboard-title': 'Real-time Dashboard & KPIs',
      'feature-dashboard-desc': 'See your revenue, expenses, margins, and cash position at a glance. GetFira.io updates your KPIs in real time so you always know where your business stands — no manual exports, no stale numbers.',
      'feature-forecast-title': 'Forecasting: Actuals vs Plan',
      'feature-forecast-desc': 'Compare your financial plan against actual results month by month. GetFira.io highlights variances automatically so you can spot problems early and adjust your strategy before they become costly surprises.',
      'feature-reports-title': 'Financial Reports',
      'feature-reports-desc': 'Generate P&L statements, balance sheets, and cash flow reports instantly. GetFira.io structures your data into clear, standardised reports that are ready for your board, your investors, or your accountant.',
      'feature-invoices-title': 'Invoice & Bank Transaction Management',
      'feature-invoices-desc': 'Import bank transactions and match them to invoices automatically. GetFira.io reduces manual reconciliation work and keeps your books accurate with intelligent matching rules you can customise.',
      'feature-contracts-title': 'Contract Profitability Tracking',
      'feature-contracts-desc': 'Know exactly which contracts are profitable and which are draining resources. GetFira.io tracks revenue and costs at the contract level so you can renegotiate, reallocate, or sunset engagements with confidence.',
      'feature-vat-title': 'VAT Compliance',
      'feature-vat-desc': 'Stay compliant with built-in VAT calculations and reporting. GetFira.io handles Czech accounting standards out of the box, automatically categorises transactions by VAT rate, and prepares submission-ready summaries.',
      // Benefits
      'benefits-title': 'Why finance teams choose GetFira.io',
      'benefits-subtitle': 'Less time on manual work, more time on decisions that matter.',
      'benefit-1-title': 'Save 20+ hours every month',
      'benefit-1-desc': 'Automate the data collection, reconciliation, and reporting tasks that eat into your week. GetFira.io pulls data from your bank feeds and accounting tools, matches transactions, and builds reports — giving your team back more than 20 hours a month to focus on analysis and strategy.',
      'benefit-2-title': 'Real-time accuracy you can trust',
      'benefit-2-desc': 'Stop working with yesterday\'s numbers. GetFira.io syncs continuously with your data sources so every dashboard, report, and forecast reflects your current financial position — not what it looked like when someone last ran an export.',
      'benefit-3-title': 'Multi-entity consolidation',
      'benefit-3-desc': 'Running multiple companies or subsidiaries? GetFira.io consolidates financial data across all your entities into a single view. See group-level metrics alongside entity breakdowns without juggling separate spreadsheets or systems.',
      'benefit-4-title': 'Seamless bank integrations',
      'benefit-4-desc': 'Connect your bank accounts and let GetFira.io handle the rest. Transactions flow in automatically and are matched to your invoices and ledger entries. No more CSV uploads, no more copy-paste errors, no more reconciliation headaches.',
      'benefit-5-title': 'Czech accounting standards built in',
      'benefit-5-desc': 'GetFira.io is built with Czech accounting standards at its core. VAT categories, chart of accounts, and reporting formats follow local requirements out of the box — so you stay compliant without extra configuration or third-party add-ons.',
      // How it works
      'how-title': 'How it works',
      'how-subtitle': 'Get started in minutes, not months.',
      'step-1-title': 'Connect your data',
      'step-1-desc': 'Link your bank accounts, import invoices, and connect your existing accounting tools. GetFira.io pulls everything into one place automatically.',
      'step-2-title': 'Analyse automatically',
      'step-2-desc': 'GetFira.io categorises transactions, builds dashboards, and generates reports without manual intervention. Your financial picture updates in real time.',
      'step-3-title': 'Make better decisions',
      'step-3-desc': 'With clear data at your fingertips, you can spot trends, catch problems early, and allocate resources where they make the biggest impact.',
      // Contact
      'contact-title': 'Get in touch',
      'contact-subtitle': 'Ready to bring clarity to your finances? Drop us a message and we will get back to you within one business day.',
      'form-name': 'Name',
      'form-email': 'Email',
      'form-company': 'Company name',
      'form-message': 'Message',
      'form-consent': 'I agree to the processing of my personal data in accordance with the Privacy Policy. GetFira.io will use this information only to respond to my enquiry.',
      'form-consent-error': 'Please confirm that you agree to data processing.',
      'form-submit': 'Send Message',
      'form-success-title': 'Message sent',
      'form-success-desc': 'Thank you for reaching out. We will get back to you within one business day.',
      // Footer
      'footer-brand': '&copy; 2026 GetFira.io. Developed by <a href="https://abago.cz" target="_blank" rel="noopener">abago.cz</a>',
      'footer-privacy': 'Privacy Policy',
      'footer-terms': 'Terms of Service',
      // Validation messages
      'error-name': 'Please enter your name.',
      'error-email': 'Please enter a valid email address.',
      'error-company': 'Please enter your company name.',
      'error-message': 'Please enter a message.'
    }
  };

  // --- Language ---
  var currentLang = 'cs';
  var i18nEls = [];
  var i18nHtmlEls = [];
  var langLabelEl = null;

  function getPreferredLang() {
    var stored = localStorage.getItem('getfira-lang');
    if (stored === 'en' || stored === 'cs') return stored;
    return 'cs';
  }

  function cacheI18nElements() {
    i18nEls = document.querySelectorAll('[data-i18n]');
    i18nHtmlEls = document.querySelectorAll('[data-i18n-html]');
    langLabelEl = document.getElementById('lang-label');
  }

  function applyLang(lang) {
    var strings = translations[lang];
    if (!strings) return;

    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    for (var i = 0; i < i18nEls.length; i++) {
      var el = i18nEls[i];
      var key = el.getAttribute('data-i18n');
      if (strings[key] === undefined) continue;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, strings[key]);
      } else {
        el.textContent = strings[key];
      }
    }

    for (var j = 0; j < i18nHtmlEls.length; j++) {
      var htmlKey = i18nHtmlEls[j].getAttribute('data-i18n-html');
      if (strings[htmlKey] !== undefined) {
        i18nHtmlEls[j].innerHTML = strings[htmlKey];
      }
    }

    if (langLabelEl) langLabelEl.textContent = lang === 'cs' ? 'EN' : 'CZ';

    document.title = strings['hero-title'] + ' — GetFira.io';
  }

  // --- Theme Toggle ---
  function getPreferredTheme() {
    var stored = localStorage.getItem('getfira-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '\u2600' : '\u263E';
  }

  applyTheme(getPreferredTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('getfira-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Cache i18n elements and apply language on load
    cacheI18nElements();
    applyLang(getPreferredLang());

    // --- Language Toggle ---
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        var next = currentLang === 'cs' ? 'en' : 'cs';
        localStorage.setItem('getfira-lang', next);
        applyLang(next);
      });
    }

    // --- Theme Toggle ---
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('getfira-theme', next);
        applyTheme(next);
      });
    }

    // --- Mobile Menu ---
    var menuBtn = document.getElementById('menu-toggle');
    var drawer = document.getElementById('mobile-drawer');
    var overlay = document.getElementById('mobile-overlay');
    var closeBtn = document.getElementById('drawer-close');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.classList.add('scroll-locked');
      menuBtn.setAttribute('aria-expanded', 'true');
      closeBtn.focus();
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.classList.remove('scroll-locked');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }

    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });

    // Close drawer on nav link click
    var drawerLinks = document.querySelectorAll('.mobile-nav-link');
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    // --- Accordion ---
    var triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = this.closest('.accordion-item');
        var panel = item.querySelector('.accordion-panel');
        var isOpen = item.getAttribute('data-open') === 'true';
        var expanded = !isOpen;

        item.setAttribute('data-open', String(expanded));
        this.setAttribute('aria-expanded', String(expanded));

        if (expanded) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = '0';
        }
      });
    });

    // --- Contact Form ---
    var form = document.getElementById('contact-form');
    var formEl = document.getElementById('contact-form-fields');
    var success = document.getElementById('contact-success');
    var formFields = [
      { id: 'name', key: 'error-name' },
      { id: 'email', key: 'error-email' },
      { id: 'company', key: 'error-company' },
      { id: 'message', key: 'error-message' }
    ];

    function getValidationMsg(key) {
      return translations[currentLang][key] || '';
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;

        formFields.forEach(function (f) {
          var input = document.getElementById('field-' + f.id);
          var error = document.getElementById('error-' + f.id);
          var value = input.value.trim();
          var isInvalid = false;

          if (!value) {
            isInvalid = true;
          } else if (f.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            isInvalid = true;
          }

          if (isInvalid) {
            valid = false;
            input.classList.add('error');
            error.textContent = getValidationMsg(f.key);
            error.classList.add('visible');
            input.setAttribute('aria-invalid', 'true');
          } else {
            input.classList.remove('error');
            error.classList.remove('visible');
            input.removeAttribute('aria-invalid');
          }
        });

        var consent = document.getElementById('field-consent');
        var consentError = document.getElementById('error-consent');
        if (!consent.checked) {
          valid = false;
          consentError.classList.add('visible');
        } else {
          consentError.classList.remove('visible');
        }

        if (valid) {
          formEl.style.display = 'none';
          success.classList.add('visible');
        }
      });

      // Clear errors on input (event delegation)
      form.addEventListener('input', function (e) {
        var target = e.target;
        if (target.classList.contains('form-input') || target.classList.contains('form-textarea')) {
          target.classList.remove('error');
          target.removeAttribute('aria-invalid');
          var errorEl = document.getElementById('error-' + target.id.replace('field-', ''));
          if (errorEl) errorEl.classList.remove('visible');
        }
      });
    }

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        try {
          var target = document.querySelector(href);
        } catch (_) { return; }
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
})();
