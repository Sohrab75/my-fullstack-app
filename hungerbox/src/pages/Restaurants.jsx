import React from 'react'
import { useSelector } from 'react-redux'
import { useGetRestaurantByIdQuery } from '../app/apiConfig';

const Restaurants = () => {
    const id = useSelector((state) => state.restaurant.selectedRestaurant);
    const {data:restaurantData, error, isLoading} = useGetRestaurantByIdQuery(id);
    console.log("selected restaurant data", restaurantData, id);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!restaurantData) return <div>No Restaurant Data Found</div>;
  return (
    <div>{restaurantData && <h1>{restaurantData.restaurant}</h1>}</div>
  )
}

export default Restaurants