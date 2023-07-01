"use client";
import React from "react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useFormik } from "formik";
import API from "../utils/api";
import { useRouter } from "next/navigation";

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
    localStorage.setItem("token",response.token)
    localStorage.setItem("user", JSON.stringify(response.user))
    router.push("/dashboard")
  } else {
    setErrorTextClass("text-green-400");
    setErrorText("Some error occured");
  }
}

const LoginPage = () => {
  const router = useRouter()
  const [errorText, setErrorText] = useState("")
  const [errorTextClass, setErrorTextClass] = useState("text-red-400")
  const api = new API()
  const [show3Dots,setShow3Dots] = useState(false);
  const formik = useFormik({
    initialValues:{
      "email":"",
      "password":"",
    },
    onSubmit:(values)=>{}
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
      <div className="md:w-1/3 flex items-center justify-center px-4 md:px-16 py-12 bg-black">
        <form className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-white px-5">
            Log into your account
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-3 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 bg-gray-900 font-bold text-white"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 font-bold text-white"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
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
              href="/forgot-password"
              className="text-gray-600 hover:text-gray-800 text-sm mb-7"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-400 hover:text-whi text-gray font-semibold py-2 px-4 rounded-md"
              onClick={async () =>{
                setErrorText("")
                setShow3Dots(true)
                let response = await api.login(formik.values.email, formik.values.password)
                setShow3Dots(false)
                handleResponse(response, setErrorText, setErrorTextClass, router)
              }
            }
            >
              {show3Dots? <ThreeDots height="25" color="white" wrapperStyle={style}/>: "Sign In"}
            </button>
          </div>
          <p className={errorTextClass}>{errorText}</p>
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
