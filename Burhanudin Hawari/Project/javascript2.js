const elemenAnime = document.querySelector('.dataAnimeList');

        fetch('https://api.aniapi.com/v1/anime')
            .then(function (response) {
                return response.json();
            }).then(function (anime) {
                console.log(anime);
                for (let product of anime.data.documents) {
                    const elemenTamp = document.createElement('div');

                    const elemenJudul = document.createElement('h4');
                    elemenJudul.textContent = product.titles.en;
                    elemenTamp.appendChild(elemenJudul);

                    elemenAnime.appendChild(elemenTamp);
                }

            }
            );