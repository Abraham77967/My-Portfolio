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
    const offset = -currentIndex * 100 / totalSlides; // Adjust offset dynamically
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (currentIndex === totalSlides - 1) {
        // Temporarily disable transition for instant jump
        carousel.style.transition = 'none';
        showSlide(0); // Jump instantly to the first slide

        // Re-enable transition and smoothly move to the second slide
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            showSlide(1);
        }, 50); // Small delay to allow instant jump
    } else {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (currentIndex === 0) {
        // Temporarily disable transition for instant jump
        carousel.style.transition = 'none';
        showSlide(totalSlides - 1); // Jump instantly to the last slide

        // Re-enable transition and smoothly move to the second-to-last slide
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            showSlide(totalSlides - 2);
        }, 50); // Small delay to allow instant jump
    } else {
        showSlide(currentIndex - 1);
    }
}

// Initialize the carousel
showSlide(currentIndex);