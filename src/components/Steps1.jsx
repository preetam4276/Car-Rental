import React from 'react';
import src1 from '../assests/step_pg1.png';
import src2 from '../assests/steps_pg2.png';
import src3 from '../assests/steps_pg3.png';

const Steps = () => {
  return (
    <div className='mt-24 lg:mt-24 items-center'>
      <div className='flex flex-col gap-5 items-center text-center'>
        <p className='text-[24px] font-semibold sans-serif'>Plan your trip now</p>
        <p className=' text-[42px] sans-serif font-semibold'>Quick & easy car rental</p>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row justify-evenly items-center mt-10'>
        <div className='w-72 h-72 p-4 flex flex-col items-center text-center'>
          <img src={src1} alt='Select Car'></img>
          <p className='sans-serif font-semibold text-lg lg:text-xl'>Select Car</p>
          <p className='text-gray-500 p-1'>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        </div>
        <div className='w-72 h-72 p-4 flex flex-col items-center text-center'>
          <img src={src2} alt='Contact Operator'></img>
          <p className='font-semibold text-lg lg:text-xl sans-serif'>Contact Operator</p>
          <p className='text-gray-500 p-1'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
        </div>
        <div className='w-72 h-72 p-4 flex flex-col items-center text-center'>
          <img className='w-40' src={src3} alt='Lets Drive'></img>
          <p className='font-semibold text-lg lg:text-xl pr-2 sans-serif'>Let's Drive</p>
          <p className='text-gray-500 p-1'>Whether you're hitting the open road, we've got you covered with our wide range of cars.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
