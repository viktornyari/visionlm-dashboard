import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function Spark({ data, col = '#00CEB0', h = 28 }) {
  const opts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false } },
    animation: { duration: 800 },
  }
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data,
        fill: true,
        backgroundColor: col + '44',
        borderColor: col,
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.45,
      },
    ],
  }
  return (
    <div style={{ height: h, width: '100%' }}>
      <Line data={chartData} options={opts} />
    </div>
  )
}
