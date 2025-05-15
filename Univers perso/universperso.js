document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menuMobile');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});

window.addEventListener('resize', function() {
  const menu2 = document.querySelector('.menu2');
  if (window.innerWidth <= 767) {
    menu2.style.display = 'none';
  } else {
    menu2.style.display = 'flex'; // Ou une autre valeur si nécessaire
  }
});

// Vérifie dès le chargement initial (au cas où la page serait déjà dans une taille mobile)
if (window.innerWidth <= 767) {
  document.querySelector('.menu2').style.display = 'none';
}