/*
window.onscroll = () => {
    if (window.scrollY > 6800) {
        var show =document.querySelector(".navbar").style.display = "block"
    } else {
        var hide=document.querySelector(".navbar").style.display = "none"
        
    }
}
*/

var menu = document.querySelector("#apple-menu")
navbar = document.querySelector(".navbar")
var count_show_menu = 0

function show_menu() {
    count_show_menu += 1
    if (count_show_menu % 2 == 0) {
        navbar.style.display = "none"
    } else {
        navbar.style.display = "block"
    }
}

//Open and Close login button
var close_login_button = document.querySelector("#close-login")
var login = document.querySelector(".login")
var open_login_button = document.querySelector("#profile")
function close_login() {
    //login.classList.remove("active")
    login.style.display = "none"
}
function open_login() {
    //login.classList.toggle("active")
    login.style.display = "block"
}

//slide
//import Swiper from 'swiper/bundle';

// import styles bundle
//import 'swiper/css/bundle';

// init Swiper:
//var swiper = new Swiper(...);

var swiper = new Swiper(".image-swiper", {
    
    
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


//featured

var swiper = new Swiper(".featured-swiper", {


    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


function loader() {
    document.querySelector(".loader-container").classList.add("active")
}

function fadeOut() {
    setTimeout(loader, 3000)
}

addEventListener("load", fadeOut)
open_login_button.addEventListener("click", open_login)
close_login_button.addEventListener("click", close_login)
menu.addEventListener("click", show_menu)