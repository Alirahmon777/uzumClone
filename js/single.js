const template = findElement("#single-product__template");
const elCard = findElement(".single-product__list");
const id = localStorage.getItem("id");
let singleProduct = [];

fetch("https://63e8d48f4f3c6aa6e7c38741.mockapi.io/fakeapi/" + id)
  .then((res) => res.json())
  .then((data) => {
    renderSingle([data], elCard, template);
    singleProduct = data;
  });

elCard.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target.className.includes("single-product__like")) {
    const id = Number(target.dataset.id);
    console.log(singleProduct);
    [singleProduct].forEach((product) => {
      if (+product.id === id) {
        product.isFavorite = !product.isFavorite;

        fetch(`https://63e8d48f4f3c6aa6e7c38741.mockapi.io/fakeapi/${id}`, {
          method: "put",
          body: JSON.stringify({
            ...singleProduct,
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
  }
  renderSingle([singleProduct], elCard, template);
});
