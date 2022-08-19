const elemenAnime = document.querySelector('.anim');

fetch('https://api.aniapi.com/v1/anime')
    .then(function (response) {
        return response.json();
    }).then(function (anime) {
        console.log(anime);
        for (let product of anime.data.documents) {
            const elemenTamp = document.createElement('div');
            elemenTamp.className='divnye';


            const elemenJudul = document.createElement('h3');
            elemenJudul.textContent = product.titles.en;
            elemenTamp.appendChild(elemenJudul);

            const elemenImg = document.createElement('img');
            elemenImg.src = product.banner_image;
            elemenTamp.appendChild(elemenImg);


            const elemenDesk = document.createElement('p');
            elemenDesk.textContent = product.descriptions.en;
            elemenTamp.appendChild(elemenDesk);

            const elemenEps = document.createElement('p');
            elemenEps.textContent = 'Episode: ' + product.episodes_count;
            elemenTamp.appendChild(elemenEps);

            const elemenGen = document.createElement('p');
            elemenGen.textContent = 'Genre: ' + product.genres[0];
            elemenTamp.appendChild(elemenGen);

            const elemenThn = document.createElement('p');
            elemenThn.textContent = 'Year: ' + product.season_year;
            elemenTamp.appendChild(elemenThn);

            const elemenTrail = document.createElement('a');
            elemenTrail.textContent = 'Trailer';
            elemenTrail.href = product.trailer_url;
            elemenTrail.target = '_blank';
            elemenTamp.appendChild(elemenTrail);
            


            elemenAnime.appendChild(elemenTamp);
        }
    });

    