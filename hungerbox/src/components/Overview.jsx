import React from "react";
import { offers } from "../utils/constants";
import OfferContainer from "./OfferContainer";


const Overview = ({ restaurant, setSeeAllMenuItems }) => {
  //logic for getting top 10 food  from restaurant items
  const topFoodItems = restaurant.items;
  const itemsId = topFoodItems.map((item) => item.itemId);
  // function to get random items from array
  const randomItems = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
  let top10Items = [];

  function uniqueFoodItems(arr) {
    for (let i = 0; i < itemsId.length; i++) {
      const uniqueId = randomItems(itemsId);
      const newArr = arr.filter((item) => item.itemId === uniqueId);
      if (top10Items.length !== 10) {
        if (top10Items.includes(newArr[0])) continue;
        top10Items.push(newArr[0]);
      } else {
        break;
      }
    }
  }
  console.log("top 10 items", top10Items);
  uniqueFoodItems(topFoodItems);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <OfferContainer offers={offers}  />
      <div className="flex items-center justify-between mb-4">
        <span>Menu</span>
      <button className="text-blue-500" onClick={() => setSeeAllMenuItems(true)}>See All Menu▶</button>
      </div>
      <span>Our Top 10 {restaurant.cuisine}</span>
      <div className="grid grid-cols-6">
        {top10Items.map((item) => (
            <div key={item.itemId} className="flex items-center mt-2">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-4"/>
                <span className="text-gray-900 dark:text-white">{item.name}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
