"use client"
import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";
import React, { useEffect, useState } from 'react';
import Header from '../header';
import Footer from "../Footer";

export default function Customers() {
    const [count, setCount] = useState(0);
  const [secondCount, setsecondCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondCount < 442) {
        setsecondCount(secondCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [secondCount]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 796) {
        setCount(count + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <main className="min-h-screen justify-between">
      <Header/>
      <div className="flex justify-center items-center max-w-2xl container mx-auto ">
      <div className="lrt flex justify-evenly items-start">
        <div className="max-w-6xl mr-50 rounded-lg p-8">
          <div className="mb-4">
            <h1 className="heading-txt text-3xl font-bold pt-3">
              We <span className="text-red-500">help</span> our customers.
            </h1>
            <h2 className="ivest-p text-2xl text-gray-400 py-3">
              To engage investors so their companies can grow
            </h2>
          </div>
          <p className=" text-400-gray">
            Our customers look to us as guides, and we weave our deep legal and technical experience into our software and
            services.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 ml-4">
          <div className="flex flex-col justify-left items-start pb-2 mb-8">
            <span className="font-bold text-3xl text-red-500 py-2 border-gray-700">{count}</span>
            <button className="bg-green-400 text-white rounded py-2 px-10">Business</button>
            <div></div>
          </div>
          <div className="flex flex-col justify-left items-start pb-2 mb-8">
            <span className="font-bold text-3xl text-red-500 py-2 border-gray-700">{secondCount}</span>
            <div>
              <button className="bg-green-400 text-white rounded py-2 px-10">Investors</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section-flex-customers container mx-auto">
    <div className="blog-categories test-mobile w-2/4 container mx-auto shadow shadow-lg hover:shadow-lg">
                    <h1 className='text-gray-500 text-lg mb-6 cat-h1'>"The extension makes collecting feedback so much easier! Shipright then really helps us make decisions based on the data we collected.</h1>
                        <div className="ctgry mt-12">
                          <div>
                            <img src="/in-client-testi-1.svg" className='w-1/4' alt="image"/>
                            <p className='mt-3 font-bold text-lg text-gray-400'>Gabrielle Barger</p>
                            <p className='mt-3 text-gray-500'>HELP DESK AT PUSHBULLET</p>
                          </div>
                          <div className="flex justify-end">
                            <img className="w-3/4 mr-18" src="/in-testimoni-2.png" alt="image" />
                          </div>

                        </div>
        </div>
        <div className="blog-categories test-mobile-this w-2/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
                    <h1 className='text-gray-500 text-lg mb-6 cat-h1'>"The extension makes collecting feedback so much easier! Shipright then really helps us make decisions based on the data we collected.</h1>
                        <div className="ctgry mt-12">
                          <div>
                            <img src="/in-client-testi-2.svg" className='w-1/4' alt="image"/>
                            <p className='mt-3 font-bold text-lg text-gray-400'>Melvin Cortez</p>
                            <p className='mt-3 text-gray-500'>CLOUD ARCHITECT AT STORMPATH</p>
                          </div>
                          <div className="flex justify-end">
                            <img className="w-3/4 mr-18" src="/in-testimoni-3.png" alt="image" />
                          </div>

                        </div>
        </div>
    </div>

    <div className="second-flex-2">
      
    <div className="blog-categories card-flex w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
    <div className="flex justify-start">
        <img className="this-img mb-14" src="/in-client-testi-2.svg" alt="image" />
    </div>
      <h1 className='text-gray-500 mb-6 cat-h1 w-full'>"The extension makes collecting feedback so much easier! Shipright then really helps us make decisions based on the data we collected.</h1>
            <div className="ctgry mt-12">
              <div>
                <p className='mt-3 font-bold text-lg text-black'>Melvin Cortez</p>
                <p className='mt-3 text-gray-500'>CLOUD ARCHITECT AT STORMPATH</p>
              </div>
          </div>
        </div>

        <div className="blog-categories card-flex w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
    <div className="flex justify-start">
        <img className="this-img mb-14" src="/in-client-testi-2.svg" alt="image" />
    </div>
      <h1 className='text-gray-500  mb-6 cat-h1 w-full'>"The extension makes collecting feedback so much easier! Shipright then really helps us make decisions based on the data we collected.</h1>
            <div className="ctgry mt-12">
              <div>
                <p className='mt-3 font-bold text-lg text-black'>Melvin Cortez</p>
                <p className='mt-3 text-gray-500'>CLOUD ARCHITECT AT STORMPATH</p>
              </div>
          </div>
        </div>

        <div className="blog-categories card-flex w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
    <div className="flex justify-start">
        <img className="this-img mb-14" src="/in-client-testi-2.svg" alt="image" />
    </div>
      <h1 className='text-gray-500  mb-6 cat-h1 w-full'>"The extension makes collecting feedback so much easier! Shipright then really helps us make decisions based on the data we collected.</h1>
            <div className="ctgry mt-12">
              <div>
                <p className='mt-3 font-bold text-lg text-black'>Melvin Cortez</p>
                <p className='mt-3 text-gray-500'>CLOUD ARCHITECT AT STORMPATH</p>
              </div>
          </div>
        </div>

    </div>
    <Footer/>
</main>
  )
}
