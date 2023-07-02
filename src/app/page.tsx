"use client";

import Image from "next/image";
import Carousel from "./Carousel";
import Header from "./header"
import Footer from "./Footer"
import { useState, useEffect } from 'react';
import "./styles.css";
import {BsPersonCircle} from "react-icons/bs"

export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <Header fixed/>
      <Carousel />
      <div className="second-showcase flex justify-between bg-black px-20px">
        <div>
          <p className="second-text text-4xl font-bold text-white">
            Save time. Get <span className="text-red-400">higher return</span>.{" "}
            <br /> Multiply wealth.
          </p>
        </div>
        <div>
          <button className="btn-hide bg-transparent-500 hover:bg-red-500 text-white font-bold py-3 px-8 border border-red-500 border-solid rounded">
            Find out more
          </button>
        </div>
      </div>

      <div className="sec-showcase grid grid-cols-3 gap-9 bg-black">
        <div className="grd bg-white p-4 shadow-md">
          <img
            src="/in-liquid-object-1.svg"
            alt="Card 1"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="text-lg font-semibold text-white py-2">
            Various assets
          </p>
          <p className="text-gray-600 text-white py-6">
          There is no single best way to trade. There is, however, a best way for you to trade.
          </p>
        </div>
        <div className="grd bg-white p-4 shadow-md">
          <img
            src="/in-liquid-object-2.svg"
            alt="Card 2"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="text-lg font-semibold text-white py-2">
            Market analysis
          </p>
          <p className="text-gray-600 text-white py-6">
          detailed assessment of your business target market and the competitive 
          landscape within a specific industry
          </p>
        </div>
        <div className="grd bg-white p-4 shadow-md">
          <img
            src="/in-liquid-object-3.svg"
            alt="Card 3"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="text-lg font-semibold text-white py-2">
            Enhanced tools
          </p>
          <p className="text-gray-600 text-white py-6">
            forex tools for finding expert services
          </p>
        </div>
      </div>

      <div className="third-container">
        <div className="first-flex">
          <div className="first-flex-container">
            <img src="/in-liquid-icon-1.svg" alt="icon" />
            <div className="text-blurb">
              <h1>Expert Service</h1>
              <p>
              we specialize in specific markets (stocks, options, forex, etc.) or specific trading strategies (day trading, swing trading, long-term investing, etc.). 
              </p>
            </div>
          </div>

          <div className="first-flex-container">
            <img src="/in-liquid-icon-2.svg" alt="icon" />
            <div className="text-blurb">
              <h1>Fully regulated</h1>
              <p>
              Trading regulations vary from country to country and are designed to protect investors, maintain market integrity, and ensure fair and transparent trading practices. While I can provide some general information, it's important to note that specific regulations may differ depending on the jurisdiction.
              We follow all regulations put in place by government bodies
              </p>
            </div>
          </div>
        </div>

        <div className="first-flex py-10">
          <div className="first-flex-container">
            <img src="/in-liquid-icon-3.svg" alt="icon" />
            <div className="text-blurb">
              <h1>Financial Strength</h1>
              <p>
              it's about having the resilience, stability, and agility to navigate through economic challenges and seize opportunities. It's the foundation that empowers individuals 
              and organizations to weather storms, pursue growth, and build a secure future
              </p>
            </div>
          </div>

          <div className="first-flex-container">
            <img src="/in-liquid-icon-4.svg" alt="icon" />
            <div className="text-blurb">
              <h1>Integrated Support</h1>
              <p>Our support connects knowledge, expertise, and resources, empowering individuals and organizations to overcome obstacles, achieve goals, and thrive together</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rect relative w-96 h-48 border-2 border-gray-200 flex items-center">
          <h2 className="absolute top-0 left-0 right-0 text-center text-lg font-bold text-orange-500 mt-2">
            Simple steps to start trade
          </h2>
          <div className="circ flex justify-center mt-12 space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-orange-500 border-solid  flex items-center justify-center text-orange-500 text-2xl font-bold mb-2">
                1
              </div>
              <p className="text-center text-gray-700">Register account</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-red-500 border-solid flex items-center justify-center text-orange-500 text-2xl font-bold mb-2">
                2
              </div>
              <p className="text-center text-gray-700">Fund your account</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-red-500 border-solid flex items-center justify-center text-orange-500 text-2xl font-bold mb-2">
                3
              </div>
              <p className="text-center text-gray-700">Start your trade</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bgh w-full h-full bg-no-repeat bg-cover">
        <div className="laptop-showcase flex flex-col md:flex-row ml-20">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/in-liquid-3-mockup.png"
              alt="Laptop"
              className="w-full mt-5"
            />
          </div>
          <div className="laptop-showcase-text  w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8">
            <p className="text-orange-400 py-3">
              AVAILABLE ON MULTIPLE PLATFORM
            </p>
            <h2 className="change-text text-4xl font-bold mb-4">
              World class platform <br />
              trade without a doubt.
            </h2>
            {/* <div className="flex justify-between">
            <img
              src="/macos-image.png"
              alt="macOS"
              className="w-1/4 mr-4"
            />
            <img
              src="/windows-image.png"
              alt="Windows"
              className="w-1/4 mr-4"
            />
            <img
              src="/android-image.png"
              alt="Android"
              className="w-1/4"
            />
          </div>  */}
          </div>
        </div>
      </section>
      <div className="second-showcase flex justify-between bg-white px-20px">
        <div>
          <p className="change-text text-4xl font-bold text-black">
            Stay ahead of the curved.
          </p>
        </div>
        <div>
          
        </div>
      </div>

      <div className="blg grid grid-cols-3 gap-10">
        <div className="border-l-2 border-red-400 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">
              Wall Street cautious on 'frothy' stocks, warn bitcoin bubble
            </h2>
            <p className="ml-5 text-gray-500">Reuters</p>
          </div>
          <p className="text-gray-400 mb-5 mt-2">June 14, 2023</p>
        </div>
        <div className="border-l-2 border-red-400 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">
              Wall Street cautious on 'frothy' stocks, warn bitcoin bubble
            </h2>
            <p className="ml-9 text-gray-500">BBC</p>
          </div>
          <p className="text-gray-400 mb-5 mt-2">June 14, 2023</p>

        </div>
        <div className="border-l-2 border-red-400 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">
              Wall Street cautious on 'frothy' stocks, warn bitcoin bubble
            </h2>
            <p className="ml-9 text-gray-500">BBC</p>
          </div>
          <p className="text-gray-400 mb-5 mt-2">June 14, 2023</p>
        </div>
      </div>

      <section className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div className="bg-white mt-10 p-4 rounded-lg">
            <img
              src="in-liquid-award.svg"
              alt="Image"
              className="w-1/5 mb-4 rounded-lg m-auto"
            />
            <h2 className="text-lg font-semibold mb-2 text-center">
              Best CFD Broker
            </h2>
            <p className="text-gray-700 text-center">iFX EXPO 2020</p>
          </div>
          <div className="bg-white mt-10 p-4 rounded-lg">
            <img
              src="in-liquid-award.svg"
              alt="Image"
              className="w-1/5 mb-4 rounded-lg m-auto"
            />
            <h2 className="text-lg font-semibold mb-2 text-center">
              Best Execution Broker
            </h2>
            <p className="text-gray-700 text-center">iFX EXPO 2020</p>
          </div>
          <div className="bg-white mt-10 p-4 rounded-lg">
            <img
              src="in-liquid-award.svg"
              alt="Image"
              className="w-1/5 mb-4 rounded-lg m-auto"
            />
            <h2 className="text-lg font-semibold mb-2 text-center">
              Best Trading Platform
            </h2>
            <p className="text-gray-700 text-center">London summit 2020</p>
          </div>
          <div className="bg-white mt-10 p-4 rounded-lg">
            <img
              src="in-liquid-award.svg"
              alt="Image"
              className="w-1/5 mb-4 rounded-lg m-auto"
            />
            <h2 className="text-lg font-semibold mb-2 text-center">
              Best Broker Asia
            </h2>
            <p className="text-gray-700 text-center">iFX EXPO 2020</p>
          </div>
        </div>
      </section>

      <div className="bg-money flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-2xl w-full p-12">
          <h2 className="text-1xl font-bold mb-12 text-center">
            Payment Method.
          </h2>
          <div className="pay-grid grid grid-cols-6 gap-12">
            <img
              src="/in-liquid-payment-1.svg"
              alt="Payment Option 1"
              className="w-full h-full"
            />
            <img
              src="/in-liquid-payment-2.svg"
              alt="Payment Option 2"
              className="pay-grid-img w-full h-full object-cover"
            />
            <img
              src="/in-liquid-payment-3.svg"
              alt="Payment Option 3"
              className="pay-grid-img w-full h-full object-cover"
            />
            <img
              src="/in-liquid-payment-4.svg"
              alt="Payment Option 4"
              className="pay-grid-img w-full h-full object-cover"
            />
            <img
              src="/in-liquid-payment-5.svg"
              alt="Payment Option 5"
              className="pay-grid-img w-full h-full object-cover"
            />
            <img
              src="/in-liquid-payment-6.svg"
              alt="Payment Option 6"
              className="pay-grid-img w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
