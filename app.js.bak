// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== MOBILE HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

// ===== TYPEWRITER =====
const typeEl = document.getElementById('typewriter');
if (typeEl) {
  const phrases = ['Power Grid', 'Utility Sector', 'Infrastructure', 'Energy Network', 'Grid Reliability', 'Pole Standards', 'Clean Energy'];
  let phraseIndex = 0, charIndex = 0, deleting = false;
  function typeLoop() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      typeEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 2400); return; }
    } else {
      typeEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
    }
    setTimeout(typeLoop, deleting ? 50 : 75);
  }
  typeLoop();
}

// ===== ANIMATED COUNTER =====
function animateCounter(el, target, duration = 2200, decimals = 0) {
  if (!el) return;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const val = ease * target;
    el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Hero counters
const heroPanel = document.querySelector('.hero-stat-stack');
if (heroPanel) {
  const heroObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(document.getElementById('poleStat'), 84);
        animateCounter(document.getElementById('marketStat'), 50);
        animateCounter(document.getElementById('lifeStat'), 75);
        animateCounter(document.getElementById('waterStat'), 0);
        heroObs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  heroObs.observe(heroPanel);
}

// Crisis counters
const crisisGrid = document.querySelector('.crisis-counters');
if (crisisGrid) {
  const crisisObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(document.getElementById('agingPoles'), 180000000, 2800);
        animateCounter(document.getElementById('stormCost'), 27, 2200);
        animateCounter(document.getElementById('wildfireStart'), 1500, 2000);
        animateCounter(document.getElementById('outageHours'), 8, 2000);
        crisisObs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  crisisObs.observe(crisisGrid);
}

// ===== CO2 BARS =====
const co2Chart = document.getElementById('co2Chart');
if (co2Chart) {
  const co2Obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        co2Chart.querySelectorAll('.co2-bar').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        co2Obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  co2Obs.observe(co2Chart);
}

// ===== TICKER =====
const tickerInner = document.getElementById('tickerInner');
if (tickerInner) {
  const events = [
    { flag: '🇺🇸', title: 'Texas Ice Storm — 4.5M Homes Lost Power', year: '2021', tag: 'Grid Failure' },
    { flag: '🇺🇸', title: 'PG&E Power Lines Sparked Dixie Fire — Largest CA Wildfire', year: '2021', tag: 'Wildfire' },
    { flag: '🇺🇸', title: 'Hurricane Ida — 1M Louisiana Customers Without Power 2+ Weeks', year: '2021', tag: 'Storm Damage' },
    { flag: '🇺🇸', title: 'Maui Wildfires — Power Lines Under Investigation', year: '2023', tag: 'Wildfire' },
    { flag: '🇺🇸', title: 'Pacific Northwest Heat Dome — Grid Pushed to Breaking Point', year: '2021', tag: 'Grid Stress' },
    { flag: '🇺🇸', title: 'Hurricane Ian — 2.5M FL Customers Lost Power', year: '2022', tag: 'Storm Damage' },
    { flag: '🇺🇸', title: 'NESC: 45% of US Poles Are Past Design Life', year: '2023', tag: 'Aging Infrastructure' },
    { flag: '🇺🇸', title: 'California — 1,500+ Wildfires Linked to Power Lines Since 2015', year: '2024', tag: 'Wildfire' },
    { flag: '🇺🇸', title: 'Florida — Wood Pole Failures Add $4.5B to Hurricane Repair Costs', year: '2022', tag: 'Economic Loss' },
    { flag: '🇺🇸', title: 'DOE: US Grid Needs $2T Investment by 2035', year: '2023', tag: 'Infrastructure Gap' },
    { flag: '🇺🇸', title: 'Northeast Winter Storm — 500K Without Power 5+ Days', year: '2022', tag: 'Storm Damage' },
    { flag: '🇺🇸', title: 'Texas — Utility Poles Still Being Replaced From 2017 Harvey', year: '2023', tag: 'Backlog' },
    { flag: '🇺🇸', title: 'Louisiana — Chemical Leaching From Creosote Poles Contaminates Groundwater', year: '2022', tag: 'Contamination' },
    { flag: '🇺🇸', title: 'EPA Report: CCA-Treated Poles Linked to Arsenic Soil Contamination', year: '2023', tag: 'Environmental' },
  ];
  const all = [...events, ...events];
  all.forEach(ev => {
    const el = document.createElement('div');
    el.className = 'ticker-event';
    el.innerHTML = `<span class="t-flag">${ev.flag}</span><span class="t-title">${ev.title}</span><span class="t-tag">${ev.tag} ${ev.year}</span>`;
    tickerInner.appendChild(el);
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Message Sent — We\'ll Be in Touch Soon';
    btn.style.background = '#22c55e';
    btn.style.color = '#fff';
    btn.disabled = true;
  });
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });
  revealEls.forEach(el => revealObs.observe(el));
}

// ===== PAGE TRANSITION =====
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.2s ease';
      setTimeout(() => { window.location.href = href; }, 200);
    });
  }
});
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});
