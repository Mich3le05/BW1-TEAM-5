// GRAFICO A CIAMBELLA

const ctx = document.getElementById('myDonutChart').getContext('2d')

const myDonutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['correct', 'incorrect'],
    datasets: [
      {
        label: 'Risultati',
        data: [correctAnswers, incorrectAnswers],
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
  },
})
