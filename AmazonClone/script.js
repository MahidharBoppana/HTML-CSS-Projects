  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });




  const sliderTrack = document.querySelector('.slider-track');
  const sliderImages = document.querySelectorAll('.slider-track img');
  const buttonPrev = document.querySelector('.slider-prev');
  const buttonNext = document.querySelector('.slider-next');
  let currentSlideIndex = 0;

  function moveToSlide() {
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  buttonNext.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
    moveToSlide();
  });

  buttonPrev.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + sliderImages.length) % sliderImages.length;
    moveToSlide();
  });

