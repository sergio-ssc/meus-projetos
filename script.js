const container = document.querySelector('.container');

qrCode = container.querySelector('.form input');

generatebtn = container.querySelector('.form button');

qrImg = container.querySelector('.qrcode img');

generatebtn.addEventListener('click', () => {
    let qrValue = qrCode.value;
    if(!qrValue){
        alert('Please enter a valid URL');
        return;
    }
    generatebtn.innerText = 'Gerando QR Code..';

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        container.classList.add('active');
        generatebtn.innerText = 'QR Code Gerado';
    })

})

qrCode.addEventListener('keyup', () => {
    if(!qrCode.value){
        container.classList.remove('active');
    }
})