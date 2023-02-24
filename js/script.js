"use strict";
const elTopProducts = findElement(".top-products__list");
const elTopTemplate = findElement("#top-product-template");
const BASE_URL = "https://63e8d48f4f3c6aa6e7c38741.mockapi.io/";
const elHeaderLanguage = findElement(".header-location__language-box");
const elHeaderLanguageUzb = findElement(".header-location__language-uzb");
const elHeaderLanguageText = findElement(".header-location__language-uzb p");
const elHeaderLanguageImg = findElement(".header-location__language-uzb img");
const elHeaderLanguageRu = findElement(".header-location__language-russian");
const elHeaderLanguageRuText = findElement(
  ".header-location__language-russian p"
);
const elHeaderLanguageRuImg = findElement(
  ".header-location__language-russian img"
);

let products = [];

elTopProducts.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.id.includes("favorite-btn") || target.id === "path") {
    const id = Number(target.dataset.id);

    products.forEach((product) => {
      if (+product.id === id) {
        product.isFavorite = !product.isFavorite;

        fetch(`${BASE_URL}fakeapi/${id}`, {
          method: "put",
          body: JSON.stringify({
            ...product,
            isFavorite: product.isFavorite,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {});
      }
    });

    renderProducts(products, 0, 20, elTopProducts, elTopTemplate, true);
  }
});

const elAddBtn = findElement(".top-products__addbtn");
const elTopItems = document.getElementsByClassName("top-products__item");

const getData = async (slice, slice2) => {
  try {
    const res = await fetch(
      "https://63e8d48f4f3c6aa6e7c38741.mockapi.io//fakeapi"
    );
    if (res.status === 404) {
      throw new Error("DATA NOT FOUND");
    }
    const data = await res.json();

    products = data;

    renderProducts(data, slice, slice2, elTopProducts, elTopTemplate, true);
  } catch (x) {
    console.log(x);
  }
};

getData(0, 20);

function addBtn() {
  elAddBtn.addEventListener("click", () => {
    if (elAddBtn.value === "show-other-products") {
      if (elTopItems.length < 20) {
        getData(0, 20);
      } else {
        getData(0, 40);
      }
      elAddBtn.value = "show-all-products";
      elAddBtn.textContent = "To‘liq termani ko‘rish";
    } else {
      console.log("all");
      location.href = "../pages/category.html";
    }
  });
}

addBtn();
