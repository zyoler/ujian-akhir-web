   const outputnama = document.querySelector('#namahadits')
    const output = document.querySelector('#hadits')

    document.inputNama.onsubmit = function (event) {
        event.preventDefault();
        output.innerHTML = '';
        outputnama.innerHTML = '';
        const form = document.querySelector('form');
        const nama = form.rawi.value;

        fetch('https://api.hadith.sutanlab.id/books/' + nama + '?range=1-20%22')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Id Tidak Ditemukan ,harap inputkan sesuai dilist Id');
                }
            })
            .then(function (out) {

                const elemen1 = document.createElement('h1');
                elemen1.textContent = out.data.name;
                outputnama.appendChild(elemen1);

                for (let i = 0; i < 20; i++) {
                    const elemen2 = document.createElement('h2');
                    elemen2.textContent = out.data.hadiths[i].number;
                    const elemen3 = document.createElement('article');
                    elemen3.textContent = out.data.hadiths[i].arab;
                    const elemen4 = document.createElement('p');
                    elemen4.textContent = 'ARTINYA : ' + out.data.hadiths[i].id;
                    output.appendChild(elemen2);
                    output.appendChild(elemen3);
                    output.appendChild(elemen4);
                }
            })
        console.log(outputnama);
        console.log(output);

    }
