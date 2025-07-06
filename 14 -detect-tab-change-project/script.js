let span = document.querySelector('h1 span');

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        span.classList.add('pass');   // بدون نقطه
        
    } else {
        span.classList.add('faild');  // بدون نقطه
        span.innerHTML = '(Failed)';
        span.classList.remove('pass'); // حالت قبلی رو پاک کنه
    }
});
