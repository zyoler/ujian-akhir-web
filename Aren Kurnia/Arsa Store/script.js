const productListElement = document.querySelector('#product-list-element');
fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();
    }).then(function (products) {
        for (let product of products) {
            const productElement = document.createElement('div');

            const imageElement = document.createElement('img');
            imageElement.src = product.image;
            productElement.appendChild(imageElement);

            const titleElement = document.createElement('h3');
            titleElement.textContent = product.title;
            productElement.appendChild(titleElement);

            const priceElement = document.createElement('span');
            priceElement.textContent = product.price + ' ' + '$' + ' ';
            productElement.appendChild(priceElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Tambahkan ke keranjang';
            buttonElement.id = "addToChart" + product.id;
            buttonElement.onclick = function () {
                storeToChart(product.id);
            };
            productElement.appendChild(buttonElement);

            productListElement.appendChild(productElement);
        }
    });

function storeToChart(id) {
    alert("Berhasil Ditambahkan! Lanjutkan Melalui WA/Email pada Penjual")
}