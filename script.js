let currentIndex = 0;

function navigate(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Update the index
    currentIndex += direction;

    // Ensure the index stays within bounds
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    // Calculate the offset and apply the transformation
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}