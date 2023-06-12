import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {
  return (
    <main className="min-h-screen justify-between">
       <header className="bg-stone-700 text-white">
          <div className="container mx-auto flex items-center justify-between py-4 px-8">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
            </div>
            <nav className="space-x-4">
              <a href="#" className="hover:text-neutral-400">Home</a>
              <a href="#" className="hover:text-neutral-400">Markets</a>
              <a href="#" className="hover:text-neutral-400">Company</a>
              <a href="#" className="hover:text-neutral-400">Education</a>
              <a href="#" className="hover:text-neutral-400">Resources</a>
            </nav>
            <button className="bg-red-600 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded">
             <a href="/register">CREATE ACCOUNT</a> 
            </button>
          </div>
        </header>
        <section className="bg-stone-700 text-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-8 lg:py-16">
        <div className="lg:w-1/2">
          <img src="/in-liquid-slide-1.svg" alt="Wave Background" className="w-2/2 h-50" />
        </div>
        <div className="lg:w-1/2">
          <div className="max-w-lg mx-auto text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">New standard in stock broker.</h1>
            <p className="text-lg mb-8">Trade forex, commodities, synthetic and stock indices from a single account</p>
            <button className="hover:border-white bg-transparent hover:bg-blue text-white font-bold border-solid border-2 border-red-400 py-2 px-4 rounded">
              Discover Platform
            </button>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}
