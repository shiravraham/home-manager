import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Expenses per month",
    },
  },
};

const MonthlyExpensesBar = (props) => {
  const { expensesPerMonth } = props;

  const data = {
    labels: [],
    datasets: [
      {
        label: "Monthly Expenses",
        data: expensesPerMonth,
        backgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default MonthlyExpensesBar;
