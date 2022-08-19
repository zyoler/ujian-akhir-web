const elemenOutput1=document.querySelector('#outputhome');

function searcfilm(){
        document.dapatkanFilm.onsubmit=function(event){
            event.preventDefault();
            elemenOutput1.innerHTML="";
            fetch('http://api-lk21.herokuapp.com/search?query='+this.serching.value)
                .then(function(response){
                    return response.json();
                }).then(function(datas){
                    for(let data of datas.result){
                        const elemendiv=document.createElement('div');
                        const elemendiv1=document.createElement('div');
                        elemendiv.className='serc';

                                
                        const elemenGambar=document.createElement('img');
                        elemenGambar.src=data.thumbnail;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(elemenGambar);
                            
                        const elemenparagraf=document.createElement('p');
                        elemenparagraf.textContent='Title : '+data.title;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(elemenparagraf);

                        const elemenparagraf1=document.createElement('p');
                        elemenparagraf1.textContent='Rating :'+data.rating;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(elemenparagraf1);

                        const elemenparagraf2=document.createElement('p');
                        elemenparagraf2.textContent='Duration :'+data.duration;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(elemenparagraf2);

                        const elemenparagraf4=document.createElement('a');
                        elemenparagraf4.textContent='Watch';
                        elemenparagraf4.href=data.watch;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(elemenparagraf4);

                        const trailerFilm = document.createElement('a');
                        trailerFilm.textContent = 'Watch trailer';
                        trailerFilm.href = data.trailer;
                        elemendiv.appendChild(elemendiv1);
                        elemendiv1.appendChild(trailerFilm);
                        if(data.trailer==null){
                            trailerFilm.textContent = 'Trailer Tidak Ada';
                        }

                        elemenOutput1.appendChild(elemendiv);
                        }
                });
        }
    }
    