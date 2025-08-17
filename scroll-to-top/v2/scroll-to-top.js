const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

const handleScroll = () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('shown');
    } else {
        scrollToTopBtn.classList.remove('shown');
    }
};

const scrollToTop = () => {
    window.scrollY = 0;
    handleScroll();
}

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);