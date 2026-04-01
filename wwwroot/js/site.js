(function () {
  'use strict';

  // --- Theme Toggle ---
  function getPreferredTheme() {
    var stored = localStorage.getItem('fira-theme');
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
    if (!localStorage.getItem('fira-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('fira-theme', next);
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
      { id: 'name', msg: 'Please enter your name.' },
      { id: 'email', msg: 'Please enter a valid email address.' },
      { id: 'company', msg: 'Please enter your company name.' },
      { id: 'message', msg: 'Please enter a message.' }
    ];

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
            error.textContent = f.msg;
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
