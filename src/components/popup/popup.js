import "./popup.scss";

const Popup = () => {
  const PopupElement = document.createElement("div");
  PopupElement.className = "popup";

  const popapLink = document.createElement("a");
  popapLink.className = "popup_link";

  popapLink.href = "#sticky";

  const bodyPopupElement = document.createElement("div");
  bodyPopupElement.className = "popup__body";

  const contentElement = document.createElement("div");
  contentElement.className = "popup__content";

  const popupItemsElement = document.createElement("div");
  popupItemsElement.className = "popup__items";

  const nameElement = document.createElement("span");
  nameElement.className = "popup__text_empty";

  const checkEmptyCart = () => {
    const popupItems = document.querySelector(".popup__item");
    console.log(popupItems);
    if (popupItems == null)
      nameElement.innerText = "Вы не добавили ни одного товара.";
  };

  const titleElement = document.createElement("h2");
  titleElement.className = "popup__title";
  titleElement.innerText = "Корзина";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.className = "popup__total-price";

  const getTotalPrice = (newCart) => {
    const sumPrice = newCart.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    totalPriceElement.innerText = `Итоговая стоимость: ${sumPrice}`;
    return sumPrice;
  };

  const closeElement = document.createElement("a");
  closeElement.className = "popup__close close-popup";
  closeElement.addEventListener("click", () => {
    let popup = document.querySelector(".popup");
    popup.classList.remove("active");
    document.body.classList.remove("lock");
  });

  document.addEventListener("click", (e) => {
    let popupBg = document.querySelector(".popup__body");
    if (e.target === popupBg) {
      let popup = document.querySelector(".popup");
      popup.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });

  const openPopup = () => {
    let popup = document.querySelector(".popup");
    popup.classList.add("active");
    document.body.classList.add("lock");

    checkEmptyCart();
  };

  PopupElement.appendChild(popapLink);
  popapLink.appendChild(bodyPopupElement);
  bodyPopupElement.appendChild(contentElement);
  contentElement.appendChild(closeElement);
  contentElement.appendChild(titleElement);
  contentElement.appendChild(nameElement);
  contentElement.appendChild(totalPriceElement);
  contentElement.appendChild(popupItemsElement);

  return { PopupElement, openPopup, popupItemsElement, getTotalPrice };
};

export default Popup;
