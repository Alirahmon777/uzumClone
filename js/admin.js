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

let adminProducts = [];

elTopProducts.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.className.includes("top-products__deletebtn")) {
    const id = Number(target.dataset.id);
    console.log(id);

    fetch(BASE_URL + `fakeapi/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.reload();
      });
  }
});

const getData = async (slice, slice2) => {
  try {
    const res = await fetch(BASE_URL + "fakeapi");
    if (res.status === 404) {
      throw new Error("DATA NOT FOUND");
    }
    const data = await res.json();

    adminProducts = data;

    renderProducts(data, slice, slice2, elTopProducts, elTopTemplate, false);
  } catch (x) {
    console.log(x);
  }
};

getData(0, 100);
