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

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);




window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // scroll distance threshold
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});


