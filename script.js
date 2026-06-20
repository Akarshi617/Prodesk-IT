// ===========================================================
// PRODESK IT — script.js
// Handles: Dark/Light toggle, mobile hamburger menu, sticky navbar
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Dark / Light theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');

  // Default theme is the warm light theme. Load saved preference.
  const savedTheme = localStorage.getItem('prodesk-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('prodesk-theme', isDark ? 'dark' : 'light');
  });

  /* ---------- 2. Mobile hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  /* ---------- 3. Sticky navbar styling on scroll ---------- */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });

});