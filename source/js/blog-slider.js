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
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 'auto',
          },
          1200: {
            initialSlide: 0,
            slidesPerView: 'auto',
            spaceBetween: 40,
          },
        },
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
