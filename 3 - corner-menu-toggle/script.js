"use strict"

let toggleBtn = document.querySelector('#toggle-btn');

let account = document.querySelector('.account');
let info = document.querySelector('.info');
let message = document.querySelector('.message');
let contact = document.querySelector('.contact');


toggleBtn.addEventListener('click', () => {

    if(toggleBtn.classList.toggle("active")){
        account.style.transform = 'translate(130px, -15px)';
        info.style.transform = 'translate(115px, 63px)';
        message.style.transform = 'translate(67px, 119px)';
        contact.style.transform = 'translate(-8px, 138px)';
    }else{
        account.style.transform = 'translateX(0px)';
        info.style.transform = 'translate(0px)';
        message.style.transform = 'translate(0px)';
        contact.style.transform = 'translate(0px)';
    }      
})