const menuBurger = document.getElementById("burger");
const nav = document.getElementById("nav");

menuBurger.addEventListener(`click`, function () {
  nav.classList.toggle(`slide`);
});
