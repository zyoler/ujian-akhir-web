const elemenOutput = document.querySelector('#out-put');

document.dapatkanKisah.onsubmit = function (event) {
    event.preventDefault();
    fetch('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + document.dapatkanKisah.namaNabi.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const tampGambar =document.createElement('div');
            tampGambar.className = 'namaNabi'
            const tamp = document.createElement('div');
            tamp.className = 'tampungan';

            const buatImage = document.createElement('img');
            buatImage.src=json.nabi.image;
            tampGambar.appendChild(buatImage);
            tamp.appendChild(tampGambar);

            const buatNama = document.createElement('p');
            buatNama.textContent ='Nama : ' + json.nabi.nama;
            tamp.appendChild(buatNama);

            const buatLahir = document.createElement('p');
            buatLahir.textContent ='Lahir : ' + json.nabi.lahir;
            tamp.appendChild(buatLahir);

            const buatUmur = document.createElement('p');
            buatUmur.textContent ='Umur : ' + json.nabi.umur;
            tamp.appendChild(buatUmur);

            const buatTempat = document.createElement('p');
            buatTempat.textContent ='Tempat : ' + json.nabi.tempat;
            tamp.appendChild(buatTempat);

            const buatKisah = document.createElement('p');
            buatKisah.textContent ='Kisah : ' + json.nabi.kisah;
            tamp.appendChild(buatKisah);
           
            elemenOutput.appendChild(tamp);
            this.form.reset();
        });
}