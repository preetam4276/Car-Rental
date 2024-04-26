import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[200px] bg-[#2D2D2D] mt-[150px]'>
      <div className='flex items-center justify-center p-6 md:p-12 gap-6 pt-20 sm:pt-20 md:pt-20'>
        <p className='text-2xl md:text-4xl font-bold text-white'>Book a car by getting in touch with us</p>
        <p className='text-2xl md:text-4xl font-bold text-[#FF4D30]'>(123) 456-7869</p>
      </div>
    </div>
  )
}

export default Banner;
