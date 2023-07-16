import { useState } from "react";
import { BsCurrencyDollar, BsFillFileBarGraphFill, BsLightbulb, BsFillPersonFill, BsBagFill, BsNewspaper, BsFillBookFill, BsPeopleFill, BsFillSignIntersectionSideFill } from "react-icons/bs"; 
const Sidebarhome = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
      
       <button
          style={{top:'28px', right:'50px' }}
          className="flex items-center justify-center text-1xl text-white bg-red-500 rounded-full fixed right-5 top-8 z-50 w-8 h-8"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          X
        </button>
   
      ) : (
        <><svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed  z-30 flex items-center cursor-pointer hide-this"
            style={{top:'28px', right:'50px' }}
            fill="#ffffff"
            viewBox="0 0 100 80"
            width="28"
            height="28"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg></>
      )}

      <div
        className={`top-0 right-0 w-[95vw] bg-indigo-900   text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <nav className="mobile-menu-nav mt-12">
          <a href="/market" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillFileBarGraphFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Markets</span> </a>
           <a href="/pricing" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsCurrencyDollar color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Pricing</span> </a>
          <a href="/about" className="mobile_navigation" style={{ display: 'flex'}} >
           <BsLightbulb color="#FC5B3F" size={18} />  <span className="inline-block pl-2"></span> About</a>
          <a href="/career" className="mobile_navigation" style={{ display: 'flex'}} >
           <BsBagFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Career</span></a>
          <a href="/contact" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillPersonFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Contact</span> </a>
          <a href="/blog" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsNewspaper color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Blog</span></a>
          <a href="/education" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsFillBookFill color="#FC5B3F" size={18} />  <span className="inline-block pl-2">Education</span></a>
          <a href="/customers" className="mobile_navigation" style={{ display: 'flex'}}>
           <BsPeopleFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Customers</span></a>
          <a href="/roadmap" className="mobile_navigation" style={{ display: 'flex'}}>
          <BsFillSignIntersectionSideFill color="#FC5B3F" size={18} /> <span className="inline-block pl-2">Roadmap</span></a>
        </nav>
      </div>
    </>
  );
};

export default Sidebarhome;