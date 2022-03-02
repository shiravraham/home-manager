import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Expenses per Category",
    },
  },
};

const CategoryPie = (props) => {
  const { expensesPerCategories } = props;

  const data = {
    labels: Object.keys(expensesPerCategories),
    datasets: [
      {
        label: "# of Votes",
        data: Object.keys(expensesPerCategories).map(
          (key) => expensesPerCategories[key]
        ),
        backgroundColor: [
          "#fffff4",
          "#ebf2ee",
          "	#d0dad8",
          "#9dabaf",
          "#83888b",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;
};

export default CategoryPie;
