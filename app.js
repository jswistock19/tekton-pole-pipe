/* =====================================================
   TEKTON POLE & PIPE — APP.JS
   Premium interactions, scroll reveal, cursor glow
   ===================================================== */

'use strict';

/* ===== NAV SCROLL ===== */
(function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ===== CURSOR GLOW ===== */
(function initCursor() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  let mx = -200, my = -200;
  let cx = -200, cy = -200;
  let raf;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  function tick() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    glow.style.transform = `translate(${cx - 160}px, ${cy - 160}px)`;
    raf = requestAnimationFrame(tick);
  }
  tick();
})();

/* ===== SCROLL REVEAL ===== */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  els.forEach(el => observer.observe(el));
})();

/* ===== TICKER ===== */
(function initTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  // Clone items for seamless loop
  const items = track.innerHTML;
  track.innerHTML = items + items;

  let pos = 0;
  const speed = 0.55;

  function tick() {
    pos -= speed;
    const half = track.scrollWidth / 2;
    if (Math.abs(pos) >= half) pos = 0;
    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

/* ===== CO2 BARS ANIMATE ===== */
(function initCo2Bars() {
  const bars = document.querySelectorAll('.co2-bar');
  if (!bars.length) return;

  // Reset widths to 0, animate in on scroll
  bars.forEach(bar => {
    const target = bar.getAttribute('data-target');
    bar.style.width = '0%';
    bar.dataset.targetWidth = target + '%';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetW = bar.dataset.targetWidth;
        setTimeout(() => {
          bar.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
          bar.style.width = targetW;
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ===== PAGE TRANSITIONS ===== */
(function initTransitions() {
  document.body.classList.add('page-loaded');

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Only internal links, not anchors, not external
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.target === '_blank') return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => {
        window.location.href = href;
      }, 280);
    });
  });
})();

/* ===== CONTACT FORM ===== */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    // Let mailto action fire, but show confirmation
    const btn = form.querySelector('.form-submit');
    if (btn) {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'var(--green)';
      btn.style.borderColor = 'var(--green)';
      btn.disabled = true;
    }
  });
})();

/* ===== PARALLAX HERO ===== */
(function initParallax() {
  const heroes = document.querySelectorAll('.page-hero-bg, .hero-bg');
  if (!heroes.length) return;

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    heroes.forEach(el => {
      el.style.transform = `translateY(${sy * 0.35}px)`;
    });
  }, { passive: true });
})();
