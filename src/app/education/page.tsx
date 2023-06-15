import Image from 'next/image';
import "../styles.css";

export default function Education() {
  return (
    <main className="min-h-screen justify-between">
      <header className="bg-stone-700 text-white sticky top-0 z-50 ">
  <div className="container mx-auto flex items-center justify-between py-4 px-8">
    <div className="flex items-center">
      <img src="/logo.png" alt="Logo" className="h-12 mr-4" />
    </div>
    <nav className="space-x-4">
      <a href="#" className="hover:text-neutral-400">Home</a>
      <a href="#" className="hover:text-neutral-400">Markets</a>
      <div className="dropdown inline-block relative">
        <button className="hover:text-neutral-400">Company</button>
        <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <a href="#" className="hover:text-neutral-400">Education</a>
      <a href="#" className="hover:text-neutral-400">Resources</a>
    </nav>
    <button className="bg-red-500 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded">
      <a href="/register">CREATE ACCOUNT</a>
    </button>
  </div>
</header>


<div className="flex">
      <div className="w-1/2 bg-white p-8">
        <h1 className="text-4xl font-bold mb-6"><span  className="text-red-400">Knowledge</span> is a wise investment.</h1>
        <p className=" text-gray-400 text-2xl mb-6 py-8">By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting and more approachable.</p>
        <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Learn</button>
      </div>
      <div className="w-2/5 bg-gray-100 shadow p-8 flex items-center mt-5 mb-5">
        <div>
          <h1 className="text-2xl font-bold mb-4">Trader Academy</h1>
          <p className="text-gray-600 mb-4">Reprehenderit in voluptate velit esse cillum dolore laboris.</p>
          <button className="bg-transparent text-gray-400  py-2  rounded">Start Learning ></button>
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
        <p className='text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-gray-500'>Enter Course ></button>
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
        <p className='text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-gray-500'>Enter Course ></button>
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
        <p className='text-1xl text-gray-500'>Learn the basic concepts of forex trading, what this market is all about, <br />and why you should be a part of it.</p>
    </div>

    <div className="third-grid">
        <button className='text-1xl text-gray-500'>Enter Course ></button>
    </div>
</section>

<div className="flex justify-center mt-14 mb-10">
      <div className="grid grid-cols-3 gap-6">
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
                <h1 className="text-4xl font-bold text-white">Free Demo Account</h1>
                <p className="text-lg text-gray-300 mt-4">
                Practice Stocks and CFDs trading in a risk-free environment.
                </p>
                <button className="bg-white hover:bg-blue-600 text-gray-600 px-8 rounded py-3 mt-8 mb-12">
                 Open an account
                </button>
              </div>
            </div>
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
