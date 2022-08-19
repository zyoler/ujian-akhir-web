function mulaiKomunikasi(event){
    event.preventDefault();
    const form = document.querySelector('#form');
    const roomChat = document.querySelector('.body');
    const mengetik = document.querySelector('.head h6');
    let userPesan = form.pesan.value;

    const divMe = document.createElement('div');
    const chatMe = document.createElement('p');
    divMe.className = 'right';
    chatMe.textContent = userPesan;
    divMe.appendChild(chatMe);
    roomChat.appendChild(divMe);

        mengetik.textContent = 'mengetik...';
    

    

    form.reset();

    let url = 'https://fdciabdul.tech/api/ayla?pesan=' + userPesan;

    fetch(url)
        .then(resp => resp.json())
        .then(balasan => {
            const divYou = document.createElement('div');
            const chatYou = document.createElement('p');
            divYou.className = 'left';
            divYou.appendChild(chatYou);
            roomChat.appendChild(divYou);
            chatYou.textContent = balasan.jawab;
            mengetik.textContent = ''
            
        })
}