import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import PieChart from "./visitorchart";
import getRndInteger from "./utils/rand";


  
Chart.register(CategoryScale);
   
export default function MyChart() {
    const [dashboardCount, setDashboardCount] = useState(600)
    const [investCount, setInvestCount] = useState(200)
    const [tradeCount, setTradeCount] = useState(93)
    const [marketCount, setMarketCount] = useState(366)
    const [portfolioCount, setPortfolioCount] = useState(233)
    const Data = [
        {
          id: 1,
          year: "dashboard",
          userGain: dashboardCount,
          userLost: 823,
          backgroundColor:"#ff9933",
        },
        {
          id: 2,
          year: "invest",
          userGain: investCount,
          userLost: 345,
          backgroundColor:"#994d00",
        },
        {
          id: 3,
          year: "trade",
          userGain: tradeCount,
          userLost: 555,
          backgroundColor:"#ffa64d",
        },
        {
          id: 4,
          year: "markets",
          userGain: marketCount,
          userLost: 4555,
          backgroundColor:"#ff9933",
        },
        {
          id: 5,
          year: "portfolio",
          userGain: portfolioCount,
          userLost: 2000,
          backgroundColor:"#994d00",
        }
      ];
    const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "Site Vistors",
          data: Data.map((data) => data.userGain),
          backgroundColor: Data.map((data) => data.backgroundColor),
          borderWidth: 0,
          barThickness:6,
        }
      ]
    });

    useEffect(() => {
        const interval = setInterval(() => {
            let randomNumber = getRndInteger(0,2)
            if (dashboardCount < 300){
                setDashboardCount(350)
            }
            if (dashboardCount > 900){
                setDashboardCount(850)
            }
            if (dashboardCount >= 300 && dashboardCount<= 900){
                if (randomNumber == 0){
                    setDashboardCount(dashboardCount + getRndInteger(10,30))
                }
                else{
                    setDashboardCount(dashboardCount - getRndInteger(10,30))
                }
                setChartData({labels: Data.map((data) => data.year), 
                datasets: [
                  {
                    label: "Site Vistors",
                    data: Data.map((data) => data.userGain),
                    backgroundColor: Data.map((data) => data.backgroundColor),
                    borderWidth: 0,
                    barThickness:6,
                  }
                ]
              })
            }
            
        }, 300);
        return () => clearInterval(interval);
      }, [dashboardCount]);

      useEffect(() => {
        const interval = setInterval(() => {
            let randomNumber = getRndInteger(0,2)
            if (investCount < 200){
                setInvestCount(250)
            }
            if (investCount > 500){
                setInvestCount(450)
            }
            if (investCount >= 200 && investCount<= 500){
                if (randomNumber == 0){
                    setInvestCount(investCount + getRndInteger(10,30))
                }
                else{
                    setInvestCount(investCount - getRndInteger(10,30))
                }
                setChartData({labels: Data.map((data) => data.year), 
                datasets: [
                  {
                    label: "Site Vistors",
                    data: Data.map((data) => data.userGain),
                    backgroundColor: Data.map((data) => data.backgroundColor),
                    borderWidth: 0,
                    barThickness:6,
                  }
                ]
              })
            }
            
        }, 500);
        return () => clearInterval(interval);
      }, [investCount]);

      useEffect(() => {
        const interval = setInterval(() => {
            let randomNumber = getRndInteger(0,2)
            if (tradeCount < 200){
                setTradeCount(250)
            }
            if (tradeCount > 500){
                setTradeCount(450)
            }
            if (tradeCount >= 200 && tradeCount<= 500){
                if (randomNumber == 0){
                    setTradeCount(tradeCount + getRndInteger(10,30))
                }
                else{
                    setTradeCount(tradeCount - getRndInteger(10,30))
                }
                setChartData({labels: Data.map((data) => data.year), 
                datasets: [
                  {
                    label: "Site Vistors",
                    data: Data.map((data) => data.userGain),
                    backgroundColor: Data.map((data) => data.backgroundColor),
                    borderWidth: 0,
                    barThickness:6,
                  }
                ]
              })
            }
            
        }, 500);
        return () => clearInterval(interval);
      }, [tradeCount]);
    return (
    <div className="App">
        <PieChart chartData={chartData} />
    </div>
    );
  }