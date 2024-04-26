import React, { useState } from "react";
import { Link } from "react-router-dom";
import cf from "../assests/brandlogo.png";
import { Fade as Hamburger } from 'hamburger-react'
import { IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <div>
 
      <div className="relative z-[10] bg-transparent pt-6 mr-11 hidden lg:flex flex-row justify-around items-center">
       
        <img
          src={cf}
          width="145"
          height="57"
          className="flex justify-start mr-5 hover:cursor-pointer"
          onClick={handleImageClick}
        />

      
        <div className="relative z-10 bg-transparent hidden sm:hidden lg:flex md:hidden flex-row gap-7 pt-3 pr-3">
          <Link to="/" className="text-base font-bold hover:text-[#FA4226]">
            Home
          </Link>
          <Link to="/About" className="text-base font-bold hover:text-[#FA4226]">
            About
          </Link>
          <Link to="/Models" className="text-base font-bold hover:text-[#FA4226]">
            Vehicle Models
          </Link>
          <Link to="/Testimonials" className="text-base font-bold hover:text-[#FA4226]">
            Testimonials
          </Link>
          <Link to="/Contact" className="text-base font-bold hover:text-[#FA4226]">
            Contact
          </Link>
        </div>

        
        <div className="sm:hidden hidden lg:flex md:hidden gap-5 pt-2">
          <button className="hover:text-[#FA4226]" ><Link to="/Login">Sign In</Link></button>
          <button className="text-base bg-[#FA4226] pt-[12px] text-[16px] pb-[15px] pl-[30px] pr-[30px] w-[125px] flex h-[48px] hover:shadow-xl transition-shadow ease-in-out duration-300 rounded-sm font-sans text-white font-semibold">
          <Link to="/SignUp">Register</Link>
          </button>
        </div>
      </div>

    
      <div className="lg:hidden flex justify-between">
        
        <img
          src={cf}
          width="145"
          height="57"
          className="flex justify-start ml-[20px] mt-[20px] hover:cursor-pointer"
        />

       
        <div className="mt-[10px] mr-[10px]">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          
          {isOpen && (
            <div className="w-full h-full bg-white fixed inset-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 p-8">
                
                <IconX width={30} height={30} onClick={() => setOpen(false)} />
              </div>
              <ul className="flex flex-col items-center gap-3 text-2xl">
                
                <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/models">Models</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/testimonials">Testimonials</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
