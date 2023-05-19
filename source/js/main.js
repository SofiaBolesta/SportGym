import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './vendor/iphone-inline-video';
import './vendor/swiper';
import {initCoachesSwiper} from './blog-slider';
import {initReviewsSwiper} from './reviews-slide';
import {initTabs} from './modules/tabs/init-tabs';
import {initPlayVideo} from './play-video';
import {initMenuScroll} from './initMenuScroll';

window.addEventListener('DOMContentLoaded', () => {
  initTabs();
  iosVhFix();
  initCoachesSwiper();
  initReviewsSwiper();
  initPlayVideo();
  initMenuScroll();
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
