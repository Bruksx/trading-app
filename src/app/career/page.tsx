import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";
import Header from "../header"
import Footer from "../Footer"

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
      <Header/>
<section>
<div className='text-center mx-auto container px-8 py-8'>
   <h1 className='heading-txt text-3xl font-bold'>We're a team of mission-driven <span className='text-red-500'>experts & learners.</span> </h1>
   <p className="heading-p text-gray-500 mt-4">Who are committed to making security a strength for every startup.</p>
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
            WATCH THE VIDEO
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
            WATCH THE VIDEO
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
            WATCH THE VIDEO
          </button>
        </div>
      </div>

<section className='mx-auto container'>
    <h1 className='heading-txt text-center text-3xl text-black font-bold mt-20'>Open positions</h1>
</section>

<section className='edu mx-auto container  py-10 border-b border-gray-300'>
    <div className="section-flex">
        <div className="first-grid">
            <h1 className='scnd-1 text-lg px-2 font-bold text-black'>
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
            <h1 className='scnd-1 text-lg px-2 font-bold text-black'>
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
            <h1 className='scnd-1 text-lg px-2 font-bold text-black'>
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
            className="grid-box w-4/4 h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
    <Footer/>
</main>
  )
}
