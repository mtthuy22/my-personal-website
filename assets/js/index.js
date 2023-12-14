'use strict'

const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const menuList = document.getElementsByClassName('menu__list')[0];
const menuLink = document.querySelectorAll(".menu__link");

toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
  toggleBtn.classList.toggle('active'); 
  if (toggleBtn.getAttribute('aria-expanded') === 'true'){
    toggleBtn.setAttribute('aria-expanded', 'false'); 
  } else {
    toggleBtn.setAttribute('aria-expanded', 'true');
  }
});

menuLink.forEach( n => n.addEventListener('click', closeMenu));

function closeMenu() {
    menuList.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
}