"use strict";
const elTopProducts = findElement(".top-products__list");
const elTopTemplate = findElement("#top-product-template");
const elCatalogBtn = findElement("#catalog-btn");

elCatalogBtn.addEventListener("click", () => {
  if (findElement("#catalog-icon").className.includes("close")) {
    findElement("#catalog-icon").className = "catalog-icon open";
  } else if (findElement("#catalog-icon").className.includes("open")) {
    findElement("#catalog-icon").className = "catalog-icon close";
  }
});

renderProducts(foods, elTopProducts);
