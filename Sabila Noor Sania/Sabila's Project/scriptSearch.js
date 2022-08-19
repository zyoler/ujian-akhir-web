const elemenOutput = document.querySelector('#output');

document.dapatkanFilm.onsubmit = function (event) {
  event.preventDefault();
  const form = this;
  fetch('https://api.themoviedb.org/3/search/movie?api_key=b56451e80db450274eeacd8b5a4685ed&query=' + document.dapatkanFilm.film.value)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      const ambil = data.results;
      ambil.forEach(d => {
        const elemenFilm = document.createElement('a');
        elemenFilm.className = 'search-result';
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

        elemenOutput.appendChild(elemenFilm);
      });
    });
}
