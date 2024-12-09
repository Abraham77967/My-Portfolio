let currentIndex = 0;

function showSlide(index, instant = false) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Temporarily disable transition for instant moves
    if (instant) {
        carousel.style.transition = 'none';
    } else {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    }

    // Handle looping
    if (index < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (index >= totalSlides) {
        currentIndex = 0; // Go to the first slide
    } else {
        currentIndex = index;
    }

    // Move the carousel to the correct position
    const offset = -currentIndex * 100 / totalSlides; // Adjust offset dynamically
    carousel.style.transform = `translateX(${offset}%)`;

    // Re-enable transition after the instant move
    if (instant) {
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    }
}

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (currentIndex === totalSlides - 1) {
        // Wrap around from last to first
        showSlide(0, true); // Jump instantly to the first slide
        setTimeout(() => showSlide(1), 50); // Slide smoothly to the next logical position
    } else {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (currentIndex === 0) {
        // Wrap around from first to last
        showSlide(totalSlides - 1, true); // Jump instantly to the last slide
        setTimeout(() => showSlide(totalSlides - 2), 50); // Slide smoothly to the next logical position
    } else {
        showSlide(currentIndex - 1);
    }
}

// Initialize the carousel
showSlide(currentIndex);