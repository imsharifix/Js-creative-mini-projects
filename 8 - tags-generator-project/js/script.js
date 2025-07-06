const ulTagElm = document.querySelector('ul');
const inputTagElm = document.querySelector('input');
const tagCountSpanElm = document.querySelector('span');
const removeAllBtn = document.querySelector('button');

let tags = ['officialSharifix', 'ArabianGulf', 'saudi arabia'];
const maxTagCount = 10;

// به‌روز کردن شمارنده و فوکوس روی input
const tagCounter = () => {
  inputTagElm.focus();
  tagCountSpanElm.innerHTML = maxTagCount - tags.length;
}

// حذف تمام تگ‌ها از صفحه
const removeAllLis = () => {
  ulTagElm.querySelectorAll('li').forEach(tag => tag.remove());
}

// ایجاد تگ‌ها در صفحه
const createTags = () => {
  removeAllLis();
  [...tags].reverse().forEach(tag => {
    let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i></li>`;
    ulTagElm.insertAdjacentHTML('afterbegin', liTag);
  });
  inputTagElm.value = "";
}

// حذف یک تگ خاص
const removeTag = (tagElm, tagTitle) => {
  let index = tags.indexOf(tagTitle);
  if (index > -1) {
    tags.splice(index, 1);
    tagElm.parentElement.remove();
    tagCounter();
  }
}

// افزودن تگ جدید از input
const addTag = (event) => {
  if (event.key === "Enter") {
    let inputTags = inputTagElm.value.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '');

    inputTags.forEach(tag => {
      if (tags.length < maxTagCount && !tags.includes(tag)) {
        tags.push(tag);
      }
    });

    createTags();
    tagCounter();
  }
}


// اضافه کردن رویداد
inputTagElm.addEventListener('keyup', addTag);

// delete all tags Btn
removeAllBtn.addEventListener('click', () =>{
  tags.length = 0;
  removeAllLis();
  tagCounter();
});


// نمایش اولیه
createTags();
tagCounter();
