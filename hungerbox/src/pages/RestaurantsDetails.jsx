import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetRestaurantByIdQuery } from "../app/apiConfig";
import ItemCard from "../components/ItemCard";
import { RestaurantHeader } from "../components/Heading";
import LoadingSkeleton from "../components/LoadingSkeleton";
import LabelButton from "../components/LabelButton";
import Header from "../components/Header";
import img4 from "../assets/img/gallery/gallery-4.jpg";
import img5 from "../assets/img/gallery/gallery-5.jpg";
import img6 from "../assets/img/gallery/gallery-6.jpg";
import img7 from "../assets/img/gallery/gallery-7.jpg";
import img8 from "../assets/img/gallery/gallery-8.jpg";
import OfferContainer from "../components/OfferContainer";
import RestaurantTabs from "../components/RestaurantTabs";

const RestaurantsDetails = () => {
  const [seeAllMenuItems, setSeeAllMenuItems] = useState(false);
  const id = useSelector((state) => state.restaurant.selectedRestaurant);
  const {
    data: restaurantData,
    error,
    isLoading,
  } = useGetRestaurantByIdQuery(id, { skip: !id });
  console.log("selected restaurant data", restaurantData, id);
  if (isLoading) return <LoadingSkeleton />;

  if (error) return <div>Error: {error.message}</div>;
  if (!restaurantData) return <div>No Restaurant Data Found</div>;

  const date = new Date();
  const timeNow = date.getTime();

  // Get today's date with shop open/close times
  const shopOpen = new Date(`${date.toDateString()} ${restaurantData.timings.split(" - ")[0]}`).getTime();
  const shopClose = new Date(`${date.toDateString()} ${restaurantData.timings.split(" - ")[1]}`).getTime();
  console.log(
  "Now:", new Date(timeNow).toLocaleTimeString(),
  "Open:", new Date(shopOpen).toLocaleTimeString(),
  "Close:", new Date(shopClose).toLocaleTimeString(),
  timeNow >= shopOpen,
  timeNow <= shopClose
);
  const isOpen = timeNow >= shopOpen && timeNow <= shopClose;

  return (
    <div className="container mx-auto p-5">
      <Header />
      {restaurantData && (
        <>
          <div className="grid grid-cols-3 gap-4">
            {/* Large left image */}
            <div className="col-span-2">
              <img
                className="h-[300px] w-full object-cover rounded-lg"
                src={img4}
                alt=""
              />
            </div>

            {/* Right-side small images grid */}
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              <img
                className="w-full h-[145px] object-cover rounded-lg"
                src={img5}
                alt=""
              />
              <img
                className="w-full h-[145px] object-cover rounded-lg"
                src={img6}
                alt=""
              />
              <img
                className="w-full h-[145px] object-cover rounded-lg"
                src={img7}
                alt=""
              />
              {/* Last image with overlay for "View Gallery" */}
              <div className="relative">
                <img
                  className="w-full h-[145px] object-cover rounded-lg"
                  src={img8}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    View Gallery
                  </span>
                </div>
              </div>
            </div>
          </div>

          <RestaurantHeader>{restaurantData.restaurant}</RestaurantHeader>
          <p>{restaurantData.location}</p>
          <p>{restaurantData.address}</p>
          <p><i class="fa-solid fa-phone-volume"></i> {restaurantData.contact}</p>
          <LabelButton
            label="Reserve a Table"
            onClick={() => console.log("Table reserved")}
          />        
            {restaurantData.cuisine.split(",").map((item, index) => (
              <LabelButton key={index} color="alternative" label={item} />
            ))}
          <LabelButton 
            label={
              <>
                {restaurantData.rating} <i className="fa-solid fa-star"></i>
              </>
            } 
            color="blue" />
          <p>{restaurantData.rating} </p>
          <LabelButton label={`${isOpen ? "Shop Open" : "Shop Closed will open at"} ${restaurantData.timings}`} color="alternative" />
          <RestaurantTabs restaurant={restaurantData} setSeeAllMenuItems={setSeeAllMenuItems} />
          {seeAllMenuItems && (
            <div className="grid grid-cols-4 gap-4">
            {restaurantData.items.map((item) => (
              <ItemCard item={item} />
            ))}
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default RestaurantsDetails;
