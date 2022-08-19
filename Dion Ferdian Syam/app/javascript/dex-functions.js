const BASEURL = 'https://api.themoviedb.org/3';
const APIKEY = 'b2f8aaf9d097290d2d5a648dad5ace08';
const BASEURLIMG = 'https://image.tmdb.org/t/p/w500';
const BASEURLUTUBE = 'https://www.youtube.com/embed/';




let updateTanggal = function () {
    let bulan = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const tanggal = document.querySelector('#tanggal');
    let getTanggal = new Date();
    let day = getTanggal.getDate();
    let month = getTanggal.getMonth();
    month = bulan[month];
    let year = getTanggal.getFullYear();
    tanggal.textContent = month + ' ' + day + ', ' + year;
}

////
function active(){
    const link = document.querySelectorAll('.link');
    link.forEach(element => {
        element.addEventListener('click', function(){
            link.forEach(i => {
                    i.classList.remove('active');
            })
            this.classList.add('active');
        })

    }) 
}

//
const moviePopular = document.querySelector('#movie-popular');
moviePopular.addEventListener('click', function(){
    topMovie();
});

const aktorPopular = document.querySelector('#aktor-popular');
aktorPopular.addEventListener('click', function(){
    topAktor();
});

const trendingMovie = document.querySelector('#trending-movie');
trendingMovie.addEventListener('click', function(){
    trending();
});

function closeModal(){
    $('.close').click(function () { 
        const modal = document.querySelector('#my-modal');
        modal.classList.remove('show');
        modal.classList.add('hide');   
        $('.modalBody').html('');  
    });
    
    $(window).click(function (e) { 
        const modal = document.querySelector('#my-modal');
        if(e.target == modal){
            modal.classList.remove('show');
            modal.classList.add('hide');
            $('.modalBody').html('');  
        }
    });
}



