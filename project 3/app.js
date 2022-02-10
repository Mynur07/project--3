const hamburger = document.querySelector('.hero .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.hero .nav-bar .nav-list .ul');
const hero = document.querySelector('.hero.container')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('.active');
})