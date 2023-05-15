const buttonPlay = document.querySelector('.promo__video-play');
const picturePromo = document.querySelector('.promo__picture-video');
const promoShadow = document.querySelector('.promo__shadow');
const promoContainerButton = document.querySelector('.promo__container-button');

export const initPlayVideo = () => {
  buttonPlay.addEventListener('click', function () {
    picturePromo.style.display = 'none';
    promoShadow.style.display = 'none';
    promoContainerButton.style.display = 'none';
  });
};
