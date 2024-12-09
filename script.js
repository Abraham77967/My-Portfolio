let currentIndex = 1; // Start on the first real slide
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');

function showSlide(index) {
    const offset = -index * 100 / totalSlides;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);

    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = 1; // Snap back to the first real slide
            showSlide(currentIndex);
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 500); // Match the transition duration
    }
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);

    if (currentIndex === 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalSlides - 2; // Snap back to the last real slide
            showSlide(currentIndex);
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 500); // Match the transition duration
    }
}

// Initialize the carousel
carousel.style.transition = 'none'; // Disable transition for initial setup
showSlide(currentIndex);
setTimeout(() => {
    carousel.style.transition = 'transform 0.5s ease-in-out';
}, 0); // Re-enable transition after setup