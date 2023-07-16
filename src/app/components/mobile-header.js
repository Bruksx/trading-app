"use client";
import Image from "next/image";
import useScrollDirection from "../hooks/scrolldirection";
import "../dashboard.css";
import Sidebar from '../components/side-nav';
import useLocalStorage from "../utils/uselocalstorage";
import React, { useState } from 'react';


export default function MobileHeader(props) {
  const [token, setToken] = useLocalStorage("token");
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
    <div className="mobile-menu this md:hidden">
      <div className="mobile-menu-bar">
        <a href="/" className="flex mr-auto">
          <div className="mobile-header-container flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="mobile-header-img dash h-16 mr-4 logo"
            />
            <p className="mobile-header-text company-name text-white text-2xl">
              LarvaTrade
            </p>
          </div>
        </a>
      </div>

      {/* Mobile menu, hidden by default */}
      <Sidebar/>
    </div>
  );
}
