import React from 'react';
import src1 from '../assests/whychooseus_car.png';
import src2 from '../assests/whychooseus_dollar.png';
import src3 from '../assests/whychooseus_hand.png';

const ChooseUs = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-col md:flex-row items-center md:gap-[180px] max-w-6xl p-6 md:p-10'>
        <div className='flex flex-col md:w-1/2 max-w-md'>
          <p className='text-lg md:text-xl text-center md:text-left font-bold'>Why Choose Us</p>
          <div className='text-2xl md:text-4xl text-center md:text-left font-bold font-sans my-2'>
            Best valued deals you<br />will ever find
          </div>
          <p className='text-base md:text-lg text-gray-700 text-center md:text-left'>
            Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
          </p>
        </div>
        <div className='flex flex-col gap-8 md:w-1/2 md:max-w-lg'>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <img src={src1} alt='Cross Country Drive' />
            <div>
              <p className='text-lg text-center sm:text-start font-bold'>Cross Country Drive</p>
              <p className='text-center sm:text-start'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:text-start items-center gap-4'>
            <img src={src2} alt='All Inclusive Pricing' />
            <div>
              <p className='text-lg text-center sm:text-start font-bold'>All Inclusive Pricing</p>
              <p className='text-center sm:text-start'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>
          <div className='flex items-center flex-col sm:flex-row gap-4'>
            <img src={src3} alt='No Hidden Charges' />
            <div>
              <p className='text-lg text-center sm:text-start font-bold'>No Hidden Charges</p>
              <p className='text-center sm:text-start'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
