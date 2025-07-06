const tabButtons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.content');

tabButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    // پاک کردن کلاس active از همه‌ی دکمه‌ها
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // اضافه کردن کلاس active به دکمه‌ی کلیک شده
    button.classList.add('active');

    // پاک کردن کلاس active از همه‌ی محتواها
    contents.forEach(content => content.classList.remove('active'));
    // اضافه کردن کلاس active به محتوای مورد نظر
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
  });
});
