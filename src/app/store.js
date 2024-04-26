import { configureStore } from "@reduxjs/toolkit";
import pickCarReducer from "../features/PickSlice"; // Import the reducer function from your slice

const store = configureStore({
    reducer: {
        pickCar: pickCarReducer, // Use the reducer function here
    }
});

export default store;
