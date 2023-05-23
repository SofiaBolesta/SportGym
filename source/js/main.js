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
