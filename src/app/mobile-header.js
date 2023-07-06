"use client"
import Image from 'next/image';
import useScrollDirection from "./hooks/scrolldirection";
import "./dashboard.css";
import {BsBox, BsGraphUp, BsFillClockFill, BsFillPersonFill, BsPersonDown } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import useLocalStorage from './utils/uselocalstorage';
import { CreditCard } from 'lucide-react';

export default function MobileHeader(props) {
    const [token, setToken] = useLocalStorage("token")
    const scrollDirection = useScrollDirection();
    let className = scrollDirection === "up" ? "header" : "header header-down";
    if (props.fixed) {
      className += " fixed";
    }
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return(
        <div className="mobile-menu this md:hidden">
        <div className="mobile-menu-bar">
        <div id="hamburger-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
            <a href="/" className="flex mr-auto">
            <div className="mobile-header-container flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img dash h-16 mr-4 logo"
          />
          <p className="mobile-header-text company-name text-white text-2xl">LarvaTrade</p>
        </div>
            </a>
        </div>

        
      {/* Mobile menu, hidden by default */}
      <div className={`mobile-menu nav ${showMenu ? "show" : ""}`}>
        <nav className="mobile-menu-nav">
        <a href="/dashboard" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsBox color="#FFFFFF" size={18} /> <span className="inline-block pl-2">Dashboard</span></a>
          <a href="/investment" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsGraphUp color="#FFFFFF" size={18} />  <span className="inline-block pl-2">Investment</span></a>
           <a href="/deposit" className="mobile_navigation" style={{ display: 'flex'}}>
            <CreditCard color="#FFFFFF" size={18} />  <span className="inline-block pl-2">Deposit</span></a>
          <a href="/pending" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillClockFill color="#FFFFFF" size={18} /> <span className="inline-block pl-2">Pending</span></a>
          <a href="/profile" className="mobile_navigation" style={{ display: 'flex'}}>
          <BsFillPersonFill color="#FFFFFF" size={18} /> <span className="inline-block pl-2">Profile</span></a>
          <a href="#" className="mobile_navigation" style={{ display: 'flex'}} onClick={()=>{
            setToken("")
            window.location.href = "/"; // Redirect to Homepage'
        }}>
          <BsPersonDown color="#FFFFFF" size={18} /> <span className="inline-block pl-2">Logout</span></a>
         

        </nav>
      </div>
    </div>
    )
}
