document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const contentSpacer = document.getElementById('content-spacer');
    const scrollThreshold = 20;

    if (!body.classList.contains('lander')) {
        contentSpacer.style.marginTop = `${navbar.offsetHeight}px`;
        return;
    }

    const updateSpacerHeight = () => {
        const navbarHeight = navbar.offsetHeight;
        const navbarMarginTop = parseFloat(getComputedStyle(navbar).marginTop);
        contentSpacer.style.marginTop = `${navbarHeight + navbarMarginTop}px`;
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        updateSpacerHeight();
    });

    window.addEventListener('resize', updateSpacerHeight);

    const observer = new MutationObserver(updateSpacerHeight);
    observer.observe(navbar, { attributes: true, childList: true, subtree: true });

    updateSpacerHeight();
});