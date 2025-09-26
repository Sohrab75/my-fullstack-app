import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurants: [],
    selectedRestaurant: localStorage.getItem("selectedRestaurantId")|| null,
    selectedItem: null,
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
        setSelectedRestaurant: (state, action) => {
            console.log("Selected Restaurant ID:", action.payload); // Debugging log to check selected restaurant ID
            state.selectedRestaurant = action.payload;
            localStorage.setItem("selectedRestaurantId", action.payload);
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setRestaurants, setSelectedRestaurant, setSelectedItem } = restaurantSlice.actions;

export default restaurantSlice.reducer;
