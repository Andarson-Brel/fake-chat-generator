const menuIcon = document.querySelector(".plate");
const navMenu = document.querySelector(".nav-menu ");

menuIcon.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
