import "./items-list.scss";
const ItemsList = () => {
  const ItemsListElement = document.createElement("div");
  ItemsListElement.className = "items-list";

  const loadItemsElement = document.createElement("span");
  loadItemsElement.className = "items-list_load";
  loadItemsElement.innerText = "Загрузка товаров.";

  ItemsListElement.appendChild(loadItemsElement);

  return ItemsListElement;
};

export default ItemsList;
