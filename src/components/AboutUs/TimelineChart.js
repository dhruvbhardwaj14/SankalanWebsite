import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ✅ Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TimelineChart = () => {
  const data = {
    labels: ["2005", "2010", "2015", "2020", "2025"],
    datasets: [
      {
        label: "Participants Growth",
        data: [500, 1200, 2500, 4000, 6000],
        backgroundColor: "rgba(0, 174, 239, 0.2)",
        borderColor: "#00AEEF",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category", // ✅ Ensures "category" scale is registered
        title: { display: true, text: "Year" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Participants" },
      },
    },
  };

  return (
    <div className="w-full md:w-3/4 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-darkBlue mb-4">Sankalan Growth Timeline</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TimelineChart;
