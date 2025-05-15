document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menuMobile');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});