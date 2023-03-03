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
const elAdminForm = findElement("#admin-form");
const elAdminEditBtn = findElement("#admin-edit");
const elAdminModal = findElement(".admin-edit__modal");
const elAdminModalForm = findElement("#admin-modal-form");
const elAdminCloseBtn = findElement("#admin-close");
const elAdminTitleInp = findElement("#admin-edittitle");
const elAdminImgInp = findElement("#admin-editimage");
const elAdminPriceInp = findElement("#admin-editprice");
const elAdminRatingInp = findElement("#admin-editrating");
const elAdminXBtn = findElement(".admin-edit__xclose");

const elAdminAddTitleInp = findElement("#admin-addtitle");
const elAdminAddImgInp = findElement("#admin-addimage");
const elAdminAddPriceInp = findElement("#admin-addprice");
const elAdminAddRatingInp = findElement("#admin-addrating");

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

  function closing() {
    elAdminModal.style.cssText =
      "opacity: 0; bottom: -400px; pointer-events: none;";
  }

  elAdminCloseBtn.addEventListener("click", () => {
    closing();
  });

  elAdminXBtn.addEventListener("click", () => {
    closing();
  });

  if (target.className.includes("top-products__editbtn")) {
    elAdminModal.style.cssText = "opacity: 1; bottom: 0; pointer-events: auto;";
    const id = Number(target.dataset.id);
    console.log(id);
    elAdminModalForm.addEventListener("submit", (e) => {
      e.preventDefault();

      function editing() {
        fetch(BASE_URL + `fakeapi/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            name: elAdminTitleInp.value.trim(),
            image: elAdminImgInp.value.trim(),
            price: elAdminPriceInp.value.trim(),
            rating: elAdminRatingInp.value.trim(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            window.location.reload();
          });
      }

      elAdminEditBtn.onclick(editing());
      closing();
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

elAdminAddImgInp.addEventListener("input", () => {
  const adminPreviewImg = findElement(".admin-edit__previewimg");
  adminPreviewImg.src = elAdminAddImgInp.value;

  if (adminPreviewImg.src == "") {
    console.log("rasm");
    adminPreviewImg.src = "../assets/images/cfga8ht40v9uauhi13f0.jpg";
  }
});

elAdminAddTitleInp.addEventListener("input", () => {
  const adminPreviewTitle = findElement(".admin-edit__previewtitle");
  adminPreviewTitle.textContent = elAdminAddTitleInp.value;
  if (adminPreviewTitle.textContent == "") {
    adminPreviewTitle.textContent =
      "Gazlangan ichimlik Pepsi, 1 l + Mountain Dew, 1l, 1+1";
  }
});

elAdminAddRatingInp.addEventListener("input", () => {
  const adminPreviewRating = findElement(".admin-edit__previewrating span");
  adminPreviewRating.textContent = elAdminAddRatingInp.value;
  if (adminPreviewRating.textContent == "") {
    adminPreviewRating.textContent =
      5 + ".0" + ` (${String(Math.round(Math.random() * 1000))} baho)`;
  }
});

elAdminAddPriceInp.addEventListener("input", () => {
  const adminPreviewPrice = findElement(".admin-edit__previewprice span");
  const adminPreviewSubPrice = findElement(".admin-edit__previewsubprice");
  const adminPreviewMonthly = findElement(".admin-edit__previewmonthly span");
  adminPreviewPrice.textContent = elAdminAddPriceInp.value * 100;
  adminPreviewSubPrice.textContent = elAdminAddPriceInp.value * 130 + " so'm";
  adminPreviewMonthly.textContent = `${Math.floor(
    (elAdminAddPriceInp.value * 360) / 30
  )}`;
  if (
    adminPreviewPrice.textContent == "" ||
    adminPreviewPrice.textContent == null ||
    adminPreviewPrice.textContent == "0"
  ) {
    adminPreviewPrice.textContent = 9000;
    adminPreviewSubPrice.textContent =
      Math.round(adminPreviewPrice.textContent * 2.4444) + " so'm";
    adminPreviewMonthly.textContent = `${Math.floor(
      (adminPreviewPrice.textContent * 3.6) / 30
    )}`;
  }
});

elAdminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(BASE_URL + `fakeapi/`, {
    method: "POST",
    body: JSON.stringify({
      name: elAdminAddTitleInp.value.trim(),
      image: elAdminAddImgInp.value.trim(),
      price: elAdminAddPriceInp.value.trim(),
      rating: elAdminAddRatingInp.value.trim(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      window.location.reload();
      console.log(res);
    });
});
