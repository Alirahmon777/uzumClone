function renderProducts(array) {
  array.slice(0, 20).forEach((product) => {
    const newProduct = elTopTemplate.content.cloneNode(true);

    const elTitle = findElement(".top-products__name", newProduct);
    const elPrice = findElement(".top-products__price", newProduct);
    const elRating = findElement(".top-products__rating span", newProduct);
    const elImg = findElement(".top-products__img", newProduct);
    const elSubPrice = findElement(".top-products__subprice", newProduct);
    const elBtnBasket = newProduct.querySelector("#button-basket");

    elTitle.textContent = product.name;
    elSubPrice.textContent = product.subprice * 500 + ".00" + " so'm";
    elPrice.textContent = product.price * 100 + ".00" + " so'm";
    elRating.textContent = product.rating;
    elImg.src = product.image;
    elBtnBasket.title = `${product.name}`;

    elTopProducts.appendChild(newProduct);
  });
}
