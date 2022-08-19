const hasilPencarian = document.querySelector('#out-put');
const elemenLoading = document.querySelector('#loading');

document.dapatkanData.onsubmit = (e) => {
    e.preventDefault();
    hasilPencarian.innerHTML = ' ';
    
    let value = document.querySelector('#input-berita').value;
    let url = 'https://api-berita-indonesia.vercel.app/cnn/' + value + '/';
    console.log(url);
    elemenLoading.hidden = false;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                // alert('Tidka ditemukan');
                elemenLoading.hidden = true;
                const litel = document.createElement('h3');
                litel.textContent = '404 Not Found';
                hasilPencarian.appendChild(litel);
            }
        })
        .then(result => {
            console.log(result);
            const hasil = document.createElement('div');


            const litel = document.createElement('h3');
            litel.textContent = 'Kabar Berita'+' '+ value +' '+ 'Dari CNN';
            hasil.appendChild(litel);

            const elementDescripsi = document.createElement('p');
            elementDescripsi.textContent = result.data.description;
            hasil.appendChild(elementDescripsi);

            hasilPencarian.appendChild(hasil);

            result.data.posts.forEach(berita => {
                console.log(berita);

                const elementBerita = document.createElement('a');
                elementBerita.href = berita.link;
                elementBerita.target = "_blank";
                elementBerita.className = 'berita-utama';

                const gambar = document.createElement('img');
                gambar.src = berita.thumbnail;
                elementBerita.appendChild(gambar);

                const titleBerita = document.createElement('h2');
                titleBerita.textContent = berita.title;
                elementBerita.appendChild(titleBerita);

                const descriptionBerita = document.createElement('p');
                descriptionBerita.textContent = berita.description;
                elementBerita.appendChild(descriptionBerita);

                const dateBerita = document.createElement('p');
                dateBerita.textContent = berita.pubDate;
                elementBerita.appendChild(dateBerita);

                hasilPencarian.appendChild(elementBerita);
            });
            elemenLoading.hidden = true;

        });
        document.dapatkanData.reset();
}
document.querySelector('#button').click();