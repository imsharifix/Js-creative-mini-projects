const header = document.querySelector('.header');
let lastScrollTop = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // اسکرول به پایین → هدر مخفی شه
        header.style.top = "-80px";
    } else {
        // اسکرول به بالا → هدر نشون داده شه
        header.style.top = "0px";
    }

    lastScrollTop = currentScroll;
});
