// menu elementen
var menu = document.querySelector(".menu");
var mobileMenu = document.querySelector("header nav");
var eersteMenuLine = document.querySelector(".menu div:first-of-type");
var middelMenuLine = document.querySelector(".menu div:nth-of-type(2)");
var laatsteMenuLine = document.querySelector(".menu div:last-of-type");

// product koppen
var nieuwsteProducten = document.querySelector(".webshop section:nth-of-type(3) h2:first-of-type");
var aanbevolenProducten = document.querySelector(".webshop section:nth-of-type(3) h2:nth-of-type(2)");

// producten afbeelingen
var img1 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(1) img");
var img2 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(2) img");
var img3 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(3) img");
var img4 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(4) img");
var img5 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(5) img");

var imgProducts = [img1, img2, img3, img4, img5];
// product koppen
var name1 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(1) h3");
var name2 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(2) h3");
var name3 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(3) h3");
var name4 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(4) h3");
var name5 = document.querySelector(".webshop section:nth-of-type(4) article:nth-of-type(5) h3");

var productsName = [name1, name2, name3, name4, name5, name5];

//footer dropdown
var klantenservice = document.querySelector("footer section:nth-of-type(2) h2");
var infoKlant = document.querySelector("footer section:nth-of-type(2) ul");

var mijnAccount = document.querySelector("footer section:nth-of-type(3) h2");
var infoAccount = document.querySelector("footer section:nth-of-type(3) ul");

var schrijver = document.querySelector("footer section:nth-of-type(4) h2");
var infoSchrijver = document.querySelector("footer section:nth-of-type(3) ul");


function openMenu(){
    //hier haal ik mijn dropdown menu te voorschijn 
    mobileMenu.classList.toggle("magic");
    middelMenuLine.classList.toggle("verdwijn"); //hier verdwijnt het middel lijntje in mijn nemu
    eersteMenuLine.classList.toggle("cross2");
    laatsteMenuLine.classList.toggle("cross1");
}

function switchProductsNieuw(){
    //hier ben ik de src van bestaande images aan het overwschrijven 
    imgProducts[0].src = "img/product6.jpg";
    imgProducts[1].src = "img/product7.jpg";
    imgProducts[2].src = "img/product8.jpg";
    imgProducts[4].src = "img/product9.jpg";

    //Ik overschrijf de text content die ik in mijn html heb geschreven
    productsName[0].textContent= "The Segway Ninebot";
    productsName[1].textContent= "Zipper M6";
    productsName[2].textContent= "The Segway Sport S5";
    productsName[4].textContent= "BMW C650 Sport";
}

function switchProductsAanbevolen(){
     //hier ben ik de src van bestaande images aan het overwschrijven 
    imgProducts[0].src = "img/product1.jpg";
    imgProducts[1].src = "img/product2.jpg";
    imgProducts[2].src = "img/product3.jpg";
    imgProducts[4].src = "img/product5.png";
}
function openInfoKlantenservice(){
    infoKlant.classList.toggle("show");
}
function openInfoAccount(){
    infoAccount.classList.toggle("show");
}
function openInfoSchrijver(){
    infoSchrijver.classList.toggle("show");
}

menu.addEventListener("click", openMenu);
nieuwsteProducten.addEventListener("click", switchProductsNieuw);
aanbevolenProducten.addEventListener("click", switchProductsAanbevolen);

klantenservice.addEventListener("click", openInfoKlantenservice);
mijnAccount.addEventListener("click", openInfoAccount);
schrijver.addEventListener("click", openInfoSchrijver);