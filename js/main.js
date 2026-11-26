const menuToggle = document.querrySelector(".menu-toggle");
const mainNav = document.querrySelector(".main-nav");
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu"
        );
})
}