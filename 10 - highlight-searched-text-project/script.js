const paragraph = document.querySelector('#paragraph');
const button = document.querySelector('.wrapper button');
const input = document.querySelector('.wrapper input');

function findText () {
    // Step 1: Remove previous highlights
    let rawText = paragraph.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, '$1');

    let inputVal = input.value;
    let nameRejex = new RegExp(inputVal, 'gi');

    let finalTxt = rawText.replace(nameRejex, (match) => `<mark>${match}</mark>`);
    
    paragraph.innerHTML = finalTxt;
}


input.addEventListener('input', () => {

    findText();
})
button.addEventListener('click', () => {
    findText();
});
