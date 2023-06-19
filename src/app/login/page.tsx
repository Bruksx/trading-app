import React from 'react';
import Image from 'next/image'

const LoginPage = () => {
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
      <h1 className="mb-4 text-2xl font-bold text-white px-5">Log into your account</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-3 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 bg-gray-900 font-bold text-white"
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold text-white"
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between mb-3 mt-5">
        <div className="flex items-center mb-6">
          <input type="checkbox" id="rememberPassword" className="mr-2" />
          <label htmlFor="rememberPassword" className="text-1xl text-white">
            Remember Password
          </label>
        </div>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800 text-sm mb-7"
        >
          Forgot Password?
        </a>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-white hover:bg-blue-600 hover:text-whi text-gray font-semibold py-2 px-4 rounded-md"
        >
          Sign In
        </button>
      </div>
      <h2 className="text-white px-4 color mt-10 text-sm">
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

export default LoginPage;
