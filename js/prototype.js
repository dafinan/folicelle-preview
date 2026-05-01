/* ============================================================
   FOLICELLE PROTOTYPE — shared JS
   - Mobile hamburger menu open/close
   - Header scroll-shadow toggle
   - Smooth scroll already handled via CSS scroll-behavior: smooth
   ============================================================ */

(function () {
  'use strict';

  // Mobile menu toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close on link click inside menu
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Header scroll-shadow toggle
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastY = 0;
    function onScroll() {
      const y = window.scrollY;
      if (y > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      lastY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
