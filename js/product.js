const products = [
  {
    id: 1,
    img: "../assets/dressBlue.png",
    icons: [
      "../assets/icons/icon-recycle.svg",
      "../assets/icons/icon-leaf.svg",
      "../assets/icons/icon-rabbit.svg",
    ],
    liked: true,
    isNew: true,
    sale: false,
    brand: "Gucci",
    title: "Zipper Mini Dress",
    price: "879.00",
    colors: ["white", "black", "red"],
  },
  {
    id: 2,
    img: "../assets/dressRed.png",
    icons: [
      "../assets/icons/icon-recycle.svg",
      "../assets/icons/icon-leaf.svg",
    ],
    liked: false,
    brand: "Alexander Wang",
    title: "Mix Pattern Leather Jacket",
    price: "879.00",
    colors: ["white", "black", "red"],
  },
  {
    id: 3,
    img: "../assets/dressBlack.png",
    icons: [
      "../assets/icons/icon-recycle.svg",
      "../assets/icons/icon-leaf.svg",
      "../assets/icons/icon-rabbit.svg",
    ],
    liked: true,
    isNew: false,
    sale: true,
    brand: "Gucci",
    title: "Zipper Mini Dress",
    price: "879.00",
    colors: ["white", "black", "red"],
  },
  {
    id: 4,
    img: "../assets/dressBlue.png",
    icons: [
      "../assets/icons/icon-recycle.svg",
      "../assets/icons/icon-leaf.svg",
      "../assets/icons/icon-rabbit.svg",
    ],
    liked: true,
    isNew: true,
    sale: false,
    brand: "Gucci",
    title: "Zipper Mini Dress",
    price: "879.00",
    colors: ["white", "black", "red"],
  },
  {
    id: 5,
    img: "../assets/dressBlue.png",
    icons: [
      "../assets/icons/icon-recycle.svg",
      "../assets/icons/icon-leaf.svg",
      "../assets/icons/icon-rabbit.svg",
    ],
    liked: true,
    isNew: true,
    sale: false,
    brand: "Gucci",
    title: "Zipper Mini Dress",
    price: "879.00",
    colors: ["white", "black", "red"],
  },
];

class Product {
  constructor(id, img, icons, liked, isNew, sale, brand, title, price, colors) {
    this.id = id;
    this.img = img;
    this.icons = icons;
    this.liked = liked;
    this.isNew = isNew;
    this.sale = sale;
    this.brand = brand;
    this.title = title;
    this.price = price;
    this.colors = colors;
  }
  createMarkup() {
    const markup = `
      <div class="product__like-container">
        <label class="product__like">
          <input type="checkbox" class="product__like-checkbox" ${
            this.liked ? "checked" : ""
          } />
          <span class="product__like-icon"></span>
        </label>
      </div>
      <div class="product__label">
        ${this.createLabel()}
      </div>
      <div class="product__img-container">
        <img
          src="${this.img}"
          alt=""
          class="product__img"
        />
      </div>
      <div class="product__icon-container">
        ${this.createIcons()}
      </div>
      <div class="product__details">
        <h4 class="product__details-title p--primary">${this.brand}</h4>
        <p class="p--primary product__details-text">
          ${this.title}
        </p>
        <p
          class="p--primary product__details-price product__details-text"
        >
          $${this.price}
        </p>
        <div class="product__colors">
          ${this.createColorMarkup()}
        </div>
      </div>
    `;
    return markup;
  }
  createIcons() {
    let markupIcons = this.icons
      .map((iconURL) => {
        return `<img src='${iconURL}' alt='' class='product__icon'/>`;
      })
      .join("");
    return markupIcons;
  }
  createLabel() {
    let label = "";
    if (this.isNew && this.sale) {
      label = "<p class='p--primary' >New</p>";
    } else if (this.isNew) {
      label = "<p class='p--primary' >New</p>";
    } else if (!this.isNew && this.sale) {
      label = "<p class='p--primary product__label-text' >Sale</p>";
    }
    return label;
  }
  createColorMarkup(color) {
    let markup = this.colors
      .map((color) => {
        const colorItem = `
      <label class="product__colors-container">
        <input
          name="product__colors-${this.id}"
          type="radio"
          id="product__colors--white"
        />
        <span
          class="product__colors--${color} product__colors-item"
        ></span>
      </label>
    `;
        return colorItem;
      })
      .join("");
    return markup;
  }
  createContainer() {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = this.createMarkup();
    return product;
  }
}

// const fragment = document.createDocumentFragment();
// products.forEach((product) => {
//   const productMarkup = isNew Product(
//     product.img,
//     product.liked,
//     product.brand,
//     product.title,
//     product.price
//   );
//   fragment.append(productMarkup.createContainer());
// });
