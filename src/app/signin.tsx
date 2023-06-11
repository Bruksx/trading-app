import React from 'react';
import Image from 'next/image'

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 bg-gray-500">
        {/* Place your image here */}
        <img
          src="/chart.jpg"
          alt="Login Image"
          className="h-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 bg-black flex justify-center items-center">
        <form className="max-w-md p-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-500 px-7">Log into your account</h2>

          {/* Add your login form fields here */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold"
              placeholder='Username'
            />
          </div>

          <div className="mb-4">
            
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold"
              placeholder='Password'
            />
          </div>

          <button
            type="submit"
            className="bg-white hover:bg-blue-600 text-gray py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
