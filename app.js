// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== TYPEWRITER =====
const phrases = ['Power Grid', 'Utility Sector', 'Infrastructure', 'Energy Network', 'Grid Reliability', 'Pole Standards'];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typeEl = document.getElementById('typewriter');
function typeLoop() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typeEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 2200); return; }
  } else {
    typeEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
  }
  setTimeout(typeLoop, deleting ? 55 : 80);
}
typeLoop();

// ===== ANIMATED COUNTERS =====
function animateCounter(el, target, duration = 2200, prefix = '', suffix = '', decimals = 0) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const val = ease * target;
    el.textContent = prefix + (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(document.getElementById('poleStat'), 84);
      animateCounter(document.getElementById('marketStat'), 50);
      animateCounter(document.getElementById('lifeStat'), 75);
      animateCounter(document.getElementById('marginStat'), 40);
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('.hero-stats-panel'));

const crisisObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(document.getElementById('agingPoles'), 180000000, 2500);
      animateCounter(document.getElementById('stormCost'), 27, 2200);
      animateCounter(document.getElementById('wildfireStart'), 1400, 2000);
      animateCounter(document.getElementById('outageHours'), 8, 2000);
      crisisObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
crisisObserver.observe(document.querySelector('.crisis-counters'));

// ===== FUND BARS ANIMATION =====
const fundObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.fund-bar').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      fundObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
fundObserver.observe(document.querySelector('.opp-use-funds'));

// ===== TICKER =====
const events = [
  { flag: '🇺🇸', title: 'Texas Ice Storm — 4.5M Homes Lost Power', year: '2021', tag: 'Grid Failure' },
  { flag: '🇺🇸', title: 'PG&E Power Lines Sparked Dixie Fire — Largest CA Wildfire', year: '2021', tag: 'Wildfire' },
  { flag: '🇺🇸', title: 'Hurricane Ida — 1M Louisiana Customers Without Power 2+ Weeks', year: '2021', tag: 'Storm Damage' },
  { flag: '🇺🇸', title: 'Maui Wildfires — Power Lines Under Investigation', year: '2023', tag: 'Wildfire' },
  { flag: '🇺🇸', title: 'Pacific Northwest Heat Dome — Grid Pushed to Breaking Point', year: '2021', tag: 'Grid Stress' },
  { flag: '🇺🇸', title: 'Hurricane Ian — 2.5M FL Customers Lost Power', year: '2022', tag: 'Storm Damage' },
  { flag: '🇺🇸', title: 'NESC Reports 45% of US Poles Are Past Design Life', year: '2023', tag: 'Aging Infrastructure' },
  { flag: '🇺🇸', title: 'California — 1,500+ Wildfires Linked to Power Lines Since 2015', year: '2024', tag: 'Wildfire' },
  { flag: '🇺🇸', title: 'Florida — Wood Pole Failures Add $4.5B to Hurricane Repair Costs', year: '2022', tag: 'Economic Loss' },
  { flag: '🇺🇸', title: 'DOE: US Grid Needs $2T Investment by 2035', year: '2023', tag: 'Infrastructure Gap' },
  { flag: '🇺🇸', title: 'Northeast Winter Storm — 500K Without Power 5+ Days', year: '2022', tag: 'Storm Damage' },
  { flag: '🇺🇸', title: 'Texas — Utility Poles Still Being Replaced From 2017 Harvey', year: '2023', tag: 'Backlog' },
];
const inner = document.getElementById('tickerInner');
const allEvents = [...events, ...events]; // duplicate for seamless loop
allEvents.forEach(ev => {
  const el = document.createElement('div');
  el.className = 'ticker-event';
  el.innerHTML = `<span class="t-flag">${ev.flag}</span><span class="t-title">${ev.title}</span><span class="t-tag">${ev.tag} ${ev.year}</span>`;
  inner.appendChild(el);
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Message Sent — We\'ll Be in Touch';
  btn.style.background = '#22c55e';
  btn.disabled = true;
});

// ===== HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '68px'; links.style.left = '0'; links.style.right = '0';
  links.style.background = 'rgba(6,6,8,0.98)';
  links.style.padding = '1.5rem 2rem';
  links.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.product-card, .biz-step, .crisis-stat');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});