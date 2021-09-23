// menu elementen
var menu = document.querySelector(".menu");
var mobileMenu = document.querySelector(".dropdown");
var eersteMenuLine = document.querySelector(".menu div:first-of-type");
var middelMenuLine = document.querySelector(".menu div:nth-of-type(2)");
var laatsteMenuLine = document.querySelector(".menu div:last-of-type");

//zoekbalk
var search = document.querySelector("header form");
// product koppen
var nieuwsteProducten = document.querySelector(".webshop section:nth-of-type(3) h2:first-of-type");
var aanbevolenProducten = document.querySelector(".webshop section:nth-of-type(3) h2:nth-of-type(2)");
var populaireProducten = document.querySelector(".webshop section:nth-of-type(3) h2:last-of-type");


// producten afbeelingen
var img1 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(1) img");
var img2 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(2) img");
var img3 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(3) img");
var img4 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(4) img");
var img5 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(5) img");

var imgProducts = [img1, img2, img3, img4, img5];

function openMenu(){
    //hier haal ik mijn dropdown menu te voorschijn 
    mobileMenu.classList.toggle("magic");
    middelMenuLine.classList.toggle("verdwijn"); //hier verdwijnt het middel lijntje in mijn nemu
    eersteMenuLine.classList.toggle("cross2");
    laatsteMenuLine.classList.toggle("cross1");
}
function openZoekbalk(){

}

function switchProductsNieuw(){
    imgProducts[0].src = "img/product6.jpg";
    imgProducts[1].src = "img/product7.jpg";
    imgProducts[2].src = "img/product8.jpg";
    imgProducts[4].src = "img/product9.jpg";
   
}

function switchProductsAanbevolen(){
    imgProducts[0].src = "img/product1.jpg";
    imgProducts[1].src = "img/product2.jpg";
    imgProducts[2].src = "img/product3.jpg";
    imgProducts[4].src = "img/product5.png";
}

menu.addEventListener("click", openMenu);
nieuwsteProducten.addEventListener("click", switchProductsNieuw);
aanbevolenProducten.addEventListener("click", switchProductsAanbevolen);