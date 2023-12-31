"use client"
import React from 'react';
import Image from 'next/image'
import { useFormik } from 'formik';
import API from "../utils/api"
import delay from "../utils/delay"
import { ThreeDots } from 'react-loader-spinner';
import {useState} from 'react';
import {useRouter} from "next/navigation";

const style = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}

function handleResponse(
  response: any,
  setErrorText: Function,
  setErrorTextClass: Function,
  router:any,
) {
  setErrorTextClass("text-red-400")
  if (response.code == 400) {
    setErrorText(response.message);
  }
  else if (response.code == 200) {
    setErrorTextClass("text-green-400")
    setErrorText(response.message);
    router.push("/login")
  } else {
    setErrorTextClass("text-green-400");
    setErrorText("Some error occured");
  }
}

const LoginPage = () => {
  const router = useRouter()
  const api = new API()
  const [show3Dots, setShow3Dots] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [errorTextClass, setErrorTextClass] = useState("text-red-400")
  const formik:any = useFormik({
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
                let response = await api.register(
                  formik.values.email,
                  formik.values.password,
                  formik.values.password2,
                );
                setShow3Dots(false)
                handleResponse(response, setErrorText, setErrorTextClass, router)
              }}
            >
              {show3Dots? <ThreeDots height="25" color="white" wrapperStyle={style}/>: "Sign Up"}
            </button>
          </div>

          <p className={errorTextClass}>{errorText}</p>

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
