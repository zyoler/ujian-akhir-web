
let dari = 1;
let sampai = 20;

const elemenRange = document.querySelector('#range');
const tombolSebelumnya = document.querySelectorAll('#tombol-sebelumnya');
const tombolBerikutnya = document.querySelectorAll('#tombol-berikutnya');

tombolSebelumnya.forEach(i => {
    i.onclick = function () {
        dari -= 20;
        sampai -= 20;
        tampilHadits();
    }
});
tombolBerikutnya.forEach(i => {
    i.onclick = function () {
        dari += 20;
        sampai += 20;
        tampilHadits();
    }
});

const listHadis = document.querySelector('#list-of-hadis');

function tampilHadits() {
    elemenRange.textContent = dari + '-' + sampai;
    let url = 'https://api.hadith.sutanlab.id/books/nasai?range=' + dari + ' - ' + sampai;

    fetch(url)
        .then(resp => resp.json())
        .then(hasil => {

            const judulNav = document.querySelector('header');
            judulNav.scrollIntoView();

            if (dari === 1) {
                tombolSebelumnya.forEach(i => {
                    i.disabled = true;
                })
            } else {
                tombolSebelumnya.forEach(i => {
                    i.disabled = false;
                })
            }
            
            listHadis.textContent = '';
            if (hasil.code != 200) {
                listHadis.textContent = 'Rawi tidak ditemukan';
                return;
            }

            hasil = hasil.data;

            hasil.hadiths.forEach(hadiths => {
                const nameElement = document.createElement('h2');
                nameElement.textContent = hasil.name + ' Nomor ' + hadiths.number;
                listHadis.appendChild(nameElement);

                const arabHadis = document.createElement('article');
                arabHadis.textContent = hadiths.arab;
                listHadis.appendChild(arabHadis);

                const artiHadis = document.createElement('p');
                artiHadis.textContent = 'Artinya : ' + hadiths.id;
                listHadis.appendChild(artiHadis);
            });

        })

}

tampilHadits();
