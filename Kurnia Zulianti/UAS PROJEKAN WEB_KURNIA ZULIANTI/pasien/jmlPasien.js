const jumlahPasien = document.querySelector('#list-pasien');

fetch('https://indonesia-covid-19.mathdro.id/api/provinsi/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const tableBody = document.querySelector('#table-data');
        tableBody.className = 'tabelPasien';
        tableBody.innerHTML = '';

        json.data.forEach(hasil => {
            console.log(hasil);
            const elemenPasien = document.createElement('tr');
            tableBody.appendChild(elemenPasien);

            const elemenFid = document.createElement('td');
            elemenFid.textContent = hasil.fid;
            elemenPasien.appendChild(elemenFid);

            const elemenKode = document.createElement('td');
            elemenKode.textContent = hasil.kodeProvi;
            elemenPasien.appendChild(elemenKode);

            const elemenProv = document.createElement('td');
            elemenProv.textContent = hasil.provinsi;
            elemenPasien.appendChild(elemenProv);

            const elemenJumlahPos = document.createElement('td')
            elemenJumlahPos.textContent = hasil.kasusPosi;
            elemenPasien.appendChild(elemenJumlahPos);

            const elemenSembuh = document.createElement('td');
            elemenSembuh.textContent = hasil.kasusSemb;
            elemenPasien.appendChild(elemenSembuh);

            const elemenMeninggal = document.createElement('td');
            elemenMeninggal.textContent = hasil.kasusMeni;
            elemenPasien.appendChild(elemenMeninggal);

        });
    });
