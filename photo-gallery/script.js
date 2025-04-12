const buttons = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.gallery-grid img');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        images.forEach(img => {
            if (filter === 'all' || img.dataset.category === filter) {
                img.classList.remove('hidden');
            } else {
                img.classList.add('hidden');
            }
        });
    });
});
