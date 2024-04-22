document.addEventListener('DOMContentLoaded', function () {

    var scatterCtx = document.getElementById('scatterChart').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sample Scatter Data',
                data: [{ x: -10, y: 0 }, { x: 0, y: 10 }, { x: 10, y: 5 }],
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            scales: {
                x: { beginAtZero: false },
                y: { beginAtZero: false }
            }
        }
    });


    var lineCtx = document.getElementById('lineChartCanvas').getContext('2d');
    var lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [50, 60, 70, 180, 190],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });



    var barCtx = document.getElementById('barChartCanvas').getContext('2d');
    var barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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


    var pieCtx = document.getElementById('pieChartCanvas').getContext('2d');
    var pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: 'Vote Count',
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'yellow'],
            }]
        }
    });


    var donutCtx = document.getElementById('donutChartCanvas').getContext('2d');
    var donutChart = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Green', 'Blue'],
            datasets: [{
                label: 'Color Popularity',
                data: [12, 19, 7],
                backgroundColor: ['red', 'green', 'blue'],
            }]
        }
    });


    var bubbleCtx = document.getElementById('bubbleChartCanvas').getContext('2d');
    var bubbleChart = new Chart(bubbleCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Test Data',
                data: [{
                    x: 20,
                    y: 30,
                    r: 15
                }, {
                    x: 40,
                    y: 10,
                    r: 10
                }],
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});