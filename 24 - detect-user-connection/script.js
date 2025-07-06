const $ = document;
const wrapper = $.querySelector('.wrapper');
const toast = $.querySelector('.toast');
const title = $.querySelector('span');
const subTitle = $.querySelector('p');
const icon = $.querySelector('.icon');
const closeIcon = $.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  wrapper.classList.add('hide');
});

window.addEventListener('load', () => {
  let hideTimeout;

  function showNotification() {
    clearTimeout(hideTimeout);
    wrapper.classList.remove('hide');
    hideTimeout = setTimeout(() => {
      wrapper.classList.add('hide');
    }, 4000);
  }

  function ajaxRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('Response:', res.status);
        if (res.status >= 200 && res.status < 300) {
          toast.classList.remove('offline');
          title.innerHTML = "You're online now";
          subTitle.innerHTML = 'Hurray! Internet is connected.';
          icon.innerHTML = '<i class="uil uil-wifi"></i>';

          showNotification();
        } else {
          offline();
        }
      })
      .catch(err => {
        console.log('Error:', err);
        offline();
      });
  }

  function offline() {
    toast.classList.add('offline');
    title.innerHTML = "You're offline now";
    subTitle.innerHTML = 'OoOops! Internet is disConnected.';
    icon.innerHTML = '<i class="uil uil-wifi-slash"></i>';

    showNotification();
  }

  setInterval(ajaxRequest, 2000);
});
