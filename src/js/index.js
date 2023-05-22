// меню бургер

const iconMenu = document.querySelector(".menu-icon");
const headerNavigation = document.querySelector(".header-navigation");
const headerLink = document.querySelector(".nav__links");
const burgerClose = document.querySelector(".burger-close");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    headerNavigation.classList.toggle("_active");
  });
}
if (headerLink) {
  burgerClose.addEventListener("click", function (e) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    headerNavigation.classList.remove("_active");
  });
}
