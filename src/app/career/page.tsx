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
   <h1 className='heading-txt text-3xl font-bold'>{"We're a team of mission-driven"} <span className='text-red-500'>experts & learners.</span> </h1>
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
           At LarvaTrade, we recognize that every challenge presents an opportunity for growth and innovation. We constantly seek new avenues to expand our business, serve our customers better, and make a positive impact in the market
          </p>
          
        </div>
        <div className="border-l-2 border-gray-300 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">
            Our team
            </h2>
           </div>
          <p className="text-gray-700">
          Our team is the driving force behind our success. We are proud to have a talented and diverse group of individuals who bring their unique skills, expertise, and perspectives to the table
           </p>
           
        </div>
        <div className="border-l-2 border-gray-300 p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">
               Our culture
            </h2>
           </div>
            <p className="text-gray-700">
            At LarvaTrade, we foster a vibrant and inclusive company culture that promotes collaboration, innovation, and a sense of purpose. Our company culture is built upon a set of core values and beliefs that guide our behaviors, decisions, and interactions. Here is an overview of our company culture
          </p>
          
        </div>
      </div>

<section className='mx-auto container'>
    <h1 className='heading-txt text-center text-3xl text-black font-bold mt-20'>Open positions</h1>
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
