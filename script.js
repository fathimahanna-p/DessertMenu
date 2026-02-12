document.addEventListener('DOMContentLoaded', () => {



    // Horizontal Scroll Wheel support for Desktop (optional usability improvement)
    const scrollContainer = document.querySelector('.horizontal-scroll-wrapper');

    scrollContainer.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        }
    });
});
