const elemenOutput = document.querySelector('#out-put');

function tampil(param) {
    fetch('https://islamic-api-zhirrr.vercel.app/api/' + param)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            for (let i = 0; i < json.data.length; i++) {
                const elemenBaris = document.createElement('tr');
                elemenOutput.appendChild(elemenBaris);

                const elemenNo = document.createElement('td');
                elemenNo.textContent = json.data[i].index;
                elemenBaris.appendChild(elemenNo);

                const elemenLatin = document.createElement('td');
                elemenLatin.textContent = json.data[i].latin;
                elemenBaris.appendChild(elemenLatin);

                const elemenArab = document.createElement('td');
                elemenArab.textContent = json.data[i].arabic;
                elemenBaris.appendChild(elemenArab);

                const elemenId = document.createElement('td');
                elemenId.textContent = json.data[i].translation_id;
                elemenBaris.appendChild(elemenId);
            }
        });
}