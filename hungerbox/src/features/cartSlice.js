import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
