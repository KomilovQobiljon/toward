const swiperMarquee = new Swiper(".marquee__swiper", {
  // Optional parameters
  slidesPerView: "auto",
  autoplay: {
    disableOnInteraction: true,
    delay: 2000,
  },
});

const productCarousel = new Swiper(".product-carousel", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".product-carousel-next",
    prevEl: ".product-carousel-prev",
  },
});
const productCarouselMobile = new Swiper(".product-carousel--mobile", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".product-carousel-next",
    prevEl: ".product-carousel-prev",
  },
});

const productCarouselFour = new Swiper(".carousel-four", {
  navigation: {
    nextEl: ".carousel-four__next",
    prevEl: ".carousel-four__prev",
  },
});

const productCarouselFourMobile = new Swiper(".carousel-four--mobile", {
  slidesPerView: 2,
  navigation: {
    nextEl: ".carousel-four-mobile__next",
    prevEl: ".carousel-four-mobile__prev",
  },
});

const imageProductCarousel = new Swiper(".img-product-carousel", {
  navigation: {
    nextEl: ".img-product-carousel__next",
    prevEl: ".img-product-carousel__prev",
  },
});

const simpleCarousel = new Swiper(".carousel-simple-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".carousel-simple__next",
    prevEl: ".carousel-simple__prev",
  },
});
