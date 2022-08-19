const daftarRumahSakit = document.querySelector('#list-rumah-sakit');

fetch('https://dekontaminasi.com/api/id/covid19/hospitals')
    .then(resp => resp.json())
    .then(hospitals => {
        console.log(hospitals)
        for (let hospital of hospitals){
            const daftarRS = document.createElement('div');
            daftarRS.className = 'sakit';

            const elemenNama = document.createElement('p');
            elemenNama.textContent = hospital.name;
            daftarRS.appendChild(elemenNama);

            const elemenAdd = document.createElement('p');
            elemenAdd.textContent = hospital.address;
            daftarRS.appendChild(elemenAdd);

            const elemenRegion = document.createElement('p');
            elemenRegion.textContent = hospital.region;
            daftarRS.appendChild(elemenRegion);

            const elemenPhone = document.createElement('p');
            elemenPhone.textContent = hospital.phone;
            daftarRS.appendChild(elemenPhone);

            const elemenProvin = document.createElement('p');
            elemenProvin.textContent = hospital.province;
            daftarRS.appendChild(elemenProvin);

            daftarRumahSakit.appendChild(daftarRS);

        }
    });