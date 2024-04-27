import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search1 } from "../features/PickSlice";
import { useNavigate } from 'react-router-dom';

const PickCar = () => {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.pickCar.selectedCar);
  const [model, setModel] = useState("");
  const [mark, setMark] = useState("");
  const [transmission, setTransmission] = useState("");
  const [AC, setAC] = useState("");
  const [fuel, setFuel] = useState("");
  const [doors, setDoors] = useState("");
  const [year, setYear] = useState("");
  const [src1, setSrc] = useState("");
  const [price, setPrice] = useState("");

  const solve = (id) => {
    dispatch(search1(id));
  };
  const navigate = useNavigate();

  const handle = () => {
   
    navigate('/Booking');
  };

  useEffect(() => {
    if (selectedCar) {
      setModel(selectedCar.model);
      setMark(selectedCar.mark);
      setTransmission(selectedCar.transmission);
      setAC(selectedCar.air);
      setFuel(selectedCar.fuel);
      setDoors(selectedCar.doors);
      setYear(selectedCar.year);
      setSrc(selectedCar.src);
      setPrice(selectedCar.price);
    }
  }, [selectedCar]);

  return (
    <div className="mt-[150px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[24px] font-semibold">Vehicle Models</p>
        <p className="text-[42px] font-bold">Our rental fleet</p>
        <p className="text-[#706F7B] mt-4 text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip.
        </p>
      </div>
      <div className="flex sm:flex-wrap sm:flex-row flex-col justify-around items-center mt-4  ">
        <div className="flex flex-col gap-[10px] ">
          <button
            className=" md:w-[240px]  w-[350px] h-[50px] ml-6 mr-4 font-semibold  hover:bg-[#FF4D30] bg-[#E9E9E9] focus:bg-[#FF4D30]"
            onClick={() => solve(3)}
          >
            kia seltos
          </button>
          <button
            className=" md:w-[240px]  w-[350px] h-[50px] ml-6 mr-4 font-semibold hover:bg-[#FF4D30] bg-[#E9E9E9] focus:bg-[#FF4D30]"
            onClick={() => solve(2)}
          >
            Innova{" "}
          </button>
          <button
            className="  md:w-[240px] w-[350px] h-[50px] ml-6 mr-4 font-semibold hover:bg-[#FF4D30] bg-[#E9E9E9] focus:bg-[#FF4D30]"
            onClick={() => solve(4)}
          >
            Swift Desire
          </button>
          <button
            className="  md:w-[240px]  w-[350px] h-[50px] ml-6 mr-4  font-semibold hover:bg-[#FF4D30] bg-[#E9E9E9] focus:bg-[#FF4D30] "
            onClick={() => solve(5)}
          >
            Swift Vdi
          </button>
          <button
            className="  md:w-[240px]  w-[350px] h-[50px] ml-6 mr-4 font-semibold hover:bg-[#FF4D30] bg-[#E9E9E9] focus:bg-[#FF4D30]"
            onClick={() => solve(1)}
          >
            Ertiga
          </button>
        </div>
        <div className="w-full sm:w-auto  sm:max-w-[500px] p-4">
          <img className="w-full sm:w-auto" src={src1} />
        </div>
        <div className="w-full sm:w-auto flex flex-col justify-center items-center p-4">
          <div className="w-[250px] h-[50px] bg-[#FF4D30] flex justify-center items-center">
            <p className="font-extrabold text-white text-[30px]">{price}</p>
            <span className="text-white"> /  per day</span>
          </div>
          <div>
          <table className="w-[250px] ">
            <tbody>
              <tr>
                <td className="border-2 p-2">Model</td>

                <td className="border-2 p-2 border-t-2">{model}</td>
              </tr>
              <tr>
                <td className="border-2 p-2">Mark</td>
                <td className="border-2 p-2">{mark}</td>
              </tr>
              <tr>
                <td className="border-2 p-2">Year</td>
                <td className="border-2 p-2">{year}</td>
              </tr>
              <tr>
                <td className="border-2 p-2">Doors</td>
                <td className="border-2 p-2">{doors}</td>
              </tr>
              <tr>
                <td className="border-2 p-2">AC</td>
                <td className="border-2 p-2">{AC}</td>
              </tr>
              <tr>
                <td className="border-2 p-2">Transmission</td>
                <td className="border-2 p-2">{transmission}</td>
              </tr>
              <tr>
                <td className="border-2 p-2 border-b-2">Fuel</td>
                <td className="border-2 p-2 border-b-2">{fuel}</td>
              </tr>
            </tbody>
          </table>
          </div>
          
          <div className="flex justify-center mt-4">
            <button onClick={handle} className="text-base bg-[#FA4226] px-4 py-2 w-[250px] h-[50px] hover:shadow-xl transition-shadow ease-in-out duration-300 rounded-sm font-sans text-white font-semibold">
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickCar;
