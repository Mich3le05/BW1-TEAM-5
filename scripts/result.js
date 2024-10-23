// GRAFICO A CIAMBELLA

const ctx = document.getElementById('myDonutChart').getContext('2d')

const myDonutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Vero', 'Falso'],
    datasets: [
      {
        label: 'Risultati',
        data: [20, 10],
        backgroundColor: ['#D20094', '#00FFFF'],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("DivChangeText").innerHTML = "ciao";
});



import { arrayDiDati } from "./../benchmark.js";
console.log(arrayDiDati);
