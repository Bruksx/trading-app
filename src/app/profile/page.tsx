"use client";
import Image from "next/image";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "../mobile-header";
import DashboardNav from "../dashboardnav";
import { useFormik } from "formik";
import API from "../utils/api";
import { redirect } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

const style = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}


export default function Profile() {
    const api = new API()
    const [show3Dots,setShow3Dots] = useState(false);
    api.updateUser()
    let user:any = localStorage.getItem("user")
    //if (!user){
    //  redirect("/login")
    //}
    user = JSON.parse(user)
    const formik = useFormik({
        initialValues:{
            "phone_number": user.phone_number,
            "first_name":user.first_name,
            "middle_name": user.middle_name,
            "last_name": user.last_name,
            "account_number":user.account_number,
            "bank_name":user.bank_name,
            "address":user.address,
        },
        onSubmit:()=>{}
    })
  return (
    <main className="py-5">
      <MobileHeader />
      <div className="flex mt-[4.7rem] md:mt-0">
        <DashboardNav />
        <div className="content">
          <div className="top-bar">
            <nav
              aria-label="breadcrumb"
              className="-intro-x mr-auto hidden sm:flex"
            >
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item active text-white font-bold"
                  aria-current="page"
                >
                  Profile
                </li>
              </ol>
            </nav>

            <div className="intro-x relative mr-3 sm:mr-6"></div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12  lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
              <div className="intro-y box mt-5">
                <div className="relative acct-info  flex items-center p-5">
                  <div className="ml-4 mr-auto">
                    <div className="font-medium text-base font-bold text-blue-800">
                      {user.first_name}
                    </div>
                    <div className="text-slate-500">{user.last_name}</div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
              <div className="intro-y box card-prof lg:mt-5">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Profile Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="flex flex-col-reverse xl:flex-row flex-col">
                    <div className="flex-1 mt-6 xl:mt-0">
                      <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="text"
                              name="phone_number"
                              value={formik.values.phone_number}
                              onChange={formik.handleChange}
                              placeholder="Phone number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="mt-3">
                            <label className="form-label">Address</label>
                            <textarea
                              name="address"
                              value={formik.values.address}
                              onChange={formik.handleChange}
                              id="update-profile-form-5"
                              className="form-control"
                              placeholder="Address"
                            >
                              
                            </textarea>
                          </div>
                        </div>
                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Account Number</label>
                            <input
                              name="account_number"
                              value={formik.values.account_number}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder="Account name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Email</label>
                            <input
                              name="account_number"
                              value={user.email}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder="Account name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">First Name</label>
                            <input
                              name="first_name"
                              value={formik.values.first_name}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder="Account name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Middle Name</label>
                            <input
                              name="middle_name"
                              value={formik.values.middle_name}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Last Name</label>
                            <input
                              name="last_name"
                              value={formik.values.last_name}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder="Account name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3">
                            <label className="form-label">Bank Name</label>
                            <input
                              name="bank_name"
                              value={formik.values.bank_name}
                              onChange={formik.handleChange}
                              type="text"
                              placeholder="Account number"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary w-20 mt-3"
                        onClick={() => {
                          api.editAcount(
                            formik.values.first_name,
                            formik.values.middle_name,
                            formik.values.last_name,
                            formik.values.address,
                            formik.values.phone_number,
                            formik.values.bank_name,
                            formik.values.account_number,
                            setShow3Dots,
                          );
                        }}
                      >
                        {show3Dots? <ThreeDots height="25" color="white" wrapperStyle={style}/>: "Update"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
