import React, { useEffect } from 'react'
import HeroComponent from '../components/HeroComponent'
import {HeaderOne, HeaderTwo} from "../components/Heading"
import { useGetAllDataQuery } from "../app/apiConfig"
import Card from '../components/Card'
import { setRestaurants } from '../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();
  const {restaurants} = useSelector((state) => state.restaurant);
  const {data:restData, error:RestErr, isLoading:RestLoading} = useGetAllDataQuery();
  useEffect(() => {
    if (restData) {
      dispatch(setRestaurants(restData));
    }
  }, [restData, dispatch]); 
  if(!restData) return <div>No Data Found</div>
  if (RestLoading) return <div>Loading...</div>
  if (RestErr) return <div>Error: {RestErr.message}</div>
  console.log(restData);
  
  console.log("Restaurants from Home:", restaurants); // Debugging log to check restaurants data
  return (
    <>
      <HeroComponent/>
      <HeaderOne>Welcome to HungerBox</HeaderOne>
      <div>
        <HeaderTwo>Restaurants</HeaderTwo>
        <div className='grid grid-cols-4 md:grid-cols-4 gap-4'>
          {restData && restaurants.map((restaurant) => (
            <Card key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home