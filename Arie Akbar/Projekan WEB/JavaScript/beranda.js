
const rawiElement = document.querySelector('#nama-rawi');
const listHadis = document.querySelector('#hadis');
const artiElement = document.querySelector('#arti');
document.tampilHadits.onsubmit = function (event) {
    event.preventDefault();
    tampilHadits();
}

function tampilHadits() {

    const form = document.querySelector('form');
    const input = document.querySelector('#input');
    let namaRawi = form.rawi.value;
    let value = parseInt(input.value);

    let url = 'https://api.hadith.sutanlab.id/books/' + namaRawi + '/' + value;

    fetch(url)
        .then(resp => resp.json())
        .then(hadits => {

            if (hadits.code != 200) { 
                alert('Hadits Yang Dimaksud tidak ditemukan !!!');
                return;
            }

            if ((namaRawi == "ahmad" && value == 2)|| value < 1) {
                alert('Hadits Yang Dimaksud tidak ditemukan !!!');
                return;
            }

            // if (value < 1) {
            //     alert('Hadits Yang Dimaksud tidak ditemukan !!!');
            //     return;
            // }

            hadits = hadits.data;

            rawiElement.textContent = hadits.name + ' Nomor ' + hadits.contents.number;

            listHadis.textContent = hadits.contents.arab;

            artiElement.textContent = 'Artinya : ' + hadits.contents.id;

            form.reset();
        })

}

const listRawi = document.querySelector('#list-of-rawi');
document.tampilHadits.onsubmit = function (event) {
    event.preventDefault();
    tampilHadits();
}

fetch('https://api.hadith.sutanlab.id/books')
    .then(resp => resp.json())
    .then(json => {

        for (let perawi of json.data) {
            const option = document.createElement('option');
            option.textContent = perawi.name;
            option.value = perawi.id;
            listRawi.appendChild(option);
        }


    })
