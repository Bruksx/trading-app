"use client"
import Image from 'next/image';
import "../styles.css";
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer'

export default function About() {
  const [count, setCount] = useState(0);
  const [secondCount, setsecondCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondCount < 27) {
        setsecondCount(secondCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [secondCount]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 213) {
        setCount(count + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <main className="min-h-screen justify-between">
      <Header/>

<section>
<div className='text-center mx-auto container px-8 py-8'>
   <h1 className='heading-txt text-4xl font-bold'>Putting our clients first <span className='text-red-500'>since 1986.</span> </h1>
   <p className="heading-p text-gray-500 mt-4">For more than 30 years, we’ve been empowering clients by helping them take control of their financial lives.</p>
</div>
</section> 

<div className="hgh grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto container mb-20">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Philosophy</h2>
        <p className="text-gray-600">At LarvaTrade, we believe in a set of core principles that guide our actions and define our company philosophy. 
          These principles reflect our commitment to delivering exceptional products/services,
           fostering a positive work culture, and creating long-term value for our customers, employees, and stakeholders</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">History</h2>
        <p className="text-gray-600"> was founded in 1985  Since its humble beginnings, the company has grown steadily, evolving into a prominent player in its industry</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Culture</h2>
        <p className="text-gray-600">At LarvaTrade, we foster a vibrant and inclusive company culture that promotes collaboration, innovation, and a sense of purpose. Our company culture is built upon a set of core values and beliefs that
         guide our behaviors, decisions, and interactions. Here is an overview of our company culture:</p>
       </div>
    </div>


    <div className="bgg  w-3/4 h-full mx-auto bg-no-repeat bg-cover py-6 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="heading-txt text-4xl font-bold text-center mb-6 mt-4">Trust the Professionals</h1>
        <p className="heading-p text-lg text-center mb-10 mt-6 text-gray-400">We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed invest</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-4">

        <div className="flex items-start mb-10">
            <div className="mr-4">
              <Image src="/in-team-1.png" alt="Image 1" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Cheif Executive Officer</p>
              <p className='heading-txt mb-4 mt-2 font-bold text-2xl'>Cynthia Taylor</p>
              
              
            </div>
          </div>

          <div className="flex items-start mb-10">
            <div className="mr-4">
              <Image src="/in-team-2.png" alt="Image 2" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Executive assistant</p>
              <p className='heading-txt mb-4 mt-2 font-bold text-2xl'>Arthur Parker</p>
              
              
            </div>
          </div>


          <div className="flex items-start">
            <div className="mr-4">
              <Image src="/in-team-3.png" alt="Image 1" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Cheif Executive Officer</p>
              <p className='heading-txt mb-4 mt-2 font-bold text-2xl'>Evelyn Mason</p>
              
              
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4">
              <Image src="/in-team-4.png" alt="Image 2" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Executive assistant</p>
              <p className='heading-txt mb-4 mt-2 font-bold text-2xl'>Bryan Greene</p>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lst flex justify-evenly items-center mt-30">
      <div className="max-w-6xl mr-50 rounded-lg p-8">
        <div className=" mb-4">
          <h2 className="text-2xl font-bold text-gray-500 py-3">Number speaks</h2>
         <h1 className='heading-bg text-6xl font-bold py-6'>We always ready <br />
for a <span className='text-red-500'>challenge.</span> </h1>
        </div>
        
      </div>

      <div className="max-w-lg bg-white rounded-lg p-8 ml-4">
        <div className="flx-cl flex justify-left items-start pb-2 mb-8">
          <span className="font-bold  text-6xl text-red-500 py-2 border-gray-700">{count}</span>
          <div>
          <span className="font-bold text-2xl ml-5 mt-2">Trading instruments</span>
          <div className='hide-p text-gray-400 w-3/4 ml-5 mt-5'>Reprehenderit qui in svoluptate velit esse quam molestiae vel illum qui dolorem fugiat quo.</div>
           </div> 
        </div>
        <div className="flx-cl flex justify-left items-start pb-2 mb-4 mt-4">
          <span className="font-bold  text-6xl text-red-500 py-2 border-gray-700">{secondCount}</span>
          <div>
          <span className="font-bold text-2xl ml-5 mt-2">Countries covered</span>
          <div className='hide-p text-gray-400 w-3/4 ml-5 mt-5'>Reprehenderit qui in svoluptate velit esse quam molestiae vel illum qui dolorem fugiat quo.</div>
           </div> 
        </div>
        </div>
    </div>
    <Footer/>
</main>
  )
}
