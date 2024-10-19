// Track the time spent on the website
let timeSpent = 0;
let timeInterval = setInterval(() => {
    timeSpent += 1; // Increase time spent by 1 second
    console.log("Time spent: " + timeSpent + " seconds");
    updateProgressBar();
}, 1000);

// Update the progress bar (dummy example)
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progress = Math.min(timeSpent / 10, 100); // Cap the progress at 100%
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";
}

// Simulate tracking views
let views = localStorage.getItem('views') || 0;
views++;
localStorage.setItem('views', views);
console.log("Views: " + views);

// Track points
let points = 0;
function collectPoints(activity) {
    if (activity === 'completeCourse') {
        points += 10; // Add 10 points for completing a course
    } else if (activity === 'participate') {
        points += 5; // Add 5 points for participation
    }
    console.log("Points collected: " + points);
    document.querySelector('.points-display').textContent = "Points: " + points;
}

// Handle dropdown menu hover (optional JS addition)
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Smooth Scroll for Discover More Button
document.querySelector('.cta-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
// If you want to add any interaction, you can add it here
// Smooth scroll for footer links (optional)

document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// If you want to add any interaction, you can add it here
// Smooth scroll for footer links (optional)

document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

