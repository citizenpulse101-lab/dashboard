// Sentiment Gap Bar Chart (Peace Tracker style)
const gapCtx = document.getElementById('sentimentGapChart').getContext('2d');

new Chart(gapCtx, {
  type: 'bar',
  data: {
    labels: ['Israel', 'Lebanon', 'Palestine', 'USA', 'Egypt', 'Jordan'],
    datasets: [
      {
        label: 'Official Stance (% Support)',
        data: [22, 31, 15, 55, 45, 48],
        backgroundColor: '#6366f1'
      },
      {
        label: 'Public Support (% Support)',
        data: [58, 64, 52, 61, 71, 68],
        backgroundColor: '#22d3ee'
      },
      {
        label: 'Abstain / Unclear',
        data: [20, 5, 33, 14, 16, 12],
        backgroundColor: '#f59e0b'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: { y: { max: 80, title: { display: true, text: '% Support for Peace Talks' }}}
  }
});
