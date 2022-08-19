const semuaElemen = document.querySelector('.wadah');
const elemenDetail = document.querySelector('.detail');

document.search.onsubmit = function (event) {
    event.preventDefault();
    semuaElemen.innerHTML = '';
    function detail() { }
    fetch('https://api-filmapik.herokuapp.com/search?q=' + document.search.searchFilm.value)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            for (let film of json.result) {
                const filmElemen = document.createElement('div');
                filmElemen.className = 'all';

                const judulFilm = document.createElement('h3');
                judulFilm.textContent = film.title;
                filmElemen.appendChild(judulFilm);

                const gambarFilm = document.createElement('img');
                gambarFilm.src = film.thumbnailPotrait;
                filmElemen.appendChild(gambarFilm);

                const trailerFilm = document.createElement('a');
                trailerFilm.textContent = 'Tonton trailer';
                trailerFilm.href = '#';
                trailerFilm.className = 'link';
                trailerFilm.addEventListener('click', function (e) {
                    e.preventDefault();
                    tampilTrailer(film.detail.trailer);
                })

                const ratingFilm = document.createElement('h4');
                ratingFilm.textContent = 'Rating : ' + film.rating;
                filmElemen.appendChild(ratingFilm);

                const button = document.createElement('button');
                button.textContent = 'Detail';
                filmElemen.appendChild(button);
                button.className = 'detaill';
                button.addEventListener('click', function (e) {
                    e.preventDefault()
                    document.querySelector('.detail').innerHTML = '';
                    const qualityFilm = document.createElement('h4');
                    qualityFilm.textContent = 'Kualitas : ' + film.quality;
                    elemenDetail.appendChild(qualityFilm);

                    const viewsFilm = document.createElement('h4');
                    viewsFilm.textContent = 'Views : ' + film.detail.views;
                    elemenDetail.appendChild(viewsFilm);

                    const genreFilm = document.createElement('h4');
                    genreFilm.textContent = 'Genre : ' + film.detail.genre;
                    elemenDetail.appendChild(genreFilm);

                    const directorFilm = document.createElement('h4');
                    directorFilm.textContent = 'Directors : ' + film.detail.director;
                    elemenDetail.appendChild(directorFilm);

                    const actorsFilm = document.createElement('h4');
                    actorsFilm.textContent = 'Aktor : ' + film.detail.actors;
                    elemenDetail.appendChild(actorsFilm);

                    const countryFilm = document.createElement('h4');
                    countryFilm.textContent = 'Negara : ' + film.detail.country;
                    elemenDetail.appendChild(countryFilm);

                    const durationFilm = document.createElement('h4');
                    durationFilm.textContent = 'Durasi Film : ' + film.detail.duration;
                    elemenDetail.appendChild(durationFilm);

                    const releaseFilm = document.createElement('h4');
                    releaseFilm.textContent = 'Tanggal Rilis : ' + film.detail.release;
                    elemenDetail.appendChild(releaseFilm);

                    const descriptionFilm = document.createElement('h4');
                    descriptionFilm.textContent = 'Deskripsi : ' + film.detail.description;
                    elemenDetail.appendChild(descriptionFilm);
                })
                filmElemen.appendChild(trailerFilm);

                semuaElemen.appendChild(filmElemen);
            }
        });
    function tampilTrailer(link) {
        const trailer = document.querySelector('.detail');
        trailer.innerHTML = '';
        if (!link) {
            alert('Trailer tidak tersedia!');
            return;
        }
        const frame = document.createElement('iframe');
        frame.src = link;
        trailer.appendChild(frame);
    }
}