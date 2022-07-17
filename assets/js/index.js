'use strict'

const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const menuList = document.getElementsByClassName('menu__list')[0];
const menuLink = document.querySelectorAll(".menu__link");

toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

menuLink.forEach( n => n.addEventListener('click', closeMenu));

function closeMenu() {
    menuList.classList.remove('active');
}