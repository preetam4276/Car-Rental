import React from "react";
import src1 from "../assests/maincar.png";
import src2 from "../assests/bg-car.png";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handle = (e) => {
   
    navigate('/Models');
  };
  const handle2 = (e) => {
   
    navigate('/About');
  };
  return (
    <div>
      <img src={src2} className="absolute top-0 right-0 z-[-1] sm:block hidden"></img>
      <div className="flex min-h-screen justify-between gap-6  px-4 py-12  sm:px-6 lg:px-8">
        <div className="w-full flex flex-col max-w-2xl mt-[100px] gap-3  ">
          <p className="text-xl font-bold sm:text-2xl">Plan your trip now</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Save <span className="text-[#FF4D30]">big</span> with our car rental
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            
          </p>
          <p className=" text-base sm:text-lg"> flexible pick-up options and much more.</p>
          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-start">
            <button onClick={handle} className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-[#FA4226] rounded-sm hover:shadow-xl transition-shadow ease-in-out duration-300 sm:w-auto">
              Book Ride <IconCircleCheck />
            </button>
            <button onClick={handle2} className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-black rounded-sm hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:border-black transition-all ease-in-out duration-300 sm:w-auto">
              Learn More <IconChevronRight />
            </button>
          </div>
        </div>
        <img
          src={src1}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block"
          width="820"
          height="500"
          alt="Car"
        />
      </div>
    </div>
  );
};

export default Hero;
