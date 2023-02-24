function renderProducts(array, slice, slice2, parent, template, admin) {
  parent.textContent = "";

  if (admin) {
    if (slice == null || slice2 == null || slice2 == 0) {
      array.forEach((product) => {
        const newTopProduct = template.content.cloneNode(true);
        const item = findElement(".top-products__item", newTopProduct);
        const likeBtn = findElement(".top-products__likebtn", newTopProduct);
        const img = findElement(".top-products__img", newTopProduct);
        const path = findElement("#path", newTopProduct);
        const pathBorder = findElement("#path-border", newTopProduct);
        const title = findElement(".top-products__name", newTopProduct);
        const rating = findElement(".top-products__rating span", newTopProduct);
        const subprice = findElement(".top-products__subprice", newTopProduct);
        const price = findElement(".top-products__price", newTopProduct);
        const basket = findElement("#button-basket", newTopProduct);
        const monthly = findElement(
          ".top-products__monthly mark span",
          newTopProduct
        );

        if (product.isFavorite) {
          likeBtn.title = product.name + " saralanganlardan chiqarish";
          path.style.fill = "#8967F0";
          pathBorder.style.fill = "#8967f0";
          likeBtn.style.opacity = 1;
        } else {
          likeBtn.title = product.name + " saralanganlarga qo'shish";
          path.style.fill = "white";
        }

        item.title = product.name;
        img.src = product.image;
        title.textContent = product.name;
        rating.textContent =
          product.rating +
          ".0" +
          ` (${String(Math.round(Math.random() * 1000))} baho)`;
        subprice.textContent = product.price * 130 + " so'm";
        price.textContent = product.price * 100 + " so'm";
        basket.title = product.name + " savatga qo'shish";
        monthly.textContent = `${Math.floor((product.price * 360) / 30)}`;
        likeBtn.dataset.id = product.id;

        if (product.rating == 0 || rating.textContent == 0) {
          findElement(".top-products__rating", newTopProduct).style.display =
            "none";
        }
        parent.appendChild(newTopProduct);
      });
    } else {
      array.slice(slice, slice2).forEach((product) => {
        const newTopProduct = template.content.cloneNode(true);
        const item = findElement(".top-products__item", newTopProduct);
        const likeBtn = findElement(".top-products__likebtn", newTopProduct);
        const ripple = findElement(".top-products__ripple", newTopProduct);
        const likeBtnSvg = findElement(
          ".top-products__likebtn svg",
          newTopProduct
        );
        const img = findElement(".top-products__img", newTopProduct);
        const path = findElement("#path", newTopProduct);
        const title = findElement(".top-products__name", newTopProduct);
        const rating = findElement(".top-products__rating span", newTopProduct);
        const subprice = findElement(".top-products__subprice", newTopProduct);
        const price = findElement(".top-products__price", newTopProduct);
        const basket = findElement("#button-basket", newTopProduct);
        const monthly = findElement(
          ".top-products__monthly mark span",
          newTopProduct
        );

        if (product.isFavorite) {
          likeBtn.title = product.name + " saralanganlardan chiqarish";
          likeBtn.classList.add("like-active");
          ripple.classList.add("active");
          likeBtn.style.cssText =
            "animation: like 0.2s cubic-bezier(0.21, 0.88, 0.88, 0.21);";
          likeBtnSvg.remove();
          likeBtn.innerHTML = `
        <svg data-v-56571d0e="" id="path-like" width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon ">
        <path d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z" fill="#8967F0"></path>
        </svg>`;
          likeBtn.style.opacity = 1;
        } else {
          likeBtn.title = product.name + " saralanganlarga qo'shish";
          path.style.fill = "white";
        }

        item.title = product.name;
        img.src = product.image;
        title.textContent = product.name;
        rating.textContent =
          product.rating +
          ".0" +
          ` (${String(Math.round(Math.random() * 1000))} baho)`;
        subprice.textContent = product.price * 130 + " so'm";
        price.textContent = product.price * 100 + " so'm";
        basket.title = product.name + " savatga qo'shish";
        monthly.textContent = `${Math.floor((product.price * 360) / 30)}`;
        likeBtn.dataset.id = product.id;

        if (product.rating == 0 || rating.textContent == 0) {
          findElement(".top-products__rating", newTopProduct).style.display =
            "none";
        }
        parent.appendChild(newTopProduct);
      });
    }
  } else {
    if (slice == null || slice2 == null || slice2 == 0) {
      array.forEach((product) => {
        const newTopProduct = template.content.cloneNode(true);
        const item = findElement(".top-products__item", newTopProduct);
        const img = findElement(".top-products__img", newTopProduct);
        const title = findElement(".top-products__name", newTopProduct);
        const rating = findElement(".top-products__rating span", newTopProduct);
        const subprice = findElement(".top-products__subprice", newTopProduct);
        const price = findElement(".top-products__price", newTopProduct);
        const basket = findElement("#button-basket", newTopProduct);
        const monthly = findElement(
          ".top-products__monthly mark span",
          newTopProduct
        );

        if (admin == false) {
          const deleteBtn = findElement(
            ".top-products__deletebtn",
            newTopProduct
          );
          deleteBtn.dataset.id = product.id;
          deleteBtn.title = product.name + " mahsulotini o'chirish";
        }

        item.title = product.name;
        img.src = product.image;
        title.textContent = product.name;
        rating.textContent =
          product.rating +
          ".0" +
          ` (${String(Math.round(Math.random() * 1000))} baho)`;
        subprice.textContent = product.price * 130 + " so'm";
        price.textContent = product.price * 100 + " so'm";
        basket.title = product.name + " savatga qo'shish";
        monthly.textContent = `${Math.floor((product.price * 360) / 30)}`;

        if (product.rating == 0 || rating.textContent == 0) {
          findElement(".top-products__rating", newTopProduct).style.display =
            "none";
        }
        parent.appendChild(newTopProduct);
      });
    } else {
      array.slice(slice, slice2).forEach((product) => {
        const newTopProduct = template.content.cloneNode(true);
        const item = findElement(".top-products__item", newTopProduct);
        const img = findElement(".top-products__img", newTopProduct);
        const title = findElement(".top-products__name", newTopProduct);
        const rating = findElement(".top-products__rating span", newTopProduct);
        const subprice = findElement(".top-products__subprice", newTopProduct);
        const price = findElement(".top-products__price", newTopProduct);
        const basket = findElement("#button-basket", newTopProduct);
        const monthly = findElement(
          ".top-products__monthly mark span",
          newTopProduct
        );

        if (admin == false) {
          const deleteBtn = findElement(
            ".top-products__deletebtn",
            newTopProduct
          );
          deleteBtn.dataset.id = product.id;
          deleteBtn.title = product.name + " mahsulotini o'chirish";
        }

        item.title = product.name;
        img.src = product.image;
        title.textContent = product.name;
        rating.textContent =
          product.rating +
          ".0" +
          ` (${String(Math.round(Math.random() * 1000))} baho)`;
        subprice.textContent = product.price * 130 + " so'm";
        price.textContent = product.price * 100 + " so'm";
        basket.title = product.name + " savatga qo'shish";
        monthly.textContent = `${Math.floor((product.price * 360) / 30)}`;

        if (product.rating == 0 || rating.textContent == 0) {
          findElement(".top-products__rating", newTopProduct).style.display =
            "none";
        }
        parent.appendChild(newTopProduct);
      });
    }
  }
}
