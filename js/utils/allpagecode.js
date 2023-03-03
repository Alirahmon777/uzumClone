const elCatalogBtn = findElement("#catalog-btn");
const toTop = findElement(".to-top");
const languageBtnUz = findElement("#lang-uzb");
const languageBtnRu = findElement("#lang-ru");
const languageBtnBox = findElement(".header-location__language-box");
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

languageBtnUz.addEventListener("click", () => {
  languageBtnRu.style.cssText = "opacity: 1; pointer-events: all; ";
  localStorage.setItem("lang", "ru");

  languageBtnUz.className = "header-location__language-russian";
  languageBtnRu.className = "header-location__language-uzb";
  languageBtnUz.style.cssText = "opacity: 0; pointer-events: none;";

  if (localStorage.getItem("lang") == "ru") {
    document.title = "Онлайн || Маркет";
  }
});

languageBtnRu.addEventListener("click", () => {
  languageBtnUz.style.cssText = "opacity: 1; pointer-events: all;";
  localStorage.setItem("lang", "uz");

  languageBtnUz.className = "header-location__language-uzb";
  languageBtnRu.className = "header-location__language-russian";
  languageBtnRu.style.cssText = "opacity: 0; pointer-events: none;";

  if (localStorage.getItem("lang") == "uz") {
    document.title = "Uzum || market";
    languageBtnUz.className = "header-location__language-uzb";
    languageBtnRu.className = "header-location__language-russian";
  }
});

if (localStorage.getItem("lang") == "ru") {
  document.title = "Онлайн || Маркет";
  languageBtnUz.className = "header-location__language-russian";
  languageBtnRu.className = "header-location__language-uzb";
}
