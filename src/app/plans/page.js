"use client";
import React, { useState } from "react";
import "../dashboard.css";
import "../customCalendar.css";
import "../colors.css";
import "../css/copytrade.css";
import Modal from "react-modal";
import Dashboard from "../components/dashboard";
import { AiOutlineGold } from "react-icons/ai";
import "../css/plans.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function openModal(setModalState, data) {
  setModalState(true);
}

export default function CopyTrade() {
  const [value, onChange] = useState(new Date());
  const [modalState, setModalState] = useState(false);
  return (
    <Dashboard heading="Copy Trade">
      <div className="all-plans">
        <Modal
          isOpen={modalState}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="overlay"
          className="plan-modal"
        >
            <p className="text-custom-blue4">Enter An Amount</p>
            <input className="plan-modal-input bg-custom-blue1 text-custom-blue4"/>
            <div className="plan-modal-buttons">
              <button className="btn  bg-custom-blue3 text-custom-white">Subscribe</button>
              <button className="btn bg-custom-red text-custom-white" onClick={()=>{setModalState(false)}}>Cancel</button>
            </div>
        </Modal>
        <div className="plans-container text-custom-blue3">
        
        <div className="plan bg-custom-blue1">
          <div className="plan-icon-container">
            <AiOutlineGold size={48} color="#cccc00" />
          </div>
          <h3 className="plan-title text-custom-blue4">Gold</h3>
          <p>3 days @ 45% interest</p>
          <p className="plan-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="plan-price text-custom-blue4">$400 - $1000</p>
          <button className="btn plan-button bg-custom-blue2" onClick={()=>setModalState(true)}>Subscribe</button>
        </div>

        <div className="plan bg-custom-blue1">
          <div className="plan-icon-container">
            <AiOutlineGold size={48} color="#cccc00" />
          </div>
          <h3 className="plan-title text-custom-blue4">Platinum</h3>
          <p>3 days @ 45% interest</p>
          <p className="plan-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="plan-price text-custom-blue4">$400 - $1000</p>
          <button className="btn plan-button bg-custom-blue2" onClick={()=>setModalState(true)}>Subscribe</button>
        </div>

        <div className="plan bg-custom-blue1">
          <div className="plan-icon-container">
            <AiOutlineGold size={48} color="#cccc00" />
          </div>
          <h3 className="plan-title text-custom-blue4">Silver</h3>
          <p>3 days @ 45% interest</p>
          <p className="plan-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="plan-price text-custom-blue4">$400 - $1000</p>
          <button className="btn plan-button bg-custom-blue2" onClick={()=>setModalState(true)}>Subscribe</button>
        </div>

        <div className="plan bg-custom-blue1">
          <div className="plan-icon-container">
            <AiOutlineGold size={48} color="#cccc00" />
          </div>
          <h3 className="plan-title text-custom-blue4">Diamond</h3>
          <p>3 days @ 45% interest</p>
          <p className="plan-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="plan-price text-custom-blue4">$400 - $1000</p>
          <button className="btn plan-button bg-custom-blue2" onClick={()=>setModalState(true)}>Subscribe</button>
        </div>

        <div className="plan bg-custom-blue1">
          <div className="plan-icon-container">
            <AiOutlineGold size={48} color="#cccc00" />
          </div>
          <h3 className="plan-title text-custom-blue4">Bronze</h3>
          <p>3 days @ 45% interest</p>
          <p className="plan-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="plan-price text-custom-blue4">$400 - $1000</p>
          <button className="btn plan-button bg-custom-blue2" onClick={()=>setModalState(true)}>Subscribe</button>
        </div>
      </div>
        </div>
    </Dashboard>
  );
}
