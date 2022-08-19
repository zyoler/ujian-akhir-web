const productListElement = document.querySelector('.list-produk');
fetch('https://fakestoreapi.com/products')
    .then(function(response) {
        return response.json();
    }).then(function(products) {
        for (let product of products) {
            const listProductElement = document.createElement('li');
            listProductElement.className = 'container-product';

            const figur = document.createElement('figure');
            figur.className = 'figure-img';
            const image = document.createElement('img');
            image.src = product.image;
            image.className = 'image-product';
            listProductElement.appendChild(figur);
            figur.appendChild(image);

            const titleElement = document.createElement('div');
            titleElement.className = 'title-product';
            const linkTitle = document.createElement('a');
            linkTitle.textContent = product.title;
            // linkTitle.href = 'Projekan-UAS-Page4.html?id=' + product.id;
            titleElement.appendChild(linkTitle);
            listProductElement.appendChild(titleElement);

            const priceElement = document.createElement('div');
            priceElement.className = 'price-product';
            priceElement.textContent = '$' + product.price;
            const buttonElement = document.createElement('button');
            buttonElement.className = 'tombol-keranjang';
            const iconElement = document.createElement('i');
            iconElement.className = 'fa fa-shopping-cart';
            buttonElement.appendChild(iconElement);
            priceElement.appendChild(buttonElement);
            listProductElement.appendChild(priceElement);

            productListElement.appendChild(listProductElement);
        }
    });