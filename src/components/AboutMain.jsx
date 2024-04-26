import React from 'react';
import src1 from '../assests/PAGEbG.png';
import src2 from '../assests/about-icon-car.png';
import src3 from '../assests/about-icon-parking.png';
import src4 from '../assests/about-car-shop.png';
import src5 from '../assests/about-main.jpg';

const AboutMain = () => {
  return (
    <div>
      <img src={src1} className='z-[-1] absolute top-0 left-0 right-0 opacity-10'></img>
      <div className='flex flex-col md:flex-row justify-center   items-center mt-[100px] md:mt-[300px] md:gap-9 md:pt-[100px] md:pb-[100px] md:pl-[180px] md:pr-[250px] px-6 md:px-12 lg:px-24'>
        <img src={src5} className='w-[430px] md:w-[430px] h-auto md:h-[415px] '></img>
        <div className='flex flex-col gap-5 text-center md:text-left'>
          <p className='text-lg md:text-2xl font-light'>About Company</p>
          <p className='text-2xl md:text-4xl font-bold'>You start the engine and your adventure begins</p>
          <p className='text-base md:text-lg text-[#706F7B]'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className='flex justify-center md:justify-start gap-12'>
            <img src={src2}></img>
            <img src={src3}></img>
            <img src={src4}></img>
          </div>
          <div className='flex justify-center md:justify-start gap-12 mt-5 md:mt-0'>
            <div className='flex flex-col items-center'>
              <p className='text-3xl font-bold'>20</p>
              <div className='flex flex-col'>
                <p className='text-lg mt-2'>Car</p>
                <p className='text-lg'>Types</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-3xl font-bold'>85</p>
              <div className='flex flex-col'>
                <p className='text-lg mt-2'>Rental</p>
                <p className='text-lg'>Outlets</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-3xl font-bold'>75</p>
              <div className='flex flex-col'>
                <p className='text-lg mt-2'>Repair</p>
                <p className='text-lg'>Shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
