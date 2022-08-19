function cariMovie(pencarian){
    let key = '/search/movie';
    let urlCari = BASEURL + key + `?api_key=`+ APIKEY +`&query=`+ pencarian;
    
    const search = document.querySelector('.result h4');


    fetch(urlCari)
        .then(resp => resp.json())
        .then(movies => {
            let results = movies.results;
            if(results.length == 0){
                search.textContent = 'Pencarian tidak ditemukan';
                return;
            }

            search.textContent = 'Hasil untuk ' + pencarian;
            
            const bungkus = document.querySelector('.bungkusAllMovie');
            bungkus.innerHTML = ''

            results.forEach(movie => {
                
                const card = document.createElement('div');
                const bodyCard = document.createElement('div');
                const img = document.createElement('img');
                const detail = document.createElement('div');
                const title = document.createElement('p');
                const rilis = document.createElement('p');
                card.className = 'card';
                bodyCard.className = 'bodyCard';
                detail.className = 'detail';
                if(movie.poster_path == null){
                    img.src = '../../aset/image/defaultimage.jpeg';
                }else{
                    img.src = BASEURLIMG + movie.poster_path;
                }
                title.textContent = movie.title;
                rilis.textContent = movie.release_date;

                img.addEventListener('click', function(){
                    details(movie.id);
                })

                detail.appendChild(title);
                detail.appendChild(rilis);

                bodyCard.appendChild(img);
                bodyCard.appendChild(detail);

                card.appendChild(bodyCard);

                bungkus.appendChild(card);

            })
        })
}

function pencarianMovie(event){
    event.preventDefault();
    const form = event.srcElement;
    const view = document.querySelector('#view-search');

    let getVal = form.search.value;
    if(getVal == ''){
        return alert('Anda tidak mencari apa-apa');
    }



    form.reset();
    view.scrollIntoView();
    cariMovie(getVal);
}

function details(id, movie = true){

    const modal = document.querySelector('#my-modal');
    let modalBody = document.querySelector('.modalBody');
    const tagLine = document.querySelector('.modalContent h3');
    tagLine.textContent = '';
    let body = ``;

    if(movie){
        let key = '/movie';
        let urlDetails = BASEURL + key + `/` + id +`?api_key=`+ APIKEY +`&append_to_response=videos,images`;

        fetch(urlDetails)
            .then(resp => resp.json())
            .then(movies => {

                let overview = movies.overview;
                let rilis = movies.release_date;
                rilis = rilis.split('-')[0]; 
                let judul = movies.title + ' ( ' + rilis + ' )';

                let tl = movies.tagline;

                let poster = BASEURLIMG + movies.images.posters[2].file_path;

                let linkVideo = BASEURLUTUBE + movies.videos.results[0].key;

                let genres = '';
                for(let i = 0; i < movies.genres.length; i++){
                    genres += movies.genres[i].name;
                    if(i < movies.genres.length - 1){
                        genres += ', ';
                    }
                }
                tagLine.textContent = tl;
                body = `
                <div class="sideModal">
                    <iframe width="640" height="360" frameborder="0" src="`+ linkVideo +`" class="fakeimg">
                    </iframe>
                    <h2 id="d-judul">`+ judul +`</h2>
                    <h4>`+ genres +`</h4>
                    <div class="rowModal">
                        <div class="sideModal">
                            <img src="`+ poster +`" class="posters">
                        </div>
                        <div class="mainModal">
                            <h3>Overview</h3>
                            <p id="overview">`+ overview +`</p>
                        </div>
                    </div>
                </div>
                `;
                $(modalBody).html(body);
            });

        }else{
            let key = '/person'
            let urlDetails = BASEURL + key + `/`+ id +`?api_key=`+ APIKEY;
            tagLine.textContent = 'Biography';

            fetch(urlDetails)
                .then(resp => resp.json())
                .then(person => {
                    
                    
                    
                    body = `
                    <div class="sideModal">
                        <h2 id="d-judul">`+ person.name +`</h2>
                        <h4>`+ person.birthday +`</h4>
                        <div class="row">
                            <div class="sideModal">
                                <img src="`+ BASEURLIMG + person.profile_path +`" class="posters">
                            </div>
                            <div class="mainModal">
                                <h3>Overview</h3>
                                <p id="overview">`+ person.biography +`</p>
                            </div>
                        </div>
                    </div>
                    `;
                    $(modalBody).html(body);

                })
        }

        modal.classList.remove('hide');
        modal.classList.add('show');
}


function topMovie(){
    let key = '/movie/popular'
    const moviePopular = document.querySelector('.popular');
    const label = document.querySelector('#label');
    label.textContent = 'Film movie';
    moviePopular.innerHTML = '';
    let page = 5;


    while(page!=11){
    let url = BASEURL + key +`?api_key=`+ APIKEY +`&language=id-ID&page=` + page;
    page++;
    
    fetch(url)
        .then(response => response.json())
        .then(hasil => {
            let trend = hasil.results;
            trend.forEach(movie => {
                if(movie.overview != ''){
                    const divBaru = document.createElement('div');
                    const imgBaru = document.createElement('img');
                    const judul = document.createElement('a');
                    const rilis = document.createElement('p');
                    divBaru.classList.add('ketMovie');
                    judul.href = '#';
                    judul.addEventListener('click', function(e){
                        e.preventDefault();
                        details(movie.id);

                    })
                    imgBaru.src = BASEURLIMG + movie.poster_path;
                    judul.textContent = movie.title;
                    rilis.textContent = movie.release_date;
                    divBaru.appendChild(imgBaru);
                    divBaru.appendChild(judul);
                    divBaru.appendChild(rilis);
                    moviePopular.appendChild(divBaru);
                }
                
            });
            
        })
    }

}

function trending(){
    let key = '/trending/movie/day';
    const trendingMovie = document.querySelector('.popular');
    const label = document.querySelector('#label');
    label.textContent = 'Trending film';
    trendingMovie.innerHTML = '';

    let url = BASEURL + key + `?api_key=`+ APIKEY;

    fetch(url)
        .then(response => response.json())
        .then(hasil => {
            let trending = hasil.results;
            trending.forEach(movie => {
                const divBaru = document.createElement('div');
                const imgBaru = document.createElement('img');
                const judul = document.createElement('a');
                const rilis = document.createElement('p');
                divBaru.classList.add('ketMovie');
                judul.href = '#';
                imgBaru.src = BASEURLIMG + movie.poster_path;
                judul.textContent = movie.title;
                judul.addEventListener('click', function(e){
                    e.preventDefault();
                    details(movie.id);
                })
                rilis.textContent = movie.release_date;
                divBaru.appendChild(imgBaru);
                divBaru.appendChild(judul);
                divBaru.appendChild(rilis);
                trendingMovie.appendChild(divBaru);  
            });
            
        })

}

function topAktor(){
    let key = '/person/popular';
    const personPopular = document.querySelector('.popular');
    const label = document.querySelector('#label');
    label.textContent = 'Aktor movie';
    personPopular.innerHTML = '';
    let page = 1;

    while(page!=5){

    let url = BASEURL + key +`?api_key=`+ APIKEY +`&language=id-ID&page=` + page;

    fetch(url)
        .then(response => response.json())
        .then(hasil => {
            let persons = hasil.results;
            const modal = document.querySelector('#my-modal');
            persons.forEach(person => {
                if(person.biography != ''){
                    const divBaru = document.createElement('div');
                    const imgBaru = document.createElement('img');
                    const judul = document.createElement('a');
                    const rilis = document.createElement('p');
                    divBaru.classList.add('ketMovie');
                    judul.href = '#';
                    judul.addEventListener('click', function(e){
                        e.preventDefault();
                        details(person.id, false);
                        modal.classList.remove('hide');
                        modal.classList.add('show');
                    })
                    imgBaru.src = BASEURLIMG + person.profile_path;
                    judul.textContent = person.name;
                    rilis.textContent = person.popularity + ' %';
                    divBaru.appendChild(imgBaru);
                    divBaru.appendChild(judul);
                    divBaru.appendChild(rilis);
                    personPopular.appendChild(divBaru);
                }
                
            });
            
        })
        page++;
    }

}

function allMovie(){
    let key = '/movie/now_playing'

    let url = BASEURL + key + `?api_key=`+ APIKEY;

    const bungkus = document.querySelector('.bungkusAllMovie');

    fetch(url)
        .then(resp => resp.json())
        .then(movies => {
            let results = movies.results;

            results.forEach(movie => {
                const card = document.createElement('div');
                const bodyCard = document.createElement('div');
                const img = document.createElement('img');
                const detail = document.createElement('div');
                const title = document.createElement('p');
                const rilis = document.createElement('p');
                card.className = 'card';
                bodyCard.className = 'bodyCard';
                detail.className = 'detail';
                img.src = BASEURLIMG + movie.poster_path;
                title.textContent = movie.title;
                rilis.textContent = movie.release_date;

                img.addEventListener('click', function(){
                    details(movie.id);
                })

                detail.appendChild(title);
                detail.appendChild(rilis);

                bodyCard.appendChild(img);
                bodyCard.appendChild(detail);

                card.appendChild(bodyCard);

                bungkus.appendChild(card);

            })
        })

}







