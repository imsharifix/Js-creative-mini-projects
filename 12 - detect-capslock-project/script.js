
const passInput = document.querySelector('#password');
const warning = document.querySelector('#warning');


function capslock(event){
    let capslock = event.getModifierState('CapsLock');
    
    if(capslock){
        console.log('trueee');  
        warning.style.display = 'block';  
    }else{
        console.log('false');    
        warning.style.display = 'none';  
    }
}

passInput.addEventListener('keyup', () => {
    capslock(event)
})