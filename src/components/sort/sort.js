import "./sort.scss";

const Sort = () => {
  const SortElement = document.createElement("div");
  SortElement.className = "sort";

  const titleSortElement = document.createElement("span");
  titleSortElement.className = "sort__title";
  titleSortElement.innerText = "Сортировка:";

  const sortItemMinElement = document.createElement("a");
  sortItemMinElement.className = "sort__item";

  const sortMinPriceElement = document.createElement("span");
  sortMinPriceElement.className = "sort__count sort__count_min";
  sortMinPriceElement.innerText = "цена";
  sortMinPriceElement.addEventListener("click", () => sort("_min"));

  const sortItemDefaultElement = document.createElement("a");
  sortItemDefaultElement.className = "sort__item";

  const sortDefaultElement = document.createElement("span");
  sortDefaultElement.className = "sort__count sort__count_default sort_select";
  sortDefaultElement.innerText = "по умолчанию";
  sortDefaultElement.addEventListener("click", () => sort("_default"));

  const sortItemMaxElement = document.createElement("a");
  sortItemMaxElement.className = "sort__item";

  const sortMaxPriceElement = document.createElement("span");
  sortMaxPriceElement.className = "sort__count sort__count_max";
  sortMaxPriceElement.innerText = "цена";
  sortMaxPriceElement.addEventListener("click", () => sort("_max"));

  const titleFilterElement = document.createElement("span");
  titleFilterElement.className = "filter__title";
  titleFilterElement.innerText = "Сортировать по:";

  const sort = (typeSort) => {
    const selectSort = document.querySelector(".sort_select");
    selectSort.classList.remove("sort_select");

    let itemProduct = document.querySelector(".items-list");

    switch (typeSort) {
      case "_max":
        sortMaxPriceElement.classList.add("sort_select");
        sortMax(itemProduct);
        break;
      case "_min":
        sortMinPriceElement.classList.add("sort_select");
        sortDefaultorMin(itemProduct, "_price");
        break;
      case "_default":
        sortDefaultElement.classList.add("sort_select");
        sortDefaultorMin(itemProduct, typeSort);
        break;
    }
  };

  const sortDefaultorMin = (itemProd, type) => {
    for (let i = 0; i < itemProd.children.length; i++) {
      for (let j = i; j < itemProd.children.length; j++) {
        if (
          +itemProd.children[i].getAttribute(`data-sort${type}`) >
          +itemProd.children[j].getAttribute(`data-sort${type}`)
        ) {
          let replaceItem = itemProd.replaceChild(
            itemProd.children[j],
            itemProd.children[i]
          );

          insertAfter(replaceItem, itemProd.children[i]);
        }
      }
    }
  };

  const sortMax = (itemProd) => {
    for (let i = 0; i < itemProd.children.length; i++) {
      for (let j = i; j < itemProd.children.length; j++) {
        if (
          +itemProd.children[i].getAttribute("data-sort_price") <
          +itemProd.children[j].getAttribute("data-sort_price")
        ) {
          let replaceItem = itemProd.replaceChild(
            itemProd.children[j],
            itemProd.children[i]
          );

          insertAfter(replaceItem, itemProd.children[i]);
        }
      }
    }
  };

  const insertAfter = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  };

  SortElement.appendChild(titleSortElement);
  SortElement.appendChild(sortItemMinElement);
  sortItemMinElement.appendChild(sortMinPriceElement);
  SortElement.appendChild(sortItemMaxElement);
  sortItemMaxElement.appendChild(sortMaxPriceElement);
  SortElement.appendChild(sortItemDefaultElement);
  sortItemMaxElement.appendChild(sortDefaultElement);

  return SortElement;
};

export default Sort;
