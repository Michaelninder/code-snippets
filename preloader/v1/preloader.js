const startTime = new Date().getTime();

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    const minLoadTime = 1500; // 1.5 seconds

    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const remainingTime = minLoadTime - elapsedTime;

    const hidePreloader = () => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    };

    if (remainingTime > 0) {
        setTimeout(hidePreloader, remainingTime);
    } else {
        hidePreloader();
    }
});