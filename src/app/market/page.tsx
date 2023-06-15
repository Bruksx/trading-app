import Image from 'next/image';
import "../styles.css";

export default function Market() {
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

<div className="second-showcase flex justify-between bg-white px-20px">
      <div>
        <p className="text-4xl font-bold text-black">
        A <span className='text-red-400'>relationship</span> on your terms.
        </p>
        <p className='text-gray-400 text-lg mt-2'>Work with us the way you want.</p>
        <p className='text-gray-400 mt-4 '>Some believe you must choose between an online broker and a wealth management firm. At Liquid, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.</p>
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
            className="w-40 h-40 mr-2"
          />
          <div className='px-30'>
            <h2 className="text-3xl font-bold">Why trade with Liquid?</h2>
            <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation repudiandae ullamco.</p>
            <div className="flex justify-left mt-4">
          <ul>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Direct Market Access (DMA)</a></li>
            <li className='my-4'><a href="#"  className='text-gray-500 my-8'>Leverage up to 1:500</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>T+0 settlement</a></li>
            <li className='my-4'><a href="#" className='text-gray-500 my-8'>Dividends paid in cash</a></li>
          </ul>
          <ul className='ml-5'>
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
          <h2 className="text-2xl font-bold">Our Shares offer</h2>
          <table className="mt-4">
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
        <p className="text-2xl font-bold text-black">
        Get up to $600 plus 60 days of commission-free stocks & forex trades

        </p>
      </div>
      <div>
        <button className="bg-transparent-500 hover:bg-gray-300 text-black font-bold py-3 px-8 border border-black border-solid rounded">
          Open an account
        </button>
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
