import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie} from "react-chartjs-2";

Chart.register(CategoryScale);
const blue = "#003d99"
const orange = " #b34700"
const yellow ="#b3b300"

function MyRadarChart({ chartData }) {
  return (
      <Pie
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
   
export default function CustomerChart() {
    const Data = [
        {
          id: 1,
          year: "Deposits",
          userGain: 476,
          userLost: 823,
          backgroundColor:blue,
        },
        {
          id: 2,
          year: "Referrals",
          userGain: 500,
          userLost: 345,
          backgroundColor:orange,
        },
        {
          id: 3,
          year: "Withdrawals",
          userGain: 590,
          userLost: 555,
          backgroundColor:yellow,
        },
        {
          id: 4,
          year: "Trades",
          userGain: 500,
          userLost: 4555,
          backgroundColor:"#ffff00",
        }
      ];
    const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "",
          data: Data.map((data) => data.userGain),
          backgroundColor: Data.map((data)=> data.backgroundColor),
          pointBackgroundColor: "white",
          borderColor: '#223044', //
          pointBackgroundColor: 'white',
          pointBorderColor: '#fff', 
          pointHoverBackgroundColor: '#fff', 
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 3,
          weight:1,
        }
      ]
    });

    return (
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
    );
  }