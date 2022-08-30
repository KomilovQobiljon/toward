const products = [
  {
    brand: "Gucci",
    title: "Zipper Mini Dress",
    color: "White",
    size: "S",
    price: 879.0,
    realPrice: 30.0,
    quantity: 1,
    img: "../assets/dressBlue.png",
  },
  {
    brand: "Gucci",
    title: "Zipper Mini Dress",
    color: "Black",
    size: "S",
    price: 879.0,
    realPrice: 30.0,
    quantity: 1,
    img: "../assets/dressBlue.png",
  },
];

const createProductMarkup = (
  brand,
  title,
  color,
  size,
  price,
  realPrice,
  quantity,
  img
) => {
  const markup = `
  <div class="cart__product">
    <div class="product__details">
      <div class="product__img-container">
        <img
          src="${img}"
          alt=""
          class="product__img"
        />
      </div>
      <div class="product__details-container">
        <h4 class="cart__p--bold-bg ">
          ${brand}
        </h4>
        <p class="cart__p">${title}</p>
        <p class="cart__p">${color}</p>
        <p class='cart__p'>${size}</p>
      </div>
    </div>
    <p class="cart__price">$${price} ${
    realPrice
      ? `<span class="product__real-price cart__price">$${realPrice}</span>`
      : ""
  }</p>
    <div class="product__quantity-container">
      <div class="product__quantity">
        <div class="product__remove">
          <img
          src="../assets/icons/icon-minus.svg"
          alt=""
          class="product__remove-icon"
          /> 
        </div>
        ${quantity}
        <div class="product__add">
          <img src="../assets/icons/icon-plus.svg" alt="" class="product__add-icon" />
        </div>
      </div>
    </div>
    <p class="product__price-total">$${quantity * price}</p>
    <div class="cart__product-cta">
      <a href="#" class="cart__link">Move to wishlist</a>
      <a href="#" class="cart__link">Remove</a>
    </div>
  </div>
  `;
  return markup;
};

const addProductToDOM = (products) => {
  const fragment = document.createDocumentFragment();
  const cartProductGroup = document.querySelector(".cart__product-group");

  products.forEach((product) => {
    const container = document.createElement("div");
    container.innerHTML = createProductMarkup(
      product.brand,
      product.title,
      product.color,
      product.size,
      product.price,
      product.realPrice,
      product.quantity,
      product.img
    );
    fragment.append(container);
  });

  cartProductGroup.appendChild(fragment);
};

addProductToDOM(products);
