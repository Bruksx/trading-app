import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Radar, Doughnut} from "react-chartjs-2";

Chart.register(CategoryScale);

function MyRadarChart({ chartData }) {
  return (
      <Radar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: ""
            },
          },
          maintainAspectRatio:false,
        }}
      />
  );
}
   
export default function TraderChart() {
    const Data = [
        {
          id: 1,
          year: "accuracy",
          userGain: 476,
          userLost: 823,
          backgroundColor:"#66ccff",
        },
        {
          id: 2,
          year: "risk accessment",
          userGain: 500,
          userLost: 345,
          backgroundColor:"#ffff00",
        },
        {
          id: 3,
          year: "analysis",
          userGain: 590,
          userLost: 555,
          backgroundColor:"#cc00cc",
        },
        {
          id: 4,
          year: "profits",
          userGain: 500,
          userLost: 4555,
          backgroundColor:"#ffff00",
        },
        {
          id: 5,
          year: "portfolio",
          userGain: 550,
          userLost: 2000,
          backgroundColor:"#66ccff",
        }
      ];
    const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "",
          data: Data.map((data) => data.userGain),
          backgroundColor: "rgba(102, 0, 102, 0.3)",
          pointBackgroundColor: "white",
          borderColor: '#223044', // Set the border color for the line
          pointBackgroundColor: 'white', // Set the background color for the points
          pointBorderColor: '#fff', // Set the border color for the points
          pointHoverBackgroundColor: '#fff', // Set the background color when hovering over points
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          weight:1,
          cutout:"90%"
        },
        {
          label: "",
          data: [10, 10, 10, 10, 10],
          backgroundColor: "rgba(255, 0, 102, 0.1)",
          pointBackgroundColor: "white",
          borderColor: '#223044', // Set the border color for the line
          pointBackgroundColor: 'white', // Set the background color for the points
          pointBorderColor: '#fff', // Set the border color for the points
          pointHoverBackgroundColor: '#fff', // Set the background color when hovering over points
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          weight:1,
          cutout:"90%"
        },
      ]
    });

    return (
    <div>
        <MyRadarChart chartData={chartData} options={{
          plugins:{
            elements: {
              line: {
                borderWidth: 10
              }
          }
        },
          maintainAspectRatio:false,
        }}/>
    </div>
    );
  }