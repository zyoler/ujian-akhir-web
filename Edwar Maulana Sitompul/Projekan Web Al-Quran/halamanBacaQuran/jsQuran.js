const elemenOutput = document.querySelector('#output');
const elemenArti = document.querySelector('#arti');

document.dapatkanAyat.onsubmit = function (event) {
    event.preventDefault();
    const form = this;
    fetch('https://quran.kemenag.go.id/api/v1/ayatweb/' + this.surat.value + '/' + this.ayat.value + '/0/286')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            elemenOutput.textContent = data.data[0].aya_text;
            elemenArti.textContent = data.data[0].translation_aya_text;
            form.reset();
        });
}


const selectsElement = document.querySelector('#selects');
const divsElement = document.querySelector('#tampil-ayat');

fetch('https://quran.kemenag.go.id/api/v1/surat')
    .then(response => response.json())
    .then(data => {
        for (let surah of data.data) {
            const buttonElement = document.createElement('option');
            buttonElement.textContent = surah.surat_name;
            buttonElement.value = surah.id;
            selectsElement.appendChild(buttonElement);
        }
    });

selectsElement.onchange = function(){
    showSurah(this.value);
}

function showSurah(id) {
    fetch('https://quran.kemenag.go.id/api/v1/ayatweb/' + id + '/0/0/286')
        .then(response => response.json())
        .then(data => {

            divsElement.innerHTML='';
            for (let ayat of data.data) {

                const divElement = document.createElement('div');

                const ayatPElement = document.createElement('h2');
                ayatPElement.textContent = ayat.aya_text;
                divElement.appendChild(ayatPElement);

                const artiPElement = document.createElement('p');
                artiPElement.textContent = ayat.translation_aya_text;
                divElement.appendChild(artiPElement);

                divsElement.appendChild(divElement);

            }
        });
}