const hasil = document.querySelector('#output');
document.search.onsubmit = (e) => {
    e.preventDefault();
    let merkHp = document.search.querySelector('.input-search').value;

    let url = 'https://api-mobilespecs.azharimm.tk/brands/' + merkHp + '?limit=200&sort=brand:desc';
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            const table = document.createElement('table');
            hasil.appendChild(table);
            let cek = 0;

            for (let i = 0; result.data.phones[cek] !== undefined; i++) {
                const tr = document.createElement('tr');
                table.appendChild(tr);
                for (let j = 0; j < 3; j++) {
                    const td = document.createElement('td');
                    tr.appendChild(td);
                    const seri = document.createElement('h3');
                    seri.textContent = result.data.phones[cek].phone_name;
                    td.appendChild(seri);

                    const image = document.createElement('img');
                    image.src = result.data.phones[cek].phone_img_url;
                    td.appendChild(image);
                    cek++;
                }

            }
        });
};