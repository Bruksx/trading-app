"use client"
import Image from 'next/image';
import "../styles.css";
import {BsTelegram, BsFillXCircleFill, BsFillCheckCircleFill, BsFillDiamondFill, BsFillRocketTakeoffFill} from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer'

export default function Pricing() {

  return (
    <main className="min-h-screen justify-between">
      <Header/>
      <section className="pricing-section">
      <div className="sec-title text-center">
                <h2>Pricing Plans</h2>
            </div>
        <div className="container">
            <div className="outer-box">
                <div className="row">
                   
                    <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                        
                                
                                <div className="icon-outer"><i className="fas fa-paper-plane"><BsTelegram color="#40cbb4" size={120} /></i></div>
                            </div>
                            <div className="price-box">
                                <div className="title">Basic Plan</div>
                                <h4 className="price">$35.99</h4>
                            </div>
                            <ul className="features">
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Basic Plan</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">10% Returns</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Certificate</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillXCircleFill color="red" size={20} />  <span className="inline-block pl-3 font-bold">Easy Access</span>
                            </a>
                            <a href="#"  style={{ color:'#848484',display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillXCircleFill color="red" size={20} />  <span className="inline-block pl-3 font-bold">Free Support</span>
                            </a>
                            </ul>
                            <div className="btn-box">
                                <a href="#" className="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="icon-box">
                                <div className="icon-outer"><i className="fas fa-gem"><BsFillDiamondFill color="#1D95D2" size={119} /></i></div>
                            </div>
                            <div className="price-box">
                                <div className="title">Diamond Plan</div>
                                <h4 className="price">$99.99</h4>
                            </div>
                            <ul className="features">
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Basic Plan</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">10% Returns</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Certificate</span>
                            </a>
                            <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillCheckCircleFill color="40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Easy Access</span>
                            </a>
                            <a href="#"  style={{ color:'#848484',display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                            <BsFillXCircleFill color="red" size={20} />  <span className="inline-block pl-3 font-bold">Free Support</span>
                            </a>
                            </ul>
                            <div className="btn-box">
                                <a href="#" className="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="icon-box">
                                <div className="icon-outer"><i className="fas fa-rocket"><BsFillRocketTakeoffFill color="#FFC20B" size={119} /></i></div>
                            </div>
                            <div className="price-box">
                                <div className="title">Rocket Plan</div>
                                <h4 className="price">$199.99</h4>
                            </div>
                            <ul className="features">
                                    <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                                    <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Basic Plan</span>
                                    </a>
                                    <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                                    <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">10% Returns</span>
                                    </a>
                                    <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                                    <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Certificate</span>
                                    </a>
                                    <a href="#"  style={{ color:'#848484', display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                                    <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Easy Access</span>
                                    </a>
                                    <a href="#"  style={{ color:'#848484',display: 'flex', marginBottom:'10px', borderBottom:'1px dashed #ddd', paddingBottom:'15px', paddingTop:'8px'}}>
                                    <BsFillCheckCircleFill color="#40cbb4" size={20} />  <span className="inline-block pl-3 font-bold">Free Support</span>
                                    </a>
                            </ul>
                            <div className="btn-box">
                                <a href="#" className="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
</main>
  )
}
