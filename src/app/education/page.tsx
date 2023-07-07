"use client"
import Image from 'next/image';
import "../styles.css";
import Header from '../components/header';
import Footer from "../components/Footer"

export default function Education() {
  return (
    <main className="min-h-screen justify-between">
      <Header/>
      <div className="edu-flex flex">
            <div className="edu-text w-1/2 bg-white p-8">
              <h1 className="heading-txt text-4xl font-bold mb-6"><span  className="text-red-400">Knowledge</span> is a wise investment.</h1>
              <p className="heading-p text-gray-400 text-2xl mb-6 py-8">By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting and more approachable.</p>
              <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Learn</button>
            </div>
            <div className="full-sect w-2/5 bg-gray-100 shadow p-8 flex items-center mt-5 mb-5">
              <div>
                <h1 className="heading-txt text-2xl font-bold mb-4">Trader Academy</h1>
                <p className="heading-p text-gray-600 mb-4">Reprehenderit in voluptate velit esse cillum dolore laboris.</p>
                <button className="bg-transparent text-gray-400  py-2  rounded">Start Learning</button>
              </div>
              <img src="/in-liquid-object-2.svg" alt="Image" className="ml-4 w-2/5" />
            </div>
      </div>

      <section className='edu mx-auto container mt-50 py-10 border-b border-gray-300'>
          <div className="section-flex">
              <div className="first-grid">
                  <div>
                      <img src="/in-liquid-icon-1.svg" alt="icon" />
                  </div>
                  <h1 className='text-2xl px-2 text-black font-bold'>Stocks</h1>
              </div>
          </div>

          <div className="second-grid">
              <p className='p-space text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
          </div>

          <div className="third-grid">
              <button className='text-1xl text-gray-500'>Enter Course </button>
          </div>
      </section>


      <section className='edu mx-auto container  py-10 border-b border-gray-300'>
          <div className="section-flex">
              <div className="first-grid">
                  <div>
                      <img src="/in-liquid-icon-1.svg" alt="icon" />
                  </div>
                  <h1 className='text-2xl px-2 font-bold text-black'>Stocks</h1>
              </div>
          </div>

          <div className="second-grid">
              <p className='p-space text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
          </div>

          <div className="third-grid">
              <button className='text-1xl text-gray-500'>Enter Course </button>
          </div>
      </section>

      <section className='edu mx-auto container  py-10 border-b border-gray-300'>
          <div className="section-flex">
              <div className="first-grid">
                  <div>
                      <img src="/in-liquid-icon-1.svg" alt="icon" />
                  </div>
                  <h1 className='text-2xl px-2 font-bold text-black'>Stocks</h1>
              </div>
          </div>

          <div className="second-grid">
              <p className='p-space text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
          </div>

          <div className="third-grid">
              <button className='text-1xl text-gray-500'>Enter Course </button>
          </div>
      </section>

      <div className="flex justify-center mt-14 mb-10">
            <div className="feature-grid grid grid-cols-3 gap-6">
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded py-4 px-20 flex items-center justify-center text-gray-500">
                Fast academy
              </div>
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded  py-4 px-20 flex items-center justify-center text-gray-500">
                Video tutorials
              </div>
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded  py-4 px-20 flex items-center justify-center text-gray-500">
                Course
              </div>
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded  py-4 px-20 flex items-center justify-center text-gray-500">
                E-books
              </div>
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded  py-4 px-20 flex items-center justify-center text-gray-500">
                Glossary
              </div>
              <div className="hover:border-red-400 hover:text-red-400 border border-gray-400 rounded  py-4 px-20 flex items-center justify-center text-gray-500">
                Trading info
              </div>
            </div>
      </div>


      <div className="relative mx-auto container mt-18 mb-12 rounded">
            <div className="absolute inset-0">
              <img
                className="w-full h-3/4 object-cover rounded"
                src="/in-card-background-1.jpg"
                alt="Background Image"
              />
            </div>
            <div className="relative z-10">
              <div className="container mx-auto px-4">
                <div className="py-10 lg:py-20">
                  <div className="lg:flex lg:items-center ml-8">
                    <div className="lg:w-1/2">
                      <h1 className="heading-txt text-4xl font-bold text-white">Free Account</h1>
                      <p className="hide-txt text-lg text-gray-300 mt-4">
                      Practice Stocks and CFDs trading in a risk-free environment.
                      </p>
                      <button className="space-btn bg-white hover:bg-blue-600 text-gray-600 px-8 rounded py-3 mt-8 mb-12">
                        <a href='signup/'>Open an account</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

<Footer/>
</main>
  )
}
