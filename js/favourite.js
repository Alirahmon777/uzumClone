const favoriteTemplate = findElement("#favourite-template");
const elParent = findElement("#favorite-products");
const elFavoriteFilterBox = findElement(".favorite__filterbox");
const elFilterSvg = findElement(".favorite__filterbox svg");
const elFilterText = findElement(".favorite__filterbox p");
const elFavoriteFilter = findElement(".favorite__filter");
const elFavoriteFilterBtn = findElement(".favorite__btns");
const elFilterBtn = document.querySelectorAll(".favorite__btn");
const elFavoriteTitle = findElement(".favorite__title");
let favouriteProducts = [];

fetching();

function fetching() {
  fetch(`https://63e8d48f4f3c6aa6e7c38741.mockapi.io/fakeapi/`)
    .then((res) => res.json())
    .then((data) => {
      const result = data.filter((product) => {
        if (product.isFavorite) {
          return product;
        }
      });

      favouriteProducts = result;

      if (favouriteProducts.length == 0) {
        elFavoriteTitle.textContent = "You Don't Have a Favorite Product";
        elFavoriteTitle.style.color = "red";
        elFavoriteFilter.style.display = "none";
      }

      renderProducts(result, 0, 0, elParent, favoriteTemplate, true);
    });
}

elParent.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target.id.includes("favorite-btn") || target.id === "path") {
    const id = Number(target.dataset.id);

    favouriteProducts.forEach((product) => {
      if (+product.id === id) {
        product.isFavorite = !product.isFavorite;

        fetch(`https://63e8d48f4f3c6aa6e7c38741.mockapi.io/fakeapi/${id}`, {
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
          .then((res) => {
            fetching();
          });
      }
    });
  }
});

elFilterBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.value.toLowerCase().trim() ===
      element.textContent.toLowerCase().trim()
    ) {
      element.style.color = "#6E00FF";
      elFilterText.textContent = element.value;
    } else {
      element.style.color = "#111517";
    }
  });
});

elFavoriteFilterBox.addEventListener("click", () => {
  if (elFavoriteFilterBox.className.includes("flex")) {
    elFilterSvg.style.transform = "rotate(0)";
    elFavoriteFilterBtn.style.opacity = 1;
    elFavoriteFilterBtn.style.pointerEvents = "auto";
    elFavoriteFilterBox.className = "favorite__filterbox none";
    elFavoriteFilterBox.style.border = "1px solid #131417";
  } else if (elFavoriteFilterBox.className.includes("none")) {
    elFavoriteFilterBtn.style.opacity = 0;
    elFavoriteFilterBox.style.border = "1px solid transparent";
    elFilterSvg.style.transform = "rotate(180deg)";
    elFavoriteFilterBox.className = "favorite__filterbox flex";
  }
});
