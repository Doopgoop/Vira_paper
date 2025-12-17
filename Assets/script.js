document.addEventListener('DOMContentLoaded', function () {
  
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((s) => s.classList.remove('active'));
    slides[i].classList.add('active');
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
  let autoSlide = setInterval(nextSlide, 5000);

  // Buttons
  document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
  });
  
});

  
  
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle slide-down menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Toggle dropdowns inside slide-down menu
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });







const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);


// Optional: Reveal timeline events on scroll
const events = document.querySelectorAll('.timeline-event');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top;
    if (eventTop < triggerBottom) {
      event.classList.add('visible');
    }
  });
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // scroll distance threshold
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

// Animate trading graph bars
// Animate trading bars when page loads
const bars = document.querySelectorAll(".bar-fill");
bars.forEach(bar => {
  const value = bar.getAttribute("data-value");
  setTimeout(() => {
    bar.style.height = value + "%";
  }, 300); // optional small delay
});


