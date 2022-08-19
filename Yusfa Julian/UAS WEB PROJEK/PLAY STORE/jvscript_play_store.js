// rest api semua kategori
const elementSemuaKategori = document.querySelector('#semua-kategori');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';


            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);



            elementSemuaKategori.appendChild(aplikasiElement);
        }
    });


// rest api kategori game
const elementGame = document.querySelector('.game');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&category=GAME&collection=topselling_paid&page=1&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';


            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);

            elementGame.appendChild(aplikasiElement);
        }
    });


// rest api kategori social
const elementSocial = document.querySelector('.social');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&category=SOCIAL&collection=topselling_paid&page=1&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';


            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);



            elementSocial.appendChild(aplikasiElement);
        }
    });

// rest api kategori shopping
const elementShopping = document.querySelector('.shopping');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&category=SHOPPING&collection=topselling_paid&page=1&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';


            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);

            elementShopping.appendChild(aplikasiElement);
        }
    });


// rest api kategori video-players
const elementVideoPlayers = document.querySelector('.video-players');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&category=VIDEO_PLAYERS&collection=topselling_paid&page=1&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';

            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);

            elementVideoPlayers.appendChild(aplikasiElement);
        }
    });

// rest api kategori family
const elementFamily = document.querySelector('.family');
fetch('https://api-gplay.azharimm.tk/apps?lang=id&category=FAMILY&collection=topselling_paid&page=1&limit=50')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let aplikasi of data.data.results) {

            const aplikasiElement = document.createElement('a');
            aplikasiElement.className = 'aplikasi';
            aplikasiElement.href = aplikasi.playstoreUrl;
            aplikasiElement.target = '_blank';


            const imageElement = document.createElement('img');
            imageElement.src = aplikasi.icon;
            aplikasiElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = aplikasi.title;
            aplikasiElement.appendChild(titleElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = aplikasi.scoreText;
            aplikasiElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Download';
            aplikasiElement.appendChild(buttonElement);

            elementFamily.appendChild(aplikasiElement);
        }
    });


//Rest api Untuk pencarian
const elementOutput = document.querySelector('#output');

document.dapatkanAplikasi.onsubmit = function(event) {
    event.preventDefault();
    elementOutput.innerHTML = '';
    fetch('https://api-gplay.azharimm.tk/apps?q=' + document.dapatkanAplikasi.cariAplikasi.value)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            document.querySelector('.heading').textContent = 'Hasil Pencarian';
            for (let aplikasi of json.data.results) {

                const aplikasiElement = document.createElement('a');
                aplikasiElement.className = 'aplikasi';
                aplikasiElement.href = aplikasi.url;
                aplikasiElement.target = '_blank';

                const imageElement = document.createElement('img');
                imageElement.src = aplikasi.icon;
                aplikasiElement.appendChild(imageElement);

                const titleElement = document.createElement('h3');
                titleElement.textContent = aplikasi.title;
                aplikasiElement.appendChild(titleElement);

                const priceElement = document.createElement('p');
                priceElement.textContent = aplikasi.scoreText;
                aplikasiElement.appendChild(priceElement);

                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Download';
                aplikasiElement.appendChild(buttonElement);

                elementOutput.appendChild(aplikasiElement);
            }
        });
    this.reset();
}