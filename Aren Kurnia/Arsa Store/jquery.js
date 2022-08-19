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

            const priceElement = document.createElement('div');
            priceElement.textContent = product.price + ' ' + '$' + ' ';
            productElement.appendChild(priceElement);

            productListElement.appendChild(productElement);
        }
    });