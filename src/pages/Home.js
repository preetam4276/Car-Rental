import React from 'react'
import Hero from '../components/Hero'
import BookCar from '../components/BookCar'
import Steps1 from '../components/Steps1'
import PickCar from '../components/PickCar'
import Banner from '../components/Banner'
import TCARS from '../components/TCARS'
import ChooseUs from '../components/ChooseUs'
import Testimonal from '../components/Testimonal'
import Faq from '../components/Faq'
import Footer1 from '../components/Footer1'
const Home = () => {
  return (
   <div>

    <Hero></Hero>
    <BookCar></BookCar>
     <Steps1></Steps1>
     <PickCar></PickCar>
     <Banner></Banner>
     <TCARS></TCARS>
     <ChooseUs></ChooseUs>
     <Testimonal></Testimonal>
     <Faq></Faq>
     <Footer1></Footer1>
   </div>
  )
}

export default Home