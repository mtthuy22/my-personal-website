"use strict";

const toggleBtn = document.getElementsByClassName("menu__btn")[0];
const menuList = document.getElementsByClassName("menu__list")[0];
const menuLink = document.querySelectorAll(".menu__link");

toggleBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--opened");
  toggleBtn.classList.toggle("menu__btn--opened");
  if (toggleBtn.getAttribute("aria-expanded") === "true") {
    toggleBtn.setAttribute("aria-expanded", "false");
  } else {
    toggleBtn.setAttribute("aria-expanded", "true");
  }
});

menuLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  menuList.classList.remove("menu__list--opened");
  toggleBtn.classList.remove("menu__btn--opened");
  toggleBtn.setAttribute("aria-expanded", "false");
}
