let body = document.querySelector('body')


window.addEventListener('click', (event) => {
    console.log(event.offsetX, event.offsetY);
    
    let size = Math.floor(Math.random() * 130);

    body.insertAdjacentHTML('afterbegin', `
        <span class='snowflake' style="left: ${event.offsetX}px; top: ${event.offsetY}px;width:${size}px; height:${size}px; position: absolute;"></span>`);

    let snowFlakeSpan = document.querySelectorAll('.snowflake')[0]; // فیکس اینجاست

    setTimeout(() => {
        snowFlakeSpan.remove()
    }, 1000);
});

