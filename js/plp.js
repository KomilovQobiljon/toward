const bodyBtns = document.querySelectorAll(".body-btns__icon");

for (let i = 0; i < bodyBtns.length; i++) {
  bodyBtns[i].addEventListener("click", function () {
    if (bodyBtns[i].classList.contains("body-btns__icon-minus")) {
      bodyBtns[i].classList.remove("body-btns__icon-minus");
      bodyBtns[i].classList.add("body-btns__icon-plus");
    } else if (bodyBtns[i].classList.contains("body-btns__icon-plus")) {
      bodyBtns[i].classList.remove(".body-btns__icon-plus");
      bodyBtns[i].classList.add("body-btns__icon-minus");
    }
  });
}
const menu = document.querySelector(".plp__menu");
const carousel = document.querySelector(".plp__carousel");
const filters = document.querySelector("#body-btns__filter");
const sortBy = document.querySelector;

filters.addEventListener("click", (e) => {
  if (filters.checked) {
    menu.classList.add("plp__menu--open");
    carousel.classList.add("plp__carousel--short");
  } else {
    menu.classList.remove("plp__menu--open");
    carousel.classList.remove("plp__carousel--short");
  }
});
("#body-btns__sort");

const panels = document.querySelectorAll(".panel");
const accs = document.querySelectorAll(".accordion");
menu.addEventListener("click", (e) => {
  const panel = e.target.nextElementSibling;
  if (e.target.classList.contains("active")) {
    e.target.classList.toggle("active");
    panel.classList.remove("panel__padding");
    panel.style.maxHeight = null;
  } else {
    panels.forEach((panel) => {
      panel.style.maxHeight = null;
      panel.classList.remove("panel__padding");
    });
    accs.forEach((acc) => {
      acc.classList.remove("active");
    });
    e.target.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("panel__padding");
    } else {
      panel.style.maxHeight = panel.scrollHeight + 16 + "px";
      panel.classList.add("panel__padding");
    }
  }
});

const plpCarousel = new Swiper(".plp__carousel-container", {
  pagination: {
    el: ".plp__carousel-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".plp__carousel-next",
    prevEl: ".plp__carousel-prev",
  },
  breakPoints: {
    // 600: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // },
  },
});
//const swiperPagination = document.querySelector(".swiper-pagination");
console.log(plpCarousel.pagination.bullets);

const carouselWrapper = document.querySelector(".plp__carousel-wrapper");
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
  swiperSlide.classList.add("swiper-slide", "plp__carousel-item");
  swiperSlide.appendChild(productMarkup);
  carouselWrapper.appendChild(swiperSlide);
});
