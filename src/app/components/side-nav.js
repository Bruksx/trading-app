import { useState } from "react";
import {FiHome} from "react-icons/fi"
import {AiOutlineFund} from "react-icons/ai"
import {MdOutlinePendingActions} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"
import { CreditCard, Wallet } from "lucide-react"
import {
  BsBox,
  BsGraphUp,
  BsFillClockFill,
  BsFillPersonFill,
  BsPersonDown,
} from "react-icons/bs";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
      
       <button
          className="flex items-center justify-center text-1xl text-white bg-red-500 rounded-full fixed right-5 top-8 z-50 w-8 h-8"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
   
      ) : (
        <><svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed  z-30 flex items-center cursor-pointer right-8 top-8"
            fill="#ffffff"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg></>
      )}

      <div
        className={`top-0 right-0 w-[95vw] bg-purple-700   text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <nav className="mobile-menu-nav mt-12">
          <a
            href="/dashboard"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsBox color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Dashboard</span>
          </a>
          <a
            href="/investment"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsGraphUp color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Investment</span>
          </a>
          <a
            href="/deposit"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <Wallet color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Deposit</span>
          </a>
          <a
            href="/pending"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsFillClockFill color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Pending</span>
          </a>
          <a
            href="/history"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsFillClockFill color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">History</span>
          </a>
          <a
            href="/copy"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsFillClockFill color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Copy Trade</span>
          </a>
          <a
            href="/pricing"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsFillPersonFill color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Plans</span>
          </a>
          <a
            href="/crypto-wallet"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <Wallet color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Crypto Wallet</span>
          </a>
          <a
            href="/bank-details"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <Wallet color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Bank Details</span>
          </a>
          <a
            href="/history"
            className="mobile_navigation"
            style={{ display: "flex" }}
          >
            <BsFillPersonFill color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Profile</span>
          </a>
          <a
            href="#"
            className="mobile_navigation"
            style={{ display: "flex" }}
            onClick={() => {
              setToken("");
              window.location.href = "/"; // Redirect to Homepage'
            }}
          >
            <BsPersonDown color="#FFFFFF" size={18} />{" "}
            <span className="inline-block pl-2">Logout</span>
          </a>
         

        </nav>
      </div>
    </>
  );
};

export default Sidebar;