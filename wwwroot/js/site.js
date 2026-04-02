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
      'meta-description': 'GetFira.io přináší kompletní finanční přehled — dashboardy, forecasting a reporty na základě dat z vašeho účetnictví.',
      'og-title': 'GetFira.io - Kompletní finanční přehled o všech vašich firmách',
      'og-description': 'Dashboardy, forecasting a finanční reporty na jednom místě.',
      // Hero
      'hero-title': 'Kompletní finanční přehled o všech vašich firmách',
      'hero-subtitle': 'GetFira.io spojuje vaše finanční data na jedné platformě s přehlednými dashboardy, forecastingem a reporty, které dávají smysl. Soustřeďte se na růst firmy, ne na překlikávání mezi excely.',
      'hero-cta-primary': 'Získat VIP přístup',
      'hero-cta-secondary': 'Zobrazit funkce',
      // Social proof
      'proof-1-value': 'Pro všechny vaše firmy',
      'proof-1-label': 'Navrženo pro české podnikání',
      'proof-2-value': 'Napojení na účetnictví',
      'proof-2-label': 'Data přímo z vašich systémů',
      'proof-3-value': 'Bez složité implementace',
      'proof-3-label': 'Rychlé nasazení, jasné výsledky',
      // Features
      'features-title': 'Vše, co potřebujete pro řízení financí',
      'features-subtitle': 'Od denních dashboardů po roční uzávěrky. GetFira.io se postará o těžkou práci, aby váš tým mohl dělat sebevědomá rozhodnutí založená na datech.',
      'feature-dashboard-title': 'Dashboard a KPI',
      'feature-dashboard-desc': 'Sledujte tržby, náklady, marže a stav hotovosti na první pohled. GetFira.io zobrazuje vaše KPI na základě dat z účetnictví, takže vždy víte, jak na tom vaše firma je. Žádné ruční exporty, žádná zastaralá čísla.',
      'feature-forecast-title': 'Forecasting: Skutečnost vs Plán',
      'feature-forecast-desc': 'Porovnejte svůj finanční plán se skutečnými výsledky měsíc po měsíci. GetFira.io automaticky zvýrazňuje odchylky, abyste mohli včas zachytit problémy a upravit strategii dříve, než se stanou nákladnými překvapeními.',
      'feature-reports-title': 'Finanční reporty',
      'feature-reports-desc': 'Generujte výkazy P&L, rozvahy a cash flow reporty okamžitě. GetFira.io strukturuje vaše data do přehledných, standardizovaných reportů připravených pro vaše vedení, investory nebo účetní.',
      'feature-invoices-title': 'Přehled faktur a bankovních transakcí',
      'feature-invoices-desc': 'Prohlížejte si faktury a bankovní transakce načtené z vašeho účetního systému na jednom místě. GetFira.io zobrazuje již zpracovaná data a umožňuje jejich mapování pro lepší přehlednost.',
      'feature-contracts-title': 'Sledování ziskovosti zakázek',
      'feature-contracts-desc': 'Zjistěte přesně, které zakázky jsou ziskové a které vyčerpávají zdroje. GetFira.io sleduje tržby a náklady na úrovni jednotlivých zakázek, abyste mohli s jistotou vyjednávat, přerozdělovat nebo ukončovat spolupráce.',
      'feature-vat-title': 'DPH compliance',
      'feature-vat-desc': 'Mějte přehled o DPH díky vestavěným výpočtům a reportům. GetFira.io pracuje s českými účetními standardy od základu a automaticky třídí transakce podle sazby DPH pro lepší analytický přehled.',
      // Benefits
      'benefits-title': 'Proč si vybrat GetFira.io',
      'benefits-subtitle': 'Méně času na ruční práci, více času na rozhodnutí, která mají smysl.',
      'benefit-1-title': 'Méně ruční práce',
      'benefit-1-desc': 'Automatizujte sběr dat a reportování. GetFira.io načítá data z vašich účetních nástrojů a bankovních zdrojů a vytváří přehledy. Váš tým se může věnovat analýze a strategii místo ručního zpracování.',
      'benefit-2-title': 'Aktuální data, kterým můžete věřit',
      'benefit-2-desc': 'GetFira.io pravidelně synchronizuje data z vašich zdrojů, takže dashboardy, reporty a forecasty odrážejí aktuální stav vašeho účetnictví.',
      'benefit-3-title': 'Konsolidace více subjektů',
      'benefit-3-desc': 'Řídíte více firem nebo dceřiných společností? GetFira.io konsoliduje finanční data ze všech vašich subjektů do jednoho zobrazení. Sledujte metriky na úrovni skupiny i jednotlivých subjektů bez žonglování se samostatnými tabulkami nebo systémy.',
      'benefit-4-title': 'Bezproblémové bankovní integrace',
      'benefit-4-desc': 'Připojte své bankovní účty a nechte GetFira.io, ať načte transakce. Data se automaticky zobrazují vedle vašich účetních záznamů. Žádné chyby z kopírování.',
      'benefit-5-title': 'České účetní standardy od základu',
      'benefit-5-desc': 'GetFira.io je postavena s českými účetními standardy v jádru. Kategorie DPH, účtová osnova a formáty reportů odpovídají místním požadavkům od začátku. Zůstáváte v souladu s předpisy bez extra konfigurace nebo doplňků třetích stran.',
      // How it works
      'how-title': 'Jak to funguje',
      'how-subtitle': 'Jednoduché nasazení, rychlé výsledky.',
      'step-1-title': 'Připojte svá data',
      'step-1-desc': 'Propojte své bankovní účty, importujte faktury a připojte své stávající účetní nástroje. GetFira.io vše stáhne na jedno místo automaticky.',
      'step-2-title': 'Automatická analýza',
      'step-2-desc': 'GetFira.io třídí transakce, vytváří dashboardy a generuje reporty bez manuálního zásahu. Váš finanční obraz se pravidelně aktualizuje.',
      'step-3-title': 'Dělejte lepší rozhodnutí',
      'step-3-desc': 'S jasnými daty na dosah ruky můžete sledovat trendy, zachytit problémy včas a alokovat zdroje tam, kde mají největší dopad.',
      // Footer
      'footer-brand': '&copy; 2026 GetFira.io. Vyvinula <a href="https://abago.cz" target="_blank" rel="noopener">abago.cz</a>'
    },
    en: {
      // Nav
      'nav-features': 'Features',
      'nav-benefits': 'Benefits',
      'nav-how-it-works': 'How It Works',
      'nav-contact': 'Contact',
      // Meta
      'meta-description': 'GetFira.io provides a complete financial overview — dashboards, forecasting, and reports built on data from your accounting systems.',
      'og-title': 'GetFira.io - Complete financial overview across all your companies',
      'og-description': 'Dashboards, forecasting, and financial reports in one place.',
      // Hero
      'hero-title': 'Complete financial overview across all your companies',
      'hero-subtitle': 'GetFira.io brings your financial data together into one platform with clear dashboards, forecasting, and reports that actually make sense. Focus on growing your business, not toggling between spreadsheets.',
      'hero-cta-primary': 'Get VIP Access',
      'hero-cta-secondary': 'See Features',
      // Social proof
      'proof-1-value': 'All your companies',
      'proof-1-label': 'Designed for Czech companies',
      'proof-2-value': 'Connected to your books',
      'proof-2-label': 'Data straight from your systems',
      'proof-3-value': 'Simple setup',
      'proof-3-label': 'Fast deployment, clear results',
      // Features
      'features-title': 'Everything you need to run your finances',
      'features-subtitle': 'From daily dashboards to year-end reports. GetFira.io handles the heavy lifting so your team can make confident, data-driven decisions.',
      'feature-dashboard-title': 'Dashboard & KPIs',
      'feature-dashboard-desc': 'See your revenue, expenses, margins, and cash position at a glance. GetFira.io displays your KPIs based on data from your accounting systems, so you always know where your business stands. No manual exports, no stale numbers.',
      'feature-forecast-title': 'Forecasting: Actuals vs Plan',
      'feature-forecast-desc': 'Compare your financial plan against actual results month by month. GetFira.io highlights variances automatically so you can spot problems early and adjust your strategy before they become costly surprises.',
      'feature-reports-title': 'Financial Reports',
      'feature-reports-desc': 'Generate P&L statements, balance sheets, and cash flow reports instantly. GetFira.io structures your data into clear, standardised reports that are ready for your board, your investors, or your accountant.',
      'feature-invoices-title': 'Invoice & Bank Transaction Overview',
      'feature-invoices-desc': 'Browse invoices and bank transactions pulled from your accounting system in one place. GetFira.io displays already-processed data and lets you map entries for better clarity.',
      'feature-contracts-title': 'Contract Profitability Tracking',
      'feature-contracts-desc': 'Know exactly which contracts are profitable and which are draining resources. GetFira.io tracks revenue and costs at the contract level so you can renegotiate, reallocate, or sunset engagements with confidence.',
      'feature-vat-title': 'VAT Compliance',
      'feature-vat-desc': 'Keep track of VAT with built-in calculations and reports. GetFira.io handles Czech accounting standards out of the box and automatically categorises transactions by VAT rate for better analytical insight.',
      // Benefits
      'benefits-title': 'Why choose GetFira.io',
      'benefits-subtitle': 'Less time on manual work, more time on decisions that matter.',
      'benefit-1-title': 'Less manual work',
      'benefit-1-desc': 'Automate data collection and reporting. GetFira.io pulls data from your accounting tools and bank feeds and builds reports. Your team can focus on analysis and strategy instead of manual processing.',
      'benefit-2-title': 'Up-to-date data you can trust',
      'benefit-2-desc': 'GetFira.io regularly syncs data from your sources, so dashboards, reports, and forecasts reflect the current state of your books.',
      'benefit-3-title': 'Multi-entity consolidation',
      'benefit-3-desc': 'Running multiple companies or subsidiaries? GetFira.io consolidates financial data across all your entities into a single view. See group-level metrics alongside entity breakdowns without juggling separate spreadsheets or systems.',
      'benefit-4-title': 'Seamless bank integrations',
      'benefit-4-desc': 'Connect your bank accounts and let GetFira.io pull in transactions. Data is automatically displayed alongside your accounting records. No more copy-paste errors.',
      'benefit-5-title': 'Czech accounting standards built in',
      'benefit-5-desc': 'GetFira.io is built with Czech accounting standards at its core. VAT categories, chart of accounts, and reporting formats follow local requirements out of the box. You stay compliant without extra configuration or third-party add-ons.',
      // How it works
      'how-title': 'How it works',
      'how-subtitle': 'Simple setup, fast results.',
      'step-1-title': 'Connect your data',
      'step-1-desc': 'Link your bank accounts, import invoices, and connect your existing accounting tools. GetFira.io pulls everything into one place automatically.',
      'step-2-title': 'Analyse automatically',
      'step-2-desc': 'GetFira.io categorises transactions, builds dashboards, and generates reports without manual intervention. Your financial picture updates regularly.',
      'step-3-title': 'Make better decisions',
      'step-3-desc': 'With clear data at your fingertips, you can spot trends, catch problems early, and allocate resources where they make the biggest impact.',
      // Footer
      'footer-brand': '&copy; 2026 GetFira.io. Developed by <a href="https://abago.cz" target="_blank" rel="noopener">abago.cz</a>'
    }
  };

  // --- Language ---
  var currentLang = 'cs';
  var i18nEls = [];
  var i18nHtmlEls = [];
  var langLabelEl = null;
  var galleryImages = null;
  var currentIndex = 0;
  var lbOverlayEl = null;

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

    document.title = strings['hero-title'] + ' - GetFira.io';
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

    var attr = theme === 'dark' ? 'data-src-dark' : 'data-src-light';
    var imgs = galleryImages || document.querySelectorAll('.feature-image img[data-src-light]');
    for (var i = 0; i < imgs.length; i++) {
      var src = imgs[i].getAttribute(attr);
      if (src) imgs[i].setAttribute('src', src);
    }

    if (lbOverlayEl && lbOverlayEl.classList.contains('open') && galleryImages) {
      var sourceImg = galleryImages[currentIndex];
      if (sourceImg) {
        var lbImg = document.getElementById('lightbox-img');
        var lbSrc = sourceImg.getAttribute(attr);
        if (lbImg && lbSrc) lbImg.setAttribute('src', lbSrc);
      }
    }
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

    // --- Lightbox ---
    galleryImages = document.querySelectorAll('.feature-image img[data-src-light]');

    var lbOverlay = document.createElement('div');
    lbOverlay.className = 'lightbox-overlay';
    lbOverlay.setAttribute('role', 'dialog');
    lbOverlay.setAttribute('aria-label', 'Image lightbox');
    lbOverlay.setAttribute('aria-modal', 'true');
    lbOverlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<div class="lightbox-stage">' +
        '<button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>' +
        '<img class="lightbox-img" id="lightbox-img" src="" alt="" />' +
        '<button class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>' +
      '</div>' +
      '<div class="lightbox-dots" aria-live="polite"></div>';
    document.body.appendChild(lbOverlay);
    lbOverlayEl = lbOverlay;

    var lbImg = document.getElementById('lightbox-img');
    var lbDotsContainer = lbOverlay.querySelector('.lightbox-dots');
    var lbClose = lbOverlay.querySelector('.lightbox-close');
    var lbPrev = lbOverlay.querySelector('.lightbox-prev');
    var lbNext = lbOverlay.querySelector('.lightbox-next');
    var lastFocused = null;
    var lbDots = [];
    var lbSwitchTimer = 0;

    for (var d = 0; d < galleryImages.length; d++) {
      var dot = document.createElement('button');
      dot.className = 'lightbox-dot';
      dot.setAttribute('aria-label', 'Image ' + (d + 1));
      (function (i) {
        dot.addEventListener('click', function () { showLightbox(i); });
      })(d);
      lbDotsContainer.appendChild(dot);
      lbDots.push(dot);
    }

    var touchStartX = 0;
    var touchStartY = 0;
    lbOverlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });
    lbOverlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) showLightbox(currentIndex + 1);
        else showLightbox(currentIndex - 1);
      }
    }, { passive: true });

    function showLightbox(index) {
      var len = galleryImages.length;
      index = ((index % len) + len) % len;
      if (index === currentIndex && lbOverlay.classList.contains('open')) return;
      currentIndex = index;
      var img = galleryImages[currentIndex];
      var theme = document.documentElement.getAttribute('data-theme') || 'light';
      var attr = theme === 'dark' ? 'data-src-dark' : 'data-src-light';

      clearTimeout(lbSwitchTimer);
      lbImg.classList.add('lb-switching');
      lbSwitchTimer = setTimeout(function () {
        lbImg.setAttribute('src', img.getAttribute(attr) || img.getAttribute('src'));
        lbImg.setAttribute('alt', img.getAttribute('alt') || '');
        lbImg.classList.remove('lb-switching');
      }, 150);

      for (var i = 0; i < lbDots.length; i++) {
        lbDots[i].classList.toggle('active', i === currentIndex);
      }
    }

    function openLightbox(index) {
      lastFocused = document.activeElement;
      showLightbox(index);
      lbOverlay.classList.add('open');
      document.body.classList.add('scroll-locked');
      lbClose.focus();
    }

    function closeLightbox() {
      lbOverlay.classList.remove('open');
      document.body.classList.remove('scroll-locked');
      if (lastFocused) lastFocused.focus();
    }

    galleryImages.forEach(function (img, idx) {
      img.closest('.feature-image').addEventListener('click', function () {
        openLightbox(idx);
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', function () { showLightbox(currentIndex - 1); });
    lbNext.addEventListener('click', function () { showLightbox(currentIndex + 1); });

    lbImg.addEventListener('click', function (e) {
      var rect = lbImg.getBoundingClientRect();
      var x = e.clientX - rect.left;
      if (x < rect.width / 2) showLightbox(currentIndex - 1);
      else showLightbox(currentIndex + 1);
    });

    lbOverlay.addEventListener('click', function (e) {
      if (e.target === lbOverlay) closeLightbox();
    });

    lbOverlay.addEventListener('keydown', function (e) {
      if (!lbOverlay.classList.contains('open')) return;
      if (e.key === 'Escape') { closeLightbox(); return; }
      if (e.key === 'ArrowLeft') { showLightbox(currentIndex - 1); e.preventDefault(); return; }
      if (e.key === 'ArrowRight') { showLightbox(currentIndex + 1); e.preventDefault(); return; }

      if (e.key === 'Tab') {
        var focusable = [lbClose, lbPrev, lbNext];
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    });

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

    // --- Scroll-Reveal Animations ---
    (function initReveal() {
      if (!('IntersectionObserver' in window)) {
        var fallbacks = document.querySelectorAll('.reveal');
        for (var i = 0; i < fallbacks.length; i++) {
          fallbacks[i].classList.add('is-visible');
        }
        return;
      }

      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Add .reveal to target elements
      var revealSelectors = [
        '.section-title',
        '.section-subtitle',
        '.feature-block',
        '.contact-info-wrap'
      ];
      var revealEls = [];
      revealSelectors.forEach(function (sel) {
        var els = document.querySelectorAll(sel);
        for (var i = 0; i < els.length; i++) {
          els[i].classList.add('reveal');
          revealEls.push(els[i]);
        }
      });

      // Add staggered reveals for grid children
      var staggerConfigs = [
        { parent: '.proof-grid', children: '.proof-item' },
        { parent: '.steps-grid', children: '.step-card' }
      ];
      staggerConfigs.forEach(function (config) {
        var parents = document.querySelectorAll(config.parent);
        for (var p = 0; p < parents.length; p++) {
          parents[p].classList.add('reveal-stagger');
          var kids = parents[p].querySelectorAll(config.children);
          for (var k = 0; k < kids.length; k++) {
            kids[k].classList.add('reveal');
            revealEls.push(kids[k]);
          }
        }
      });

      // Step arrows (pulse animation)
      var stepArrows = document.querySelectorAll('.step-arrow');

      // If reduced-motion, show everything immediately
      if (prefersReduced) {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
        for (var a = 0; a < stepArrows.length; a++) {
          stepArrows[a].classList.add('is-visible');
        }
        return;
      }

      // One-shot IntersectionObserver
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      revealEls.forEach(function (el) { observer.observe(el); });
      for (var s = 0; s < stepArrows.length; s++) {
        observer.observe(stepArrows[s]);
      }
    })();
  });
})();
