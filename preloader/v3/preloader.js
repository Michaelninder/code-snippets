window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const minDisplayTime = 500;
    const startTime = Date.now();
    function hidePreloader() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minDisplayTime - elapsedTime;
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, Math.max(0, remainingTime));
    }
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
});s