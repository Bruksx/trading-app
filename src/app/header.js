import useScrollDirection from "./hooks/scrolldirection";
import { BsPersonCircle } from "react-icons/bs";

export default function Header(props){
    console.log(props.fixed)
    const scrollDirection = useScrollDirection();
    let className = scrollDirection === "up"? "header":"header header-down"
    if (props.fixed){
      className += " fixed"
    }
    return (
    <header className={className}>
        <div className="custom-container">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 mr-4 logo" />
            <p className="company-name">LarvaTrade</p>
          </div>
          <nav className="space-x-4 nav">
            <a href="/" className="hover:text-neutral-400">
              Home
            </a>
            <a href="/market" className="hover:text-neutral-400">
              Markets
            </a>
            <div className="dropdown inline-block relative">
              <button className="hover:text-neutral-400">Company</button>
              <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/career">Careers</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <a href="/education" className="hover:text-neutral-400">
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
            <BsPersonCircle color="#FC5B3F" size={20} />
          </a>
        </div>
      </header>
    )
}