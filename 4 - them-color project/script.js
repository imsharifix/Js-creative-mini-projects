

let btns = document.querySelectorAll('.btn');

let rootStyles = document.querySelector(':root');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let colorChoose = event.target.dataset.color;

        rootStyles.style.setProperty('--theme-color', colorChoose);
        
        
    })
    
})

