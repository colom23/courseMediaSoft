import "./item.scss";

const Item = (name, id, price, picture, activeSubstance, onAdd, category) => {
  const ItemElement = document.createElement("div");
  ItemElement.className = `item  category-index-${category}`;
  ItemElement.dataset.sort_price = price;
  ItemElement.dataset.sort_default = id;

  const nameElement = document.createElement("span");
  nameElement.className = "item__name";
  nameElement.innerText = name;

  const priceElement = document.createElement("span");
  priceElement.className = "item__price";
  priceElement.innerText = `${price} ₽`;

  const activeSubstanceElement = document.createElement("span");
  activeSubstanceElement.className = "item__substance";
  activeSubstanceElement.innerText = activeSubstance;

  const btnElement = document.createElement("button");
  btnElement.className = "item__btn";
  btnElement.innerText = `Добавить`;
  btnElement.addEventListener("click", onAdd);

  const aImgElement = document.createElement("a");
  aImgElement.className = "item__img";

  const imgElement = document.createElement("img");
  imgElement.src = picture;

  ItemElement.appendChild(aImgElement);
  aImgElement.appendChild(imgElement);
  ItemElement.appendChild(activeSubstanceElement);
  ItemElement.appendChild(nameElement);
  ItemElement.appendChild(priceElement);
  ItemElement.appendChild(btnElement);
  return ItemElement;
};

export default Item;
