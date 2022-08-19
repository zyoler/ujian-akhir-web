const elemenOutput = document.querySelector('#output');
tampilBacaan();

function tampilBacaan() {
    fetch('https://islamic-api-zhirrr.vercel.app/api/bacaanshalat')
        .then(resp => resp.json())
        .then(function (json) {
            let i = 0;
            for (let tamp of json) {
                console.log(tamp);

                const tampungan = document.createElement('div');
                tampungan.className = 'baca';

                const elemenTambahan = document.createElement('br');
                const buatElemenNama = document.createElement('p');
                buatElemenNama.className = 'judul';
                const elemenArabic = document.createElement('p');
                elemenArabic.className = 'tengah';
                const elemenTulisanLatin = document.createElement('p');
                elemenTulisanLatin.className = 'latin';
                const elemenArti = document.createElement('p');

                tampungan.appendChild(elemenTambahan);

                buatElemenNama.textContent = tamp.name;
                tampungan.appendChild(buatElemenNama);

                elemenArabic.textContent = tamp.arabic;
                tampungan.appendChild(elemenArabic);

                elemenTulisanLatin.textContent = tamp.latin;
                tampungan.appendChild(elemenTulisanLatin);

                elemenArti.textContent = tamp.terjemahan;
                tampungan.appendChild(elemenArti);

                elemenOutput.appendChild(tampungan);
            
            }

        });
}