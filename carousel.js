let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

// Function to update the position of the slider
function updateSliderPosition() {
    // Calculate the new position
    const newPosition = -currentIndex * 100 / totalImages;
    document.querySelector('.image-slider').style.transform = `translateX(${newPosition}%)`;
}

// Function to move the slide
function moveSlide(direction) {
    currentIndex += direction;

    // Wrap around logic
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    updateSliderPosition();
}

// Auto scroll every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initialize the slider position
updateSliderPosition();
