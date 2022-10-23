const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 120,
        colors: [
            {
                code: "black",
                img: "./img/jordan.png",
            },
            {
                code: "skyblue",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 100,
        colors: [
            {
               code: "black",
               img: "./img/blazer.png", 
            },
            {
                code: "lightblue",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 110,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "gray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 82,
        colors: [
            {
                code: "black",
                img: "./img/hippie.png",
            },
            {
                code: "white",
                img: "./img/hippie2.png",
            },
        ],
    },
];
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    
 });
});