"use strict"

let userNameInput = document.querySelector('.userNameInput');
let passwordInput = document.querySelector('.passwordInput');
let loginBtn = document.querySelector('.loginBtn');
let righteye = document.querySelector('.righteye');
let lefteye = document.querySelector('.lefteye');


userNameInput.addEventListener('focus', () =>{

    // on blure eye position
    lefteye.style.top = "43%";
    lefteye.style.left = "36%";
    righteye.style.top = "43%";
    righteye.style.left = "54%";
})

userNameInput.addEventListener('input', () => {
    let userInput = userNameInput.value.length;

    if(userInput < 10){
        righteye.style.paddingLeft = `${userInput * 1}px`
        lefteye.style.paddingLeft = `${userInput * 1}px`
    
    }

})


userNameInput.addEventListener('blur', () =>{
    righteye.style.paddingLeft = `0px`
    lefteye.style.paddingLeft = `0px`


    lefteye.style.top = "41%";
    lefteye.style.left = "37%";
    righteye.style.top = "41%";
    righteye.style.left = "56%";
    
})

passwordInput.addEventListener('focus', () =>{
    

        // on blure eye position
        lefteye.style.top = "39%";
        lefteye.style.left = "37%";
        righteye.style.top = "39%";
        righteye.style.left = "55%";
    
})

passwordInput.addEventListener('blur', () =>{
    


    lefteye.style.top = "41%";
    lefteye.style.left = "37%";
    righteye.style.top = "41%";
    righteye.style.left = "56%";
    
})