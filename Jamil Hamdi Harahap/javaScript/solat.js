fetch('https://api.myquran.com/v1/sholat/kota/semua')
    .then(response => response.json())
    .then(kota => {
        const formJadwal = document.querySelector('#input');
        const jadwal = formJadwal.waktu;
        kota.forEach(element => {
            const option = document.createElement('option');
            option.textContent = element.lokasi;
            option.value = element.id;
            jadwal.appendChild(option);
        });

        document.input.waktu.onchange();

    });

const elemenOutput = document.querySelector('#output');

document.input.waktu.onchange = function() {
    elemenOutput.innerHTML = '';
    fetch('https://api.myquran.com/v1/sholat/jadwal/' + this.value + '/2021/08/')
        .then(function(response) {
            return response.json();
        }).then(function(json) {

            let arr = ['Tanggal', 'Subuh', 'Zuhur', 'Ashar', 'Magrib', 'Isya'];
            const tabelHead = document.createElement('thead');
            for (let i = 0; i < 6; i++) {
                const tabelTH = document.createElement('th');
                tabelTH.textContent = arr[i];
                tabelHead.appendChild(tabelTH);
                elemenOutput.appendChild(tabelHead);
            }

            const elementTbody = document.createElement('tbody');
            for (let jad of json.data.jadwal) {
                const elementBody = document.createElement('tr');
                const elementTanggal = document.createElement('td');
                elementTanggal.textContent = jad.tanggal;
                elementBody.appendChild(elementTanggal);

                const elementSubuh = document.createElement('td');
                elementSubuh.textContent = jad.subuh;
                elementBody.appendChild(elementSubuh);

                const elementDzuhur = document.createElement('td');
                elementDzuhur.textContent = jad.dzuhur;
                elementBody.appendChild(elementDzuhur);

                const elementAshar = document.createElement('td');
                elementAshar.textContent = jad.ashar;
                elementBody.appendChild(elementAshar);

                const elementMaghrib = document.createElement('td');
                elementMaghrib.textContent = jad.maghrib;
                elementBody.appendChild(elementMaghrib);

                const elementIsya = document.createElement('td');
                elementIsya.textContent = jad.isya;
                elementBody.appendChild(elementIsya);

                elementTbody.appendChild(elementBody);

                elemenOutput.appendChild(elementTbody);
            }
        });
}