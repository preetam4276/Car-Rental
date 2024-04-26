import React from 'react';
import { IconMail, IconPhoneCall } from "@tabler/icons-react";

const Footer1 = () => {
  return (
    <footer className="bg-white mt-[100px]  flex gap-[50px]">
      <div className="container mx-auto px-4 py-8">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className=" space-y-4 flex flex-col gap-2">
            <h2 className="text-2xl text-[24px]"><span className='font-bold text-[24px]'>CAR</span> Rental</h2>
            <p className=' text-gray-600'>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            <a href="tel:123456789" className="flex items-center">
              <IconPhoneCall /> <span className="ml-2">(123) -456-789</span>
            </a>
            <a href="mailto:carrental@gmail.com" className="flex items-center">
              <IconMail /> <span className="ml-2">carrental@gmail.com</span>
            </a>
           
          </div>

          <div className="footer-content__2 space-y-2 flex flex-col">
  <h3 className="font-semibold text-[24px]">Company</h3>
  <a href="#home" className='hover:text-[#ff4d30]'>INDIA</a>
  <a href="#home" className='hover:text-[#ff4d30]'>Careers</a>
  <a href="#home" className='hover:text-[#ff4d30]'>Mobile</a>
  <a href="#home" className='hover:text-[#ff4d30]'>Blog</a>
  <a href="#home" className='hover:text-[#ff4d30]'>How we work</a>
</div>


          <div className="footer-content__2 space-y-2">
            <h3 className="font-semibold text-[24px]">Working Hours</h3>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>

          <div className="footer-content__2 space-y-2">
            <h3 className="font-semibold text-[24px]">Subscription</h3>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input type="email" placeholder="Enter Email Address" className="w-full px-2 py-2 border border-gray-300 bg-gray-200 " />
            <button className="w-full mt-2 bg-[#ff4d30] text-white px-4 py-2 ">Submit</button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer1;
