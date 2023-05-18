const buttonHeaderServices = document.querySelector('.header__services');

const initMenuScroll = () => {
  if (document.querySelector('.services')) {
    buttonHeaderServices.addEventListener('click', function () {
      document.querySelector('.services').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {initMenuScroll};
