
const textElm = document.querySelector('#text');
let index = 0;
let myText = 'من عاشق خودم هستم :))))';

function typeWriter(){
if(index < myText.length){
    textElm.innerHTML += myText[index];
    index++;
    setTimeout(typeWriter, 100);
}else{
    console.log('end of index !!!');
}
}

typeWriter()

