document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menuMobile = document.getElementById('menuMobile');
    const navDesktop = document.querySelector('nav.d-none.d-md-flex'); // Menu bureau

    // Gestion du menu burger
    if (burger && menuMobile) {
        burger.addEventListener('click', () => {
            menuMobile.classList.toggle('show'); // Montre/cache le menu mobile
        });
    } else {
        console.error("Les éléments du burger ou du menu mobile ne sont pas trouvés.");
    }

    // Gestion du menu selon la taille de l'écran
    function handleResize() {
        if (window.innerWidth <= 767) {
            if (navDesktop) {
                navDesktop.style.display = 'none'; // Cacher menu bureau sur petits écrans
            }
            menuMobile.style.display = 'none'; // S'assurer que le menu mobile est caché sur les petits écrans
        } else {
            if (navDesktop) {
                navDesktop.style.display = 'flex'; // Montrer menu bureau sur grands écrans
            }
            menuMobile.style.display = 'none'; // Cacher menu mobile sur grands écrans
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Appel immédiat pour fixer au chargement
});
