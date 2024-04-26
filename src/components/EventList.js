import React from 'react'
import { Link } from 'react-router-dom'
import { IconX } from '@tabler/icons-react';
const EventList = ({nav,setNav}) => {
  return (
    <div>
      <div className={` w-full h-full bg-white ${nav ? 'flex' : 'hidden'}`}> 
      <div className={`absolute inset-0 bg-white p-8 ${nav ? 'flex' : 'hidden'} flex-col items-center justify-center transition-all duration-500 ease-in-out`}>
      <IconX width={30} height={30} onClick={setNav} />
        <ul className='flex flex-col items-center gap-3 text-2xl'>
          <li><Link onClick={setNav} to="/">Home</Link></li>
          <li><Link onClick={setNav} to="/about">About</Link></li>
          <li><Link onClick={setNav} to="/models">Models</Link></li>
          <li><Link onClick={setNav} to="/testimonials">Testimonials</Link></li>
          <li><Link onClick={setNav} to="/contact">Contact</Link></li>
        </ul>
      </div>
      </div>

    </div>
  )
}

export default EventList