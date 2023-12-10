let mangasOnCart = localStorage.getItem("mangas-on-cart");
mangasOnCart = JSON.parse(mangasOnCart)

const containerCartEmpty = document.querySelector("#cart-empty");
const containerCartProducts = document.querySelector("#cart-products");;
const containerCartActions = document.querySelector("#cart-actions");;
const containerCartPurchase = document.querySelector("#cart-purchase");
let btnsCartProducDelete = document.querySelectorAll(".cart-product-delete")
const btnCartActionsClean = document.querySelector("#cart-actions-clean");
const btnCartActionBuy = document.querySelector("#cart-actions-buy");
const containerTotal = document.querySelector("#total");



function loadProductsCart() {
    if (mangasOnCart && mangasOnCart.length > 0 ) {
        containerCartEmpty.classList.add("disabled");
        containerCartProducts.classList.remove("disabled");
        containerCartActions.classList.remove("disabled");
        containerCartPurchase.classList.add("disabled");
    
        containerCartProducts.innerHTML = "";
    
        mangasOnCart.forEach(manga => {
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = `
                <img class="cart-product-image" src="${manga.productImage}" alt="${manga.productTitle}">
                <div class="cart-product-title">
                    <small>Title</small>
                    <h3>${manga.productTitle}</h3>
                </div>
                <div class="cart-product-quantity">
                    <small>Quantity</small>
                    <p>${manga.productAmount}</p>
                </div>
                <div class="cart-product-price">
                    <small>Price</small>
                    <p>$${manga.productPrice}</p>
                </div>
                <div class="cart-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${manga.productAmount * manga.productPrice}</p>
                </div>
                <button id="${manga.productId}" class="cart-product-delete"><i class="bi bi-trash3-fill"></i></button>
            `
            containerCartProducts.append(div);
        })
    } else {
        containerCartEmpty.classList.remove("disabled");
        containerCartProducts.classList.add("disabled");
        containerCartActions.classList.add("disabled");
        containerCartPurchase.classList.add("disabled");
    }
    updateBtnsDelete();
    updateTotal();
}

loadProductsCart();


function updateBtnsDelete() {
    btnsCartProducDelete = document.querySelectorAll(".cart-product-delete")
  
    btnsCartProducDelete.forEach(btn => {
      btn.addEventListener("click", deleteFromCart)
    })
}

function deleteFromCart(e) {
    const btnId = e.currentTarget.id;
    const index = mangasOnCart.findIndex(manga => manga.productId === btnId);

    mangasOnCart.splice(index, 1);
    loadProductsCart();

    localStorage.setItem("mangas-on-cart", JSON.stringify(mangasOnCart));
}

btnCartActionsClean.addEventListener("click", cleanCart);
function cleanCart() {
    mangasOnCart.length = 0;
    localStorage.setItem("mangas-on-cart", JSON.stringify(mangasOnCart));
    loadProductsCart();
}

btnCartActionBuy.addEventListener("click", buyCart);
function buyCart() {
    mangasOnCart.length = 0;
    localStorage.setItem("mangas-on-cart", JSON.stringify(mangasOnCart));
    loadProductsCart();

    containerCartEmpty.classList.add("disabled");
    containerCartProducts.classList.add("disabled");
    containerCartActions.classList.add("disabled");
    containerCartPurchase.classList.remove("disabled");
}

function updateTotal() {
    const calculateTotal = mangasOnCart.reduce((acc , manga) => acc + (manga.productPrice * manga.productAmount), 0);
    containerTotal.innerText = `$${calculateTotal}`;
}