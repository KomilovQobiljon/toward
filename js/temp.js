var swiper = new Swiper(".swiper--thumbs", {
  //   spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 32,
  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    300: {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    },
    600: {
      pagination: false,
    },
    900: {
      direction: "vertical",
    },
  },
});
