"use client"
import Image from 'next/image';
import "../styles.css";
import React, { useEffect, useState } from 'react';
import Header from '../header';

export default function Market() {
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
   <h1 className='text-4xl font-bold'>Putting our clients first <span className='text-red-500'>since 1986.</span> </h1>
   <p className="text-gray-500 mt-4">For more than 30 years, we’ve been empowering clients by helping them take control of their financial lives.</p>
</div>
</section> 

<div className="hgh grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto container mb-20">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Philosophy</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">History</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Culture</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
       </div>
    </div>


    <div className="bgg  w-3/4 h-full mx-auto bg-no-repeat bg-cover py-6 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 mt-4">Trust the Professionals</h1>
        <p className="text-lg text-center mb-10 mt-6 text-gray-400">We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed invest</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-4">

        <div className="flex items-start mb-10">
            <div className="mr-4">
              <Image src="/in-team-1.png" alt="Image 1" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Cheif Executive Officer</p>
              <p className='mb-4 mt-2 font-bold text-2xl'>Cynthia Taylor</p>
              <p>Nostrum exercitationem ullam corporis suscipit labor samnisi ute aliquid fugiat.</p>
              <div className="flex mt-5">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <div className="mr-4">
              <Image src="/in-team-2.png" alt="Image 2" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Executive assistant</p>
              <p className='mb-4 mt-2 font-bold text-2xl'>Arthur Parker</p>
              <p>Nostrum exercitationem ullam corporis suscipit labor samnisi ute aliquid fugiat.</p>
              <div className="flex mt-5">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>


          <div className="flex items-start">
            <div className="mr-4">
              <Image src="/in-team-3.png" alt="Image 1" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Cheif Executive Officer</p>
              <p className='mb-4 mt-2 font-bold text-2xl'>Evelyn Mason</p>
              <p>Nostrum exercitationem ullam corporis suscipit labor samnisi ute aliquid fugiat.</p>
              <div className="flex mt-5">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4">
              <Image src="/in-team-4.png" alt="Image 2" width={450} height={450} />
            </div>
            <div>
              <p className='text-gray-400'>Executive assistant</p>
              <p className='mb-4 mt-2 font-bold text-2xl'>Bryan Greene</p>
              <p>Nostrum exercitationem ullam corporis suscipit labor samnisi ute aliquid fugiat.</p>
              <div className="flex mt-5">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lst flex justify-evenly items-center mt-30">
      <div className="max-w-6xl mr-50 rounded-lg p-8">
        <div className=" mb-4">
          <h2 className="text-2xl font-bold text-gray-500 py-3">Number speaks</h2>
         <h1 className='text-6xl font-bold py-6'>We always ready <br />
for a <span className='text-red-500'>challenge.</span> </h1>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Learn more
        </button>
      </div>

      <div className="max-w-lg bg-white rounded-lg p-8 ml-4">
        <div className="flex justify-left items-start pb-2 mb-8">
          <span className="font-bold  text-6xl text-red-500 py-2 border-gray-700">{count}</span>
          <div>
          <span className="font-bold text-2xl ml-5 mt-2">Trading instruments</span>
          <div className='text-gray-400 w-3/4 ml-5 mt-5'>Reprehenderit qui in svoluptate velit esse quam molestiae vel illum qui dolorem fugiat quo.</div>
           </div> 
        </div>
        <div className="flex justify-left items-start pb-2 mb-4 mt-4">
          <span className="font-bold  text-6xl text-red-500 py-2 border-gray-700">{secondCount}</span>
          <div>
          <span className="font-bold text-2xl ml-5 mt-2">Countries covered</span>
          <div className='text-gray-400 w-3/4 ml-5 mt-5'>Reprehenderit qui in svoluptate velit esse quam molestiae vel illum qui dolorem fugiat quo.</div>
           </div> 
        </div>
        </div>
    </div>


<footer className="bg-stone-700 py-4">
  <div className="container mx-auto flex items-center justify-between">
    <img src="/logo.png" alt="Company Logo" className=" h-16" />
    <div className="space-x-4">
      <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">Company news</button>
      <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">Partnership</button>
    </div>
  </div>

  <div className='container mx-auto py-10 text-gray-200'>Copyright ©2021 Liquid Inc. All Rights Reserved.</div>
  <div className='container mx-auto py-5 text-gray-200'>Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary</div>

</footer>
</main>
  )
}
