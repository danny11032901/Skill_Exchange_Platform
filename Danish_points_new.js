document.addEventListener('DOMContentLoaded', function () {
    // Simulating fetching user data from the backend
    let userData = {
        username: "John Doe",
        views: 1500,
        moneyEarned: 75.00,
        points: 3200,
        timeSpent: 30, // in hours
        progressPercent: 75, // based on points collected
        playlists: [
            { name: "Web Development", status: "Completed" },
            { name: "Data Science", status: "Completed" },
        ],
        weeklyGrowth: [5, 10, 7, 15, 20, 30, 25], // Example data for weekly growth
    };

    // Update dashboard with user data
    document.getElementById('username').textContent = userData.username;
    document.getElementById('user-views').textContent = userData.views;
    document.getElementById('user-money').textContent = `$${userData.moneyEarned.toFixed(2)}`;
    document.getElementById('user-points').textContent = userData.points;
    document.getElementById('user-time').textContent = `${userData.timeSpent} hours`;

    // Update progress bar
    let progressBarFill = document.getElementById('progress-bar-fill');
    progressBarFill.style.width = `${userData.progressPercent}%`;

    // Update completed playlists
    let playlistContainer = document.getElementById('completed-playlists');
    playlistContainer.innerHTML = ""; // Clear loading message
    userData.playlists.forEach(function (playlist) {
        let playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');
        playlistDiv.innerHTML = `<h4>${playlist.name}</h4><p>${playlist.status}</p>`;
        playlistContainer.appendChild(playlistDiv);
    });

    // Initialize weekly growth chart using Chart.js
    const ctx = document.getElementById('growthChart').getContext('2d');
    const growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Weekly Growth',
                data: userData.weeklyGrowth,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Logout Function (optional)
function logout() {
    // Logic to clear session and redirect to login page
    window.location.href = "login.html";
}
