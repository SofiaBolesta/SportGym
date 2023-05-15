import Swiper from '../js/vendor/swiper.js';
const coachesSwiper = document.querySelector('.coaches__swiper');

export const initCoachesSwiper = () => {
  if (coachesSwiper) {
    (() =>
      new Swiper('.coaches__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: true,
            slidesPerColumn: 1,
            spaceBetween: 30,
          },
          1200: {
            initialSlide: 0,
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
        centeredSlides: 'true',
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
