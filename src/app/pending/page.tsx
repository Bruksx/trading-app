"use client"
import Image from 'next/image';
import "../dashboard.css";
import React, { useEffect, useState } from 'react';
import { ShoppingCart, CreditCard, Monitor, User} from 'lucide-react';

export default function Pending() {

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

        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
            <div className="mobile-header-container logo-dashboard flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img dash h-12 mr-4 logo"
          />
          <p className="mobile-header-text company-name">LarvaTrade</p>
        </div>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul className='bg-black'>
                <li>
                    <a href=".html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="side-menu__title text-white font-bold">
                            Dashboard 
                            <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                        <div className="side-menu__title">
                            Investment
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-lucide="shopping-bag"></i> </div>
                        <div className="side-menu__title">
                            Pending 
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-inbox.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div className="side-menu__title"> Profile </div>
                    </a>
                </li>
            </ul>
        </nav>

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
