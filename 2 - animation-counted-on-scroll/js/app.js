
let benefitsContainer = document.querySelector('.benefits');
let counters = document.querySelectorAll('.num');
let flag = false;

window.addEventListener('scroll', (event) => {
    
    if(window.scrollY >= benefitsContainer.offsetTop){
        
        if(!flag){
            counters.forEach(counter => setCounter(counter));
        }
            flag = true;
        
        
    }
})

function setCounter(element) {
    let elmNumCount = element.dataset.count;
    
    let counterInterVal = setInterval(() => {
        if(element.textContent == elmNumCount){
            clearInterval(counterInterVal);
        }
        element.textContent++
    }, 5);
}