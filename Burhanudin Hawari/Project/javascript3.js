const elemenAnime = document.querySelector('.dataAnimePopuler');

fetch('https://api.aniapi.com/v1/anime')
    .then(function (response) {
        return response.json();
    }).then(function (anime) {
        console.log(anime);


       
           
                const elemenTamp = document.createElement('div');
                for (let x = 0; x < 9; x++) {
                    if (x < 10) {

                const elemenTamp = document.createElement('div');

                const elemenJudul = document.createElement('h2');
                elemenJudul.textContent = anime.data.documents[x].titles.en;
                elemenTamp.appendChild(elemenJudul);

                const elemenScr = document.createElement('h3');
                elemenScr.textContent = 'Score: ' + anime.data.documents[x].score;
                elemenTamp.appendChild(elemenScr);

                const elemenImg = document.createElement('img');
                elemenImg.src = anime.data.documents[x].cover_image;
                elemenTamp.appendChild(elemenImg);

                const elemenDesk = document.createElement('h4');
                elemenDesk.textContent = anime.data.documents[x].descriptions.en;
                elemenTamp.appendChild(elemenDesk);

                const elemenEps = document.createElement('h4');
                elemenEps.textContent = 'Episode: ' + anime.data.documents[x].episodes_count;
                elemenTamp.appendChild(elemenEps);

                for (let a = 0; a <= 4; a++) {
                    const elemenGen = document.createElement('h4');
                    elemenGen.textContent = 'Genre: ' + anime.data.documents[x].genres[a];
                    elemenTamp.appendChild(elemenGen);
                }

                const elemenThn = document.createElement('h4');
                elemenThn.textContent = 'Tahun: ' + anime.data.documents[x].season_year;
                elemenTamp.appendChild(elemenThn);

                const elementrailer = document.createElement('a');
                elementrailer.textContent = 'Trailer ' ;
                elementrailer.href = anime.data.documents[x].trailer_url;
                elementrailer.target = '_blank';
                elemenTamp.appendChild(elementrailer);
                

                elemenAnime.appendChild(elemenTamp);
            }
        }
    

            
    });