const elemenOutput = document.querySelector('#output');


function tampilBacaan(param) {
    fetch('https://islamic-api-zhirrr.vercel.app/api/' + param)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let i = 0;
            for (let tampung of json) {
                console.log(tampung);

                const tampungan = document.createElement('div');
                tampungan.className = 'container';
                const bikinElemen = document.createElement('p');
                bikinElemen.className = 'arab';
                const bikinJudul = document.createElement('h2');
                const bikinTerjemahan = document.createElement('p');
                const bikinLatin = document.createElement('p');

                bikinJudul.textContent = tampung.name;
                tampungan.appendChild(bikinJudul);
                elemenOutput.appendChild(tampungan);

                bikinElemen.textContent = tampung.arabic;
                tampungan.appendChild(bikinElemen);
                elemenOutput.appendChild(tampungan);

                bikinLatin.textContent = tampung.latin;
                tampungan.appendChild(bikinLatin);
                elemenOutput.appendChild(tampungan);

                bikinTerjemahan.textContent = 'Terjemahan : ' + tampung.terjemahan;
                tampungan.appendChild(bikinTerjemahan);
                elemenOutput.appendChild(tampungan);
            }
        });
}