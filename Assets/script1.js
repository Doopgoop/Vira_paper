document.addEventListener('DOMContentLoaded', function () {
  // -----------------------
  // SLIDER FUNCTIONALITY
  // -----------------------
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    if (slides[i]) slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  if (slides.length > 0) {
    let autoSlide = setInterval(nextSlide, 5000);

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (nextBtn) nextBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      nextSlide();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      prevSlide();
    });
  }

  // -----------------------
  // HAMBURGER MENU
  // -----------------------
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });

  // -----------------------
  // REVEAL ON SCROLL
  // -----------------------
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // reveal elements already in view on page load

  // -----------------------
  // TIMELINE EVENTS (Optional)
  // -----------------------
  const events = document.querySelectorAll('.timeline-event');
  const triggerBottom = window.innerHeight * 0.8;

  function revealTimeline() {
    events.forEach(event => {
      const eventTop = event.getBoundingClientRect().top;
      if (eventTop < triggerBottom) {
        event.classList.add('visible');
      }
    });
  }

  if (events.length > 0) {
    window.addEventListener('scroll', revealTimeline);
    revealTimeline();
  }

  // -----------------------
  // STICKY / SOLID NAVBAR
  // -----------------------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('solid', window.scrollY > 50);
    });
  }

  // -----------------------
  // OPTIONAL: Smooth scroll for anchor links
  // -----------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
