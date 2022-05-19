const navboton = document.querySelector(".nav-boton")
const navmenu = document.querySelector(".nav-menu")

navboton.addEventListener("click",() => {
    navmenu.classList.toggle("nav-menu_visible");
})