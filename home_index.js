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