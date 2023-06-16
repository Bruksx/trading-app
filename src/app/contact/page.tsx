import Image from 'next/image';
import {BsPersonCircle} from "react-icons/bs"
import "../styles.css";

export default function Market() {
  return (
    <main className="min-h-screen justify-between">
         <header className="header">
        <div className="custom-container">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 mr-4 logo" />
            <p className="company-name">LarvaTrade</p>
          </div>
          <nav className="space-x-4 nav">
            <a href="#" className="hover:text-neutral-400">
              Home
            </a>
            <a href="#" className="hover:text-neutral-400">
              Markets
            </a>
            <div className="dropdown inline-block relative">
              <button className="hover:text-neutral-400">Company</button>
              <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <a href="#" className="hover:text-neutral-400">
              Education
            </a>
            <a href="#" className="hover:text-neutral-400">
              Resources
            </a>
          </nav>
          <button className="bg-red-500 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded custom-button">
            <a href="/register">CREATE ACCOUNT</a>
          </button>
          <a href="/login">
            <BsPersonCircle color="#FC5B3F" size={20}/>
          </a>
        </div>
      </header>

<section>
<div className='text-center mx-auto container px-8 py-8'>
   <h1 className='text-4xl font-bold'>Do not hesitate to <span className='text-red-500'>reach out.</span> </h1>
   <p className="text-gray-500 mt-4">Just fill in the contact form here and we’ll be sure to reply as fast as possible.</p>
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
          <div className="mb-4">
             <textarea id="message" placeholder='Message' className="w-full border border-gray-300 rounded px-3 py-2" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-red-500 w-full text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
      <div className="lg:w-1/2 pb-8 mt-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-700">Business Submissions</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper.</p>
        <p className='mb-5'>Email: <a href="mailto:business@example.com">business@example.com</a></p>
        <p className='border-b pb-12'>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p> 
        <div className="lg:w-2/2">
        <h2 className="text-2xl font-bold mb-6 mt-4 text-gray-700">Our Social Media</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500"><i className="fab fa-facebook">Facebook</i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-twitter">Twitter</i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-instagram">Instagram</i></a>
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
