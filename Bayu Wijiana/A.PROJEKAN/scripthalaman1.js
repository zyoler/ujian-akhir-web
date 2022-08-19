const output = document.querySelector('#paragraf')
    document.inputNama.onsubmit = function (event) {
        event.preventDefault();
        output.innerHTML = '';
        const form = this;

        fetch('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + this.nabi.value)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Inputan tidak sesuai');
                }
            })
            .then(function (out) {
                const tampil = document.querySelector('#paragraf');
                const elemen1 = document.createElement('h1');

                elemen1.textContent = out.nabi.nama;
                tampil.appendChild(elemen1);

                const elemen2 = document.createElement('img');
                elemen2.src = out.nabi.image;
                tampil.appendChild(elemen2);

                const elemen3 = document.createElement('p');
                elemen3.textContent = 'Kelahiran    : ' + out.nabi.lahir + 'SM';
                tampil.appendChild(elemen3);

                const elemen4 = document.createElement('p');
                elemen4.textContent = 'Tempat Lahir :' + out.nabi.tempat;
                tampil.appendChild(elemen4);

                const elemen5 = document.createElement('p');
                elemen5.textContent = 'Umur : ' + out.nabi.umur + ' Tahun';
                tampil.appendChild(elemen5);

                const elemen6 = document.createElement('p');
                elemen6.textContent = out.nabi.kisah;
                tampil.appendChild(elemen6);
            })

    }