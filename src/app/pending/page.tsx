"use client"
import Image from 'next/image';
import "../dashboard.css";
import React, { useEffect, useState } from 'react';
import MobileHeader from "../mobile-header"
import { ShoppingCart, CreditCard, Monitor, User} from 'lucide-react';
import DashboardNav from '../dashboardnav';

export default function Pending() {

  return (
    <main className="py-5">
    
   <MobileHeader/>
    <div className="flex mt-[4.7rem] md:mt-0">
        <DashboardNav/>

        <div className="content">
          
            <div className="top-bar">

                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active text-white font-bold" aria-current="page">Pending</li>
                    </ol>
                </nav>
             
                <div className="intro-x relative mr-3 sm:mr-6">
                   
                </div>
        
            </div>
         
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-12 gap-6">
                   
                        <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Pending Orders
                                </h2>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap font-bold">DATE</th>
                                            <th className="whitespace-nowrap font-bold">PRICE</th>
                                            <th className="whitespace-nowrap font-bold">ROI</th>
                                            <th className="text-center whitespace-nowrap font-bold">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                <p className='font-bold whitespace-nowrap'>1-1-2023</p>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">$500</a> 
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">10%</a> 
                                            </td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <p className='font-bold whitespace-nowrap'>12-1-2023</p>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">$200</a> 
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">20%</a> 
                                            </td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-danger font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <p className='font-bold whitespace-nowrap'>12-1-2023</p>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">$150</a> 
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">10%</a> 
                                            </td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-danger font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
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
  )
}
