const  menuUtama = document.querySelector('.menu-nav input');
const nav = document.querySelector('nav ul');

menuUtama.addEventListener('click',function(){
    nav.classList.toggle('slide');
});