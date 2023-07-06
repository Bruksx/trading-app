"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../dashboard.css";
import "../customCalendar.css";
import "../colors.css";
import MobileHeader from "../mobile-header";
import DashboardNav from "../dashboardnav";

export default function History() {
    const [value, onChange] = useState(new Date());
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
                  History
                </li>
              </ol>   
            </nav>
            
          </div>
          <div className="calendar-plus-activities">
            <div className="calendar">
                    <Calendar value={value} onChange={()=>{}}/>
                    <div className="calendar-text">
                        <div className="calendar-text-item">
                            <span>withdrawals</span> <div className="round-dot bg-custom-red"></div>
                        </div>
                        <div className="calendar-text-item">
                            <span>Deposit</span> <div className="round-dot bg-custom-green"></div>
                        </div>
                        <div className="calendar-text-item">
                            <span>Trade</span> <div className="round-dot bg-custom-yellow"></div>
                        </div>
                    </div>
                </div> 

                <div className="history bg-custom-blue1">
                    <h3>Activities</h3>
                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-green"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-green">$500</p>
                    </div>

                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-red"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-red">$500</p>
                    </div>

                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-yellow"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-yellow">$500</p>
                    </div>
                    
                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-green"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-green">$500</p>
                    </div>

                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-yellow"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-yellow">$500</p>
                    </div>

                    <div className="activity-box bg-custom-blue2">
                      <div className="round-dot bg-custom-red"></div>
                      <img className="activity-img" src="money.jpg"/>
                      <div className="activity-text">
                          <p className="action">activity here</p>
                          <p>12 august 2027</p>
                      </div>
                      <p className="text-custom-red">$500</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </main>
  );
}
