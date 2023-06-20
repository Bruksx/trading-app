import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";
import Header from '../header';
import Footer from "../Footer";

export default function Customers() {
  return (
    <main className="min-h-screen justify-between">
    <Header/>
      <section>
            <div className='text-center mx-auto container px-8 py-8'>
            <h1 className='heading-txt text-4xl font-bold'>We're constantly updating our <span className='text-red-500'>roadmap.</span> </h1>
            <p className="text-gray-500 mt-4">Bring transparency for our users and to get your feedback - keep up to date with upcoming products, services, and helpful resources.</p>
            <p className="text-gray-500 mt-4">You can follow our progress here or follow us on Twitter <span className='text-red-500 font-bold'>@liquid-x</span></p>
            </div>
      </section> 
  
    <div className="second-flex-2 mb-24">
      
    <div className="blog-categories test-mobile a h-64 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
      <h1 className='text-black mb-6 font-bold cat-h1 text-1xl w-full'>Q4 2019 <span className='bg-green-400 p-2 text-xs text-white rounded ml-4'>completed</span></h1>
            <div className="ctgry i mt-8">
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Wireframe</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Design</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Documentation</h1>
          </div>
      </div>

      <div className="blog-categories test-mobile global h-72 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
      <h1 className='text-black mb-6 font-bold cat-h1 text-1xl w-full'>Q2 2020 <span className='bg-green-400 p-2 text-xs text-white rounded ml-4'>on progress</span></h1>
            <div className="ctgry i mt-8">
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Chart with base functional</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Launching plans and billings</h1> 
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Availability panel</h1>
            <h1 className='text-gray-400 mb-6 text-lg w-full'>Improvement of the rest of the functions of the Chart</h1>
          </div>
      </div>

      <div className="blog-categories test-mobile globl h-72 w-1/4 container mx-auto shadow shadow-lg ml-12 hover:shadow-lg">
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
    <Footer/>
</main>
  )
}
