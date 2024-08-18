document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        title.addEventListener('click', () => {
            accordionItems.forEach(i => {
                const content = i.querySelector('.accordion-content');
                if (i !== item) {
                    content.style.display = 'none';
                }
            });
            const content = item.querySelector('.accordion-content');
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
        });
    });
});
