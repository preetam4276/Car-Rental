import React from "react";
import src1 from "../assests/right-quotation-mark-yellow-21330.png";
import src2 from "../assests/harrypotter.jpg";
import src3 from "../assests/harry2.jpg";

const Testimonial = () => {
  return (
    <div className="  h-auto bg-gray-100 p-8 ">
      <div className="text-center">
        <p className="text-lg lg:text-xl font-semibold">Reviewed by People</p>
        <p className="text-2xl lg:text-3xl font-bold">Client's Testimonials</p>
        <p className="text-gray-600 mt-4">
          Discover the positive impact we've made on our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:mt-12 gap-8">
        <div className="w-full lg:w-[540px] bg-white p-6 lg:p-10 flex flex-col gap-4">
          <p className="text-lg font-medium">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable."
          </p>
          <div className="flex items-center">
            <img src={src2} className="w-14 h-14 rounded-full" alt="Parry Hotter" />
            <div className="ml-3">
              <p className="font-semibold">Parry Hotter</p>
              <p>Belgrade</p>
            </div>
            <img className="w-10 ml-auto" src={src1} alt="Quotation Mark" />
          </div>
        </div>
        <div className="w-full lg:w-[540px] bg-white p-6 lg:p-10 flex flex-col gap-4">
          <p className="text-lg font-medium">
            "The car was in great condition and made our trip even better.
            Highly recommend this car rental website!"
          </p>
          <div className="flex items-center">
            <img src={src3} className="w-14 h-14 rounded-full" alt="Ron Rizzly" />
            <div className="ml-3">
              <p className="font-semibold">Ron Rizzly</p>
              <p>Novi Sad</p>
            </div>
            <img className="w-10 ml-auto" src={src1} alt="Quotation Mark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
