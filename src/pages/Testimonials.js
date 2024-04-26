import React from 'react'
import Testimonials1 from '../components/Testimonials-main'
import Testimonal from '../components/Testimonal'
import Banner from '../components/Banner'
import Footer1 from '../components/Footer1'
import src1 from '../assests/PAGEbG.png'

const Testimonials = () => {
  return (
    <div>
      <img src={src1} className='z-[-1] absolute top-0 left-0 right-0 opacity-10'></img>
      <div className=' mt-[90px] lg:mt-[290px]'>
      <Testimonal ></Testimonal>
      </div>
      <Banner></Banner>
      <Footer1></Footer1>
    </div>
  )
}

export default Testimonials