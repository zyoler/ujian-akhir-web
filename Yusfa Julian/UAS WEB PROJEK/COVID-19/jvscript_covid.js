// rest api
// rest api mengambil data covid provinsi
function menampilkan(index) {
    fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
        .then(function(response) {
            return response.json();
        }).then(function(json) {

            document.querySelector('#provinsi').textContent = 'Provinsi:  ' + json[index].provinsi;
            document.querySelector('#kasus').textContent = 'Kasus:  ' + json[index].kasus;
            document.querySelector('#dirawat').textContent = 'Dirawat:  ' + json[index].dirawat;
            document.querySelector('#sembuh').textContent = 'Sembuh:  ' + json[index].sembuh;
            document.querySelector('#meninggal').textContent = 'Meninggal:  ' + json[index].meninggal;
        });

    // rest api mengambil tanggal terakhir update
    fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
        .then(function(response) {
            return response.json();
        }).then(function(json) {

            document.querySelector('#last-date').textContent = 'Update Terakhir:  ' + json.lastUpdate;
        });
};

//animasi covid provinsi
const elementProvinsi = document.querySelector('.nav-daerah');
const tamp = document.querySelector('#drawer-kiri');

elementProvinsi.addEventListener('click', function(event) {
    event.preventDefault();
    tamp.classList.toggle('slide');
});


//animasi covid dunia
const elementDunia = document.querySelector('.dunia');
const dunia = document.querySelector('#covid-dunia');

elementDunia.onclick = function(event) {
    event.preventDefault();
    dunia.classList.toggle('slide');
};



// animasi putaran output
const daftarElementProv = document.querySelectorAll('.prov');
const prov = document.querySelector('div#menampilkan');

daftarElementProv.forEach(function(elementProv) {
    elementProv.onclick = async function() {
        menampilkan(elementProv.dataset.id);
        if (prov.classList.contains('putar')) {
            prov.classList.remove('putar');
            await new Promise(r => setTimeout(r, 500));
        }
        prov.classList.add('putar');
    }
});

// rets api covid Dunia
const sekarang = new Date();

const elemenInput = document.querySelector('#input');
const elementNegara = document.cariNegara;
const negara = document.querySelector('.output-dunia');

elementNegara.onsubmit = function(event) {
    event.preventDefault();
    fetch('https://corona.lmao.ninja/v2/countries')
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            for (let negara of data) {
                if (negara.country.toLowerCase().includes(elementNegara.kataKunci.value.toLowerCase())) {

                    document.querySelector('.negara').textContent = 'Negara: ' + negara.country;
                    document.querySelector('.populasi').textContent = 'Populasi: ' + negara.population + ' Jiwa';
                    document.querySelector('.kasus').textContent = 'Kasus: ' + negara.cases + ' Jiwa';
                    document.querySelector('.dirawat').textContent = 'Dirawat: ' + negara.critical + ' Jiwa';
                    document.querySelector('.meninggal').textContent = 'Meninggal: ' + negara.deaths + ' Jiwa';
                    document.querySelector('.sembuh').textContent = 'Sembuh: ' + negara.recovered + ' Jiwa';
                    document.querySelector('.update').textContent = 'Update: ' + sekarang;
                }
            }
            elementNegara.reset();
        });
    negara.classList.toggle('putar');
};

daftarTombolTutupDrawer = document.querySelectorAll('.tombol-tutup-drawer');

daftarTombolTutupDrawer.forEach(function(tombolTutupDrawer) {
    tombolTutupDrawer.onclick = function() {
        tombolTutupDrawer.closest('.slide').classList.remove('slide');
    }
});

outputTombolTutupDrawer = document.querySelectorAll('.tombol-tutup-output');

outputTombolTutupDrawer.forEach(function(tombolTutupOutput) {
    tombolTutupOutput.onclick = function() {
        tombolTutupOutput.closest('.putar').classList.remove('putar');
    }
});