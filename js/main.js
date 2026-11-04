/**
 * main.js — Script Interaksi Portofolio Yufi Safangat
 * Tema: Single Light Theme (Terinspirasi naledi.co.uk & harrisonjansma.com)
 * 
 * Fitur:
 * 1. Mobile Navigation & Keyboard Accessibility
 * 2. Navbar Shadow on Scroll & Section Spy
 * 3. Scroll Reveal Animation
 * 4. Copy Email to Clipboard dengan Notifikasi Toast
 */

(function () {
  'use strict';

  // ===== ELEMEN DOM =====
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta, .navbar__link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const toastNotice = document.getElementById('toast-notice');
  const emailBtn = document.getElementById('email-btn');

  // ===== 1. MOBILE NAVIGATION =====
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  // ===== 2. NAVBAR SCROLL & ACTIVE SPY =====
  function handleNavbar() {
    if (window.scrollY > 15) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 120;
    sections.forEach(function (sec) {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === '#' + id || (href === '#projects' && id === 'other-projects')) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  let scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        handleNavbar();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  handleNavbar();

  // ===== 3. SCROLL REVEAL ANIMATIONS =====
  const revealElements = document.querySelectorAll('.reveal-up, .stagger-group');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    revealElements.forEach(el => el.classList.add('active'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ===== 4. COPY EMAIL TO CLIPBOARD DENGAN TOAST =====
  if (emailBtn && toastNotice) {
    emailBtn.addEventListener('click', function () {
      const email = 'yufisafangat50@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast();
        }).catch(() => {});
      }
    });

    let toastTimeout;
    function showToast() {
      clearTimeout(toastTimeout);
      toastNotice.classList.add('show');
      toastTimeout = setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 3000);
    }
  }

})();
