// const elemenAnime = document.querySelector('.anim');

// fetch('https://api.aniapi.com/v1/anime')
//     .then(function (response) {
//         return response.json();
//     }).then(function (anime) {
//         console.log(anime);
//         for (let product of anime.data.documents) {
//             const elemenTamp = document.createElement('div');

//             const elemenJudul = document.createElement('h2');
//             elemenJudul.textContent = product.titles.en;
//             elemenTamp.appendChild(elemenJudul);

//             const elemenScr = document.createElement('p');
//             elemenScr.textContent = 'Score: ' + product.score;
//             elemenTamp.appendChild(elemenScr);


//             const elemenImg = document.createElement('img');
//             elemenImg.src = product.cover_image;
//             elemenTamp.appendChild(elemenImg);


//             const elemenDesk = document.createElement('p');
//             elemenDesk.textContent = product.descriptions.en;
//             elemenTamp.appendChild(elemenDesk);



//             const elemenEps = document.createElement('p');
//             elemenEps.textContent = 'Episode: ' + product.episodes_count;
//             elemenTamp.appendChild(elemenEps);

//             for (let a = 0; a <= 4; a++) {
//                 const elemenGen = document.createElement('p');
//                 // document.querySelector('.ktg').textContent = 'Genre: ';
//                 elemenGen.textContent = product.genres[a];
//                 elemenTamp.appendChild(elemenGen);
//             }

//             const elemenThn = document.createElement('p');
//             elemenThn.textContent = 'Tahun: ' + product.season_year;
//             elemenTamp.appendChild(elemenThn);


//             elemenAnime.appendChild(elemenTamp);
//         }

//     });

const elemenAnime1 = document.querySelector('.namanya');

document.enterAnime.onsubmit = function (event) {
    event.preventDefault();
    elemenAnime1.innerHTML='';
    fetch('https://api.aniapi.com/v1/anime?title='+document.enterAnime.userAnime.value)
        .then(function (response) {
            return response.json();
        }).then(function (anime) {
            console.log(anime);
            for (let product of anime.data.documents) {
                const elemenTamp = document.createElement('div');
                elemenTamp.className='divnya';

                const elemenJudul = document.createElement('h4');
                elemenJudul.textContent = product.titles.en;
                elemenTamp.appendChild(elemenJudul);

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


