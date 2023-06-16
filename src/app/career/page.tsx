import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";

export default function Market() {

const images = [
    'in-gallery-image-1 - Copy.jpg',
    'in-gallery-image-2 - Copy.jpg',
    'in-gallery-image-3 - Copy.jpg',
    'in-gallery-image-4 - Copy.jpg',
    'in-gallery-image-5 - Copy.jpg',
    'in-gallery-image-6 - Copy.jpg',
    ];

      
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
            <a href="#" className="hover:text-neutral-400">
              Resources
            </a>
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
   <h1 className='text-3xl font-bold'>We're a team of mission-driven <span className='text-red-500'>experts & learners.</span> </h1>
   <p className="text-gray-500 mt-4">Who are committed to making security a strength for every startup.</p>
</div>
</section> 

<div className="core blg grid grid-cols-3 gap-2 w-3/4">
        <div className="p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">
             Our opportunity
            </h2>
            </div>
           <p className="text-gray-700">
           Excepteur sint occaecat cupidatat non proident sunt in culpa qui anim officia.
          </p>
          <button className=" text-gray-400 font-bold py-2 mt-8 rounded">
            WATCH THE VIDEO->
          </button>
        </div>
        <div className="border-l-2 border-gray-300 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">
            Our team
            </h2>
           </div>
          <p className="text-gray-700">
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui anim officia.
           </p>
           <button className=" text-gray-400 font-bold py-2 mt-8 rounded">
            WATCH THE VIDEO->
          </button>
        </div>
        <div className="border-l-2 border-gray-300 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">
               Our culture
            </h2>
           </div>
            <p className="text-gray-700">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui anim officia.
          </p>
          <button className=" text-gray-400 font-bold py-2 mt-8 rounded">
            WATCH THE VIDEO->
          </button>
        </div>
      </div>

<section className='mx-auto container'>
    <h1 className='text-center text-3xl text-black font-bold mt-20'>Open positions</h1>
</section>

<section className='edu mx-auto container  py-10 border-b border-gray-300'>
    <div className="section-flex">
        <div className="first-grid">
            <h1 className='text-lg px-2 font-bold text-black'>
            Solutions engineer (entry level)</h1>
        </div>
    </div>

    <div className="second-grid mr-16">
        <p className='text-1xl text-gray-500 mr-8'>Stockholm, Sweden</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-white font-bold custom-button p-3 rounded'>APPLY FOR THIS JOB</button>
    </div>
</section>

<section className='edu mx-auto container  py-10 border-b border-gray-300'>
    <div className="section-flex">
        <div className="first-grid">
            <h1 className='text-lg px-2 font-bold text-black'>
            Solutions engineer (entry level)
            </h1>
        </div>
    </div>

    <div className="second-grid mr-16">
        <p className='text-1xl text-gray-500 mr-8'>Stockholm, Sweden</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-white font-bold custom-button p-3 rounded'>APPLY FOR THIS JOB</button>
    </div>
</section>

<section className='edu mx-auto container  py-10 border-b border-gray-300'>
    <div className="section-flex">
        <div className="first-grid">
            <h1 className='text-lg px-2 font-bold text-black'>
            Solutions engineer (entry level)
            </h1>
        </div>
    </div>

    <div className="second-grid mr-16">
        <p className='text-1xl text-gray-500 mr-8'>Stockholm, Sweden</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-white font-bold custom-button p-3 rounded'>APPLY FOR THIS JOB</button>
    </div>
</section>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto py-16 container max-w-5xl">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden cursor-pointer "
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-4/4 h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
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
