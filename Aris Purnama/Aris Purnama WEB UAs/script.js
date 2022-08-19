const nav = document.querySelector('#nav');
const tombolNav = document.querySelector('#tombol-nav');

let navAktif = false;

tombolNav.onclick = () => {
    if (navAktif) {
        nav.hidden = true;
        nav.classList.remove('aktif');
        navAktif = false;
        tombolNav.textContent = 'menu';
    } else {
        nav.hidden = false;
        nav.classList.add('aktif');
        navAktif = true;
        tombolNav.textContent = 'arrow_back_ios';
    }
}