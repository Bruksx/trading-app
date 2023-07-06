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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import MyChart from "../sitestatchart";

export default function Dashboard() {
  const api = new API();
  const router = useRouter();
  const [balance, setBalance] = useState(0)
  const [orders, setOrders] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)
  const [topTraders, setTopTraders] = useState([])
  const [token, setToken] = useLocalStorage("token")
  
  
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
                  Financials
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6" id="chart-container"></div>

            
            
          </div>
        </div>
      </div>
    </main>
  );
}
