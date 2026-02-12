document.addEventListener('DOMContentLoaded', () => {

    // Optional: Add simple interaction for the "Add" buttons to simulate functionality
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const productName = card.querySelector('.product-name').textContent;

            // Visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '✓';
            btn.style.backgroundColor = '#FFC400';
            btn.style.color = '#0A3D2E';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 1000);

            console.log(`Added ${productName} to cart`);
        });
    });

    // Horizontal Scroll Wheel support for Desktop (optional usability improvement)
    const scrollContainer = document.querySelector('.horizontal-scroll-wrapper');

    scrollContainer.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        }
    });
});
