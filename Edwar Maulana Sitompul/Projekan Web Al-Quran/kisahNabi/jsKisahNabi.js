const ambilElemenArticle = document.querySelector('#output');
const ambilElemenH3 = document.querySelector('#nama');
const ambilElemenH4 = document.querySelector('#lahir');
const ambilElemenH4Umur = document.querySelector('#umur');
const ambilElemenH4Tempat = document.querySelector('#tempat');

document.dapatkanOutput.onsubmit = function (event) {
    event.preventDefault();
    const form = this;

    fetch('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + this.namaNabi.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            ambilElemenH3.textContent = data.nabi.nama;
            ambilElemenH4.textContent = 'Tahun Lahir : ' + data.nabi.lahir + ' (Hijriah/Masehi)';
            ambilElemenH4Umur.textContent = 'Umur : ' + data.nabi.umur + ' tahun';
            ambilElemenH4Tempat.textContent = 'Tempat : ' + data.nabi.tempat;

            const buatElemenArticle = document.createElement('article');

            const buatElemenP = document.createElement('p');
            buatElemenP.textContent = data.nabi.kisah;
            buatElemenArticle.appendChild(buatElemenP);

            ambilElemenArticle.appendChild(buatElemenArticle);
            form.reset();
        });
}
