import '/js/rent-block.js';
import '/js/mobile-menu.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.asdasd-next',
    prevEl: '.asdasd-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 16,
  slidesPerGroup: 1,
  loop: false,
  breakpoints: {

    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
     1280: {
      slidesPerView: 3,
    }
  },
});



