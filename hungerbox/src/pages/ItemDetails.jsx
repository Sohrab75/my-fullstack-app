import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemByIdQuery } from "../app/apiConfig";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetItemByIdQuery(id);
  // const navigate = useNavigate();
  if (!data) return <div>No Data Found</div>;
  console.log("ItemDetails data", data);
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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={data?.item.image}
          alt={data?.item.name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.item.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.item.description}
        </p>
        <button
          onClick={() => handleAddToCart(data.item)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
