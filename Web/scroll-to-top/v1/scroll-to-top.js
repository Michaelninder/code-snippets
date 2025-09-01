scrollToTop = document.getElementById('scroll-to-top');

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        if (window.scrollY > 255) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
    });
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});