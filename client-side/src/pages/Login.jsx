import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';

function Login() {

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isPasswordVisible2, setisPasswordVisible2] = useState(false);
  const [isLoginMenu, setIsLoginMenu] = useState(false);

  return (
    <div className=''>
      <Navbar></Navbar>
      <div className='mx-auto bg-slate-800 border border-blue-400 w-[400px] md:w-[600px] flex flex-col rounded-xl px-4 mt-10'>
        <p className='text-blue-400 font-semibold my-5 text-2xl'>{isLoginMenu ? "Log in your account" : "Create your account"}</p>

        <div className="flex flex-col gap-y-3">
          <input type="text" className='bg-slate-300 rounded-sm outline-none pl-2 py-1' placeholder='Username' />
          <input type="text" className='bg-slate-300 rounded-sm outline-none pl-2 py-1' placeholder='Email' />
          <div className="flex items-center bg-slate-300 rounded-sm">
            <input type={isPasswordVisible ? "text" : "password"} className=' flex grow outline-none pl-2 py-1' placeholder='Password' />
            <i className={`fa-solid  ${isPasswordVisible ? "fa-eye" : "fa-eye-slash"} cursor-pointer px-2 py-1`}
              onClick={() => { setisPasswordVisible(!isPasswordVisible) }}
            ></i>
          </div>

          {isLoginMenu === false &&
            <div className="flex items-center bg-slate-300 rounded-sm">
              <input type={isPasswordVisible2 ? "text" : "password"} className=' flex grow outline-none pl-2 py-1' placeholder='Confirm Password' />
              <i className={`fa-solid  ${isPasswordVisible2 ? "fa-eye" : "fa-eye-slash"} cursor-pointer px-2 py-1`}
                onClick={() => { setisPasswordVisible2(!isPasswordVisible2) }}
              ></i>
            </div>}

        </div>
        <p className='text-slate-300 mt-3 mb-5'>{isLoginMenu ? "Don't have an account?" : "Already have an account?"} <span className='text-blue-400 font-bold cursor-pointer hover:underline' onClick={() => { setIsLoginMenu(!isLoginMenu) }}>{isLoginMenu ? "Sign up" : "Log in"}</span></p>

        <button className='bg-blue-500 cursor-pointer hover:bg-blue-400 active:bg-blue-600 text-slate-100 rounded-lg mb-5 py-2'>{isLoginMenu ? "Login" : "Sign up"}</button>
      </div>
    </div>
  )
}

export default Login