const elemenWaktuShalat = document.querySelector('#waktu-sholat');
// const elemenDaerahKota = document.querySelector('#daerah-kota');
// const elemenBulanTahun = document.querySelector('#bulan-tahun');
// const elemenJadwalSholat = document.querySelector('#waktu-sholat2');
const waktuSekarang = new Date();
console.log(waktuSekarang);

// let array = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// if (elemenBulanTahun) {
//     elemenBulanTahun.textContent = array[waktuSekarang.getMonth() + 1] + ' ' + waktuSekarang.getFullYear();
// }

const ambilSelectIdKota = document.querySelector('#id-kota');

if (ambilSelectIdKota) {
    function compare(a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        }
        if (a.textContent > b.textContent) {
            return 1;
        }
        return 0;
    }

    let array = [];
    for (let kota of ambilSelectIdKota.children) {
        array.push(kota);
    }
    array.sort(compare);
    ambilSelectIdKota.innerHTML = '';
    for (let kota of array) {
        ambilSelectIdKota.appendChild(kota);
    }
}

let idKota = localStorage.getItem('idKota');

if (idKota) {
    if (ambilSelectIdKota) {
        ambilSelectIdKota.value = idKota;
        ambilSelectIdKota.onchange = () => {
            localStorage.setItem('idKota', ambilSelectIdKota.value);
            idKota = localStorage.getItem('idKota');
            ambilValueOptionIdKota();
        }
    }
} else {
    idKota = localStorage.setItem('idKota', 1301);
}

ambilValueOptionIdKota();

function ambilValueOptionIdKota() {

    fetch('https://api.myquran.com/v1/sholat/jadwal/' + idKota + '/' + waktuSekarang.getFullYear() + '/' + (waktuSekarang.getMonth() + 1) + '/' + waktuSekarang.getDate())
        .then(function (response) {
            return response.json();
        }).then(function (json) {


            if (elemenWaktuShalat) {
                function buatElemenShalat(waktu) {

                    const elemenShalat = document.createElement('li');
                    elemenShalat.textContent = json.data.jadwal[waktu];
                    elemenWaktuShalat.appendChild(elemenShalat);
                }
                elemenWaktuShalat.innerHTML = '';

                buatElemenShalat('imsak');
                buatElemenShalat('subuh');
                buatElemenShalat('dzuhur');
                buatElemenShalat('ashar');
                buatElemenShalat('maghrib');
                buatElemenShalat('isya');
                buatElemenShalat('tanggal');
            }

            
        });

    // fetch('https://api.myquran.com/v1/sholat/jadwal/' + idKota + '/' + waktuSekarang.getFullYear() + '/' + (waktuSekarang.getMonth() + 1) + '/' + waktuSekarang.getDate())
    //     .then(function (response) {
    //         return response.json();
    //     }).then(function (json) {

    //         if (elemenJadwalSholat) {
    //             for (let i=0; i<=31; i++) {
    //                 const elemenDataSholat = document.createElement('tr');

    //                 const elemenTanggal = document.createElement('td');
    //                 elemenTanggal.textContent = json.data.jadwal;
    //                 elemenDataSholat.appendChild(elemenTanggal);

    //                 function buatElemenShalat(waktu) {
    //                     const elemenTd = document.createElement('td');
    //                     elemenTd.textContent = json.data.jadwal[waktu] + ' WIB';
    //                     elemenDataSholat.appendChild(elemenTd);
    //                 }
    //                 buatElemenShalat('imsak');
    //                 buatElemenShalat('subuh');
    //                 buatElemenShalat('dhuha');
    //                 buatElemenShalat('dzuhur');
    //                 buatElemenShalat('ashar');
    //                 buatElemenShalat('maghrib');
    //                 buatElemenShalat('isya');

    //                 elemenJadwalSholat.appendChild(elemenDataSholat);

    //             }
    //         }
    //     });
}
