const sekarang = new Date();
const elementJadwalShalat = document.querySelector('#jadwal-shalat');

jadwalShalat();

function jadwalShalat() {
    elementJadwalShalat.innerHTML = '';


    fetch('https://api.myquran.com/v1/sholat/jadwal/1219/' + sekarang.getFullYear() + '/' + (sekarang.getMonth() + 1) + '/' + sekarang.getDate())//fetch mengambil data dari alamat(selalu berisi alamat)
        .then(function (response) {
            return response.json();
        }).then(function (json) {//parameternya selalu fungsi
            console.log(json)

            function buatElemenShalat(nama, namaPropertiWaktu) {//untuk mempersingkat
                const elemenShalat = document.createElement('li');
                elemenShalat.textContent = nama + ' ' + json.data.jadwal[namaPropertiWaktu] + ' WIB ';
                elementJadwalShalat.appendChild(elemenShalat);
            }
            buatElemenShalat('Subuh', 'subuh');
            buatElemenShalat('Zuhur', 'dzuhur');
            buatElemenShalat('Asar', 'ashar');
            buatElemenShalat('Magrib', 'maghrib');
            buatElemenShalat('Isya', 'isya');

        });
};
