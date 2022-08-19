function searching(){
    const elemenOutput = document.querySelector('#output');
    elemenOutput.innerHTML='';
    document.search.onsubmit = function(event){
        event.preventDefault();

        const elemenHeader = document.querySelector('#nama');
        const elemenh3 = document.createElement('h3');
        elemenh3.textContent = 'Search Result For : ' + this.cari.value;
        elemenHeader.appendChild(elemenh3);

        const form = this;
        fetch('http://api-lk21.herokuapp.com/search?query=' + this.cari.value)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(let i=0;i<data.result.length;i++){
                if(data.result[i].trailer!=null){
                    const elemenFilm=document.createElement('div');
                    elemenFilm.className='basedOn';

                    const elemenGambar=document.createElement('img');
                    elemenGambar.src=data.result[i].thumbnail;
                    elemenFilm.appendChild(elemenGambar);
            
                    const elemenJudul=document.createElement('h3');
                    elemenJudul.textContent=data.result[i].title;
                    elemenFilm.appendChild(elemenJudul);
                    
                    const elemenRating=document.createElement('h5');
                    elemenRating.textContent=data.result[i].rating;
                    elemenFilm.appendChild(elemenRating);

                    const elemenGenre=document.createElement('h5');
                    elemenGenre.textContent=data.result[i].genre;
                    elemenFilm.appendChild(elemenGenre);

                    const elemenButton = document.createElement('button');
                    elemenButton.textContent = 'More Info';
                    elemenFilm.appendChild(elemenButton);
                    
                    elemenButton.addEventListener('click',function(a){
                        a.preventDefault()
                        const elemenMore = document.querySelector('#more-info');
                        elemenMore.innerHTML='';
                    
                        const elemenFilm=document.createElement('div');
                        elemenFilm.className='basedOnInfo';
                    
                        const elemenGambar=document.createElement('img');
                        elemenGambar.src=data.result[i].thumbnail;
                        elemenFilm.appendChild(elemenGambar);
                                    
                        const elemenJudul=document.createElement('h3');
                        elemenJudul.textContent=data.result[i].title;
                        elemenFilm.appendChild(elemenJudul);
                    
                        const elemenGenre=document.createElement('div');
                        elemenGenre.textContent=data.result[i].genre;
                        elemenFilm.appendChild(elemenGenre);
                                    
                        const elemenRating=document.createElement('div');
                        elemenRating.textContent=data.result[i].rating;
                        elemenFilm.appendChild(elemenRating);
                    
                        const elemenDurasi=document.createElement('div');
                        elemenDurasi.textContent=data.result[i].duration;
                        elemenFilm.appendChild(elemenDurasi);
                    
                        const elemenQuality=document.createElement('div');
                        elemenQuality.textContent=data.result[i].quality;
                        elemenFilm.appendChild(elemenQuality);
                                    
                        const elemenTrailer=document.createElement('div');
                        const trailerFilm = document.createElement('a');
                        trailerFilm.textContent = 'Watch trailer';
                        trailerFilm.href = data.result[i].trailer;
                        elemenTrailer.appendChild(trailerFilm);
                        elemenFilm.appendChild(elemenTrailer);
                    
                        const  elemenEnter=document.createElement('br');
                        elemenFilm.appendChild(elemenEnter);
                    
                        elemenMore.appendChild(elemenFilm);
                });
                const  elemenEnter=document.createElement('br');
                elemenFilm.appendChild(elemenEnter);

                elemenOutput.appendChild(elemenFilm);
                }
            }            
        });
    }
}

function genres(ge){
    const elemenOutput = document.querySelector('#output');
    elemenOutput.innerHTML='';
        // elemenHeader.innerHTML='';

    const elemenHeader = document.querySelector('#nama');
    const elemenh3 = document.createElement('h3');
    elemenh3.textContent = 'Genre : ' + ge;
    elemenHeader.appendChild(elemenh3);

    fetch('http://api-lk21.herokuapp.com/genre?genre=' + ge)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0;i<data.result.length;i++){
            if(data.result[i].trailer!=null){
                const elemenFilm=document.createElement('div');
                elemenFilm.className='basedOn';

                const elemenGambar=document.createElement('img');
                elemenGambar.src=data.result[i].thumbnail;
                elemenFilm.appendChild(elemenGambar);
                
                const elemenJudul=document.createElement('h3');
                elemenJudul.textContent=data.result[i].title;
                elemenFilm.appendChild(elemenJudul);
                
                const elemenGenre=document.createElement('h5');
                elemenGenre.textContent=data.result[i].genre;
                elemenFilm.appendChild(elemenGenre);

                const elemenButton = document.createElement('button');
                elemenButton.textContent = 'More Info';
                elemenFilm.appendChild(elemenButton);
                
                elemenButton.addEventListener('click',function(a){
                    a.preventDefault()
                    const elemenMore = document.querySelector('#more-info');
                    elemenMore.innerHTML='';
                
                        const elemenFilm=document.createElement('div');
                        elemenFilm.className='basedOnInfo';
                
                        const elemenGambar=document.createElement('img');
                        elemenGambar.src=data.result[i].thumbnail;
                        elemenFilm.appendChild(elemenGambar);
                                
                        const elemenJudul=document.createElement('h3');
                        elemenJudul.textContent=data.result[i].title;
                        elemenFilm.appendChild(elemenJudul);
                
                        const elemenGenre=document.createElement('div');
                        elemenGenre.textContent=data.result[i].genre;
                        elemenFilm.appendChild(elemenGenre);
                                
                        const elemenRating=document.createElement('div');
                        elemenRating.textContent=data.result[i].rating;
                        elemenFilm.appendChild(elemenRating);
                
                        const elemenDurasi=document.createElement('div');
                        elemenDurasi.textContent=data.result[i].duration;
                        elemenFilm.appendChild(elemenDurasi);
                
                        const elemenQuality=document.createElement('div');
                        elemenQuality.textContent=data.result[i].quality;
                        elemenFilm.appendChild(elemenQuality);
                                
                        const elemenTrailer=document.createElement('div');
                            const trailerFilm = document.createElement('a');
                            trailerFilm.textContent = 'Watch trailer';
                            trailerFilm.href = data.result[i].trailer;
                            elemenTrailer.appendChild(trailerFilm);
                            elemenFilm.appendChild(elemenTrailer);
                
                        const  elemenEnter=document.createElement('br');
                        elemenFilm.appendChild(elemenEnter);
                
                        elemenMore.appendChild(elemenFilm);
                });

                const  elemenEnter=document.createElement('br');
                elemenFilm.appendChild(elemenEnter);

                elemenOutput.appendChild(elemenFilm);
            }
        }
    });
}

function countries(co){
    const elemenOutput = document.querySelector('#output');
        elemenOutput.innerHTML ='';
        // elemenHeader.innerHTML='';

        const elemenHeader = document.querySelector('#nama');
        const elemenh3 = document.createElement('h3');
        elemenh3.textContent = 'Country : ' + co;
        elemenHeader.appendChild(elemenh3);

        fetch(' http://api-lk21.herokuapp.com/country?country=' + co)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                for(let i=0;i<data.result.length;i++){
                if(data.result[i].trailer!=null){
                const elemenFilm=document.createElement('div');
                elemenFilm.className='basedOn';

                const elemenGambar=document.createElement('img');
                elemenGambar.src=data.result[i].thumbnail;
                elemenFilm.appendChild(elemenGambar);
                
                const elemenJudul=document.createElement('h3');
                elemenJudul.textContent=data.result[i].title;
                elemenFilm.appendChild(elemenJudul);
                
                const elemenGenre=document.createElement('h5');
                elemenGenre.textContent=data.result[i].genre;
                elemenFilm.appendChild(elemenGenre);

                const elemenButton = document.createElement('button');
                    elemenButton.textContent = 'More Info';
                    elemenFilm.appendChild(elemenButton);
                    
                    elemenButton.addEventListener('click',function(a){
                        a.preventDefault()
                        const elemenMore = document.querySelector('#more-info');
                        elemenMore.innerHTML='';
                    
                            const elemenFilm=document.createElement('div');
                            elemenFilm.className='basedOnInfo';
                    
                            const elemenGambar=document.createElement('img');
                            elemenGambar.src=data.result[i].thumbnail;
                            elemenFilm.appendChild(elemenGambar);
                                    
                            const elemenJudul=document.createElement('h3');
                            elemenJudul.textContent=data.result[i].title;
                            elemenFilm.appendChild(elemenJudul);
                    
                            const elemenGenre=document.createElement('div');
                            elemenGenre.textContent='Genre    :'+data.result[i].genre;
                            elemenFilm.appendChild(elemenGenre);
                                    
                            const elemenRating=document.createElement('div');
                            elemenRating.textContent='Rating  :'+data.result[i].rating;
                            elemenFilm.appendChild(elemenRating);
                    
                            const elemenDurasi=document.createElement('div');
                            elemenDurasi.textContent='Durasi :'+data.result[i].duration;
                            elemenFilm.appendChild(elemenDurasi);
                    
                            const elemenQuality=document.createElement('div');
                            elemenQuality.textContent='Quality '+data.result[i].quality;
                            elemenFilm.appendChild(elemenQuality);
                                    
                            const elemenTrailer=document.createElement('div');
                            const trailerFilm = document.createElement('a');
                            trailerFilm.textContent = 'Watch trailer';
                            trailerFilm.href = data.result[i].trailer;
                            elemenTrailer.appendChild(trailerFilm);
                            elemenFilm.appendChild(elemenTrailer);
                    
                            const  elemenEnter=document.createElement('br');
                            elemenFilm.appendChild(elemenEnter);
                    
                            elemenMore.appendChild(elemenFilm);
                    });

                const  elemenEnter=document.createElement('br');
                elemenFilm.appendChild(elemenEnter);

                elemenOutput.appendChild(elemenFilm);
                }}
            });
}
function years(ye){
    const elemenOutput = document.querySelector('#output');
        elemenOutput.innerHTML='';
        // elemenHeader.innerHTML='';

        const elemenHeader = document.querySelector('#nama');
        const elemenh3 = document.createElement('h3');
        elemenh3.textContent = 'Year : ' + ye;
        elemenHeader.appendChild(elemenh3);

        fetch('http://api-lk21.herokuapp.com/year?year=' + ye)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                for(let i=0;i<data.result.length;i++){
                if(data.result[i].trailer!=null){
                const elemenFilm=document.createElement('div');
                elemenFilm.className='basedOn';

                const elemenGambar=document.createElement('img');
                elemenGambar.src=data.result[i].thumbnail;
                elemenFilm.appendChild(elemenGambar);
                
                const elemenJudul=document.createElement('h3');
                elemenJudul.textContent=data.result[i].title;
                elemenFilm.appendChild(elemenJudul);
                
                const elemenGenre=document.createElement('h5');
                elemenGenre.textContent=data.result[i].genre;
                elemenFilm.appendChild(elemenGenre);

                const elemenButton = document.createElement('button');
                    elemenButton.textContent = 'More Info';
                    elemenFilm.appendChild(elemenButton);
                    
                    elemenButton.addEventListener('click',function(a){
                        a.preventDefault()
                        const elemenMore = document.querySelector('#more-info');
                        elemenMore.innerHTML='';
                    
                            const elemenFilm=document.createElement('div');
                            elemenFilm.className='basedOnInfo';
                    
                            const elemenGambar=document.createElement('img');
                            elemenGambar.src=data.result[i].thumbnail;
                            elemenFilm.appendChild(elemenGambar);
                                    
                            const elemenJudul=document.createElement('h3');
                            elemenJudul.textContent=data.result[i].title;
                            elemenFilm.appendChild(elemenJudul);
                    
                            const elemenGenre=document.createElement('div');
                            elemenGenre.textContent='Genre    :'+data.result[i].genre;
                            elemenFilm.appendChild(elemenGenre);
                                    
                            const elemenRating=document.createElement('div');
                            elemenRating.textContent='Rating  :'+data.result[i].rating;
                            elemenFilm.appendChild(elemenRating);
                    
                            const elemenDurasi=document.createElement('div');
                            elemenDurasi.textContent='Durasi :'+data.result[i].duration;
                            elemenFilm.appendChild(elemenDurasi);
                    
                            const elemenQuality=document.createElement('div');
                            elemenQuality.textContent='Quality '+data.result[i].quality;
                            elemenFilm.appendChild(elemenQuality);
                            
                            const elemenTrailer=document.createElement('div');
                            const trailerFilm = document.createElement('a');
                            trailerFilm.textContent = 'Watch trailer';
                            trailerFilm.href = data.result[i].trailer;
                            elemenTrailer.appendChild(trailerFilm);
                            elemenFilm.appendChild(elemenTrailer);

                            const  elemenEnter=document.createElement('br');
                            elemenFilm.appendChild(elemenEnter);
                    
                            elemenMore.appendChild(elemenFilm);
                    });
                const  elemenEnter=document.createElement('br');
                elemenFilm.appendChild(elemenEnter);

                elemenOutput.appendChild(elemenFilm);
            }}
        });
}