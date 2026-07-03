const toggle = document.getElementById("toggle");
const menu = document.getElementById("main_menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});