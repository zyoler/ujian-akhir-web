const elemenOutput = document.querySelector('#output');
    fetch('https://api-lk21.herokuapp.com/comingsoon')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(let i=0;i<data.result.length;i++){
                if(data.result[i].trailer!=null){
                const elemenFilm=document.createElement('a');
                elemenFilm.className='basedOn';

                const elemenGambar=document.createElement('img');
                elemenGambar.src=data.result[i].thumbnail;
                elemenFilm.appendChild(elemenGambar);
                
                const elemenJudul=document.createElement('h5');
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
                
                        const elemenFilm=document.createElement('a');
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
                        elemenQuality.textContent='Quality :'+data.result[i].quality;
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

