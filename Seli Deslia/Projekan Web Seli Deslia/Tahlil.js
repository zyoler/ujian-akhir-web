
const elemenOutput = document.querySelector('#out-put');

function tampil(param) {
    fetch('https://islamic-api-zhirrr.vercel.app/api/' + param)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            for (let i = 0; i < json.data.length; i++) {
                const tampungan = document.createElement('div');
                const buatElemenJudul = document.createElement('h2');
                const buatElemenArab = document.createElement('p');
                buatElemenArab.className = 'arab';
                const buatElemenTranslation = document.createElement('p');

                buatElemenJudul.textContent = json.data[i].title;
                tampungan.appendChild(buatElemenJudul);
                elemenOutput.appendChild(tampungan);

                buatElemenArab.textContent = json.data[i].arabic;
                tampungan.appendChild(buatElemenArab);
                elemenOutput.appendChild(tampungan);

                buatElemenTranslation.textContent = json.data[i].translation;
                tampungan.appendChild(buatElemenTranslation);
                elemenOutput.appendChild(tampungan);

            }
        });
}