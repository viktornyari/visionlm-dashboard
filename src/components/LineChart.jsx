import { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { CHART_DS, CHART_LABELS } from '../constants'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

const t3 = 'rgba(255,255,255,0.28)'
const ACB = '#00FFD4'

export default function LineChart({ mode = 'total' }) {
  const data = CHART_DS[mode] || CHART_DS.total

  const chartData = useMemo(
    () => ({
      labels: CHART_LABELS,
      datasets: [
        {
          data,
          fill: true,
          backgroundColor: 'rgba(0,206,176,0.22)',
          borderColor: '#00CEB0',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#00CEB0',
          pointHoverBorderColor: '#030405',
          pointHoverBorderWidth: 2,
          tension: 0.45,
        },
      ],
    }),
    [data, mode]
  )

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0d1212',
          borderColor: 'rgba(0,206,176,0.28)',
          borderWidth: 1,
          titleColor: t3,
          bodyColor: ACB,
          padding: 10,
          callbacks: {
            label: (c) => `  +${(c.raw * 1000).toLocaleString()} Ft`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.035)' },
          border: { display: false },
          ticks: { color: t3, font: { size: 10, family: "'DM Sans',sans-serif" }, maxRotation: 0 },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.035)' },
          border: { display: false },
          ticks: {
            color: t3,
            font: { size: 9.5, family: "'DM Sans',sans-serif" },
            callback: (v) => '₣' + v + 'k',
          },
        },
      },
    }),
    []
  )

  return (
    <div style={{ height: 168, width: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  )
}
