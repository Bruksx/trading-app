

import Image from 'next/image';
import "../styles.css";

export default function Footer() {
  return (
    <footer className="bg-stone-700 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <img src="/logo.png" alt="Company Logo" className="footer-pain h-16" />
      <div className="btn-hide space-x-4">
        <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">
          Company news
        </button>
        <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">
          Partnership
        </button>
      </div>
    </div>

    <div className="footer-p container mx-auto py-10 text-gray-200">
      Copyright ©2021 Liquid Inc. All Rights Reserved.
    </div>
    <div className="footer-p container mx-auto py-5 text-gray-200">
      Trading derivatives and leveraged products carries a high level of
      risk, including the risk of losing substantially more than your
      initial investment. It is not suitable for everyone. Before you make
      any decision in relation to a financial product you should obtain and
      consider our Product Disclosure Statement (PDS) and Financial Services
      Guide (FSG) available on our website and seek independent advice if
      necessary
    </div>
  </footer>
  )
}
