import logo from './logo.svg';  
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route,useLocation  } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Models from "./pages/Models"
import Testimonials from "./pages/Testimonials"
import OurTeam from "./pages/OurTeam"
import Contact from "./pages/Contact"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Booking from './pages/Booking'
import { Rotate } from 'hamburger-react';



function App() {
 
 
  return (
    <div>
     <Navbar />
    <Routes>
    <Route index path="/" element={<Home />} ></Route>
    <Route path='/About' element={<About></About>} ></Route>
    <Route path='/Models' element={<Models></Models>} ></Route>
    <Route path='/Testimonials' element={<Testimonials></Testimonials>} ></Route>
    <Route path='/OurTeam' element={<OurTeam></OurTeam>} ></Route>
    <Route path='/Contact' element={<Contact></Contact>} ></Route>
    <Route path='/Login' element={<Login></Login>}></Route>
    <Route path='/Signup' element={<SignUp></SignUp>}></Route>
    <Route path='/Booking' element={<Booking></Booking>} ></Route>

   </Routes>
    </div>
  );
}

export default App;
