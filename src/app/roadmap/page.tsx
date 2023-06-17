import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";


export default function Customers() {
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
            <div className='text-center mx-auto container px-8 py-8'>
            <h1 className='text-4xl font-bold'>We're constantly updating our <span className='text-red-500'>roadmap.</span> </h1>
            <p className="text-gray-500 mt-4">Bring transparency for our users and to get your feedback - keep up to date with upcoming products, services, and helpful resources.</p>
            <p className="text-gray-500 mt-4">You can follow our progress here or follow us on Twitter <span className='text-red-500 font-bold'>@liquid-x</span></p>
            </div>
      </section> 
  
    <div className="second-flex-2 mb-24">
      
    <div className="blog-categories a h-64 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
      <h1 className='text-black mb-6 font-bold cat-h1 text-1xl w-full'>Q4 2019 <span className='bg-green-400 p-2 text-xs text-white rounded ml-4'>completed</span></h1>
            <div className="ctgry i mt-8">
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Wireframe</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Design</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Documentation</h1>
          </div>
      </div>

      <div className="blog-categories global h-72 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
      <h1 className='text-black mb-6 font-bold cat-h1 text-1xl w-full'>Q2 2020 <span className='bg-green-400 p-2 text-xs text-white rounded ml-4'>on progress</span></h1>
            <div className="ctgry i mt-8">
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Chart with base functional</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Launching plans and billings</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Availability panel</h1>
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Improvement of the rest of the functions of the Chart</h1>
          </div>
      </div>

      <div className="blog-categories globl h-72 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
      <h1 className='text-black mb-6 font-bold cat-h1 text-1xl w-full'>Q2 2021 <span className='bg-green-400 p-2 text-xs text-white rounded ml-4'>planned</span></h1>
            <div className="ctgry i mt-8">
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Chart with base functional</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Launching plans and billings</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Availability panel</h1>
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Improvement of the rest of the functions of the Chart</h1>
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Community formation and the subsequent cyclic completion of the product based on the wishes of customers</h1>
         
          </div>
      </div>


    </div>


<footer className="bg-stone-700 py-4 mt-20">
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
