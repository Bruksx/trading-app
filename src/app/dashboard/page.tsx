"use client";
import Image from "next/image";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import { ShoppingCart, CreditCard, Monitor, User } from "lucide-react";
import MobileHeader from "../mobile-header";
import DashboardNav from "../dashboardnav";
import { MdAccountBalanceWallet, MdSavings } from "react-icons/md";
import { useToken } from "../hooks/hooks";
import { useRouter } from "next/navigation";
import API from "../utils/api";
import useLocalStorage from "../utils/uselocalstorage";

export default function Dashboard() {
  const api = new API();
  const router = useRouter();
  const [balance, setBalance] = useState(0)
  const [orders, setOrders] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)
  const [topTraders, setTopTraders] = useState([])
  const [token, setToken] = useLocalStorage("token")
  useEffect(()=>{let data = api.dashboard(token, setBalance, setOrders, setTotalProfit, setTopTraders);}, [])
  
  return (
    <main className="py-5">
      <MobileHeader />
      <div className="flex mt-[4.7rem] md:mt-0">
        <DashboardNav />
        <div className="content">
          <div className="top-bar">
            <nav
              aria-label="breadcrumb"
              className="-intro-x mr-auto hidden sm:flex"
            >
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item active text-white font-bold"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6"></div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                  <div className="intro-y flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
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
                          <div className="text-base text-slate-500 mt-1">
                            Balance
                          </div>
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
                          <div className="text-base text-slate-500 mt-1">
                            Traders
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 mt-6">
                  <div className="intro-y block sm:flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Weekly Top Traders
                    </h2>
                  </div>
                  <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    <table className="table table-report sm:mt-2">
                      <thead>
                        <tr>
                          <th className="whitespace-nowrap font-bold">IMAGE</th>
                          <th className="whitespace-nowrap font-bold">
                            TRADER NAME
                          </th>
                          <th className="text-center whitespace-nowrap font-bold">
                            STATUS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topTraders.map(function (trader:any){
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
                            )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
