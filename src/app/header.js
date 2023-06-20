"use client";
import useScrollDirection from "./hooks/scrolldirection";
import { BsPersonCircle } from "react-icons/bs";
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
          <a href="/market"> Markets</a>
          <a href="/about">About</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <a href="/education">Education</a>
          <a href="/customers">Customers</a>
          <a href="/roadmap">Roadmap</a>
        </nav>
      </div>
    </header>
  );
}
