import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import {apiConfig} from './apiConfig';
import {authApi} from './authApi';
import restaurantSlice from '../features/restaurantSlice';
import cartSlice from '../features/cartSlice';
import userSlice from "../features/userSlice"
import searchSlice from "../features/searchSlice"


export const store = configureStore({
  reducer: {
    [apiConfig.reducerPath]: apiConfig.reducer,
    [authApi.reducerPath]: authApi.reducer,
    restaurant: restaurantSlice,
    cart: cartSlice,
    user: userSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiConfig.middleware, authApi.middleware),
});
setupListeners(store.dispatch);