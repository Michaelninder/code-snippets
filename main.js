document.addEventListener('DOMContentLoaded', () => {
    const reloadButtons = document.querySelectorAll('.reload-btn');

    reloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const snippet = button.closest('.snippet');
            const iframe = snippet.querySelector('iframe');
            iframe.src = iframe.src;
        });
    });
});