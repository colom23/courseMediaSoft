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
  sortMinPriceElement.className = "sort__count";
  sortMinPriceElement.innerText = "цена ↑";
  sortMinPriceElement.addEventListener("click", () => sortMin());

  const sortItemMaxElement = document.createElement("a");
  sortItemMaxElement.className = "sort__item";

  const sortMaxPriceElement = document.createElement("span");
  sortMaxPriceElement.className = "sort__count";
  sortMaxPriceElement.innerText = "цена ↓";
  sortMaxPriceElement.addEventListener("click", () => sortMax());

  const FilterElement = document.createElement("div");
  FilterElement.className = "filter";

  const titleFilterElement = document.createElement("span");
  titleFilterElement.className = "filter__title";
  titleFilterElement.innerText = "Сортировать по:";

  const sortMin = () => {
    sortMinPriceElement.classList.add("sort_select");
    sortMaxPriceElement.classList.remove("sort_select");

    let itemProduct = document.querySelector(".items-list");

    for (let i = 0; i < itemProduct.children.length; i++) {
      for (let j = i; j < itemProduct.children.length; j++) {
        if (
          +itemProduct.children[i].getAttribute("data-sort") >
          +itemProduct.children[j].getAttribute("data-sort")
        ) {
          let replaceItem = itemProduct.replaceChild(
            itemProduct.children[j],
            itemProduct.children[i]
          );

          insertAfter(replaceItem, itemProduct.children[i]);
        }
      }
    }
  };

  const sortMax = () => {
    sortMinPriceElement.classList.remove("sort_select");
    sortMaxPriceElement.classList.add("sort_select");

    let itemProduct = document.querySelector(".items-list");

    for (let i = 0; i < itemProduct.children.length; i++) {
      for (let j = i; j < itemProduct.children.length; j++) {
        if (
          +itemProduct.children[i].getAttribute("data-sort") <
          +itemProduct.children[j].getAttribute("data-sort")
        ) {
          let replaceItem = itemProduct.replaceChild(
            itemProduct.children[j],
            itemProduct.children[i]
          );

          insertAfter(replaceItem, itemProduct.children[i]);
        }
      }
    }
  };

  const insertAfter = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  };

  FilterElement.appendChild(titleFilterElement);
  SortElement.appendChild(titleSortElement);
  SortElement.appendChild(sortItemMinElement);
  sortItemMinElement.appendChild(sortMinPriceElement);
  SortElement.appendChild(sortItemMaxElement);
  sortItemMaxElement.appendChild(sortMaxPriceElement);

  return SortElement;
};

export default Sort;
