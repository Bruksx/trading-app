"use client";
import Image from "next/image";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/mobile-header";
import DashboardNav from "../components/dashboardnav";
import { useRouter } from "next/navigation";
import API from "../utils/api";
import useLocalStorage from "../utils/uselocalstorage";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import MyChart from "../components/sitestatchart";

export default function Dashboard(props:any) {
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
                  {props.heading}
                </li>
              </ol>
            </nav>
            <div className="intro-x relative mr-3 sm:mr-6"></div>
          </div>
          {props.children}
        </div>
      </div>
    </main>
  );
}
