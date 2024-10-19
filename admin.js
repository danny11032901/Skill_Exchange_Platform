// Sample data for charts
const newSignupsData = [100, 150, 200, 300, 350, 400, 450, 500];
const activeUsersData = [1200, 1300, 1450, 1600, 1800, 2000, 2300, 2500];
const revenueData = [1000, 1500, 2000, 3000, 3500, 4000, 5000, 6000];

// New Signups Over Time Chart
const newSignupsCtx = document.getElementById('newSignupsChart').getContext('2d');
const newSignupsChart = new Chart(newSignupsCtx, {
    type: 'bar', // 3D Bar chart
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
            label: 'New Signups',
            data: newSignupsData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Signups'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    }
});

// Active Users Over Time Chart
const activeUsersCtx = document.getElementById('activeUsersChart').getContext('2d');
const activeUsersChart = new Chart(activeUsersCtx, {
    type: 'line', // 3D Line chart
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
            label: 'Active Users',
            data: activeUsersData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Active Users'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    }
});

// Revenue Growth Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'bar', // 3D Bar chart
    data: {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8'],
        datasets: [{
            label: 'Monthly Revenue',
            data: revenueData,
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Revenue in $'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    }
});
