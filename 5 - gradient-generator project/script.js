const colorA = document.querySelector("#color-a");
const colorB = document.querySelector("#color-b");

const buttons = document.querySelectorAll(".buttons button");

const codeCopy = document.querySelector("#code");
const copyBtn = document.querySelector('#copy');

const submitBtn = document.querySelector("#submit");

let currentDirection = 'to right'; // مقدار پیش‌فرض
let currentText = ''; // برای ذخیره کردن متن کپی



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentDirection = button.dataset.dir; // ذخیره جهت انتخاب‌شده
  });
});

submitBtn.addEventListener("click", () => {
  currentText = `background-image: linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`;
  codeCopy.innerHTML = currentText;

  document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(currentText);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
});
