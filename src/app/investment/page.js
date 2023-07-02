"use client";
import Image from "next/image";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import { ShoppingCart, CreditCard, Monitor, User } from "lucide-react";
import MobileHeader from "../mobile-header";
import DashboardNav from "../dashboardnav";
import API from "../utils/api";
import { useFormik} from "formik";
import { redirect } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import useLocalStorage from "../utils/uselocalstorage"

const style = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"40px",
  height:"22px",
}

function handleClick(
  api,
  setErrorText,
  setErrorTextClass,
  amount,
  password,
  setBalance,
  balance,
  setShow3Dots,
) {
  setErrorText("")
  api.invest(
    amount,
    password,
    setErrorText,
    setErrorTextClass,
    setBalance,
    balance,
    setShow3Dots,
  );
}

export default function Investment() {
  const api = new API()
  let [user, setUser] = useLocalStorage("user", {})
  const [show3Dots,setShow3Dots] = useState(false);
  const [errorText, setErrorText] = useState("")
  const [errorTextClass, setErrorTextClass] = useState("text-red-400")
  const [balance, setBalance] =  useState(user.balance)
  const formik = useFormik({
    initialValues:{
        "amount":"",
        "password":"",
    },
    onSubmit:(values)=>{}
  })
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
                  Investment
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6"></div>
          </div>
          <div className="intro-y fle col-span-12 lg:col-span-6">
            <div className="col-span-12 enlarge sm:col-span-6 xl:col-span-3 w-2/5 intro-y">
              <div className="report-box zoom-in">
                <div className="box all p-5">
                  <div className="flex">
                    <CreditCard size={24} color="orange" />
                    <div className="ml-auto">
                      <div
                        className="report-box__indicator bg-danger tooltip cursor-pointer"
                        title="2% Lower than last month"
                      >
                        {" "}
                        2%{" "}
                        <i
                          data-lucide="chevron-down"
                          className="w-4 h-4 ml-0.5"
                        ></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-medium leading-8 mt-6">
                    ${balance}
                  </div>
                  <div className="text-base text-slate-500 mt-3">
                    Account Balance
                  </div>
                </div>
              </div>
            </div>

            <div className="intro-y box rom mt-12 w-1/2">
              <div id="form-validation" className="p-5">
                <div className="preview">
                  
                    <div className="input-form">
                      <label className="form-label w-full flex flex-col sm:flex-row">
                        {" "}
                        Amount{" "}
                        <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                          Required*
                        </span>{" "}
                      </label>
                      <input
                        id="validation-form-1"
                        type="text"
                        name="amount"
                        className="form-control text-black"
                        placeholder="100,000"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="input-form mt-3">
                      <label className="form-label w-full flex flex-col sm:flex-row">
                        {" "}
                        Password{" "}
                        <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                          Required*
                        </span>{" "}
                      </label>
                      <input
                        id="validation-form-3"
                        type="password"
                        name="password"
                        className="form-control text-black"
                        placeholder="secret"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <button 
                        className="btn btn-primary mt-5"
                        onClick={()=>{
                          handleClick(api, setErrorText, setErrorTextClass, formik.values.amount, formik.values.password, setBalance, balance, setShow3Dots)
                        }}
                        >
                        {show3Dots? <ThreeDots height="25" color="white" wrapperStyle={style}/>: "Invest"}
                    </button>
                
                    <p className={errorTextClass}>{errorText}</p>
                    </div>
                  
                   
                <div className="source-code hidden">
                  <button
                    data-target="#copy-form-validation"
                    className="copy-code btn py-1 px-2 btn-outline-secondary"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      icon-name="file"
                      data-lucide="file"
                      className="lucide lucide-file w-4 h-4 mr-2"
                    >
                      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>{" "}
                    Copy example code{" "}
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
