"use client"
import Image from 'next/image';
import "../dashboard.css";
import React, { useEffect, useState } from 'react';
import { ShoppingCart, CreditCard, Monitor, User} from 'lucide-react';
import DashboardNav from "../dashboardnav";

export default function Dashboard() {

  return (
    <main className="py-5">
    
    <div className="mobile-menu this md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
            <div className="mobile-header-container flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img dash h-16 mr-4 logo"
          />
          <p className="mobile-header-text company-name text-white text-2xl">LarvaTrade</p>
        </div>
            </a>
            <a href="" className="mobile-menu-toggler"> <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
        </div>
        <div className="scrollable">
            <a href="" className="mobile-menu-toggler"> <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
            <ul className="scrollable__content py-2">
                <li>
                    <a href=".html" className="menu menu--active">
                        <div className="menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="menu__title"> Dashboard <i data-lucide="chevron-down" className="menu__sub-icon transform rotate-180"></i> </div>
                    </a>     
                </li>
            </ul>
        </div>
    </div>
    <div className="flex mt-[4.7rem] md:mt-0">
        <DashboardNav/>
        <div className="content">
          
            <div className="top-bar">

                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active text-white font-bold" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
             
                <div className="intro-x relative mr-3 sm:mr-6">
                   
                </div>
        
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
                                            <ShoppingCart size={24} color="blue" />
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                            <div className="text-base text-slate-500 mt-1">Item Sales</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box all p-5">
                                            <div className="flex">
                                            <CreditCard size={24} color="orange" />
                                               <div className="ml-auto">
                                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                            <div className="text-base text-slate-500 mt-1">New Orders</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box all p-5">
                                            <div className="flex">
                                            <Monitor size={24} color="red" />
                                               <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                            <div className="text-base text-slate-500 mt-1">Total Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box all p-5">
                                            <div className="flex">
                                            <User size={24} color="green" />
                                                <i data-lucide="user" className="report-box__icon text-success"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                            <div className="text-base text-slate-500 mt-1">Unique Visitor</div>
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
                                            <th className="whitespace-nowrap font-bold">TRADER NAME</th>
                                            <th className="text-center whitespace-nowrap font-bold">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="img" className="tooltip rounded-full" src="./image-featured-a4DfvV.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">Bruks</a> 
                                            </td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="img" className="tooltip rounded-full" src="./image-featured-a4DfvV.jpg" title="Uploaded at 18 October 2022" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">Bruks</a> 
                                            </td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-danger font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="img" className="tooltip rounded-full" src="./image-featured-a4DfvV.jpg" title="Uploaded at 5 September 2020" />
                                                    </div>
                                                 
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">Bruks</a> 
                                                
                                            </td>

                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                                            
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="img" className="tooltip rounded-full" src="./image-featured-a4DfvV.jpg" title="Uploaded at 21 May 2020" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-bold whitespace-nowrap">Bruks</a>
                                            </td>
                                        
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success font-bold"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
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
