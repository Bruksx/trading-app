"use client";
import Image from "next/image";
import "../dashboard.css";
import "../colors.css";
import React, { useEffect, useState } from "react";
import { ShoppingCart, CreditCard, Monitor, User } from "lucide-react";
import { MdAccountBalanceWallet, MdSavings } from "react-icons/md";
import { useRouter } from "next/navigation";
import API from "../utils/api";
import useLocalStorage from "../utils/uselocalstorage";
import "react-circular-progressbar/dist/styles.css";
import MyChart from "../components/sitestatchart";
import Dashboard from "../components/dashboard";
import CustomerChart from "../components/customerchart";
import {data} from "./data"

export default function MainDashboard() {
  const api = new API();
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [orders, setOrders] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [topTraders, setTopTraders] = useState([]);
  const [token, setToken] = useLocalStorage("token");
  useEffect(() => {
    let data = api.dashboard(
      token,
      setBalance,
      setOrders,
      setTotalProfit,
      setTopTraders
    );
  }, []);

  useEffect(()=>{
    const container = document.getElementById("TV-chart-container")
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
    script.async = true
    script.innerHTML = JSON.stringify(data)
    container?.appendChild(script)
  })

  return (
    <Dashboard>
      <div className="col-span-12 mt-8">
        <div className="intro-y flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5 text-custom-blue3">
            General Report
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="report-box zoom-in">
              <div className="box all p-5 bg-red-300">
                <div className="flex">
                  <MdAccountBalanceWallet size={24} color="blue" />
                  <div className="ml-auto">
                    <div
                      className="report-box__indicator bg-success tooltip cursor-pointer"
                      title="33% Higher than last month"
                    >
                      <i
                        data-lucide="chevron-up"
                        className="w-4 h-4 ml-0.5"
                      ></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">
                  ${balance}
                </div>
                <div className="text-base text-slate-500 mt-1">Balance</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="report-box zoom-in">
              <div className="box all p-5">
                <div className="flex">
                  <CreditCard size={24} color="orange" />
                  <div className="ml-auto">
                    <div
                      className="report-box__indicator bg-danger tooltip cursor-pointer"
                      title="2% Lower than last month"
                    >
                      <i
                        data-lucide="chevron-down"
                        className="w-4 h-4 ml-0.5"
                      ></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">
                  {orders}
                </div>
                <div className="text-base text-slate-500 mt-1">
                  Active Trades
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="report-box zoom-in">
              <div className="box all p-5">
                <div className="flex">
                  <MdSavings size={24} color="red" />
                  <div className="ml-auto">
                    <div
                      className="report-box__indicator bg-success tooltip cursor-pointer"
                      title="12% Higher than last month"
                    >
                      <i
                        data-lucide="chevron-up"
                        className="w-4 h-4 ml-0.5"
                      ></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">
                  {totalProfit}
                </div>
                <div className="text-base text-slate-500 mt-1">
                  Total Profit
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="report-box zoom-in">
              <div className="box all p-5">
                <div className="flex">
                  <User size={24} color="green" />
                  <i
                    data-lucide="user"
                    className="report-box__icon text-success"
                  ></i>
                  <div className="ml-auto">
                    <div
                      className="report-box__indicator bg-success tooltip cursor-pointer"
                      title="22% Higher than last month"
                    >
                      <i
                        data-lucide="chevron-up"
                        className="w-4 h-4 ml-0.5"
                      ></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">
                  152040
                </div>
                <div className="text-base text-slate-500 mt-1">Traders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="statistics">
        <h2 className="text-lg font-medium truncate mr-5 text-custom-blue3">
          Statistics
        </h2>
          <div className="stat-content">
            <div className="card bg-custom-blue1">
              <div className="piechart-container">
                <div className="cover bg-custom-blue1"></div>
                <MyChart />
              </div>
              <p className="text-custom-blue3">Trading Volumes</p>
              <div className="chart-legend text-custom-blue3">
                <div>
                  <p>crypto</p>
                  <div className="round-dot bg-custom-yellow"></div>
                </div>
                <div>
                  <p>forex</p>
                  <div className="round-dot bg-custom-blue2"></div>
                </div>
                <div>
                  <p>stocks</p>
                  <div className="round-dot bg-custom-orange"></div>
                </div>
              </div>
            </div>

            <div className="card bg-custom-blue1">
              <div className="piechart-container">
                <CustomerChart/>
              </div>
              <p className="text-custom-blue3">Activity</p>
            </div>
            <div id="TV-chart-container" className="bg-custom-blue1"></div>

        </div>
      </div>

      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5">Our Top Traders</h2>
        </div>
        <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
          <table className="table table-report sm:mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap font-bold">IMAGE</th>
                <th className="whitespace-nowrap font-bold">TRADER NAME</th>
                <th>PREFFERED ASSETS</th>
                <th className="text-center whitespace-nowrap font-bold">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {topTraders.map(function (trader: any) {
                return (
                  <tr className="intro-x" key={trader}>
                    <td className="w-40">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img
                            alt="img"
                            className="tooltip rounded-full"
                            src={trader.avatar}
                            title="Uploaded at 3 June 2020"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="" className="font-bold whitespace-nowrap">
                        {trader.first_name} {trader.last_name}
                      </a>
                    </td>
                    <td>
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img
                            className="tooltip rounded-full"
                            src="doge.jfif"
                          />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img
                            className="tooltip rounded-full"
                            src="solana.png"
                          />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img className="tooltip rounded-full" src="btc.png" />
                        </div>
                      </div>
                    </td>
                    <td className="w-40">
                      <div className="flex items-center justify-center text-success font-bold">
                        {" "}
                        <i
                          data-lucide="check-square"
                          className="w-4 h-4 mr-2"
                        ></i>{" "}
                        Active{" "}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
}
