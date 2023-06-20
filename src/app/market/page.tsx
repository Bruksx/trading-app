"use client"

import Image from 'next/image';
import "../styles.css";
import Header from '../header';
import Footer from '../Footer'

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
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd-mkt  bg-purple-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-3.svg"
          alt="Card 3"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Enhanced tools</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd-mkt bg-neutral-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-2.svg"
          alt="Card 2"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Smart portfolio</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd-mkt bg-red-500 p-4 shadow-md rounded">
        <img
          src="/in-liquid-object-3.svg"
          alt="Card 3"
          className="w-1/5 h-20 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2 border-b border-gray-300">Mutual fund advisor</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>

    <div className="container mx-auto flex flex-wrap py-10">
      {/* First side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex items-start mr-8">
          <img
            src="/in-liquid-object-1.svg"
            alt="Small Image"
            className="hide-img w-40 h-40 mr-2"
          />
          <div className='px-30'>
            <h2 className="heading-txt text-3xl font-bold">Why trade with Liquid?</h2>
            <p className="heading-p text-gray-500 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation repudiandae ullamco.</p>
            <div className="flex justify-left mt-4">
          <ul className='hide-table'>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Direct Market Access (DMA)</a></li>
            <li className='my-4'><a href="#"  className='text-gray-500 my-8'>Leverage up to 1:500</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>T+0 settlement</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Dividends paid in cash</a></li>
          </ul>
          <ul className='hide-table ml-5'>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Free from UK Stamp Duty</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Short selling available</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Commissions from 0.08%</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Access to 1500 global shares</a></li>
          </ul>
        </div>
          </div>
        </div>

      </div>

      {/* Second side */}
      <div className="w-full md:w-1/2 p-4">
        <div>
          <h2 className="heading-txt mg-b text-2xl font-bold">Our Shares offer</h2>
          <table className="table-center mt-4 pt-10">
            <thead>
              <tr>
                <th className="bg-gray-300 px-4 py-4 border-r border-gray-200">Name</th>
                <th className="bg-gray-300 px-4 py-4">Initial Deposit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" bg-gray-200 px-4 py-4 border-r border-gray-200">Apple</td>
                <td className="border bg-gray-200 px-4 py-4">10%</td>
              </tr>
              <tr>
                <td className=" bg-white px-4 py-4 border-r border-l border-gray-200">Ali baba CFD</td>
                <td className="border-r border-gray-200 bg-white px-4 py-4">10%</td>
              </tr>
              <tr>
                <td className=" bg-gray-200 px-4 py-4 border-r border-gray-200">Facebook CFD</td>
                <td className="border bg-gray-200 px-4 py-4">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
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
          Open an account
        </button>
      </div>
    </div>
    <Footer/>
</main>
  )
}
