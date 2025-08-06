scrollToTop = document.getElementById('scroll-to-top');

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        if (window.scrollY > 255) {
            scrollToTop.classList.remove('hidden');
        } else {
            scrollToTop.classList.add('hidden');
        }
    });
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});