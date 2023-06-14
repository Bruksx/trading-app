import Image from 'next/image';
import Carousel from './Carousel';
import "./styles.css";

export default function Home() {
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
    <button className="bg-red-600 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded">
      <a href="/register">CREATE ACCOUNT</a>
    </button>
  </div>
</header>
      <Carousel/>
      <div className="second-showcase flex justify-between bg-black px-20px">
      <div>
        <p className="text-4xl font-bold text-white">
          Save time. Get <span className='text-red-400'>higher return</span>. <br /> Multiply wealth.
        </p>
      </div>
      <div>
        <button className="bg-transparent-500 hover:bg-red-500 text-white font-bold py-3 px-8 border border-red-500 border-solid rounded">
          Find out more
        </button>
      </div>
    </div>

    <div className="sec-showcase grid grid-cols-3 gap-9 bg-black">
      <div className="grd bg-white p-4 shadow-md">
        <img
          src="/in-liquid-object-1.svg"
          alt="Card 1"
          className="w-full h-40 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2">Various assets</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd bg-white p-4 shadow-md">
        <img
          src="/in-liquid-object-2.svg"
          alt="Card 2"
          className="w-full h-40 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2">Market analysis</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grd bg-white p-4 shadow-md">
        <img
          src="/in-liquid-object-2.svg"
          alt="Card 3"
          className="w-full h-40 object-cover mb-2"
        />
        <p className="text-lg font-semibold text-white py-2">Enhanced tools</p>
        <p className="text-gray-600 text-white py-6">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>

    <div className="third-container">

      <div className="first-flex">
      <div className="first-flex-container">
        <img src="/in-liquid-icon-1.svg" alt="icon"  />
        <div className="text-blurb">
          <h1>Expert Service</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium veritatis asperiores placeat quisquam voluptas repellendus.</p>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className="first-flex-container">
        <img src="/in-liquid-icon-2.svg" alt="icon"  />
        <div className="text-blurb">
          <h1>Fully regulated</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium veritatis asperiores placeat quisquam voluptas repellendus.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      
      </div>

      <div className="first-flex py-10">
      <div className="first-flex-container">
        <img src="/in-liquid-icon-3.svg" alt="icon"  />
        <div className="text-blurb">
          <h1>Financial Strength</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium veritatis asperiores placeat quisquam voluptas repellendus.</p>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className="first-flex-container">
        <img src="/in-liquid-icon-4.svg" alt="icon"  />
        <div className="text-blurb">
          <h1>Integrated Support</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium veritatis asperiores placeat quisquam voluptas repellendus.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      
      </div>


      
    </div>
    </main>
  )
}
