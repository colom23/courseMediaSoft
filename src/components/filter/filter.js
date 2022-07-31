import "./filter.scss";

const Filter = (productCategories) => {
  const FilterElement = document.createElement("div");
  FilterElement.className = "filter";

  productCategories.push("Все категории");

  generateFilterCategories(productCategories);

  function generateFilterCategories(categories) {
    categories.forEach((item) => {
      const indexCategory = categories.indexOf(item);

      const filterItemElement = document.createElement("a");
      filterItemElement.className = "filter__item";

      const filterElement = document.createElement("span");
      filterElement.className = "filter__name";
      filterElement.dataset.filter = `category-index-${indexCategory}`;
      filterElement.innerText = item;

      filterElement.addEventListener("click", () =>
        filterItems(`category-index-${indexCategory}`)
      );

      if (item == categories[categories.length - 1]) {
        filterElement.classList.add("filter_select");
      }

      FilterElement.appendChild(filterItemElement);
      filterItemElement.appendChild(filterElement);
    });
  }

  const filterItems = (item) => {
    const filterItem = document.querySelectorAll(".item");
    const allCategory = document.querySelectorAll(".filter__name");

    filterItem.forEach((elem) => {
      elem.classList.remove("hide");
    });

    allCategory.forEach((elem) => {
      elem.classList.remove("filter_select");
    });

    addDataFilterSelect(item);

    if (item[item.length - 1] == productCategories.length - 1) return;

    addClassHide(item, filterItem);
  };

  function addDataFilterSelect(itemProduct) {
    const nameCategory = document.querySelectorAll("[data-filter]");
    nameCategory.forEach((elem) => {
      if (elem.dataset.filter == itemProduct) {
        elem.classList.add("filter_select");
      }
    });
  }

  function addClassHide(itemProduct, itemFilter) {
    itemFilter.forEach((elem) => {
      if (!elem.classList.contains(itemProduct)) {
        elem.classList.add("hide");
      }
    });
  }

  return FilterElement;
};

export default Filter;
