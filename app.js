// =====================================
// MY BUSINESS STORE
// app.js
// =====================================

// -----------------------------
// PRODUCT DATA
// -----------------------------

const products = [

{
    id:1,
    name:"Wireless Mouse",
    price:499,
    image:"images/product1.jpg",
    rating:4.8,
    category:"Accessories"
},

{
    id:2,
    name:"Gaming Keyboard",
    price:1999,
    image:"images/product2.jpg",
    rating:4.7,
    category:"Gaming"
},

{
    id:3,
    name:"Bluetooth Speaker",
    price:1499,
    image:"images/product3.jpg",
    rating:4.9,
    category:"Electronics"
}

];

// -----------------------------
// SEARCH
// -----------------------------

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// -----------------------------
// DARK MODE
// -----------------------------

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

};

}

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}

// -----------------------------
// CART
// -----------------------------

let cart=[];

function addToCart(id){

const product = products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert(product.name+" added to cart.");

}

// -----------------------------
// WISHLIST
// -----------------------------

let wishlist=[];

function addToWishlist(id){

const product=products.find(p=>p.id===id);

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert(product.name+" added to wishlist.");

}

// -----------------------------
// SCROLL TOP
// -----------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-button";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// -----------------------------
// LOADING
// -----------------------------

window.onload=()=>{

console.log("Welcome to My Business Store");

};