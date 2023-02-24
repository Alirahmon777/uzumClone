const elCatalogBtn = findElement("#catalog-btn");
const toTop = findElement(".to-top");

elCatalogBtn.addEventListener("click", () => {
  if (findElement("#catalog-icon").className.includes("close")) {
    findElement("#catalog-icon").className = "catalog-icon open";
  } else if (findElement("#catalog-icon").className.includes("open")) {
    findElement("#catalog-icon").className = "catalog-icon close";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
