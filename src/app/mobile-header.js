"use client"
import Image from 'next/image';
import useScrollDirection from "./hooks/scrolldirection";
import "./dashboard.css";
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function MobileHeader(props) {
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
          <a href="/dashboard">Dashboard</a>
          <a href="/investment">Investment</a>
          <a href="/pending">Pending</a>
          <a href="/profile">Profile</a>
          <a onClick={()=>{
            console.log("here logout")
            localStorage.removeItem("token") 
            localStorage.removeItem("user")
            redirect("/")
          }}>Logout</a>
        </nav>
      </div>
    </div>
    )
}
