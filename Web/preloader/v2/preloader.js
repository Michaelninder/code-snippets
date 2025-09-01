const minLoadTime = 1200;

const pageLoadPromise = new Promise(resolve => {
    window.addEventListener('load', resolve, { once: true });
});

const minTimePromise = new Promise(resolve => {
    setTimeout(resolve, minLoadTime);
});

Promise.all([pageLoadPromise, minTimePromise]).then(() => {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.page-content');

    if (preloader) {
        preloader.classList.add('hidden');

        preloader.addEventListener('transitionend', () => {
            preloader.remove();
            if (content) {
                content.classList.add('visible');
            }
        }, { once: true });
    }
});
