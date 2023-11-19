/* Giving a functionality to mobile users to navigate through website (hamburger menu) */
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle('active');
}
/* Giving a functionality to users to navigate through website by adding search panel */
let search = document.querySelector(".search");
document.querySelector("#search").onclick = () => {
    search.classList.toggle('active');
}


/* Giving users (especially mobile) to swipe the list of cakes, that company provides */
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteractive: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            sliderPerView: 3,
        },
    },
})
