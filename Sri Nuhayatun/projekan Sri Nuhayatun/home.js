const elemenOutput=document.querySelector('#output');
    elemenOutput.innerHTML="";
        fetch('https://api-lk21.herokuapp.com/newupload')
        .then(function(response){
            return response.json();
        }).then(function(json){
            for(let i=0;i<json.result.length;i++){
                const elemendiv=document.createElement('div');
                elemendiv.className='home';

                const elemenGambar=document.createElement('img');
                elemenGambar.src=json.result[i].thumbnail;
                elemendiv.appendChild(elemenGambar);

                const elemenparagraf=document.createElement('h4');
                elemenparagraf.textContent=json.result[i].title;
                elemendiv.appendChild(elemenparagraf);

                const trailerFilm = document.createElement('a');
                trailerFilm.textContent = 'watch Trailer';
                trailerFilm.href = json.result[i].trailer;
                elemendiv.appendChild(trailerFilm);

                if(json.result[i].trailer==null){
                    trailerFilm.textContent = 'Trailer Tidak Ada';
                }
                
                elemenOutput.appendChild(elemendiv);
            }
                                
        });   