let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Handle looping
    if (index < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (index >= totalSlides) {
        currentIndex = 0; // Go to the first slide
    } else {
        currentIndex = index;
    }

    // Move the carousel to the correct position
    const offset = -currentIndex * 100 / totalSlides; // Divide by totalSlides to handle flex widths
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);