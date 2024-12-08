let currentIndex = 0;

function navigate(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Update index
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalCards - 1;
    if (currentIndex >= totalCards) currentIndex = 0;

    // Translate carousel
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
