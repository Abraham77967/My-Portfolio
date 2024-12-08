let currentIndex = 0;

function navigate(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Update index
    currentIndex += direction;

    // Smooth transition for normal navigation
    if (currentIndex >= 0 && currentIndex < totalCards) {
        const offset = -currentIndex * 100;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${offset}%)`;
    } else if (currentIndex < 0) {
        // Loop to last card
        currentIndex = totalCards - 1;
        const offset = -currentIndex * 100;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    } else if (currentIndex >= totalCards) {
        // Loop to first card
        currentIndex = 0;
        const offset = 0;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    }
}
