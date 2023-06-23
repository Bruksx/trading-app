"use client"
import React from 'react';
import Image from 'next/image'
import { useFormik } from 'formik';
import API from "../utils/api"
import delay from "../utils/delay"
import { ThreeDots } from 'react-loader-spinner';
import {useState} from 'react';


const style = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}

const LoginPage = () => {
  const api = new API()
  const [show3Dots, setShow3Dots] = useState(false)
  const [errorText, setErrorText] = useState("")
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
      password2:"",
    },
    onSubmit: values => {
      //console.log("submitted")
    }
  })
  return (
    <div className="bg-black flex flex-col md:flex-row h-screen">
      <div className="md:w-2/3 bg-gray-300 flex items-center justify-center">
        <img
          src="/chart.jpg"
          alt="Login Image"
          className="h-full object-cover"
        />
      </div>
      <div className="md:w-1/3 flex items-center justify-center px-16 py-12 bg-black">
        <div className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-white px-5">
            Register a new account
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-3 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 bg-gray-900 font-bold text-white"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 mb-3 rounded-md bg-gray-900 font-bold text-white"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password2"
              className="w-full px-3 py-2 border mb-3 border-gray-300 rounded-md bg-gray-900 font-bold text-white"
              placeholder="Confirm Password"
              value={formik.values.password2}
              onChange={formik.handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-600 text-gray font-semibold py-2 px-4 rounded-md"
              onClick={async () => {
                setErrorText("")
                setShow3Dots(true)
                await delay(2000)
                api.register(
                  formik.values.email,
                  formik.values.password,
                  formik.values.password2,
                  setErrorText
                );
                setShow3Dots(false)
              }}
            >
              {show3Dots? <ThreeDots height="25" color="white" wrapperStyle={style}/>: "Sign Up"}
            </button>
          </div>

          <p className="text-red-400">{errorText}</p>

          <h2 className="text-white px-4 color mt-10 text-sm">
            Already have an account?{" "}
            <span className="font-bold">
              {" "}
              <a href="/login">Login here</a>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
