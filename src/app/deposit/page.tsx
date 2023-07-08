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
    const [isActive, setIsActive] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [showMessage1, setShowMessage1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const api = new API();
    const [token, setToken] = useLocalStorage("token")
    const [investments, setInvestments] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    useEffect(() => {
    api.investments(token, setInvestments);
    }, [1]);

    const handleCopy2 = () => {
      const depositAddress = "0XIAU3340SFHSI4883BXDASOH";
      const tempElement = document.createElement('textarea');
      tempElement.value = depositAddress;
      document.body.appendChild(tempElement);
      tempElement.select();
      document.execCommand('copy');
      document.body.removeChild(tempElement);
  
      setIsActive2(true);
      setShowMessage2(true);
  
      setTimeout(() => {
        setIsActive2(false);
        setShowMessage2(false);
      }, 2500);
    };


    const handleCopy1 = () => {
        const depositAddress = "0XIAU3340SFHSI4883BXDASOH";
        const tempElement = document.createElement('textarea');
        tempElement.value = depositAddress;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    
        setIsActive1(true);
        setShowMessage1(true);
    
        setTimeout(() => {
          setIsActive1(false);
          setShowMessage1(false);
        }, 2500);
      };

  
  const handleCopy = () => {
    const depositAddress = "0XIAU3340SFHSI4883BXDASOH";
    const tempElement = document.createElement('textarea');
    tempElement.value = depositAddress;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    setIsActive(true);
    setShowMessage(true);

    setTimeout(() => {
      setIsActive(false);
      setShowMessage(false);
    }, 2500);
  };

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
                 Deposit
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6"></div>
          
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-6">
                    <center className="mt-8 "><BsCurrencyBitcoin color="gold" size={60} /></center> <br />
                    <center style={{ width: '100%', display: 'block', marginBottom: '35px' }} className="text-center font-bold align-center inline-block w-100">*You can pay using <span style={{ color:'gold' }}>Crypto</span> </center>
                 
                <div className="deposit-block">
                        <div className="usdt-block mt-10 mb-10">
                            <div className="mobile_navigation" style={{ display: 'flex' }}>                    
                                    <BsCurrencyDollar color="#fff" size={20} />
                                    <span className="dep text inline-block pl-2">
                                        Deposit Address: 0XIAU3340SFHSI4883BXDASOH
                                    </span>
                                    <div className={`copy-text ${isActive ? 'active' : ''}`}>
                                        <button onClick={handleCopy} className="pl-4">
                                        <FaClone color="#ffffff" size={19} />
                                        </button>
                                        {showMessage && <p className="disappearing-message">Copied!</p>}
                                    </div>
                            </div>
                            <p className="text-center mt-3">Type: Tether(USDT)</p>
                        </div>

                        <div className="eth-block mb-10">
                            <div className="mobile_navigation" style={{ display: 'flex' }}>                    
                                    <FaEthereum color="#fff" size={20} />
                                    <span className="dep text inline-block pl-2">
                                        Deposit Address: 0XIAU3340SFHSI4883BXDASOH
                                    </span>
                                    <div className={`copy-text ${isActive1 ? 'active' : ''}`}>
                                        <button onClick={handleCopy1} className="pl-4">
                                        <FaClone color="#ffffff" size={19} />
                                        </button>
                                        {showMessage1 && <p className="disappearing-message">Copied!</p>}
                                    </div>
                            </div>
                            <p className="text-center mt-3 mb-3">Type: Ethereum(ETH)</p>
                        </div>

                        <div className="btc-block mb-10">
                            <div className="mobile_navigation" style={{ display: 'flex' }}>                    
                                    <BsCurrencyBitcoin color="#fff" size={20} />
                                    <span className="dep text inline-block pl-2">
                                        Deposit Address: 0XIAU3340SFHSI4883BXDASOH
                                    </span>
                                    <div className={`copy-text ${isActive2 ? 'active' : ''}`}>
                                        <button onClick={handleCopy2} className="pl-4">
                                        <FaClone color="#ffffff" size={19} />
                                        </button>
                                        {showMessage2 && <p className="disappearing-message">Copied!</p>}
                                    </div>
                            </div>
                            <p className="text-center mt-3 mb-3">Type: Bitcoin(BTC)</p>
                        </div>
                </div>
              
                  <p style={{ color: 'white' }} className="mt-5 mb-5 text-center">*Make payment to any of the above addresses and click continue below.</p>    
                  <div className="flex justify-center items-center">
  <button onClick={openModal} className="bg-blue-500 text-white mt-3 mb-10 pb-3 pt-3 pl-6 pr-6 rounded transition-transform hover:scale-90">Continue</button>
</div>
{showModal && <Modal onClose={closeModal} />}
                    <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                      <h1 className="mt-5 mb-5 font-bold text-2xl">Deposit History</h1>
                    <table className="table table-report sm:mt-2">
                      <thead>
                        <tr>
                          <th className="whitespace-nowrap font-bold">AMOUNT</th>
                          <th className="whitespace-nowrap font-bold">METHOD</th>
                          <th className="whitespace-nowrap font-bold">ACCOUNT</th>
                          <th className="whitespace-nowrap font-bold">ID/URL</th>
                          <th className="whitespace-nowrap font-bold">DATE</th>
                          <th className="whitespace-nowrap font-bold">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {investments.map((investment: any) => {
                          return (
                            <tr key={investment.uid}className="intro-x">
                              <td className="w-40">
                                <div className="flex">
                                  <p className="font-bold whitespace-nowrap">
                                    <span>$600</span> 
                                  </p>
                                </div>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                 <span>ETH</span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                Bruks Bruks
                                </a>
                              </td>
                              <td>
                                <a
                                  href=""
                                  className="font-bold whitespace-nowrap"
                                >
                                  11
                                </a>
                              </td>
                              <td className="w-40">
                                <div className="flex items-center justify-center text-white font-bold">
                                  2023-07-03 00:08:15
                                </div>
                              </td>
                              <td className="w-40">
                                <span className="font-bold">Pending</span>
                              </td>
                            </tr>
                          );
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
