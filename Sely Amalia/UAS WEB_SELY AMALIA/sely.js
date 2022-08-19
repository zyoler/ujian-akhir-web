const pilih=document.querySelector('#pil')
const output = document.querySelector('#output')

function tamp(){
fetch('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + output.value)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const tampilkan=document.createElement('p');
        const tampilkan2=document.createElement('p');
        tampilkan.textContent=json.nabi.nama;
        tampilkan2.textContent=json.nabi.kisah;
        output.appendChild(tampilkan);
        output.appendChild(tampilkan2);
    })
}