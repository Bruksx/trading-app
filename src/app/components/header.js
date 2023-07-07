"use client";
import useScrollDirection from "../hooks/scrolldirection";
import { BsPersonCircle, BsCurrencyDollar, BsFillFileBarGraphFill, BsLightbulb, BsFillPersonFill, BsBagFill, BsNewspaper, BsFillBookFill, BsPeopleFill, BsFillSignIntersectionSideFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Header(props) {
  const scrollDirection = useScrollDirection();
  let className = scrollDirection === "up" ? "header" : "header header-down";
  if (props.fixed) {
    className += " fixed";
  }
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={className}>
      <div className="custom-container">
        <div className="mobile-header-container flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img h-12 mr-4 logo"
          />
          <p className="mobile-header-text company-name">LarvaTrade</p>
        </div>
        <nav className="space-x-4 nav tab-menu">
          <a href="/" className="hover:text-neutral-400">
            Home
          </a>
          <a href="/market" className="hover:text-neutral-400">
            Markets
          </a>
          <a href="/pricing" className="hover:text-neutral-400">
            Pricing
          </a>
          <div className="dropdown inline-block relative">
            <button className="hover:text-neutral-400">Company</button>
            <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/career">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <a href="/education" className="hover:text-neutral-400">
            Education
          </a>
          <div className="dropdown inline-block relative">
            <button className="hover:text-neutral-400">Resources</button>
            <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
              <li>
                <a href="/customers">Customers</a>
              </li>
              <li>
                <a href="/roadmap">Roadmap</a>
              </li>
            </ul>
          </div>
        </nav>
        <button className="bg-red-500 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded custom-button">
          <a href="/register">CREATE ACCOUNT</a>
        </button>
        <a href="/login">
          <BsPersonCircle color="#FC5B3F" size={20} />
        </a>
      </div>
      <div id="hamburger-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile menu, hidden by default */}
      <div className={`mobile-menu nav ${showMenu ? "show" : ""}`}>
        <nav className="mobile-menu-nav">
          <a href="/market" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillFileBarGraphFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Markets</span> </a>
           <a href="/pricing" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsCurrencyDollar color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Pricing</span> </a>
          <a href="/about" className="mobile_navigation" style={{ display: 'flex'}} >
           <BsLightbulb color="#FC5B3F" size={18} />  <span className="inline-block pl-2"></span> About</a>
          <a href="/career" className="mobile_navigation" style={{ display: 'flex'}} >
           <BsBagFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Career</span></a>
          <a href="/contact" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillPersonFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Contact</span> </a>
          <a href="/blog" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsNewspaper color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Blog</span></a>
          <a href="/education" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillBookFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Education</span></a>
          <a href="/customers" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsPeopleFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Customers</span></a>
          <a href="/roadmap" className="mobile_navigation" style={{ display: 'flex'}}>
          <BsFillSignIntersectionSideFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Roadmap</span></a>
        </nav>
      </div>
    </header> 
  );
}
