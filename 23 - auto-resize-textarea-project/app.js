const myText = document.querySelector('#my-text');

myText.addEventListener('input', (event) => {
    myText.style.height = 'auto'; // Reset height
    myText.style.height = myText.scrollHeight + 'px'; // Set to scrollHeight
});