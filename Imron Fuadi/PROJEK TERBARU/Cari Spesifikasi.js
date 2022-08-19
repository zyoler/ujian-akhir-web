var myIndex = 0;
tampilan();

function tampilan() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(tampilan, 3000);
}



const hasil1 = document.querySelector('#output');
const jadi = document.querySelector('#tabel');
document.querySelector('#button').onclick = (e) => {
    e.preventDefault();
    let bran = document.querySelector('#bran').value;
    let value = document.querySelector('#input').value;

    let url = 'https://api-mobilespecs.azharimm.tk/brands/' + bran + '/' + value;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);


            const bran = document.createElement('h3');
            bran.textContent = result.data.brand;
            hasil1.appendChild(bran);

            const image = document.createElement('img');
            image.src = result.data.phone_img_url;
            hasil1.appendChild(image);

            const name = document.createElement('h3');
            name.textContent = result.data.phone_name;
            hasil1.appendChild(name);


            const hasilLag = document.createElement('tbody');
            for (let i = 0; result.data.specifications[i] !== undefined; i++) {
                const title = document.createElement('th');
                title.className = "tabel-tr";
                title.textContent = result.data.specifications[i].title;
                hasilLag.appendChild(title);
                for (let j = 0; result.data.specifications[i].specs[j] !== undefined; j++) {

                    const tech = document.createElement('tr');
                    tech.textContent = result.data.specifications[i].specs[j].key;
                    hasilLag.appendChild(tech);

                    const bra = document.createElement('tr');
                    tech.textContent = result.data.specifications[i].specs[j].val[0];
                    hasilLag.appendChild(bra);

                    jadi.appendChild(hasilLag);

                }

            }

        });
};
