import "./dashboard.css";
import {FiHome} from "react-icons/fi"
import {AiOutlineFund} from "react-icons/ai"
import {MdOutlinePendingActions} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"

import NavItem from "./navitem"

export default function DashboardNav() {
  return (
    <nav className="side-nav">
      <a href="/" className="intro-x flex items-center pl-5 pt-4">
        <div className="mobile-header-container logo-dashboard flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img dash h-12 mr-4 logo"
          />
          <p className="mobile-header-text company-name">LarvaTrade</p>
        </div>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul className="bg-black">
        <NavItem navigateTo="/dashboard" title="Dashboard" icon={<FiHome size={24}/>}/>
        <NavItem navigateTo="/investment" title="Investment" icon={<AiOutlineFund size={24}/>}/>
        <NavItem navigateTo="/pending" title="Pending" icon={<MdOutlinePendingActions size={24}/>} />
        <NavItem navigateTo="/history" title="History" icon={<MdOutlinePendingActions size={24}/>} />
        <NavItem navigateTo="/profile" title="Profile" icon={<AiOutlineUser size={24}/>} />
        <NavItem navigateTo="#" title="Logout" icon={<BiLogIn size={24}/>} customClickEvent={()=>{
          localStorage.removeItem("token") 
          localStorage.removeItem("user");
          window.location.href = "/"; // Redirect to Homepage'  
        }}/>
      </ul>
    </nav>
  );
}
