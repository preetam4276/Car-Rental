import React, { useState } from "react";
import src1 from '../assests/PAGEbG.png'
import { useNavigate } from 'react-router-dom';
const Booking = () => {
    const navigate = useNavigate();
 const handle = (e)=>{
    e.preventDefault();
        navigate("/SignUp");
 }

  return (
    <div>
      <img src={src1} className='z-[-1] absolute top-0 left-0 right-0 opacity-10'></img>

      <div className="bg-white p-8 rounded-lg shadow-md mt-[120px] w-[1080px] mx-auto">
        <h2 className="text-2xl font-bold text-[#FF4D30] mb-6">
          PERSONAL INFORMATION
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your first name"
              className="border-2 bg-[#E9E9E9] p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="border-2 bg-[#E9E9E9] p-2 "
              required
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border-2 bg-[#E9E9E9] p-2 "
              required
            />
            <input
              type="number"
              placeholder="Enter your age"
              className="border-2 bg-[#E9E9E9] p-2 "
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="col-span-2 border-2  bg-[#E9E9E9] p-2 "
              required
            />
            <input
              type="text"
              placeholder="Enter your address"
              className="col-span-2 bg-[#E9E9E9] border-2 p-2 "
              required
            />
            <input
              type="text"
              placeholder="Enter your zip code"
              className="border-2 bg-[#E9E9E9]  p-2 "
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="updates" className="mr-2" />
            <label htmlFor="updates" className="text-gray-700">
              Please send me latest news and updates.
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#FF4D30] text-white font-bold py-2 px-4  hover:bg-[#FF4D30]"
            onSubmit={handle}
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
