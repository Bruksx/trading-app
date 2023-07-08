import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {BsCurrencyDollar, BsFillPersonFill, BsFillHouseDoorFill} from "react-icons/bs";
import "./modal.css";

const Modal = ({ onClose }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="modal" unmountOnExit>
      
    <div  className=" fixed inset-0 flex justify-center items-center z-50">
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div style={{zIndex: '20000'}} className="this-modal bg-white rounded-lg p-12">
        <h2 className="text-lg font-bold text-gray-500 mb-4">Deposit Details</h2>
        <div className="px-4 mb-4 flex-modal">
          <BsCurrencyDollar color="blue" size={20} />
          <input className='focus:outline-none px-4 py-2 rounded  w-full'placeholder="Enter Amount deposited"/>
         
        </div>
        <div className="px-4 mb-4 flex-modal">
          <BsFillPersonFill color="blue" size={20} />
          <input className='focus:outline-none px-4 py-2 rounded  w-full'placeholder="Cryptocurrency address sent from"/>
         </div>
        <div className="px-4 mb-4 flex-modal">
          <BsFillHouseDoorFill color="blue" size={20} />
          <input className='focus:outline-none px-4 py-2 rounded  w-full'placeholder="Transaction ID/Link"/>
        </div>
        <div className="flex-modal px-4 mb-4 mb-8">
          <BsFillPersonFill color="blue" size={20} />
          <input className='focus:outline-none px-4 py-2 rounded  w-full'placeholder="Your Wallet name"/>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Proceed</button>
          <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};

export default Modal;
