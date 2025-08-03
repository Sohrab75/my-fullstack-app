import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import {apiConfig} from './apiConfig';
import restaurantSlice from '../features/restaurantSlice';
export const store = configureStore({
  reducer: {
    [apiConfig.reducerPath]: apiConfig.reducer,
    restaurant: restaurantSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiConfig.middleware),
});
setupListeners(store.dispatch);