import Swiper from '../js/vendor/swiper.js';
/* import swiper from "vendor/swiper";*/
const coachesSwiper = document.querySelector('.reviews__swiper');

export const initReviewsSwiper = () => {
  if (coachesSwiper) {
    (() =>
      new Swiper('.reviews__swiper', {
        direction: 'horizontal',
        loop: false,
        navigation: {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
