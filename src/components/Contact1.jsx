import React from "react";
import src1 from "../assests/PAGEbG.png";
import { IconMail, IconPhoneCall, IconLocation } from "@tabler/icons-react";

const Contact1 = () => {
  return (
    <div>
    <img
        src={src1}
        className="z-[-1] absolute top-0 left-0 right-0 w-full opacity-10"
        alt="Background"
      />
        <div className=" flex justify-center items-center">
      
      <div className="flex flex-col lg:flex-row mt-[180px]  sm:mt-[300px] lg:mt-[350px]  w-full lg:w-[1280px] gap-8 lg:gap-20 h-auto lg:h-[733px] justify-between items-center p-6 lg:p-20">
        <div className="flex flex-col gap-6 max-w-lg mx-auto mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold leading-snug mb-8">Need additional information?</h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
          </p>
          <a href="tel:123456789" className="flex items-center text-base font-medium no-underline text-black transition-colors mb-2 hover:text-[#FF4D30]">
            <IconPhoneCall className="mr-2" />(123) -456-789
          </a>
          <a href="mailto:carrental@gmail.com" className="flex items-center text-base font-medium no-underline text-black transition-colors mb-2 hover:text-[#FF4D30]">
            <IconMail className="mr-2" />carrental@gmail.com
          </a>
          <a href="mailto:carrental@gmail.com" className="flex items-center text-base font-medium no-underline text-black transition-colors hover:text-[#FF4D30]">
            <IconLocation className="mr-2" />Belagaum, Karnataka
          </a>
        </div>
        <div className="w-full lg:w-[500px] flex flex-col">
          <form className="flex flex-col">
            <label className="text-base font-semibold mb-4" htmlFor="Full-Name">
              Full Name<b className="text-[#FF4D30]">*</b>
            </label>
            <input placeholder="Full Name" className="bg-gray-200 p-5 text-base border-none outline-none mb-9" type="text" required id="Full-Name" />
            <label className="text-base font-semibold mb-4" htmlFor="Email">
              Email<b className="text-[#FF4D30]">*</b>
            </label>
            <input placeholder="enter your Email" className="bg-gray-200 p-5 text-base border-none outline-none mb-9" type="email" required id="Email" />
            <label className="text-base font-semibold mb-4" htmlFor="place">
              Tell Us About<b className="text-[#FF4D30]">*</b>
            </label>
            <textarea placeholder="Write Here..." className="bg-gray-200 h-44 p-5 text-base border-none outline-none mb-9" required id="place" />
            <button className="w-full bg-[#FF4D30] text-white py-3 hover:shadow-xl transition-shadow ease-in-out duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contact1;
