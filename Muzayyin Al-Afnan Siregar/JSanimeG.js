const elemenAnime1 = document.querySelector('.genre');

document.enterGenre.onsubmit = function (event) {
    event.preventDefault();
    elemenAnime1.innerHTML='';
    fetch('https://api.aniapi.com/v1/anime?genres='+document.enterGenre.userGenre.value)
        .then(function (response) {
            return response.json();
        }).then(function (anime) {
            console.log(anime);
            for (let product of anime.data.documents) {
                const elemenTamp = document.createElement('div');
                elemenTamp.className='divnyo';

                const elemenJudul = document.createElement('h4');
                elemenJudul.textContent = product.titles.en;
                elemenTamp.appendChild(elemenJudul);

                const elemenScr = document.createElement('h5');
                elemenScr.textContent = 'Score: ' + product.score;
                elemenTamp.appendChild(elemenScr);

                const elemenImg = document.createElement('img');
                elemenImg.src = product.cover_image;
                elemenTamp.appendChild(elemenImg);

                const elemenEps = document.createElement('p');
                elemenEps.textContent = 'Episode: ' + product.episodes_count;
                elemenTamp.appendChild(elemenEps);

                const elemenThn = document.createElement('p');
                elemenThn.textContent = 'Tahun: ' + product.season_year;
                elemenTamp.appendChild(elemenThn);

                elemenAnime1.appendChild(elemenTamp);
            }

        });
        this.reset();
}
