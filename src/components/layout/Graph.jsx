import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler,
} from 'chart.js';

ChartJS.register(Title, Tooltip, LineElement, Legend, LinearScale, PointElement, CategoryScale, Filler);

const Graph = ({ sparkline, change, width, height }) => {
  const dataArray = Object.values(sparkline);
  const dataLength = dataArray.length;

  const gradientFill = (context) => {
    const chartArea = context.chart.chartArea;
    if (chartArea) {
      const { top, bottom } = chartArea;
      const gradient = context.chart.ctx.createLinearGradient(0, top, 0, bottom);

      if (parseFloat(change) < 0) {
        gradient.addColorStop(0, 'rgba(255, 0, 0, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
      }

      return gradient;
    }
    return null;
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          label: (context) => {
            const dataIndex = context.dataIndex;
            if (
              sparkline.hour &&
              sparkline.hour.length > dataIndex &&
              typeof sparkline.hour[dataIndex].price === 'number'
            ) {
              return sparkline.hour[dataIndex].price;
            }
            return '';
          },
        },
      },
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: Array.from({ length: dataLength }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        data: dataArray,
        borderColor: parseFloat(change) < 0 ? 'red' : 'green',
        borderWidth: -10,
        fill: 'start',
        backgroundColor: gradientFill,
        barThickness: -20,
        tension: 0.1,
        pointBorderWidth: -100,
      },
    ],
  };

  return (
    <div style={{ width: width, height: height }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
