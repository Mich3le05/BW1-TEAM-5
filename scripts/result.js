// GRAFICO A CIAMBELLA

const ctx = document.getElementById('myDonutChart').getContext('2d')

const myDonutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Wrong', 'Correct'],
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

document.addEventListener('DOMContentLoaded', function () {
  const retrievedData = JSON.parse(localStorage.getItem('quizResults'))
  console.log(retrievedData)
  // Aggiorna il grafico con i dati recuperati
  myDonutChart.data.datasets[0].data = [
    retrievedData.filter((result) => result === 0).length,
    retrievedData.filter((result) => result === 1).length,
  ]
  myDonutChart.update()

  // Aggiorna il grafico e la scritta al centro
  const chartTextElement = document.getElementById('DivChangeText')
  myDonutChart.update()
  const correctAnswers = retrievedData.filter((result) => result === 1).length
  const totalAnswers = retrievedData.length
  const percentageCorrect = (correctAnswers / totalAnswers) * 100

  let message
  if (percentageCorrect >= 60) {
    message = `Congratulations! You passed the exam. You have answered ${percentageCorrect}% of the questions correctly!`
  } else {
    message = `Oops! You failed the exam. You only answered ${percentageCorrect}% of the questions correctly!`
  }

  chartTextElement.textContent = message
  chartTextElement.classList.add(percentageCorrect >= 60 ? 'success' : 'fail')
})
