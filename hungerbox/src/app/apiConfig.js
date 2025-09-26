import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiConfig = createApi({
  reducerPath: 'apiConfig',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url:"restaurants",
        method:"GET"
      }),
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => {
        console.log("check id from ApiConfig", restaurantId);
        return {
        url: `restaurants/restaurantId/${restaurantId}`,
        method: "GET"
      }},
    }),
    getItemById: builder.query({
      query: (itemId) => ({
        url: `restaurants/itemId/${itemId}`,
        method: "GET"
      }),
    }),
    // In apiConfig.js or your RTK Query API slice
    uploadProfilePicture: builder.mutation({
      query: (formData) => ({
        url: '/user/profile-picture', // your backend endpoint
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const { useGetAllDataQuery, useGetRestaurantByIdQuery, useGetItemByIdQuery, useUploadProfilePictureMutation } = apiConfig