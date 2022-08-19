const detailFilm = document.querySelector('#detailFilm');
const trailerFilm = document.querySelector('#trailer');
let storage = localStorage.id_movie;

fetch('https://api.themoviedb.org/3/movie/' +storage+'?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        console.log(data.genres);

        //ini tampungan div nya biar rapii atau semacam prototype wkwk
            const elemenFilm = document.createElement('div');
            elemenFilm.className = 'detail';
            
            const posterFilm = document.createElement('div');
            posterFilm.className = 'poster';

            const judulFilm = document.createElement('div');
            judulFilm.className = 'judul';

            const deskripsiFilm = document.createElement('div');
            deskripsiFilm.className = 'deskripsi';

            const genresFilm = document.createElement('div');
            genresFilm.className = 'genre';

        // ini udh masuk buat di tampilin
            const elemenPoster = document.createElement('img');
            elemenPoster.src =  ('https://image.tmdb.org/t/p/w300') + data.poster_path;
            posterFilm.appendChild(elemenPoster);

            const elemenTitle = document.createElement('h2');
            elemenTitle.textContent = data.original_title;
            judulFilm.appendChild(elemenTitle);
            elemenFilm.appendChild(judulFilm);

            for(let i=0; i<data.genres.length; i++){
                const elemenGenres = document.createElement('p');
                elemenGenres.textContent =data.genres[i].name + ',';
                genresFilm.appendChild(elemenGenres);
            }
            elemenFilm.appendChild(genresFilm);

            const elemenOverview = document.createElement('p');
            elemenOverview.textContent = data.overview;
            deskripsiFilm.appendChild(elemenOverview)
            elemenFilm.appendChild(deskripsiFilm);

            //dilempar balik ke tag html
            detailFilm.appendChild(posterFilm);
            detailFilm.appendChild(elemenFilm);
           // detailFilm.appendChild('elemenTrailer');
      
    });

    fetch('https://api.themoviedb.org/3/movie/'+storage+'/videos?api_key=b56451e80db450274eeacd8b5a4685ed&language=en-US')
        .then(function (response) {
            return response.json();
        }).then(function(data){
            console.log(data);
            console.log(data.results[0].key);

            const trailer = document.querySelector('div');
            trailer.className= 'trailer-film';

            const elemenTrailer = document.createElement('iframe');
            elemenTrailer.src = 'https://www.youtube.com/embed/' + data.results[0].key;
            trailer.appendChild(elemenTrailer);

            trailerFilm.appendChild(trailer);
        });

