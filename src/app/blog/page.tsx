import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";

export default function Blog() {

      
  return (
    <main className="min-h-screen justify-between">
         <header className="header">
        <div className="custom-container">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 mr-4 logo" />
            <p className="company-name">LarvaTrade</p>
          </div>
          <nav className="space-x-4 nav">
            <a href="#" className="hover:text-neutral-400">
              Home
            </a>
            <a href="#" className="hover:text-neutral-400">
              Markets
            </a>
            <div className="dropdown inline-block relative">
              <button className="hover:text-neutral-400">Company</button>
              <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <a href="#" className="hover:text-neutral-400">
              Education
            </a>
            <div className="dropdown inline-block relative">
            <button className="hover:text-neutral-400">Resources</button>
              <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
              </ul>
            </div>
          </nav>
          <button className="bg-red-500 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded custom-button">
            <a href="/register">CREATE ACCOUNT</a>
          </button>
          <a href="/login">
            <BsPersonCircle color="#FC5B3F" size={20}/>
          </a>
        </div>
      </header>

      <section>
        <div className="blog-flex container mx-auto max-w-6xl ">
            <div className="blog-flex-first">

            <div className="blog-card max-w-2xl">
                    <div className='blog-img py-0 px-0'>
                        <img src="/image-featured-a4DfvV.jpg" alt="pic" className='py-0 px-0 w-full blog-img' />
                    </div>
                    <h1 className='pt-10 pb-4 text-gray-3000 pl-6 text-black text-2xl font-bold'>The typical U.S. household is spending $445 more a month due to inflation</h1>
                    <p className='pt-3 pl-6 pr-5 pb-8'>Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...</p>

                    <div className="small-flex pl-6 pb-4">
                        <div className='flexpr'>
                        <img src="/author-85z9UC.jpg" alt="pic" className='rounded-full' />
                        <p className='pl-5'>Warren Wong </p> 
                        </div>
                        <p className='pr-4'>December 29, 2022</p>
                    </div>
                    <div className='mt-5 flx'>
                        <button className='plt'>Politics</button>
                        <button className='text-red-400 font-bold'>READ MORE</button>
                    </div>
                </div>

                <div className="blog-card max-w-2xl mt-12">
                    <div className='blog-img py-0 px-0'>
                        <img src="/image-featured-a4DfvV.jpg" alt="pic" className='py-0 px-0 w-full blog-img' />
                    </div>
                    <h1 className='pt-10 pb-4 text-gray-3000 pl-6 text-black text-2xl font-bold'>The typical U.S. household is spending $445 more a month due to inflation</h1>
                    <p className='pt-3 pl-6 pr-5 pb-8'>Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...</p>

                    <div className="small-flex pl-6 pb-4">
                        <div className='flexpr'>
                        <img src="/author-85z9UC.jpg" alt="pic" className='rounded-full' />
                        <p className='pl-5'>Warren Wong </p> 
                        </div>
                        <p className='pr-4'>December 29, 2022</p>
                    </div>
                    <div className='mt-5 flx'>
                        <button className='plt'>Politics</button>
                        <button className='text-red-400 font-bold'>READ MORE</button>
                    </div>
                </div>
                <div className='mt-12 text-center'>
                       <button className='plt b mr-8'>Previous</button>
                       <button className='plt b'>Next</button>
                </div>
            </div>
            <div className="blog-flex-second">
                <div className="search-btn">
                <input type="text" placeholder='Search here' />
                <button className='border-gray-200 px-8 py-2 text-white custom-button font-bold'>Search</button>
                </div>

                <div className="blog-categories">
                    <h1 className='text-black font-bold text-1xl mb-6 cat-h1'>Categories</h1>
                        <div className="ctgry">
                            <h1>Health</h1>
                            <p>2</p>
                        </div>
                        <div className="ctgry">
                            <h1>Investment</h1>
                            <p>2</p>
                        </div>
                        <div className="ctgry">
                            <h1>Politics</h1>
                            <p>2</p>
                        </div>
                        <div className="ctgry">
                            <h1>Technology</h1>
                            <p>2</p>
                        </div>
                        <div className="ctgry">
                            <h1>Travel</h1>
                            <p>2</p>
                        </div>
                </div>

                <div className="blog-news">
                    <h1 className='text-black font-bold text-1xl mb-6 cat-h1'>Latest news</h1>
                    <div className="ltst">
                        <p className='hover:text-red-500 text-1xl mb-5 pb-5 border-b border-300-gray cursor-pointer'>The typical U.S. household is spending $445 more a month ..</p>
                        <p className='text-gray-400 pt-2'>December 29, 2022</p>
                        
                    </div>
                    <div className="ltst">
                        <p className='hover:text-red-500 text-1xl mb-5 pb-5 border-b border-300-gray cursor-pointer'>The typical U.S. household is spending $445 more a month ..</p>
                        <p className='text-gray-400 pt-2'>December 29, 2022</p>
                      
                    </div>
                    <div className="ltst">
                        <p className='hover:text-red-500 text-1xl mb-5 pb-5 border-b border-300-gray cursor-pointer'>The typical U.S. household is spending $445 more a month ..</p>
                        <p className='text-gray-400 pt-2'>December 29, 2022</p>
                        
                        
                    </div>
                </div>

                <div className="blog-tag">
                    <h1 className='text-black font-bold text-1xl mb-6 cat-h1'>Tag</h1>
                    <div className="btn-flex">
                    <button className='plt a'>#biden</button>
                    <button className='plt a'>#diet</button>
                    <button className='plt a'>#europe</button>
                    </div>
                    <div className="btn-flex">
                       <button className='plt a'>#biden</button>
                       <button className='plt a'>#diet</button>
                       <button className='plt a'>#europe</button>
                    </div>
                    <div className="btn-flex">
                    <button className='plt a'>#usa</button>
                    <button className='plt a'>#virus</button>
                    <button className='plt a'>#europe</button>
                    </div>
                </div>

            </div>
        </div>
      </section>


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
