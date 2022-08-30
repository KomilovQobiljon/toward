const pdpCarousel = new Swiper(".pdp-carousel", {
  //direction: "vertical",
});

const pdpAddCarouselOne = new Swiper(".pdp__add-carousel-1", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".pdp__add-carousel-next-1",
    prevEl: ".pdp__add-carousel-prev-1",
  },
  breakpoints: {
    401: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 3,
    },
    901: {
      slidesPerView: 4,
    },
  },
});

const pdpAddCarouselWrapperOne = document.querySelector(
  ".pdp__add-carousel-wrapper-1"
);
products.forEach((product) => {
  const productObject = new Product(
    product.id,
    product.img,
    product.icons,
    product.liked,
    product.isNew,
    product.sale,
    product.brand,
    product.title,
    product.price,
    product.colors
  );
  const productMarkup = productObject.createContainer();
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide", "pdp__add-carousel-item-1");
  swiperSlide.appendChild(productMarkup);
  pdpAddCarouselWrapperOne.appendChild(swiperSlide);
});

const pdpAddCarouselTwo = new Swiper(".pdp__add-carousel-2", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".pdp__add-carousel-next-2",
    prevEl: ".pdp__add-carousel-prev-2",
  },
  breakpoints: {
    401: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 3,
    },
    901: {
      slidesPerView: 4,
    },
  },
});
const pdpAddCarouselWrapperTwo = document.querySelector(
  ".pdp__add-carousel-wrapper-2"
);
products.forEach((product) => {
  const productObject = new Product(
    product.id,
    product.img,
    product.icons,
    product.liked,
    product.isNew,
    product.sale,
    product.brand,
    product.title,
    product.price,
    product.colors
  );
  const productMarkup = productObject.createContainer();
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide", "pdp__add-carousel-item-1");
  swiperSlide.appendChild(productMarkup);
  pdpAddCarouselWrapperTwo.appendChild(swiperSlide);
});

const pdpColorRadioInputs = document.querySelector(".color-radio__inputs");
const pdpColorRadioContainer = document.querySelectorAll(
  ".color-radio__container"
);
const pdpColorName = document.querySelector(".color-radio__color");
pdpColorRadioInputs.addEventListener("click", () => {
  pdpColorRadioContainer.forEach((label) => {
    if (label.children[0].checked) {
      pdpColorName.textContent = label.children[0].id.split("--")[1];
    }
  });
});

const pdpInfoHeadingGroup = document.querySelector(".pdp__info-heading-group");
const pdpInfoText = document.querySelectorAll(".info__text");
const pdpInfoHeading = document.querySelectorAll(".info__heading");
pdpInfoHeadingGroup.addEventListener("click", (e) => {
  if (e.target.classList[0] === "info__heading") {
    pdpInfoHeading.forEach((heading) => {
      heading.classList.remove("info__heading--active");
    });
    e.target.classList.add("info__heading--active");
    pdpInfoText.forEach((p) => {
      if (p.id === e.target.textContent) {
        pdpInfoText.forEach((p) => {
          p.classList.remove("info__text--visible");
        });
        p.classList.add("info__text--visible");
      }
    });
  }
});
