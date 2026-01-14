document.addEventListener('DOMContentLoaded', function () {
  /* =====================
     HERO SLIDER
  ====================== */
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((s) => s.classList.remove('active'));
    if (slides[i]) {
      slides[i].classList.add('active');
    }
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Auto slide
  if (slides.length > 0) {
    var autoSlide = setInterval(nextSlide, 5000);
  }

  // Buttons
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      prevSlide();
    });
  }

  /* =====================
     HAMBURGER NAV / DROPDOWN
  ====================== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(':scope > a'); // only parent link
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  /* =====================
     REVEAL ON SCROLL
  ====================== */
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run once on load

  /* =====================
     TIMELINE EVENTS SCROLL
  ====================== */
  const events = document.querySelectorAll('.timeline-event');

  const revealTimeline = () => {
    const triggerBottom = window.innerHeight * 0.8;

    events.forEach((event) => {
      const eventTop = event.getBoundingClientRect().top;
      if (eventTop < triggerBottom) {
        event.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealTimeline);
  revealTimeline(); // run once on load

  /* =====================
     NAVBAR SOLID ON SCROLL
  ====================== */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('solid');
      } else {
        navbar.classList.remove('solid');
      }
    });
  }

  /* =====================
     TRADING GRAPH BARS
  ====================== */
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach((bar) => {
    const value = bar.getAttribute('data-value');
    setTimeout(() => {
      bar.style.height = value + '%';
    }, 300);
  });

  /* =====================
     PAPER CARDS EXPAND / COLLAPSE
  ====================== */
  const toggleButtons = document.querySelectorAll('.js-toggle-card');

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.paper-card');
      if (!card) return;

      const isExpanded = card.getAttribute('data-expanded') === 'true';

      // Toggle expanded state
      card.setAttribute('data-expanded', String(!isExpanded));

      // Toggle button text
      btn.textContent = isExpanded ? 'Explore' : 'Hide details';
    });
  });
});
