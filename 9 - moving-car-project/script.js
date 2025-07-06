const car = document.querySelector('.car img');
const surface = document.querySelector('.surface');

let isChanged = false;

window.addEventListener('keypress', (event) => {
    if (event.key === " ") {
        if (isChanged) {
            car.src = "images/Img_05.png";
        } else {
            car.src = "images/Img_06.png";
        }
        isChanged = !isChanged;
    }
});
    

window.addEventListener('keypress', (event) => {
    
    if (event.key === "Enter") {
        if(isChanged) {
            car.parentElement.classList.add('animated-car')
            surface.classList.add('surface-animation');        
        }else{
            car.parentElement.classList.remove('animated-car')
            surface.classList.remove('surface-animation');        
        }
        isChanged = !isChanged;

    }
});
    