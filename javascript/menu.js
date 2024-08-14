let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abr-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abr-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abr-menu");
});
