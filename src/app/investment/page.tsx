"use client"
import Image from 'next/image';
import "../dashboard.css";
import React, { useEffect, useState } from 'react';
import { ShoppingCart, CreditCard, Monitor, User} from 'lucide-react';
import MobileHeader from "../mobile-header"

export default function Investment() {

  return (
    <main className="py-5">
    <MobileHeader />
    <div className="flex mt-[4.7rem] md:mt-0">

        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
            <div className="mobile-header-container logo-dashboard flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="mobile-header-img dash h-12 mr-4 logo"
          />
          <p className="mobile-header-text company-name">LarvaTrade</p>
        </div>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul className='bg-black'>
                <li>
                    <a href="/dashboard" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="side-menu__title text-white font-bold">
                            Dashboard
                            <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/investment" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                        <div className="side-menu__title">
                            Investment
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/pending" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="shopping-bag"></i> </div>
                        <div className="side-menu__title">
                            Pending 
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/profile" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div className="side-menu__title"> Profile </div>
                    </a>
                </li>
            </ul>
        </nav>
    <div className="content">
            
        <div className="top-bar">

            <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active text-white font-bold" aria-current="page">Investment</li>
                </ol>
            </nav>

                <div className="intro-x relative mr-3 sm:mr-6">
                </div>
        </div>
        <div className="intro-y fle col-span-12 lg:col-span-6">
                              <div className="col-span-12 enlarge sm:col-span-6 xl:col-span-3 w-2/5 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box all p-5">
                                            <div className="flex">
                                            <CreditCard size={24} color="orange" />
                                               <div className="ml-auto">
                                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">$3,721</div>
                                            <div className="text-base text-slate-500 mt-3">Account Balance</div>
                                        </div>
                                    </div>
                                </div>
                                
                
                        <div className="intro-y box rom mt-12 w-1/2">

                        
                            <div id="form-validation" className="p-5">
                                <div className="preview">
                                    
                                    <form className="validate-form">
                                        <div className="input-form">
                                            <label  className="form-label w-full flex flex-col sm:flex-row"> Amount <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">Required*</span> </label>
                                            <input id="validation-form-1" type="text" name="name" className="form-control text-black" placeholder="100,000" />
                                        </div>
                                        <div className="input-form mt-3">
                                            <label  className="form-label w-full flex flex-col sm:flex-row"> OTP <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">Required*</span> </label>
                                            <input id="validation-form-1" type="text" name="name" className="form-control text-black" placeholder="3434" />
                                        </div>
                                        <div className="input-form mt-3">
                                            <label  className="form-label w-full flex flex-col sm:flex-row"> Password <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">Required*</span> </label>
                                            <input id="validation-form-3" type="password" name="password" className="form-control text-black" placeholder="secret" />
                                        </div>
                                        <button className="btn btn-primary mt-5">Invest</button>
                                    </form>
      

                                    <div id="success-notification-content" className="toastify-content hidden flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="check-circle" className="lucide lucide-check-circle text-success" data-lucide="check-circle"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 
                                        <div className="ml-4 mr-4">
                                            <div className="font-medium">Registration success!</div>
                                            <div className="text-slate-500 mt-1"> Please check your e-mail for further info! </div>
                                        </div>
                                    </div>
                              
                                    <div id="failed-notification-content" className="toastify-content hidden flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="x-circle" className="lucide lucide-x-circle text-danger" data-lucide="x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> 
                                        <div className="ml-4 mr-4">
                                            <div className="font-medium">Registration failed!</div>
                                            <div className="text-slate-500 mt-1"> Please check the fileld form. </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="source-code hidden">
                                    <button data-target="#copy-form-validation" className="copy-code btn py-1 px-2 btn-outline-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="file" data-lucide="file" className="lucide lucide-file w-4 h-4 mr-2"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Copy example code </button>
                                    <div className="overflow-y-auto mt-3 rounded-md">
                                        <pre id="copy-form-validation" className="source-preview"> <code className="html hljs xml"> <span className="hljs-comment">&lt;!-- BEGIN: Validation Form --&gt;</span>
 <span className="hljs-tag">&lt;<span className="hljs-name">form</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"validate-form"</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-1"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Name <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Required, at least 2 characters<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-1"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"name"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"John Legend"</span> <span className="hljs-attr">minlength</span>=<span className="hljs-string">"2"</span> <span className="hljs-attr">required</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form mt-3"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-2"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Email <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Required, email address format<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-2"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"email"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"email"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"example@gmail.com"</span> <span className="hljs-attr">required</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form mt-3"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-3"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Password <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Required, at least 6 characters<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-3"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"password"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"password"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"secret"</span> <span className="hljs-attr">minlength</span>=<span className="hljs-string">"6"</span> <span className="hljs-attr">required</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form mt-3"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-4"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Age <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Required, integer only &amp; maximum 3 characters<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-4"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"number"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"age"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"21"</span> <span className="hljs-attr">required</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form mt-3"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-5"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Profile URL <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Optional, URL format<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-5"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"url"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"url"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"https://google.com"</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"input-form mt-3"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"validation-form-6"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-label w-full flex flex-col sm:flex-row"</span>&gt;</span> Comment <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500"</span>&gt;</span>Required, at least 10 characters<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">textarea</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"validation-form-6"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"form-control"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"comment"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Type your comments"</span> <span className="hljs-attr">minlength</span>=<span className="hljs-string">"10"</span> <span className="hljs-attr">required</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">textarea</span>&gt;</span> <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"submit"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"btn btn-primary mt-5"</span>&gt;</span>Register<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>
 <span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span> <span className="hljs-comment">&lt;!-- END: Validation Form --&gt;</span> <span className="hljs-comment">&lt;!-- BEGIN: Success Notification Content --&gt;</span>
 <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"success-notification-content"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"toastify-content hidden flex"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"text-success"</span> <span className="hljs-attr">data-lucide</span>=<span className="hljs-string">"check-circle"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"ml-4 mr-4"</span>&gt;</span>
         <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"font-medium"</span>&gt;</span>Registration success!<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
         <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"text-slate-500 mt-1"</span>&gt;</span> Please check your e-mail for further info! <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
 <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span> <span className="hljs-comment">&lt;!-- END: Success Notification Content --&gt;</span> <span className="hljs-comment">&lt;!-- BEGIN: Failed Notification Content --&gt;</span>
 <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"failed-notification-content"</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"toastify-content hidden flex"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"text-danger"</span> <span className="hljs-attr">data-lucide</span>=<span className="hljs-string">"x-circle"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span>
     <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"ml-4 mr-4"</span>&gt;</span>
         <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"font-medium"</span>&gt;</span>Registration failed!<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
         <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">className</span>=<span className="hljs-string">"text-slate-500 mt-1"</span>&gt;</span> Please check the fileld form. <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
     <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>
 <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span> <span className="hljs-comment">&lt;!-- END: Failed Notification Content --&gt;</span></code> <textarea className="absolute w-0 h-0 p-0"></textarea></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
    </div>

    </div>
</main>
  )
}
