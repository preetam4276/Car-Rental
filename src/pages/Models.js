import React from "react";
import { IconCar, IconStar } from "@tabler/icons-react";
import src1 from "../assests/models-img1.png";
import src2 from "../assests/PAGEbG.png";
import src3 from "../assests/kia sel fin.png";
import src4 from "../assests/ertiga_final.png";
import src5 from "../assests/innova fin.png";
import src6 from "../assests/swift_fin.png";
import src7 from "../assests/vdi_final.png";
import './ceceeed.css'
import { useNavigate } from 'react-router-dom';

import Banner from "../components/Banner";
import Footer1 from "../components/Footer1";

const Models = () => {
  const navigate = useNavigate();
  const handleBookRide = (model) => {
    // Add your logic for booking a ride here
     navigate('/Booking')
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <img src={src2} className='z-[-1] w-full absolute top-0 left-0 right-0 opacity-10'></img>
     
     
      <div className="flex flex-wrap mt-[300px] gap-8 md:justify-center sm:justify-center lg:justify-center  small-screen px-4 sm:px-6 md:px-8 lg:px-0 ">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-sm flex flex-col gap-4 ">
          <img src={src3} className="w-full md:h-[210px] h-auto" alt="Model 1"></img>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold ">Kia Seltos</p>
            <div className="flex items-center gap-2 mt-[18px]">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} width={20} height={20} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <p className="font-semibold">4000</p>
                <p>per Day</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Kia
                </div>
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Automatic
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  4/5 <IconCar />
                </div>
                <div className="flex items-center">
                  Petrol <IconCar />
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            <button
              onClick={() => handleBookRide('Kia Seltos')}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition duration-300"
            >
              Book Ride
            </button>
          </div>
        </div>
        {/* Repeat the same structure for other car models */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-sm flex flex-col gap-4">
          {/* Insert code for the Ertiga model */}
          <img src={src4} className="w-full md:h-[220px] h-auto" alt="Model 1"></img>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Ertiga</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} width={20} height={20} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <p className="font-semibold">4000</p>
                <p>per Day</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Maruti suzuki
                </div>
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Manual
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  4/5 <IconCar />
                </div>
                <div className="flex items-center">
                  Diesel <IconCar />
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            <button
              onClick={() => handleBookRide('Ertiga')}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition duration-300"
            >
              Book Ride
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-sm flex flex-col gap-4">
          {/* Insert code for the Innova Crysta model */}
          <img src={src5} className="w-full md:h-[220px] h-auto" alt="Model 1"></img>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Innova Crysta</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} width={20} height={20} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <p className="font-semibold">6000</p>
                <p>per Day</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Toyota
                </div>
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Manual
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  4/5 <IconCar />
                </div>
                <div className="flex items-center">
                  Petrol <IconCar />
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            <button
              onClick={() => handleBookRide('Innova Crysta')}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition duration-300"
            >
              Book Ride
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-sm flex flex-col gap-4">
          {/* Insert code for the Swift Dezire model */}
          <img src={src6} className="w-full md:h-[220px] h-auto" alt="Model 1"></img>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Swift Dezire</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} width={20} height={20} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <p className="font-semibold">4000</p>
                <p>per Day</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Maruti suzuki
                </div>
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Manual
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  4/5 <IconCar />
                </div>
                <div className="flex items-center">
                  Diesel <IconCar />
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            <button
              onClick={() => handleBookRide('Swift Dezire')}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition duration-300"
            >
              Book Ride
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-sm flex flex-col gap-4">
          {/* Insert code for the Swift Vdi model */}
          <img src={src7} className="w-full md:h-[220px] h-auto" alt="Model 1"></img>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Swift Vdi</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} width={20} height={20} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <p className="font-semibold">3550</p>
                <p>per Day</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Maruti suzuki
                </div>
                <div className="flex items-center">
                  <IconCar className="inline-block" /> Manual
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  4/5 <IconCar />
                </div>
                <div className="flex items-center">
                  Diesel <IconCar />
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            <button
              onClick={() => handleBookRide('Swift Vdi')}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition duration-300"
            >
              Book Ride
            </button>
          </div>
        </div>

      </div>
      
      <Banner />
      <Footer1 />
    </div>
  );
};

export default Models;
