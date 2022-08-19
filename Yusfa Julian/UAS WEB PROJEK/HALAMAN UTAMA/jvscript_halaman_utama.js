const dataListElement = document.querySelector('#container');

fetch('https://api-berita-indonesia.vercel.app/cnbc/terbaru/')
    .then(function(response) {
        return response.json();
    }).then(function(datas) {
        dataListElement.innerHTML = '';
        for (let berita of datas.data.posts) {
            console.log(berita);
            const elementBerita = document.createElement('div');

            const elementTitle = document.createElement('h2');
            elementTitle.textContent = berita.title;
            elementBerita.appendChild(elementTitle);

            const elementGambar = document.createElement('img');
            elementGambar.src = berita.thumbnail;
            elementBerita.appendChild(elementGambar);

            const elementDeskripsi = document.createElement('p');
            elementDeskripsi.textContent = berita.description + '...';
            elementBerita.appendChild(elementDeskripsi);

            const elementWaktu = document.createElement('p');
            elementWaktu.textContent = 'Update ' + berita.pubDate;
            elementBerita.appendChild(elementWaktu);

            const elementLink = document.createElement('a');
            elementLink.href = berita.link;
            elementLink.className = 'link';
            elementLink.target = '_blank';
            elementLink.textContent = 'Detail...';
            elementBerita.appendChild(elementLink);

            dataListElement.appendChild(elementBerita);
        }
    });



function tampilkan(param) {
    fetch('https://api-berita-indonesia.vercel.app/cnbc/' + param + '/')
        .then(function(response) {
            return response.json();
        }).then(function(datas) {
            dataListElement.innerHTML = '';
            for (let berita of datas.data.posts) {
                console.log(berita);
                const elementBerita = document.createElement('div');

                const elementTitle = document.createElement('h2');
                elementTitle.textContent = berita.title;
                elementBerita.appendChild(elementTitle);

                const elementGambar = document.createElement('img');
                elementGambar.src = berita.thumbnail;
                elementBerita.appendChild(elementGambar);

                const elementDeskripsi = document.createElement('p');
                elementDeskripsi.textContent = berita.description + '...';
                elementBerita.appendChild(elementDeskripsi);

                const elementWaktu = document.createElement('p');
                elementWaktu.textContent = 'Update ' + berita.pubDate;
                elementBerita.appendChild(elementWaktu);

                const elementLink = document.createElement('a');
                elementLink.href = berita.link;
                elementLink.className = 'link';
                elementLink.target = '_blank';
                elementLink.textContent = 'Detail...';
                elementBerita.appendChild(elementLink);



                dataListElement.appendChild(elementBerita);
            }
        });
}


// Menu hamburger
const menuHamberger = document.querySelector('.menu-hamberger input');
const nav = document.querySelector('nav ul');

menuHamberger.addEventListener('click', function() {
    nav.classList.toggle('slide');
});