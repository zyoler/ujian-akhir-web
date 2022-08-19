const menuToggle1=document.querySelector('.menu input');
const nav1=document.querySelector('nav ul');

menuToggle1.addEventListener('click',function(){
    nav1.classList.toggle('slide');
});