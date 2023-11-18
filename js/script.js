const menuBtnEl = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobile-menu");

menuBtnEl.addEventListener("click", toggleHamburgerMenu);

// Toggle Mobile Menu
function toggleHamburgerMenu() {
  menuBtnEl.classList.toggle("open");
  mobileMenuEl.classList.toggle("flex");
  mobileMenuEl.classList.toggle("hidden");
}
