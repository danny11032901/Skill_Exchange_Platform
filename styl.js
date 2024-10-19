let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change video every 5 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
