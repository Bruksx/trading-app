"use client";
import React, { useState } from "react";
import "../dashboard.css";
import "../customCalendar.css";
import "../colors.css";
import "../css/copytrade.css";
import TraderChart from "../components/traderchart";
import Modal from "react-modal";
import Dashboard from "../components/dashboard";

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

export default function History() {
  const [value, onChange] = useState(new Date());
  const [modelState, setModalState] = useState(false);
  return (
    <Dashboard heading="Copy Trade">
      <div className="all-traders">
        <Modal
          isOpen={modelState}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="overlay"
          className="trader-modal"
        >
          <div className="trader-details-modal">
            <div className="trader-details-modal">
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
          </div>
          <p className="text-custom-blue3">Enter Amount</p>
          <input />
          <div className="modal-buttons">
            <button
              className="btn bg-custom-red text-custom-white"
              onClick={() => {
                setModalState(false);
              }}
            >
              Close
            </button>
            <button className="btn bg-custom-blue3 text-custom-blue3">
              Trade
            </button>
          </div>
        </Modal>
        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2 "
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>

        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2 "
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>

        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2 "
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>

        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2 "
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>

        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2 "
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>

        <div className="trader bg-custom-blue1 text-custom-blue3">
          <div className="trader-details">
            <div>
              <img className="trader-img" src="author-85z9UC.jpg" />
              <p className="text-custom-blue3">Jonas Michael</p>
            </div>
            <div className="trader-stats">
              <p>Minimum: $2000</p>
              <p>Maximum: $4000</p>
              <p>ROI: 340%</p>
            </div>
          </div>
          <div className="progress-container">
            <button
              className="btn bg-custom-blue2"
              onClick={() => {
                openModal(setModalState, {
                  image: "author-85z9UC.jpg",
                  name: "Jonas Michael",
                });
              }}
            >
              copy
            </button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
