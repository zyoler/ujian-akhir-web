const listFilmNowPlaying = document.querySelector('.list-film-nowPlaying');
const listFilmPopular = document.querySelector('.list-film-popular');
const listFilmTopRated = document.querySelector('.list-film-topRated');
const listFilmUpcoming = document.querySelector('.list-film-upcoming');

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'now-playing';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            listFilmNowPlaying.appendChild(elemenFilm);
        });
    });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'popular';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            listFilmPopular.appendChild(elemenFilm);
        });
    });

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'upcoming';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            listFilmUpcoming.appendChild(elemenFilm);
        });
    });

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US&page=2')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'top-rated';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            listFilmTopRated.appendChild(elemenFilm);
        });
    });

