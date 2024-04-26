import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import src from '../assests/faqcar.png';

const Faq = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const [bgColor1, setBgColor1] = useState('');
  const [bgColor2, setBgColor2] = useState('');

  const toggleActive = (index) => {
    if (index === 0) {
      setActive(!active);
      setBgColor(active ? '' : 'bg-[#FF4D30]');
      setBgColor1('');
      setBgColor2('');
      setActive1(false);
      setActive2(false);
    } else if (index === 1) {
      setActive1(!active1);
      setBgColor1(active1 ? '' : 'bg-[#FF4D30]');
      setBgColor('');
      setBgColor2('');
      setActive(false);
      setActive2(false);
    } else if (index === 2) {
      setActive2(!active2);
      setBgColor2(active2 ? '' : 'bg-[#FF4D30]');
      setBgColor('');
      setBgColor1('');
      setActive(false);
      setActive1(false);
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col justify-center items-center relative">
        <p className="text-[24px] text-center font-semibold">FAQ</p>
        <p className="text-[42px] text-center font-bold">Frequently Asked Questions</p>
        <p className="text-[#706F7B] mt-4 text-center">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to
        </p>
        <p className="text-[#706F7B] "> Common Concerns and Inquiries.</p>
      </div>

      {/* Dropdown 1 */}
      <div className={`flex justify-center px-2  `}>
        <div
          className={`flex mt-[50px] w-full sm:w-[800px] h-[62px] ${bgColor} px-2 cursor-pointer items-center justify-between shadow-md ${
            active ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={() => toggleActive(0)}
        >
          <div className="p-3 font-medium font-sans text-[18px]">
            1. What is special about comparing rental car deals?
          </div>
          <div className="pr-[10px]">
            <SlArrowDown className={`${active ? 'transform rotate-180' : ''}`} />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          active ? "max-h-[165px]" : "max-h-0"
        } overflow-hidden w-full sm:w-[800px] mx-auto shadow-md`}
      >
        <div className="pt-[18px] pb-[28px] pl-[45px] pr-[45px]">
          <p className="text-[#706F7B] ">
            Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
          </p>
        </div>
      </div>

      {/* Dropdown 2 */}
      <div className="flex justify-center px-2">
        <div
          className={`flex mt-[50px] w-full sm:w-[800px] h-[62px] px-2  ${bgColor1} cursor-pointer items-center justify-between shadow-md ${
            active1 ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={() => toggleActive(1)}
        >
          <div className="p-3 font-medium font-sans text-[18px]">
            2. How can I ensure I'm getting a good deal on a rental car?
          </div>
          <div className="pr-[10px]">
            <SlArrowDown className={`${active1 ? 'transform rotate-180' : ''}`} />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          active1 ? "max-h-[165px]" : "max-h-0"
        } overflow-hidden w-full sm:w-[800px] mx-auto shadow-md`}
      >
        <div className="pt-[18px] pb-[28px] pl-[45px] pr-[45px]">
          <p className="text-[#706F7B] ">
            To ensure you're getting a good deal on a rental car, compare prices across multiple websites and rental companies, check for any hidden fees, and look for special offers or discounts. It's also beneficial to read customer reviews and ratings to ensure the company is reputable and provides quality service.
          </p>
        </div>
      </div>

      {/* Dropdown 3 */}
      <div className="flex justify-center px-2">
        <div
          className={`flex mt-[50px] w-full sm:w-[800px] px-2 h-[62px]  ${bgColor2} cursor-pointer items-center justify-between shadow-md ${
            active2 ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={() => toggleActive(2)}
        >
          <div className="p-3 font-medium font-sans text-[18px]">
            3. Are there any benefits to booking a rental car in advance?
          </div>
          <div className="pr-[10px]">
            <SlArrowDown className={`${active2 ? 'transform rotate-180' : ''}`} />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          active2 ? "max-h-[165px]" : "max-h-0"
        } overflow-hidden w-full sm:w-[800px] mx-auto shadow-md`}
      >
        <div className="pt-[18px] pb-[28px] pl-[45px] pr-[45px]">
          <p className="text-[#706F7B] ">
            Booking a rental car in advance can provide several benefits, including better rates, a wider selection of vehicles, and the convenience of having your transportation arranged ahead of time. It also reduces the risk of not finding a suitable car available upon arrival, especially during peak travel seasons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
