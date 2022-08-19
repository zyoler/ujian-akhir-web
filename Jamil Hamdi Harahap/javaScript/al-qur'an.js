fetch('https://quran.kemenag.go.id/api/v1/surat/0/114')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let no = 1;
        for (let surah of json.data) {
            const option = document.createElement('option');
            option.textContent = no + '. ' + surah.surat_name;
            option.value = surah.id;
            option.dataset.ayat = surah.count_ayat;
            document.dataTampil.surah.appendChild(option);
            no++;
        }
        document.dataTampil.surah.onchange();
    });



const elemenOutput = document.querySelector('#output');
document.dataTampil.surah.onchange = function() {
    elemenOutput.innerHTML = '';
    const surah = this.value;
    fetch('https://quran.kemenag.go.id/api/v1/ayatweb/' + surah + '/0/0/' + this.options[this.selectedIndex].dataset.ayat)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(surah);
            if (surah != 1 && surah != 9) {
                const elemenAyat = document.createElement('div');

                const elemenArab = document.createElement('div');
                elemenArab.textContent = 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ';
                elemenArab.className = 'arab';
                elemenAyat.appendChild(elemenArab);
                const elemenTerjemahan = document.createElement('div');
                elemenTerjemahan.textContent = 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.';
                elemenTerjemahan.className = 'terjemahan';
                elemenAyat.appendChild(elemenTerjemahan);

                elemenOutput.appendChild(elemenAyat);
            }

            for (let ayat of json.data) {
                const elemenAyat = document.createElement('div');

                const elemenArab = document.createElement('div');
                elemenArab.textContent = ayat.aya_text;
                elemenArab.className = 'arab';
                elemenAyat.appendChild(elemenArab);

                const elemenTerjemahan = document.createElement('div');
                elemenTerjemahan.className = 'terjemahan';
                elemenTerjemahan.textContent = ayat.translation_aya_text.replaceAll(/<[^>]*>/g, '');
                elemenAyat.appendChild(elemenTerjemahan);

                elemenOutput.appendChild(elemenAyat);
            }
        });
}