
// list input provinsi
function tampilProvinsi() {
    
    let url = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi';
    
    const listProvinsi = document.querySelector('#provinsi');

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let provinsi = data.provinsi;
            provinsi.forEach(prov => {

                const optionBaru = document.createElement('option');
                optionBaru.innerText = prov.nama; 
                optionBaru.value = prov.id;
                listProvinsi.appendChild(optionBaru); 
            });
            console.log(data);
        })

    listProvinsi.addEventListener('change', function(){
        tampilKasus(this.value)
    })

}

function tampilKasus(id = null){
    let url = 'https://indonesia-covid-19.mathdro.id/api/provinsi/';
    const divKasus = document.querySelector('.dataKasus');

    fetch(url)
        .then(resp => resp.json())
        .then(hasil => {
            let dataKasus = hasil.data;

            dataKasus.forEach(kasus => {
                if(kasus.kodeProvi == id){
                    divKasus.innerHTML = '';
                    const namaProvinsi = document.createElement('h3');
                    const kPositif = document.createElement('h4');
                    const kSembuh = document.createElement('h4');
                    const kMeninggal = document.createElement('h4');
                    namaProvinsi.textContent = 'Nama Provinsi : ' + kasus.provinsi;
                    kPositif.textContent = 'Jumlah positif : ' + kasus.kasusPosi;
                    kSembuh.textContent = 'Jumlah sembuh : ' + kasus.kasusSemb;
                    kMeninggal.textContent = 'Jumlah meninggal : ' + kasus.kasusMeni;

                    divKasus.appendChild(namaProvinsi);
                    divKasus.appendChild(kPositif);
                    divKasus.appendChild(kSembuh);
                    divKasus.appendChild(kMeninggal);
                }
            })
        })
}

tampilProvinsi();

