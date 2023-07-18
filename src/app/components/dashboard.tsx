"use client";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/mobile-header";
import DashboardNav from "../components/dashboardnav";
import { useRouter } from "next/navigation";
import API from "../utils/api";
import useLocalStorage from "../utils/uselocalstorage";
import 'react-circular-progressbar/dist/styles.css';
import ResponseModal from "./responsemodal";

export default function Dashboard(props:any) {
  const [theme, setTheme] = useLocalStorage("theme", "dark")
  const api = new API();
  const router = useRouter()
  const [token, setToken] = useLocalStorage("token")
  const [contentClass, setContentClass] = useState("content")
  const [headingClass, setHeadingClass] = useState("breadcrumb-item active text-white font-bold")
  useEffect(()=>{
    if (theme === "light"){
      setContentClass("content bg-custom-light-blue2")
      setHeadingClass("breadcrumb-item active text-white font-bold text-custom-blue")
    }
  }, [])
  return (
    <main className="py-5">
      <MobileHeader />
      <div className="flex mt-[4.7rem] md:mt-0">
        <DashboardNav />
        <div className={contentClass}>
          <ResponseModal isOpen={props.isOpen} responseState="success" text={props.modalText}/>
          <div className="top-bar">
            <nav
              aria-label="breadcrumb"
              className="-intro-x mr-auto hidden sm:flex"
            >
              <ol className="breadcrumb">
                <li
                  className={"title text-custom-blue3"}
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
