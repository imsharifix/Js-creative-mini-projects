const tagMenu = document.querySelectorAll('nav a');
const anim = document.querySelector('.anim');

tagMenu.forEach((a) => {
  a.addEventListener('mouseover', (event) => {
    let offsetWidth = event.target.offsetWidth;
    let offsetLeft = event.target.offsetLeft;

    anim.style.width = offsetWidth + 'px';
    anim.style.left = offsetLeft + 'px';
  });
});
