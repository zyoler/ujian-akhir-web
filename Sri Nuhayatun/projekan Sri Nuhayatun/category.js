const elemenOutput1=document.querySelector('#output1');
const elemenKategori1=document.querySelector('#kategor');

function kategory(kategori){
    elemenOutput1.innerHTML="";
        fetch('https://api-filmapik.herokuapp.com/category?search='+kategori)
        .then(function(response){
            return response.json();
        }).then(function(json){
            for(let i=0;i<json.result.length;i++){

                const elemendiv=document.createElement('div');
                elemendiv.className='kat';

                const elemendiv1=document.createElement('div');

                const elemenGambar=document.createElement('img');
                elemenGambar.src=json.result[i].thumbnailPotrait;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenGambar);
                
                const elemenparagraf=document.createElement('p');
                elemenparagraf.textContent='Title : ' + json.result[i].title;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf);

                const elemenparagraf2=document.createElement('p');
                elemenparagraf2.textContent='Rating : ' + json.result[i].rating;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf2);
                
                const elemenparagraf3=document.createElement('p');
                elemenparagraf3.textContent='Actors : ' + json.result[i].detail.actors;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf3);


                const elemenparagraf4=document.createElement('p');
                elemenparagraf4.textContent='Duration : ' + json.result[i].detail.duration;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf4);

                const elemenparagraf5=document.createElement('p');
                elemenparagraf5.textContent='Release : ' + json.result[i].detail.release;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf5);


                const elemenparagraf6=document.createElement('p');
                elemenparagraf6.textContent='Description : ' + json.result[i].detail.description;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(elemenparagraf6);

                const trailerFilm = document.createElement('a');
                trailerFilm.textContent = 'watch Trailer';
                trailerFilm.href = json.result[i].detail.trailer;
                elemendiv.appendChild(elemendiv1);
                elemendiv1.appendChild(trailerFilm);
                if(json.result[i].detail.trailer==null){
                    trailerFilm.textContent = 'Trailer Tidak Ada';
                }
                
                elemenOutput1.appendChild(elemendiv);  
            }
        });
    }
