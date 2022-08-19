for (let i = 1; i <= 5; i++) {
    fetch('https://fakestoreapi.com/products/' + i)
        .then(function(response) {
            return response.json();
        }).then(function(products) {
            const tex = document.querySelector('.text' + i);
            const link = document.querySelector('.picture' + i);
            link.src = products.image;
            tex.textContent = products.title;
        });
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll('.myslide');
    let dots = document.querySelectorAll('.dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 4000);
}

let judulInfo = document.querySelector('.judul-info');
let par1 = document.querySelector('.par-1');
let par2 = document.querySelector('.par-2');
judulInfo.textContent = 'Belanja Fashion Online di COMPEER.ID Indonesia';
par1.textContent = 'COMPEER.ID Indonesia merupakan yang terdepan dalam belanja fashion online, menyediakan brand lokal dan internasional yang terus bertambah untuk para konsumer di seluruh Indonesia. Kami memiliki lebih dari 150.000 produk yang dapat memenuhi kebutuhan fashion Anda, mulai dari rok hingga gaun, sepatu kets hingga sandal, pakaian olahraga hingga jam tangan, dan masih banyak lagi.';
par2.textContent = 'Awali penemuan gaya Anda dengan memiliki beberapa perlengkapan fashion dasar yang penting, seperti kaos dan celana denim jeans, Baju Koko dan Gamis, dan kebutuhan fashion dasar lainnya. Temukan inspirasi fashion pilihan kami, mulai dari pakaian formal hingga dress untuk ke pesta. Tampil menawan dengan mengenakan jas dan blazer untuk pergi ke kantor. Jangan lupa untuk memadukan keseluruhan penampilan Anda dengan sepatu, ada banyak sekali pilihannya mulai dari flats, high heels, boots, atau sepatu formal. Persiapkan diri Anda untuk segala musim dengan berbelanja berbagai macam outerwear, mulai dari jaket ringan hingga sweater yang nyaman. Koleksi fashion kami pun dilengkapi dengan berbagai macam aksesoris -- seperti tas dan perlengkapan olahraga. Para pelanggan ZALORA Indonesia juga dapat berbelanja berdasarkan tren terbaru yang sedang mendominasi di dunia fashion, apakah itu gaya monokrom, athleisure, atau tren terbaru di musim ini.';

function tampilBanyak() {
    let read1 = document.querySelector('.read-more');
    let read2 = document.querySelector('.read-less');
    let paragraf = document.querySelector('.par-2');
    if (read1.className === 'read-more') {
        read1.className += ' hilang';
        read2.className += ' muncul';
        paragraf.className += ' muncul';
    } else {
        read1.className = 'read-more';
        read2.className = 'read-less';
        paragraf.className = 'par-2';
    }
}