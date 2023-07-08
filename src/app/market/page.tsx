"use client"

import Image from 'next/image';
import "../styles.css";
import Header from '../components/header';
import Footer from '../components/Footer'

export default function Market() {
  return (
    <main className="min-h-screen justify-between">
      <Header/>

<div className="second-showcase flex justify-between bg-white px-20px">
      <div>
        <p className="heading-txt text-4xl font-bold text-black">
        A <span className='text-red-400'>relationship</span> on your terms.
        </p>
        <p className='text-gray-400 text-lg mt-2'>Work with us the way you want.</p>
        <p className=' heading-p text-gray-400 mt-4 '>Some believe you must choose between an online broker and a wealth management firm. At Liquid, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.</p>
      </div>
      <div>
      </div>
</div>

<div className="sec-showcase grid grid-cols-3 gap-9 bg-white">
      <div className="grd-mkt bg-emerald-400 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-1.svg"
          alt="Card 1"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Investing</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd-mkt bg-blue-500 bg-blue-400 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-2.svg"
          alt="Card 2"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Market analysis</p>
        <p className="text-gray-600 text-white py-6">Detailed assessment of your business target market and the competitive landscape within a specific industry</p>
      </div>
      <div className="grd-mkt  bg-purple-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-3.svg"
          alt="Card 3"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Enhanced tools</p>
        <p className="text-gray-600 text-white py-6">Placing funds money into various assets such as stocks, bonds, real estate, mutual funds, or other financial instruments, with the aim of growing wealth over time</p>
      </div>
    </div>

    <div className="sec-showcase grid grid-cols-3 gap-9 bg-white">
      <div className="grd-mkt bg-zinc-800 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-1.svg"
          alt="Card 1"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Investment advisory</p>
        <p className="text-gray-600 text-white py-6">Assessing your risk tolerance,  ability and willingness to endure fluctuations in the value of your investments.</p>
      </div>
      <div className="grd-mkt bg-neutral-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-2.svg"
          alt="Card 2"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Smart portfolio</p>
        <p className="text-gray-600 text-white py-6"> collection of financial assets specifically selected and managed for trading purposes</p>
      </div>
      <div className="grd-mkt bg-red-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-3.svg"
          alt="Card 3"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Mutual fund advisor</p>
        <p className="text-gray-600 text-white py-6">provides guidance and management services for investment funds</p>
      </div>
    </div>

    

    <div className="second-showcase flex justify-between bg-gray-200 px-20px">
      <div>
        <p className="heading-20 text-2xl font-bold text-black">
        Get up to $600 plus 60 days of commission-free stocks & forex trades

        </p>
      </div>
      <div>
        <button className="btn-hide bg-transparent-500 hover:bg-gray-300 text-black font-bold py-3 px-8 border border-black border-solid rounded">
          <a href='/signup'>Open an account</a>
        </button>
      </div>
    </div>
    <Footer/>
</main>
  )
}
