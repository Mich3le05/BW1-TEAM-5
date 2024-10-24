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

const mostrarisultatiinhtml = function (positivi, negativi) {
  const risultatipositivihtml =
    document.getElementsByClassName('correctPercentage')
  if (risultatipositivihtml.length > 0) {
    risultatipositivihtml[0].innerText = `${positivi} %`
  }

  const risultatinegativihtml =
    document.getElementsByClassName('wrongPercentage')
  if (risultatinegativihtml.length > 0) {
    risultatinegativihtml[0].innerText = `${negativi} %`
  }

  const numeripositivisutotaleinhtml =
    document.getElementsByClassName('correctNumber')
  if (numeripositivisutotaleinhtml.length > 0) {
    numeripositivisutotaleinhtml[0].innerText =
      positivi / 10 + ' /' + (positivi + negativi) / 10 + ' questions'
  }

  const numerinegativisutotaleinhtml =
    document.getElementsByClassName('wrongNumber')
  if (numerinegativisutotaleinhtml.length > 0) {
    numerinegativisutotaleinhtml[0].innerText =
      negativi / 10 + ' /' + (positivi + negativi) / 10 + ' questions'
  }
}

const calcolapercentuale = function (array) {
  let positives = 0
  let negatives = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '1') {
      positives = positives + 1
    } else {
      negatives = negatives + 1
    }
  }

  positives = (positives * 100) / array.length
  negatives = (negatives * 100) / array.length

  mostrarisultatiinhtml(positives, negatives)
}

// recuperatesto()
document.addEventListener('DOMContentLoaded', function () {
  const retrievedData = JSON.parse(localStorage.getItem('quizResults'))
  calcolapercentuale(retrievedData)
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
    message = `Congratulations! You passed the exam`
  } else {
    message = `Oops! You failed the exam`
  }

  chartTextElement.textContent = message
  chartTextElement.classList.add(percentageCorrect >= 60 ? 'success' : 'fail')
})
