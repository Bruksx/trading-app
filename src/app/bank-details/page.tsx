"use client";
import Image from "next/image";
import "../dashboard.css";
import '../modal.css'
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/mobile-header";
import { FaEthereum, FaClone } from "react-icons/fa";
import {BsCurrencyBitcoin, BsCash, BsCurrencyDollar} from "react-icons/bs";
import DashboardNav from "../components/dashboardnav";
import API from "../utils/api";
import Investment from "../investment/page";
import Modal from '../components/Modal';
import useLocalStorage from "../utils/uselocalstorage";

export default function Deposit() {
    const api = new API();
    const [token, setToken] = useLocalStorage("token")
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
    api.investments(token, setInvestments);
    }, [1]);




  


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
                 Add Your Bank Details
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6"></div>
        
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-6">
           <div className="crypto-block">
               <h1 className="text-1xl font-bold pb-3"><strong>Bank Name</strong></h1>
               <input className="style-input rounded" placeholder="Bank name" type="text" />
               <br />
               <h1 className="mt-8 text-1xl font-bold pb-3"><strong>Account Name</strong></h1>
               <input className="style-input rounded" placeholder="Account name" type="text" />
               <br />
               <h1 className="mt-8 text-1xl font-bold pb-3"><strong>Account Number</strong></h1>
               <input className="style-input rounded" placeholder="Account number" type="text" />
               <br />
               <h1 className="mt-8 text-1xl font-bold pb-3"><strong>Routing/Swift/Iban code</strong></h1>
               <input className="style-input rounded" placeholder="Routing/Swift/Iban code" type="text" />
               <br />
                  <div className="flex justify-left items-left">
                      <button  className="bg-blue-500 text-white mt-8 mb-10 pb-3 pt-3 pl-6 pr-6 rounded transition-transform hover:scale-90">Add Bank</button>
                  </div>
            </div>
                

                    <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                      <h1 className="mt-5 mb-5 font-bold text-2xl">My Bank Details</h1>
                    <table className="table table-report sm:mt-2">
                      <thead>
                        <tr>
                          <th className="whitespace-nowrap font-bold">Bank Name</th>
                          <th className="whitespace-nowrap font-bold">Account Name</th>
                          <th className="whitespace-nowrap font-bold">Account Number</th>
                          <th className="whitespace-nowrap font-bold">Bank Code</th>
                          <th className="whitespace-nowrap font-bold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                            <tr className="intro-x">
                              <td className="w-40">
                                <div className="flex">
                                  <p className="font-bold whitespace-nowrap">
                                    <span>UBA</span> 
                                  </p>
                                </div>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                 <span>Kendrick Lamar</span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                    0932321234
                                </a>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                    331456
                                </a>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                    <div className="flex justify-left items-left">
                                        <button className="bg-red-500 text-white pb-3 pt-3 pl-6 pr-6 rounded transition-transform hover:scale-90">Cancel</button>
                                    </div>
                                </a>
                              </td>                            
                            </tr>
                       
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
