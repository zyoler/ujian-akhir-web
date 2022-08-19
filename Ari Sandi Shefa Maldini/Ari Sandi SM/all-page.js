const cancel = document.querySelector('.cancel');
const batal = document.querySelector('.batal');
const buttonCari = document.querySelector('.button-cari');
const bars = document.querySelector('.bars');
const times = document.querySelector('.times');

cancel.onclick = function() { munculCari() };
buttonCari.onclick = function() { munculCari() };
batal.onclick = function() { navbar() };
bars.onclick = function() { navbar() };
times.onclick = function() { navbar() };

window.location.href;

function navbar() {
    let cla = document.querySelector('.nav-2');
    if (cla.className === 'nav-2') {
        cla.className += ' responsive';
    } else {
        cla.className = 'nav-2';
    }
}

function munculCari() {
    let cla = document.querySelector('.sub-search');
    let la = document.querySelector('.button-search1');
    if (cla.className === 'sub-search') {
        cla.className += ' inp';
        la.className += ' inp';
    } else {
        cla.className = 'sub-search';
        la.className = 'button-search1';
    }
}