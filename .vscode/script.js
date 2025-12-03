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
