import React from 'react';
import url1 from '../assests/book.background.png'; 
import { useNavigate } from 'react-router-dom';

const BookCar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Booking');
  };
  return (
    <div className="w-full mt-12 px-4">
      <div style={{ backgroundImage: `url(${url1})` }} className="bg-cover bg-center bg-no-repeat border rounded-md py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8'>Book a Car</h2>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4'>
          <div className='flex flex-col w-full md:w-[30%]'>
            <label htmlFor='book' className='font-semibold'>Select Your Car Type <span className='text-red-600'>*</span></label>
            <select name='book' className='border-2 rounded-md mb-4 h-[50px] px-2' id='book' required>
              <option value="" disabled>Select your car type</option>
              <option value="Indica">Kia Seltos</option>
              <option value="Swift Desire">Swift Desire</option>
              <option value="Innova">Innova</option>
              <option value="Ertiga">Ertiga</option>
              <option value="Swift Vdi">Swift Vdi</option>
            </select>
          </div>
          <div className='flex flex-col w-full md:w-[30%]'>
            <label htmlFor='book1' className='font-semibold'>Pick-up <span className='text-red-600'>*</span></label>
            <select name='book1' id='book1' className='border-2 rounded-md mb-4 h-[50px] px-2' required>
              <option value="" disabled>Select pick-up location</option>
              <option value="Mahantesh Nagar">Mahantesh Nagar</option>
              <option value="Anjeneya Nagar">Anjeneya Nagar</option>
              <option value="Ramteerth Nagar">Ramteerth Nagar</option>
              <option value="Thilakwadi">Thilakwadi</option>
              <option value="Shiv Basav Nagar">Shiv Basav Nagar</option>
            </select>
          </div>
          <div className='flex flex-col w-full md:w-[30%]'>
            <label htmlFor='book2' className='font-semibold'>Drop-off <span className='text-red-600'>*</span></label>
            <select name='book2' id='book2' className='border-2 rounded-md mb-4 h-[50px] px-2' required>
              <option value="" disabled>Select drop-off location</option>
              <option value="Mahantesh Nagar">Mahantesh Nagar</option>
              <option value="Anjeneya Nagar">Anjeneya Nagar</option>
              <option value="Ramteerth Nagar">Ramteerth Nagar</option>
              <option value="Thilakwadi">Thilakwadi</option>
              <option value="Shiv Basav Nagar">Shiv Basav Nagar</option>
            </select>
          </div>
          <div className='flex flex-col w-full md:w-[30%]'>
            <label htmlFor='book3' className='font-semibold'>Pick-up Date <span className='text-red-600'>*</span></label>
            <input name='book3' className='border-2 rounded-md mb-4 h-[50px] px-2' type='date' required />
          </div>
          <div className='flex flex-col w-full md:w-[30%]'>
            <label htmlFor='book4' className='font-semibold'>Drop-off Date <span className='text-red-600'>*</span></label>
            <input name='book4' className='border-2 rounded-md mb-4 h-[50px] px-2' type='date' required />
          </div>
          <button type='submit'  className='w-full md:w-[30%] h-[50px] bg-[#FA4226] hover:shadow-xl md:mt-[25px] text-white font-semibold rounded-md self-start'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookCar;
