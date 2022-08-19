const elemenAnime1 = document.querySelector('.genres');

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

                const elemenJudul = document.createElement('h2');
                elemenJudul.textContent = product.titles.en;
                elemenTamp.appendChild(elemenJudul);

                const elemenScr = document.createElement('h3');
                elemenScr.textContent = 'Score: ' + product.score;
                elemenTamp.appendChild(elemenScr);

                const elemenImg = document.createElement('img');
                elemenImg.src = product.cover_image;
                elemenTamp.appendChild(elemenImg);

                const elemenDesk = document.createElement('h4');
                elemenDesk.textContent = product.descriptions.en;
                elemenTamp.appendChild(elemenDesk);

                const elemenEps = document.createElement('h4');
                elemenEps.textContent = 'Episode: ' + product.episodes_count;
                elemenTamp.appendChild(elemenEps);

                for (let a = 0; a <= 5; a++) {
                    const elemenGen = document.createElement('h4');
                    elemenGen.textContent = product.genres[a];
                    elemenTamp.appendChild(elemenGen);
                }

                const elemenThn = document.createElement('h4');
                elemenThn.textContent = 'Tahun: ' + product.season_year;
                elemenTamp.appendChild(elemenThn);

                const elementrailer = document.createElement('a');
                elementrailer.textContent = 'Trailer ' ;
                elementrailer.href = product.trailer_url;
                elementrailer.target = '_blank';
                elemenTamp.appendChild(elementrailer);
                

                elemenAnime1.appendChild(elemenTamp);
            }

        });
        this.reset();
}