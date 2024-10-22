const ctx = document.getElementById('myDonutChart').getContext('2d');

const myDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Vero', 'Falso'],
        datasets: [{
            label: 'Risultati',
            data: [20, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        cutout: '90%',
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

const calcolatesto = function {

  if(){}
  else{}
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("DivChangeText").innerHTML = calcolatesto();
});
