const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateCarousel() {
  // Вираховуємо ширину однієї картки + gap
  const cardWidth = document.querySelector('.card').offsetWidth + 20;
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  // Оновлюємо крапки
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  if (index < dots.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
