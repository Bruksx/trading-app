import React from "react";
import { Pie, Bar, Doughnut} from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: ""
            },
          },
          maintainAspectRatio:false,
          cutout:"80%",
          legend: false,
        }}
      />
  );
}
export default PieChart;