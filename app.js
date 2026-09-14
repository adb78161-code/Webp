document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // THEME / DARK MODE
    // =========================

    const themeBtn = document.getElementById("theme-btn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");

        if (themeBtn) {
            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const dark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            themeBtn.classList.toggle(
                "fa-moon",
                !dark
            );

            themeBtn.classList.toggle(
                "fa-sun",
                dark
            );
        });
    }


    // =========================
    // SEARCH BUTTON
    // =========================

    const searchBtn =
        document.getElementById("search-btn");

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            const search =
                document.getElementById("search");

            if (search) {

                search.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                setTimeout(function () {
                    search.focus();
                }, 500);

            } else {

                window.location.href =
                    "products.html";

            }

        });
    }


    // =========================
    // WISHLIST BUTTON
    // =========================

    const wishlistBtn =
        document.getElementById("wishlist-btn");

    if (wishlistBtn) {

        wishlistBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "wishlist.html";

            }
        );
    }


    // =========================
    // CART BUTTON
    // =========================

    const cartBtn =
        document.getElementById("cart-btn");

    if (cartBtn) {

        cartBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "cart.html";

            }
        );
    }


    // =========================
    // LOGIN BUTTON
    // =========================

    const loginBtn =
        document.getElementById("login-btn");

    if (loginBtn) {

        loginBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "login.html";

            }
        );
    }


    // =========================
    // PRODUCT SEARCH
    // =========================

    const search =
        document.getElementById("search");

    if (search) {

        search.addEventListener(
            "input",
            function () {

                const text =
                    search.value
                    .toLowerCase()
                    .trim();

                const products =
                    document.querySelectorAll(
                        ".product-card"
                    );

                products.forEach(
                    function (product) {

                        const productText =
                            product.textContent
                            .toLowerCase();

                        if (
                            productText.includes(text)
                        ) {

                            product.style.display =
                                "";

                        } else {

                            product.style.display =
                                "none";

                        }

                    }
                );

            }
        );
    }

});


// =====================================================
// PRODUCT DATABASE
// =====================================================

const products = {

    1: {
        id: 1,
        name: "Wireless Mouse",
        price: 499
    },

    2: {
        id: 2,
        name: "Gaming Keyboard",
        price: 1999
    },

    3: {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499
    }

};


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(id) {

    const product =
        products[id];

    if (!product) {
        alert("Product not found");
        return;
    }

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        "🛒 " +
        product.name +
        " added to cart!"
    );

}


// =====================================================
// ADD TO WISHLIST
// =====================================================

function addToWishlist(id) {

    const product =
        products[id];

    if (!product) {
        alert("Product not found");
        return;
    }

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    const exists =
        wishlist.some(
            function (item) {
                return item.id === id;
            }
        );

    if (exists) {

        alert(
            "❤️ Already in wishlist!"
        );

        return;
    }

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(
        "❤️ " +
        product.name +
        " added to wishlist!"
    );

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(index) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();

}


// =====================================================
// REMOVE FROM WISHLIST
// =====================================================

function removeFromWishlist(index) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();

}


// =====================================================
// CLEAR CART
// =====================================================

function clearCart() {

    localStorage.removeItem("cart");

    location.reload();

}


// =====================================================
// MOVE WISHLIST TO CART
// =====================================================

function moveToCart(index) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    if (!wishlist[index]) return;

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push(wishlist[index]);

    wishlist.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();

}


// =====================================================
// BUY NOW
// =====================================================

function buyNow(id) {

    const product =
        products[id];

    if (!product) return;

    localStorage.setItem(
        "cart",
        JSON.stringify([product])
    );

    window.location.href =
        "checkout.html";

                }
