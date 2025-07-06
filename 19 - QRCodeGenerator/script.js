
const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
const button = document.querySelector('button');
const qrCode = document.querySelector('.qr-code img');

button.addEventListener('click', ()=> {
    let inputValue = input.value.trim();

    if(inputValue){
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
        
        qrCode.addEventListener('load', () => {
            wrapper.classList.add('active');
        })
    }
})

input.addEventListener('keyup', ()=> {
    if(!input.value.trim()){
        wrapper.classList.remove('active');
    }
})