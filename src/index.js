import ItemsList from "./components/items-list";
import Item from "./components/item";
import Cart from "./components/cart";
import Popup from "./components/popup";
import ItemPopup from "./components/popup-items";
import Sort from "./components/sort";
import Filter from "./components/filter";

import "./index.scss";
import "./components/popup/popup.scss";

let cart = [];

let products = [];

let productCategories = [
  "Сыворотка",
  "Гель для умывания",
  "Крем для лица",
  "Пенка для умывания",
];

const itemsList = ItemsList();

const sortElement = Sort();

const filterElement = Filter(productCategories);

const openPopupВtn = () => {
  generateItemsPopup();
  openPopup();
};

const { CartOrderElement, updateCart, totalCount } = Cart(cart, openPopupВtn);
const { PopupElement, openPopup, popupItemsElement, getTotalPrice } = Popup(
  cart,
  totalCount
);

function saveCartProduct(itemNew) {
  if (!cart.includes(itemNew)) {
    itemNew.count = 1;
    cart.push(itemNew);
  } else {
    let index = cart.findIndex((item) => item.id == itemNew.id);
    cart[index].count++;
  }
}

const generateItems = () => {
  products.forEach((item) => {
    const onAdd = () => {
      saveCartProduct(item);
      getTotalPrice(cart);
      updateCart(cart);
    };

    const getIndexCategory = () => {
      return productCategories.indexOf(item.category);
    };

    const itemElement = Item(
      item.name,
      item.id,
      item.price,
      item.picture,
      item.activeSubstance,
      onAdd,
      getIndexCategory()
    );

    itemsList.appendChild(itemElement);
  });
};

const generateItemsPopup = () => {
  cart.forEach((item) => {
    const { PopupElement, getItem } = ItemPopup(
      item.name,
      item.price * item.count,
      item.count,
      item.picture,
      item.activeSubstance,
      item.id,
      cart,
      updateCart,
      getTotalPrice
    );

    if (getItem(item.id)) {
      popupItemsElement.removeChild(getItem(item.id));
      popupItemsElement.appendChild(PopupElement);
    } else {
      popupItemsElement.appendChild(PopupElement);
    }
  });
};

async function getResponse() {
  deleteLoad();
  let response = await fetch("http://localhost:3000/products");
  let content = await response.json();
  addProductArray(content);
  generateItems();
}

function deleteLoad() {
  const divItem = document.querySelector(".items-list_load");
  divItem.remove();
}

function addProductArray(arr) {
  for (let key in arr) {
    products.push(arr[key]);
  }
}

setTimeout(getResponse, 1000);

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

sidebar.appendChild(filterElement);
sidebar.appendChild(CartOrderElement);

document.body.appendChild(PopupElement);

content.appendChild(sortElement);
content.appendChild(itemsList);
