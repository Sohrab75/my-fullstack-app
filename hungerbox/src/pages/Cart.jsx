import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import Header from "../components/Header";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("Cart Items:", cartItems); // Debugging log to check cart items
  const totalPrice = cartItems.reduce(
  (total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  },
  0
);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-lg font-semibold mb-4">Your cart is empty.</p>
        <button
          onClick={() => navigate("/home")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <>
    <Header/>
      <button onClick={() => navigate("/home")}>Want to add more items?</button>
      <div>Cart</div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-6 gap-3">
            <span> Id: {item.id}</span>
            <span>Name: {item.name}</span>
            <span> Cost: {item.price}</span>
            <button
              onClick={() => dispatch(addToCart({ ...item }))}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
            <span> Quantity: {item.quantity}</span>
            <button
              onClick={() => dispatch(removeFromCart({ ...item }))}
            //   disabled={item.quantity <= 1}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <span>total price 💸{totalPrice}</span>
        <span>total quantity {totalQuantity}</span>
      </div>
    </>
  );
};

export default Cart;
