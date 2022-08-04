import "./cart.scss";

const Cart = (cart, openPopup) => {
  const CartOrderElement = document.createElement("div");
  CartOrderElement.className = "cart-conteiner";
  CartOrderElement.id = "cart";

  const cartElement = document.createElement("div");
  cartElement.className = "cart";

  const titleCartElement = document.createElement("span");
  titleCartElement.className = "cart__title title";
  titleCartElement.innerText = `Корзина`;

  const itemsCountElement = document.createElement("span");
  itemsCountElement.className = "cart__count";
  itemsCountElement.innerText = `Количество товаров: ${cart.length}`;

  const priceElement = document.createElement("span");
  priceElement.className = "cart__price";
  priceElement.innerText = `Итого: ${cart.length}`;

  const orderTitleElement = document.createElement("span");
  orderTitleElement.className = "order title";
  orderTitleElement.innerText = `Оформление заказа`;

  const makeOrderNameElement = document.createElement("input");
  makeOrderNameElement.className = "order__name order_input";
  makeOrderNameElement.type = "text";
  makeOrderNameElement.placeholder = `Ваше имя`;

  const makeOrderPhoneElement = document.createElement("input");
  makeOrderPhoneElement.className = "order__phone order_input";
  makeOrderPhoneElement.type = "tel";
  makeOrderPhoneElement.placeholder = `Ваш контактный номер`;
  makeOrderPhoneElement.addEventListener("keyup", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });

  const btnMakeOrderElement = document.createElement("button");
  btnMakeOrderElement.className = "order__make_order button-cart";
  btnMakeOrderElement.innerText = `Оформить заказ`;


  const btnOpenCartElement = document.createElement("button");
  btnOpenCartElement.className = "cart__popup open-popup button-cart";
  btnOpenCartElement.innerText = `Посмотреть корзину`;
  btnOpenCartElement.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
  });

  CartOrderElement.appendChild(cartElement);
  cartElement.appendChild(titleCartElement);
  cartElement.appendChild(itemsCountElement);
  cartElement.appendChild(btnOpenCartElement);
  cartElement.appendChild(priceElement);

  cartElement.appendChild(orderTitleElement);
  cartElement.appendChild(makeOrderNameElement);
  cartElement.appendChild(makeOrderPhoneElement);
  cartElement.appendChild(btnMakeOrderElement);

  const updateCart = (newCart) => {
    const count = totalCount(newCart);
    itemsCountElement.innerText = `Количество товаров: ${count}`;
    const sumPrice = newCart.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    priceElement.innerText = `Итого: ${sumPrice}`;
  };

  const totalCount = (newCart) => {
    let count = 0;
    newCart.forEach((item) => {
      count += item.count;
    });
    return count;
  };

  return { CartOrderElement, updateCart, totalCount };
};

export default Cart;
