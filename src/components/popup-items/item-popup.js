import "./item-popup.scss";

const ItemPopup = (
  name,
  price,
  count,
  picture,
  activeSubstance,
  id,
  cart,
  updateCart,
  getTotalPrice
) => {
  const PopupElement = document.createElement("div");
  PopupElement.className = `popup__item item_id${id}`;

  const itemImgElement = document.createElement("div");
  itemImgElement.className = `popup__item_img`;

  const itemBodyElement = document.createElement("div");
  itemBodyElement.className = `popup__item_body`;

  const nameElement = document.createElement("span");
  nameElement.className = "body__item__name";
  nameElement.innerText = name;

  const countBoxElement = document.createElement("div");
  countBoxElement.className = `body__item__box`;

  const countElement = document.createElement("span");
  countElement.className = "body__item__count";
  countElement.innerText = count;

  const priceElement = document.createElement("span");
  priceElement.className = "body__item__price";
  priceElement.innerText = `Цена: ${price}`;

  const activeSubstanceElement = document.createElement("span");
  activeSubstanceElement.className = "body__item__substance";
  activeSubstanceElement.innerText = activeSubstance;

  const btnPlusElement = document.createElement("button");
  btnPlusElement.className = "item__count_plus btn_count";
  btnPlusElement.innerText = `+`;
  btnPlusElement.addEventListener("click", () => {
    plusItem(id);
    updateCart(cart);
    getTotalPrice(cart);
  });

  const btnMinusElement = document.createElement("button");
  btnMinusElement.className = "item__count_minus btn_count";
  btnMinusElement.innerText = `-`;
  btnMinusElement.addEventListener("click", () => {
    minusItem(id);
    updateCart(cart);
    getTotalPrice(cart);
  });

  const imgElement = document.createElement("img");
  imgElement.className = "body__item__img";
  imgElement.src = picture;

  const deleteElement = document.createElement("span");
  deleteElement.className = "body__item__delete";
  deleteElement.innerText = "удалить";
  deleteElement.addEventListener("click", () => {
    deleteItem(id);
    updateCart(cart);
    getTotalPrice(cart);

  });

  const plusItem = (itemId) => {
    cart.forEach((item) => {
      if (item.id == itemId) {
        item.count++;
        countElement.innerText = item.count;
        priceElement.innerText = `Цена: ${item.price * item.count}`;
      }
    });
  };

  const minusItem = (itemId) => {
    cart.forEach((item) => {
      if (item.id == itemId && item.count > 1) {
        item.count--;
        countElement.innerText = item.count;
        priceElement.innerText = `Цена: ${item.price * item.count}`;
      }
    });
  };

  const deleteItem = (itemId) => {
    cart.forEach((item) => {
      if (item.id == itemId) {
        cart.splice(cart.indexOf(item), 1);
      }
    });

    const itemDelete = document.querySelector(`.item_id${itemId}`);
    const itemsPopup = document.querySelector(".popup__items");

    itemsPopup.removeChild(itemDelete);
  };

  const emptyCart = document.querySelector(".popup__text_empty");
  emptyCart.innerText = "";

  const getItem = (idItem) => {
    return document.querySelector(`.item_id${idItem}`);
  };

  PopupElement.appendChild(itemImgElement);
  PopupElement.appendChild(itemBodyElement);
  itemImgElement.appendChild(imgElement);
  itemBodyElement.appendChild(activeSubstanceElement);
  itemBodyElement.appendChild(nameElement);
  itemBodyElement.appendChild(countBoxElement);
  countBoxElement.appendChild(btnMinusElement);
  countBoxElement.appendChild(countElement);
  countBoxElement.appendChild(btnPlusElement);
  itemBodyElement.appendChild(priceElement);
  itemBodyElement.appendChild(deleteElement);

  return { PopupElement, getItem };
};

export default ItemPopup;
