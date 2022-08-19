const menuNav = document.querySelector('.menu-nav input');
const nav = document.querySelector('nav ul');

menuNav.addEventListener('click', function() {
    nav.classList.toggle('slide');
});