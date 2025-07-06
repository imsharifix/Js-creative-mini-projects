const searchBtn = document.querySelector('#search-btn');
const inpWord = document.querySelector('#inp-word');
const sound = document.querySelector('#sound');
const wordText = document.querySelector('.word h3');
const audioBtn = document.querySelector('.fas');
const wordExample = document.querySelector('.word-example');
const details = document.querySelectorAll('.details p');









let mainSoundSrc = ''; // برای ذخیره آدرس صدا

searchBtn.addEventListener('click', () => {
    let mainWord = inpWord.value.trim();
    if (mainWord !== '') {
        getData(mainWord);
    } else {
        console.log('لطفاً یک کلمه وارد کنید!');
    }
});

async function getData(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        console.log(data[0].word);
        wordText.innerHTML = data[0].word;

        console.log(data[0].meanings[0].definitions[0].definition);
        wordExample.innerHTML = data[0].meanings[0].definitions[0].example;

        mainSoundSrc = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;

       details[1].innerHTML = data[0].phonetics[0].text;



        console.log('آدرس صدا:', mainSoundSrc);
    } catch (err) {
        console.log('Error:', err);
    }
}

// وقتی روی دکمه پخش کلیک می‌کنی
audioBtn.addEventListener('click', () => {
    if (mainSoundSrc !== '') {
        sound.src = mainSoundSrc;
        sound.play();
    } else {
        console.log('هنوز صدا آماده نیست.');
    }
});
