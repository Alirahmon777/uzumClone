function renderSingle(array, parent, template) {
  parent.textContent = "";

  array.forEach((product) => {
    console.log(product);

    const newTopProduct = template.content.cloneNode(true);
    const likeBtn = findElement(".single-product__like", newTopProduct);
    const img = findElement(".single-product__img", newTopProduct);
    const imgSrc = findElement(".single-product__like img", newTopProduct);
    const title = findElement(".single-product__title", newTopProduct);
    const rating = findElement(".single-product__rating", newTopProduct);
    const subprice = findElement(".single-product__subprice", newTopProduct);
    const price = findElement(".single-product__price", newTopProduct);
    const monthly = findElement(
      ".single-product__monthlytext mark span span",
      newTopProduct
    );

    if (product.isFavorite) {
      likeBtn.title = product.name + " saralanganlardan chiqarish";
      imgSrc.src =
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.99997 15.75C8.84247 15.75 8.68497 15.6975 8.54996 15.6C8.44497 15.5175 5.95497 13.6275 4.61997 12.27C2.03246 9.64501 0.172465 5.93251 2.69997 3.39001C3.50247 2.58001 4.41747 2.19751 5.44497 2.25751C6.95247 2.34001 8.27247 3.39751 8.99997 4.11001C9.72747 3.39751 11.0475 2.34001 12.555 2.25751C13.5825 2.19751 14.4975 2.58001 15.3 3.39001C17.8275 5.93251 15.96 9.64501 13.38 12.27C12.045 13.6275 9.55497 15.5175 9.44997 15.6C9.31497 15.6975 9.15747 15.75 8.99997 15.75Z' fill='%237000FF'/%3e %3c/svg%3e";
      likeBtn.style.opacity = 1;
    } else {
      likeBtn.title = product.name + " saralanganlarga qo'shish";
      imgSrc.src =
        "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z' fill='black'/%3e %3c/svg%3e";
    }

    img.src = product.image;
    title.textContent = product.name;
    rating.textContent =
      product.rating +
      ".0" +
      ` (${String(Math.round(Math.random() * 1000))} baho)`;
    subprice.textContent = product.price * 130 + " so'm";
    price.textContent = product.price * 100 + " so'm";
    monthly.textContent = ` ${Math.floor((product.price * 360) / 30)}`;
    likeBtn.dataset.id = product.id;
    document.title = "Uzum | " + product.name;
    if (product.rating == 0 || rating.textContent == 0) {
      findElement(".single-product__rating", newTopProduct).style.display =
        "none";
    }
    parent.appendChild(newTopProduct);
  });
}
