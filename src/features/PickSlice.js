import { createSlice } from "@reduxjs/toolkit";
import src1 from "../assests/ertiga_final.png";
import src2 from "../assests/innova fin.png";
import src3 from "../assests/kia sel fin.png";
import src4 from "../assests/swift_fin.png";
import src5 from "../assests/vdi_final.png";

const initialState = {
  CARS: [
    {
      id: 1,
      src: src1,
      name: "Ertiga",
      price: "4000",
      model: "E6",
      mark: "Maruti suzuki",
      year: "2020",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      id: 2,
      src: src2,
      name: "Innova",
      price: "6000",
      model: "Crysta",
      mark: "Toyota",
      year: "2018",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Petrol",
    },
    {
      id: 3,
      src: src3,
      name: "Kia Seltos",
      price: "4000",
      model: "Seltos",
      mark: "Kia",
      year: "2018",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 4,
      src: src4,
      name: "Swift Dzire",
      price: "4000",
      model: "Dezire",
      mark: "Maruti suzuki",
      year: "2020",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      id: 5,
      src: src5,
      name: "Swift Vdi",
      price: "3550",
      model: "Vdi",
      mark: "Maruti suzuki",
      year: "2022",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
  ],
 selectedCar :null,
};

function getinfo(id, state) {
  return state.CARS.find((car) => car.id === id);
}

export const PickCar = createSlice({
  name: "pickCar",
  initialState,
  reducers: {
    search1: (state, action) => {
      const id1 = action.payload;
      // Find the car object based on the provided id
      const selectedCar = getinfo(id1, state);
      // Update the state with the found car object
      if (selectedCar) {
        state.selectedCar = selectedCar;
      }
    },
  },
});


export const { search1 } = PickCar.actions;
export default PickCar.reducer; 
