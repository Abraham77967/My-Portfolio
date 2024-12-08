let currentIndex = 0;

function navigate(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Calculate the next index
    const nextIndex = currentIndex + direction;

    // Handle looping logic
    if (nextIndex < 0) {
        // If going left from the first card, jump to the last card
        currentIndex = totalCards - 1;
        carousel.style.transition = 'none'; // Disable transition for instant jump
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            // Restore transition for smooth movement
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    } else if (nextIndex >= totalCards) {
        // If going right from the last card, jump to the first card
        currentIndex = 0;
        carousel.style.transition = 'none'; // Disable transition for instant jump
        carousel.style.transform = 'translateX(0%)';
        setTimeout(() => {
            // Restore transition for smooth movement
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    } else {
        // Normal navigation
        currentIndex = nextIndex;
        carousel.style.transition = 'transform 0.5s ease-in-out'; // Ensure smooth transition
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}
