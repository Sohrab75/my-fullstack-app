import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("user")) || null,
    },
    reducers:{
        setUser : (state, action)=>{
            state.user = action.payload;
            sessionStorage.setItem("user", JSON.stringify(action.payload));
        },
        clearUser:(state)=>{
            state.user = null;
            sessionStorage.removeItem("user");
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;