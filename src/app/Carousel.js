"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <section className="bg-stone-700">
            <div className="contner">
            <img src="/in-liquid-slide-bg.png" alt="Wave Background" className="spread" />
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-8 lg:py-16">
            <div className="lg:w-1/2">
            <div className="max-w-lg mx-auto text-center lg:text-left">
               <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">New standard in stock broker.</h1>
                <p className="text-lg mb-8 text-white">Trade forex, commodities, synthetic and stock indices from a single account</p>
                <button className="hover:border-white bg-transparent hover:bg-blue text-white font-bold border-solid border-2 border-red-400 py-2 px-4 rounded border-orange">
                Discover Platform
                </button>
            </div>
            </div>
            <div className="lg:w-1/2">
            <img src="/in-liquid-slide-1.svg" alt="Wave Background" className="w-2/2 h-45" />
            </div>
         
        </div>
        </div>
        </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="bg-stone-700">
            <div className="contner">
            <img src="/in-liquid-slide-bg.png" alt="Wave Background" className="spread" />
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-8 lg:py-16">
            <div className="lg:w-1/2">
            <div className="max-w-lg mx-auto text-center lg:text-left">
               <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">Multi-regulated global broker.</h1>
                <p className="text-lg mb-8 text-white">A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA</p>
                <button className="hover:border-white bg-transparent hover:bg-blue text-white font-bold border-solid border-2 border-red-400 py-2 px-4 rounded border-orange">
                Discover Platform
                </button>
            </div>
            </div>
            <div className="lg:w-1/2">
            <img src="/in-liquid-slide-2.svg" alt="Wave Background" className="w-2/2 h-45" />
            </div>
         
        </div>
        </div>
        </section>  
        </SwiperSlide>
      </Swiper>
    </>
  );
}
