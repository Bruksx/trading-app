import React from "react";
import { Pie, Bar} from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: ""
            },
          },
          maintainAspectRatio:false,
        }}
      />
    </div>
  );
}
export default PieChart;