export function initMenu() {
    const toggle = document.getElementById("toggle");
    const menu = document.getElementById("main_menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}