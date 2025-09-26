import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import RestaurantsDetails from "../pages/RestaurantsDetails";
import UserProfile from "../pages/UserProfile";
import ItemDetails from "../pages/ItemDetails";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Routing = () => {
  const user = useSelector((state) => state.user.user);
  console.log("User data:", user);
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/restaurant/:id"
        element={
          <PrivateRoute>
            <RestaurantsDetails />
          </PrivateRoute>
        }
      />
      <Route path="/userProfile" element={
        <PrivateRoute>
          <UserProfile user={user}/>
        </PrivateRoute>
      } 
      />
      <Route path="/itemDetails/:id" element={
        <PrivateRoute>
          <ItemDetails />
        </PrivateRoute>

      } />
      <Route path="/cart" element={
        <PrivateRoute>
          <Cart/>
        </PrivateRoute>
      }
      />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/search" element={<div>Search Results</div>} />
    </Routes>
  );
};

export default Routing;
