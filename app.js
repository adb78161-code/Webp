// ===============================
// MY BUSINESS STORE - APP.JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // ELEMENTS
    // -------------------------------

    const searchBtn = document.getElementById("search-btn");
    const wishlistBtn = document.getElementById("wishlist-btn");
    const cartBtn = document.getElementById("cart-btn");
    const loginBtn = document.getElementById("login-btn");
    const themeBtn = document.getElementById("theme-btn");

    const searchInput = document.getElementById("search");


    // -------------------------------
    // SEARCH
    // -------------------------------

    if (searchBtn) {

        searchBtn.addEventListener("click", () => {

            if (searchInput) {

                searchInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                searchInput.focus();

            }

        });

    }


    // -------------------------------
    // WISHLIST
    // -------------------------------

    if (wishlistBtn) {

        wishlistBtn.addEventListener("click", () => {

            alert("❤️ Wishlist opened!");

            window.location.href = "wishlist.html";

        });

    }


    // -------------------------------
    // CART
    // -------------------------------

    if (cartBtn) {

        cartBtn.addEventListener("click", () => {

            window.location.href = "cart.html";

        });

    }


    // -------------------------------
    // LOGIN
    // -------------------------------

    if (loginBtn) {

        loginBtn.addEventListener("click", () => {

            window.location.href = "login.html";

        });

    }


    // -------------------------------
    // DARK MODE
    // -------------------------------

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (
                document.body.classList.contains("dark-mode")
            ) {

                themeBtn.classList.remove(
                    "fa-moon"
                );

                themeBtn.classList.add(
                    "fa-sun"
                );

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeBtn.classList.remove(
                    "fa-sun"
                );

                themeBtn.classList.add(
                    "fa-moon"
                );

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        });

    }


    // -------------------------------
    // LOAD SAVED THEME
    // -------------------------------

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        if (themeBtn) {

            themeBtn.classList.remove(
                "fa-moon"
            );

            themeBtn.classList.add(
                "fa-sun"
            );

        }

    }


    // -------------------------------
    // PRODUCT SEARCH
    // -------------------------------

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const searchText =
                    searchInput.value
                    .toLowerCase()
                    .trim();

                const products =
                    document.querySelectorAll(
                        ".product-card"
                    );

                products.forEach(product => {

                    const text =
                        product.textContent
                        .toLowerCase();

                    if (
                        text.includes(searchText)
                    ) {

                        product.style.display =
                            "";

                    } else {

                        product.style.display =
                            "none";

                    }

                });

            }
        );

    }

});
