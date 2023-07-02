"use client";
import React from "react";
import Image from "next/image";

const ForgotPassword = () => {
   return (
    <div className="bg-black flex flex-col md:flex-row h-screen">
      <div className="md:w-2/3 bg-gray-300 flex items-center justify-center">
        <img
          src="/chart.jpg"
          alt="Login Image"
          className="h-full object-cover"
        />
      </div>
      <div className="md:w-1/3 flex items-center justify-center px-4 md:px-16 py-12 bg-black">
        <form className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-white text-center px-5">
            Forgot Password
          </h1>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-3 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 bg-gray-900 font-bold text-white"
              placeholder="Email"
            
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold text-white"
              placeholder="New password"
        
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold text-white"
              placeholder="Confirm password"
        
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold text-white"
              placeholder="OTP"
        
            />
          </div>
        

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-400 hover:text-whi text-white font-semibold py-2 px-4 rounded-md">
                Submit
            </button>
          </div>
          <p className="text-red-400"></p>
          <h2 className="text-white px-4 color mt-10 text-sm no-class">
            Don't have an account?{" "}
            <span className="font-bold">
              <a href="/register">Register here</a>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
