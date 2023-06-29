"use client";
import Image from "next/image";
import "../dashboard.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "../mobile-header";
import DashboardNav from "../dashboardnav";
import { useFormik } from "formik";
import API from "../utils/api";

export default function Profile() {
    const api = new API()
    let user:any = localStorage.getItem("user")
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
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="profile"
                      className="rounded-full"
                      src="../author-85z9UC.jpg"
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium text-base font-bold text-blue-800">
                      Bruks
                    </div>
                    <div className="text-slate-500">Investor</div>
                  </div>
                </div>
                <div className="p-5 border-t items-profile border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center" href="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      icon-name="activity"
                      data-lucide="activity"
                      className="lucide lucide-activity w-4 h-4 mr-2"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>{" "}
                    Personal Information{" "}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      icon-name="activity"
                      data-lucide="activity"
                      className="lucide lucide-activity w-4 h-4 mr-2"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>{" "}
                    Bank Account Info{" "}
                  </a>
                </div>
                <div className="p-5 border-t  items-profile border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center" href="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      icon-name="lock"
                      data-lucide="lock"
                      className="lucide lucide-lock w-4 h-4 mr-2"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0110 0v4"></path>
                    </svg>{" "}
                    Change Password{" "}
                  </a>
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
                              placeholder="Adress"
                            >
                              10 Anson Road, International Plaza, #10-11, 079903
                              Singapore, Singapore
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
                      >
                        Update
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
