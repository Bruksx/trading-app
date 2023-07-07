import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ onClose }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="modal" unmountOnExit>
      
    <div  className="fixed inset-0 flex justify-center items-center z-50">
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div style={{zIndex: '20000'}} className="bg-white rounded-lg p-12">
        <h2 className="text-lg font-bold text-gray-500 mb-4">Deposit Details</h2>
        <div className="mb-4">
          <input className="border rounded px-4 py-2 w-full" type="text" placeholder="Enter amount deposited" />
        </div>
        <div className="mb-4">
          <input className="border rounded px-4 py-2 w-full" type="text" placeholder="Cryptocurrency address sent from" />
        </div>
        <div className="mb-8">
          <input className="border rounded px-4 py-2 w-full" type="text" placeholder="Transaction ID/Link" />
        </div>
        <div className="mb-8">
          <input className="border rounded px-4 py-2 w-full" type="text" placeholder="Your Wallet name" />
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
