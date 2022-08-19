const elemenOutPut = document.querySelector('#output');
tampilNiat('niatshalat');
function tampilNiat(parameter){
    fetch('https://islamic-api-zhirrr.vercel.app/api/' + parameter)
    .then(function (response) {
        return response.json();
        })
    .then (function (json) {
        let i = 0;
            for (let tamp of json) {
                console.log(tamp);

                const tampunganNiat = document.createElement('div');
        
                const elemenNama = document.createElement('p');
                const elemenTulisanArab = document.createElement('p');
                const elemenLatin = document.createElement('p');
                const elemenArtinya = document.createElement('p');
                   
                    elemenNama.textContent = tamp.name;
                    tampunganNiat.appendChild(elemenNama);
                    elemenNama.className = 'judul';


                    elemenTulisanArab.textContent = tamp.arabic;
                    tampunganNiat.appendChild(elemenTulisanArab);
                    elemenTulisanArab.className = 'arab';


                    elemenLatin.textContent = tamp.latin;
                    tampunganNiat.appendChild(elemenLatin);
                    elemenLatin.className = 'atur';


                    elemenArtinya.textContent = tamp.terjemahan;
                    tampunganNiat.appendChild(elemenArtinya);
                    elemenArtinya.className = 'atur';

                    elemenOutPut.appendChild(tampunganNiat);
            }
    });
}

                        


