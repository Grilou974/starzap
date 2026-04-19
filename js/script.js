/* =====================================================
   STARZAP — Script principal
   Animations au scroll + comportement de la navigation
   ===================================================== */

/* ----- REVEAL AU SCROLL ----- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ----- OMBRE DE NAV AU SCROLL ----- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.style.background = 'rgba(10, 0, 24, 0.9)';
    nav.style.borderBottom = '1px solid rgba(198, 255, 61, 0.2)';
  } else {
    nav.style.background = 'rgba(10, 0, 24, 0.55)';
    nav.style.borderBottom = '1px solid rgba(198, 255, 61, 0.1)';
  }
});
