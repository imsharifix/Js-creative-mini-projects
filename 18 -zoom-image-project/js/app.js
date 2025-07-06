const container = document.querySelector('.container');
const img = document.querySelector('.container img');

container.addEventListener('mouseenter', (event) => {

    img.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
    img.style.transform = 'scale(1.7)';
});

container.addEventListener('mousemove', (event)=>{ 
    img.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
})

container.addEventListener('mouseleave', (event)=>{ 
    img.style.transform = 'scale(1)';
})