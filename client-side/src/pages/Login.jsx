import React from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import AuthContext from '../AuthContext';

function Login() {

  const { login } = useContext(AuthContext);

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isPasswordVisible2, setisPasswordVisible2] = useState(false);
  const [isLoginMenu, setIsLoginMenu] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [message, setMessage] = useState('');

  const [validation, setValidation] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoginMenu) {
      // Criando usuário
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.")

        setTimeout(() => {
          setMessage('');
        }, 2000)

        return;
      } else {
        try {
          const response = await axios.post("http://localhost:8000/api/create-user", { username, password })

          if (response.status === 201) {
            setValidation('Register Successful!')

            setTimeout(() => {
              setValidation('')
            }, 2000);
          }

        } catch (error) {
          console.error("Erro ao enviar dados ", error);
          setValidation('Failed to Register')
          setTimeout(() => {
            setValidation('');
          }, 2000);
        }
      }

      // fazendo login
    } else {
      loginFunction();
    }
  }

  const loginFunction = async () => {
    if (!username || !password) {
      setMessage("Username and Password are required.")
      setTimeout(() => {
        setMessage('')
      }, 2000);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", { username, password })

      if (response.status === 200) {
        login(response.data); // Salva usuário no contexto
        setValidation("Login Successful!");
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          setValidation("");
          navigate('/')
        }, 2000);
      }

    } catch (error) {
      console.error("Login error: ", error);
      setMessage("Invalid username or Password.")
      setTimeout(() => {
        setMessage("")
      }, 2000);
    }

  }

  return (
    <div className=''>
      <Navbar />
      <form onSubmit={handleSubmit} className='mx-auto bg-slate-800 border border-blue-400 w-[400px] md:w-[600px] flex flex-col rounded-xl px-4 mt-10'>
        <p className='text-blue-400 font-semibold my-5 text-2xl'>{isLoginMenu ? "Log in your account" : "Create your account"}</p>

        <div className="flex flex-col gap-y-3">
          <input type="text" className='bg-slate-300 rounded-sm outline-none pl-2 py-1' placeholder='Username'
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <div className="flex items-center bg-slate-300 rounded-sm">
            <input type={isPasswordVisible ? "text" : "password"} className=' flex grow outline-none pl-2 py-1' placeholder='Password'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <i className={`fa-solid  ${isPasswordVisible ? "fa-eye" : "fa-eye-slash"} cursor-pointer px-2 py-1`}
              onClick={() => { setisPasswordVisible(!isPasswordVisible) }}
            ></i>
          </div>

          {isLoginMenu === false &&
            <div className="flex items-center bg-slate-300 rounded-sm">
              <input type={isPasswordVisible2 ? "text" : "password"} className=' flex grow outline-none pl-2 py-1' placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => { setconfirmPassword(e.target.value) }}
              />
              <i className={`fa-solid  ${isPasswordVisible2 ? "fa-eye" : "fa-eye-slash"} cursor-pointer px-2 py-1`}
                onClick={() => { setisPasswordVisible2(!isPasswordVisible2) }}
              ></i>
            </div>}

        </div>
        <p className='text-slate-300 mt-3 mb-5'>{isLoginMenu ? "Don't have an account?" : "Already have an account?"} <span className='text-blue-400 font-bold cursor-pointer hover:underline' onClick={() => { setIsLoginMenu(!isLoginMenu) }}>{isLoginMenu ? "Sign up" : "Log in"}</span></p>

        {message ?
          <span className='bg-red-800 text-slate-100 rounded-lg mb-5 py-2 text-center font-semibold'>{message}</span>
          :
          <button type='submit' className='bg-blue-500 cursor-pointer hover:bg-blue-400 active:bg-blue-600 text-slate-100 rounded-lg mb-5 py-2 font-semibold'>{isLoginMenu ? "Login" : "Sign up"}</button>
        }


      </form>

      {validation &&
        <div className='w-[400px] mx-auto mt-14  flex justify-center py-5 rounded-full bg-slate-200'>
          {isLoginMenu ?
            <span className={`text-2xl font-bold ${validation === 'Login Successful!' && 'text-green-600'} `}>{validation}</span> 
            :
            <span className={`text-2xl font-bold ${validation === 'Register Successful!' ? 'text-green-600' : 'text-red-800'} `}> {validation} </span>}

        </div>}

    </div>
  )
}

export default Login