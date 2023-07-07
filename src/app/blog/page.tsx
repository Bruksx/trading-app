import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";
import Header from "../components/header";
import Footer from "../components/Footer"

export default function Blog() {

      
  return (
    <main className="min-h-screen justify-between">
      <Header/>

      <section>
        <div className="blog-flex container mx-auto max-w-6xl ">
            <div className="blog-flex-first">

            <div className="blog-card max-w-2xl">
                    <div className='blog-img py-0 px-0'>
                        <img src="/image-featured-a4DfvV.jpg" alt="pic" className='pic py-0 px-0 w-full blog-img' />
                    </div>
                    <h1 className='header-txt pt-10 pb-4 text-gray-3000 pl-6 text-black text-2xl font-bold'>The typical U.S. household is spending $445 more a month due to inflation</h1>
                    <p className='header-p pt-3 pl-6 pr-5 pb-8'>Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...</p>

                    <div className="small-flex pl-6 pb-4">
                        <div className='flexpr'>
                        <img src="/author-85z9UC.jpg" alt="pic" className='oic-blog rounded-full' />
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
                        <img src="/image-featured-a4DfvV.jpg" alt="pic" className='pic py-0 px-0 w-full blog-img' />
                    </div>
                    <h1 className='header-txt pt-10 pb-4 text-gray-3000 pl-6 text-black text-2xl font-bold'>The typical U.S. household is spending $445 more a month due to inflation</h1>
                    <p className='header-p pt-3 pl-6 pr-5 pb-8'>Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...</p>

                    <div className="small-flex pl-6 pb-4">
                        <div className='flexpr'>
                        <img src="/author-85z9UC.jpg" alt="pic" className='pic-blog rounded-full' />
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
      <Footer/>
</main>
  )
}
