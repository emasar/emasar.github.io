
const swiper = new swiper(".swiper-slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidePerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});