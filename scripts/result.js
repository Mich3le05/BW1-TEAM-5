// GRAFICO A CIAMBELLA

const calcola = function () {
  let somma = 5 + 10
  return somma
}

const data = {
  datasets: [
    {
      label: 'My First Dataset',
      data: [calcola(), 100],
      backgroundColor: ['#D20094', '#00FFFF'],
      borderWidth: 0,
    },
  ],
}

const config = {
  type: 'doughnut',
  data: data,
  options: {
    cutout: '70%',
    plugins: {
      beforeDraw: function (chart) {
        const ctx = chart.ctx
        const chartArea = chart.chartArea

        // Disegna il cerchio esterno con l'ombra
        ctx.save()
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)' // Regola l'opacità
        ctx.shadowBlur = 10 // Regola l'intensità del blur
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.beginPath()
        ctx.arc(
          chartArea.left + chartArea.width / 2,
          chartArea.top + chartArea.height / 2,
          chartArea.width / 2,
          0,
          2 * Math.PI
        )
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)' // Regola il colore dell'ombra
        ctx.fill()
        ctx.restore()
      },
    },
  },
}

const myChart = new Chart(document.getElementById('myChart'), config)

// FINE GRAFICO A CIAMBELLA
