const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

const handleScroll = () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('shown');
    } else {
        scrollToTopBtn.classList.remove('shown');
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);