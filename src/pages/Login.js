import React from 'react'
import src1 from '../assests/PAGEbG.png'
import  { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/'); 
  }
  return (
    <div>
         <img src={src1} className='z-[-1] absolute top-0 left-0 right-0 opacity-10'></img>
         <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center text-[#FF4D30]">Welcome Back</h1>
        <p className="text-sm text-center text-gray-600">Welcome back! Please enter your details.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring-[#FF4D30] focus:border-[#FF4D30]"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 border rounded-md focus:ring-[#FF4D30] focus:border-orange-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-[#FF4D30]"
              />
              <label htmlFor="remember" className="block ml-2 text-sm text-gray-600">Remember for 30 days</label>
            </div>
            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-orange-600 hover:underline">Forgot your password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-[#FF4D30]rounded-md hover:bg-[#FF4D30] focus:outline-none focus:ring-2 focus:ring-[#FF4D30] bg-[#FF4D30] focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account? <a href="/SignUp" className="font-medium text-[#FF4D30] hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login