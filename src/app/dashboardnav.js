import "./dashboard.css";
import {FiHome} from "react-icons/fi"
import {AiOutlineFund} from "react-icons/ai"
import {MdOutlinePendingActions} from "react-icons/md"
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
        <NavItem navigateTo="/dashboard" title="dashboard" icon={<FiHome size={24}/>}/>
        <NavItem navigateTo="/investment" title="investment" icon={<AiOutlineFund size={24}/>}/>
        <NavItem navigateTo="/pending" title="pending" icon={<MdOutlinePendingActions size={24}/>} />
      </ul>
    </nav>
  );
}