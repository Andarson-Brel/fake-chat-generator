const menuIcon = document.querySelector(".plate");
const navMenu = document.querySelector(".nav-menu ");
const moreIcon = document.querySelector(".more-btn");
const subMenu = document.querySelector(".sub-menu");

menuIcon.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
moreIcon.addEventListener("click", function () {
  if (window.innerWidth < 1000) {
    subMenu.classList.toggle("mobile");
  } else {
    subMenu.classList.toggle("active");
  }
});
