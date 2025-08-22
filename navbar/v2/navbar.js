document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const rootStyles = getComputedStyle(document.documentElement);
    const navbarHeight = parseInt(rootStyles.getPropertyValue('--navbar-height'), 10);

    window.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});