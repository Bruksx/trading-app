import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import Header from "../header";
import Footer from "../Footer";
import "../styles.css";

export default function Contact() {
  return (
    <main className="min-h-screen justify-between">
    <Header/>
<section>
<div className='text-center mx-auto container px-8 py-8'>
   <h1 className='heading-txt text-4xl font-bold'>Do not hesitate to <span className='text-red-500'>reach out.</span> </h1>
   <p className="heading-p text-gray-500 mt-4">Just fill in the contact form here and we will be sure to reply as fast as possible.</p>
</div>
</section> 


<div className="lg:flex items-start container mx-auto lg:space-x-8">
      <div className="lg:w-1/2">
        <form className="bg-white p-8">
          <div className="mb-4">
            <input type="text" id="firstName" placeholder='Full name' className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
             <input type="email" id="email" placeholder='Email address' className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
             <input type="text" id="subject" placeholder='Subject' className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-red-500 w-full text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
      <div className="gap-left lg:w-1/2 pb-8 mt-6">
        <h2 className="heading-txt text-2xl font-bold mb-3 text-gray-700">Business Submissions</h2>
        <p className="heading-p mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper.</p>
        <p className='mb-5'>Email: <a href="mailto:business@example.com">business@example.com</a></p>
        <p className='border-b pb-12'>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p> 
        <div className="lg:w-2/2">
        <h2 className="header-txt text-2xl font-bold mb-6 mt-4 text-gray-700">Our Social Media</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500"><i className="fab fa-facebook">Facebook</i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-twitter">Twitter</i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-instagram">Instagram</i></a>
        </div>
      </div>
      </div>
      
     
    </div>

<Footer/>
</main>
  )
}
