provinsi();

const elemenOutputProvinsi = document.querySelector('#provinsi')
const elemenOutputKota = document.querySelector('#kota')
const elemenOutputTempat = document.querySelector('#tempat')
const elemenOutputCuaca = document.querySelector('#cuaca')

function provinsi(){
    fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then(function(response){
            return response.json();
        }).then(function(json){
            for(let i=0; i<json.provinsi.length; i++){
                const elemenProvinsi = document.createElement('option');
                elemenProvinsi.textContent = json.provinsi[i].nama;
                elemenProvinsi.setAttribute("value", json.provinsi[i].id);
                elemenOutputProvinsi.appendChild(elemenProvinsi);
            }
        });
}

function kabupaten(){
    elemenOutputKota.innerHTML = "";
    let elemenKotaAwal = document.createElement('option');
    elemenKotaAwal.textContent = "";
    elemenOutputKota.appendChild(elemenKotaAwal);
    fetch('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + elemenOutputProvinsi.value)
        .then(function(response){
            return response.json();
        }).then(function(json){
            for(let i=0; i<json.kota_kabupaten.length; i++){
                    const elemenKota = document.createElement('option');
                    elemenKota.textContent = json.kota_kabupaten[i].nama;
                    elemenKota.value = olahString(json.kota_kabupaten[i].nama);
                    elemenOutputKota.appendChild(elemenKota);
            }
        });
}

elemenOutputKota.addEventListener('change', function(){
    fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
    .then(function(response){
        return response.json();
    }).then(function(json){
        for(let i=0; i<json.provinsi.length; i++){
            if(json.provinsi[i].id == parseInt(elemenOutputProvinsi.value)){
                cuaca();
            }
        }
    });
})

function olahString(nama){
    let olah = nama.split(' ');
    if(olah[0]=='Kota' || olah[0]=='Kabupaten'){
        delete olah[0];
        olah = olah.splice(1, olah.length)
    }else{
        olah = olah.splice(0, olah.length);
    }olah = olah.toString();
    let hasil = olah.replaceAll(',', '-');
    return hasil;
}

function olahWaktu(waktu){
    let olah = waktu.split('');
    olah = olah.splice(8,olah.length);
    let tambah = olah.splice(2,0,":");
    tambah = olah.toString();
    tambah = tambah.replaceAll(',','');
    return tambah;
}

function cuaca() {
    elemenOutputCuaca.innerHTML = '';
    elemenOutputTempat.innerHTML = '';
    var elemenNamaProvinsi = elemenOutputProvinsi.options[elemenOutputProvinsi.selectedIndex].text;

    fetch('https://cuaca-gempa-rest-api.vercel.app/weather/' + elemenNamaProvinsi.replace(' ', '-'))
        .then(function(response){
            return response.json();
        }).then(function(json){
            let cek = 1;
            for(let i=0; i<json.data.areas.length; i++){
                cek++;
                if(elemenOutputKota.value == json.data.areas[i].description){
                    cek = 0;
                    var elemenNamaProvinsi = elemenOutputProvinsi.options[elemenOutputProvinsi.selectedIndex].text;
                    fetch('https://cuaca-gempa-rest-api.vercel.app/weather/' + elemenNamaProvinsi.replace(' ', '-') + '/' + elemenOutputKota.value)
                        .then(function(response){
                            return response.json();
                        }).then(function(data){
                            const hasilTempat = document.createElement('h3');
                            hasilTempat.textContent = 'Hasil pencarian data prakiraan cuaca : ' + '\n' +elemenOutputKota.value + ' - ' + elemenNamaProvinsi;
                            elemenOutputTempat.appendChild(hasilTempat);
                            let index = 0;
                            for(let j=0; j<3; j++){
                                const elemenResult = document.createElement('div');
                                elemenResult.className = 'kelas';
                                elemenOutputCuaca.appendChild(elemenResult);

                                const tanggal = document.createElement('p');
                                tanggal.textContent = data.data.params[1].times[j].day;
                                elemenResult.appendChild(tanggal);
                            
                                const kelembabanUdaraMax = document.createElement('p');
                                kelembabanUdaraMax.textContent = 'Kelembaban Udara Maksimum : ' + data.data.params[1].times[j].value;
                                elemenResult.appendChild(kelembabanUdaraMax);
                
                                const kelembabanUdaraMin = document.createElement('p');
                                kelembabanUdaraMin.textContent = 'Kelembaban Udara Minimum : ' + data.data.params[3].times[j].value;
                                elemenResult.appendChild(kelembabanUdaraMin);
                
                                const suhuUdaraMax = document.createElement('p');
                                suhuUdaraMax.textContent = 'Suhu Udara Maksimum : ' + data.data.params[2].times[j].celcius + ' / ' + data.data.params[2].times[j].fahrenheit;
                                elemenResult.appendChild(suhuUdaraMax);
                
                                const suhuUdaraMin = document.createElement('p');
                                suhuUdaraMin.textContent = 'Suhu Udara Minimum : ' + data.data.params[4].times[j].celcius + ' / ' + data.data.params[4].times[j].fahrenheit;
                                elemenResult.appendChild(suhuUdaraMin);
                                
                                for(let k=0; k<4; k++){
                                    const ketCuaca = document.createElement('p')
                                    ketCuaca.textContent = 'Perkiraan Cuaca Pukul ' + olahWaktu(data.data.params[6].times[index].datetime) + ' : ' + data.data.params[6].times[index].name;
                                    index +=1;
                                    elemenResult.appendChild(ketCuaca);
                                }
                                elemenOutputCuaca.appendChild(elemenResult)
                           } 
                        });
                    break;
                }
            }
            if(cek != 0){
                const kosong = document.createElement('h4');
                kosong.textContent = 'Mohon maaf, Saat ini prakiraan cuaca untuk daerah ' + elemenOutputKota.value + ' belum tersedia.';
                elemenOutputCuaca.appendChild(kosong);
            }
        });

};