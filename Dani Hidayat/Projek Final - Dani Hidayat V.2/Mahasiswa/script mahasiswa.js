var neopyhte_mhs = [];
neopyhte_mhs = [
    ['02042011001', 'Intinya dia wibu'],
    ['02042011002', 'Nenek kami'],
    ['02042011003', 'Wan-wan nya jago'],
    ['02042011004', 'Urang awak ko'],
    ['02042011005', 'Sekali lirik akhwat meleleh'],
    ['02042011006', 'Bapak KM'],
    ['02042011007', 'Pro Alucard Auto Savage'],
    ['02042011008', 'Paling cool deh'],
    ['02042011009', 'Misterius'],    
    ['02042011010', 'Judes Bangett ihh'],    
    ['02042011011', 'Manusia Teribet'],    
    ['02042011012', 'Tegas, Ketua kami ni geng'],    
    ['02042011013', 'Keponakan Bapak Pembina'],    
    ['02042011014', 'Diam diam menghanyutkan'],    
    ['02042011015', 'Jago bahasa inggris nih'],    
    ['02042011016', 'Cintanya ditolak Kurnia Zulianti'],    
    ['02042011017', 'Akutansinya JAGO'],    
    ['02042011018', 'Awas! Nanti dibunuh!'],    
    ['02042011019', 'Mandi sekali seminggu'],    
    ['02042011020', 'ANIME, RPG, ARPG, MMORPG'],    
    ['02042011021', 'Paling muda, Tukang Tidur'],    
    ['02042011022', 'Kebo Heboh Kocak'],    
    ['02042011023', 'Pengen kurus hobby ngemil'],    
    ['02042011024', 'Trauma karena masak cireng'],    
    ['02042011025', 'Paling horor, suka gentayangan'],    
    ['02042011026', 'Emak kita ni'],    
    ['02042011027', 'Anak motor'],    
];

function tambahElemenMahasiswa(tagName,tagNickname,neopyhte){
    fetch('https://neophyte-proxy.herokuapp.com/https://pemirapasim.my.id/api/mahasiswa/' + neopyhte[0])
        .then(function(response){
            return response.json();
        }).then(function(json){
            const elemenNama = document.querySelector(tagName);
            const elemenNickname = document.querySelector(tagNickname);
            
            elemenNama.textContent = json.nama;
            elemenNickname.textContent = neopyhte[1];            
        });
};
for(let i = 0; i < neopyhte_mhs.length; i++){
    tambahElemenMahasiswa('#mhs-nama' + String(i+1), '#mhs-category' + String(i+1), neopyhte_mhs[i]);
}

gsap.from('.navbar', { duration: 2, y: '-100%', opacity:0, ease: 'bounce'});