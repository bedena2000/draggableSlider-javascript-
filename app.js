// Arrows

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const sliderCarousel = document.querySelector('.slider-carousel-items-wrapper');

// Functions

// Click Events

rightArrow.addEventListener('click', () => {
  let sliderLeftPosition = window.getComputedStyle(sliderCarousel).left;
  let leftRawValue = '';
  for (let i = 0; i < sliderLeftPosition.length; i++) {
    if (sliderLeftPosition[i] == 'p') {
      break;
    }
    leftRawValue += sliderLeftPosition[i];
  }
  let newValue = parseInt(leftRawValue) - 320;
  if (newValue != -1280) {
    let newStyleValue = newValue + 'px';
    sliderCarousel.style.left = newStyleValue;
  }
});

leftArrow.addEventListener('click', () => {
  let sliderLeftPosition = window.getComputedStyle(sliderCarousel).left;
  let leftRawValue = '';
  for (let i = 0; i < sliderLeftPosition.length; i++) {
    if (sliderLeftPosition[i] == 'p') {
      break;
    }
    leftRawValue += sliderLeftPosition[i];
  }
  let newValue = parseInt(leftRawValue) + 320;
  if (newValue != 320) {
    let newStyleValue = newValue + 'px';
    sliderCarousel.style.left = newStyleValue;
  }
});
