// Variables to control the sliding effect
let currentSlide = 0; // Current slide index
const categoriesToShow = 5; // Number of categories to show at a time
const totalCategories = document.querySelectorAll('.trending-category').length; // Total number of categories
const trendingContent = document.querySelector('.trending-content');
const categoryWidth = 250; // Width of each category

// Function to update the transform property based on current slide
function updateSlider() {
    trendingContent.style.transform = `translateX(-${currentSlide * categoryWidth}px)`;
}

// Event listener for the left arrow
document.querySelector('.arrow-left').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--; // Move to the previous slide
        updateSlider(); // Update the slider position
    }
});

// Event listener for the right arrow
document.querySelector('.arrow-right').addEventListener('click', () => {
    if (currentSlide < totalCategories - categoriesToShow) {
        currentSlide++; // Move to the next slide
        updateSlider(); // Update the slider position
    }
});

// Initialize the slider on page load
updateSlider();
