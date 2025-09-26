import React from "react";
import Rating from "./Rating";
import LabelButton from "./LabelButton";
import Label from "./Label";
import Button from "./Button";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
  if (!item) return <div>No Item Data Found</div>;
  const handleAddToCart = (item) => {
      console.log("Adding to cart:", item);
      dispatch(
        addToCart({
          id: item.itemId,
          name: item.name,
          price: item.price,
        })
      );
    };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="h-48 w-full rounded-t-lg object-cover" src={item.image} alt={item.name} />
        <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            <Link to={`/itemDetails/${item.itemId}`} className="flex items-center mt-2.5 mb-5">
                <div className="flex flex-col space-x-1 rtl:space-x-reverse">
                    <LabelButton label={item.type} color={item.type==="veg" ? "green" : "red"} />
                    <LabelButton label={item.category} color="alternative" />
                    <Label label={item.description} size={"xs"}/>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                   <Rating count={item.rating} />
                </span>
            </Link>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                <Button label="Add to cart" onClick={()=>handleAddToCart(item)}/>
            </div>
        </div>
    </div>
  );
};

export default ItemCard;
