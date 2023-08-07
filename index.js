// Sample data for the chart (You can replace this with your own data)
const temperatureData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Temperature Data',
      data: [10, 12, 25, 40, 30, 26, 18],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true,
    }]
  };
  
  // Chart Configuration
  const chartConfig = {
    type: 'line',
    data: temperatureData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
          beginAtZero: true,
          suggestedMax: 40, // Adjust data range
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Temperature Chart',
          font: {
            size: 24,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: 'bottom',
        }
      }
    }
  };
  
  // Create the chart
  const myChart = new Chart(document.getElementById('myChart'), chartConfig);
  