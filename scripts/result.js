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
  },
})

// FINE GRAFICO

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('DivChangeText').innerHTML = 'ciao'
// })

// const recuperatesto = function () {
//   let retrievedArray = JSON.parse(localStorage.getItem('sharedArray'))
//   console.log(retrievedArray)
// }

// recuperatesto()
document.addEventListener('DOMContentLoaded', function () {
  const retrievedData = JSON.parse(localStorage.getItem('quizResults'))
  console.log(retrievedData)
  // Aggiorna il grafico con i dati recuperati
  myDonutChart.data.datasets[0].data = [
    retrievedData.filter((result) => result === 1).length,
    retrievedData.filter((result) => result === 0).length,
  ]
  myDonutChart.update()
})
