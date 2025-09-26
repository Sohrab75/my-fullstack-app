import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { clearUser, setUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = sessionStorage.getItem("token");

  console.log("date", Date.now());
  // jwtDecode will be dynamically imported in useEffect
  useEffect(() => {
    if (!token) {
      dispatch(clearUser());
      navigate("/login");
      return;
    }
    let interval;
    try {
      const { exp } = jwtDecode(token);
      const checkExpiration = () => {
        console.log("exp", exp);
        if (Date.now() >= exp * 1000) {
          sessionStorage.removeItem("token");
          dispatch(clearUser());
          console.log("Token expired, redirecting to login.");
          navigate("/login");
        }
      };
      checkExpiration();
      interval = setInterval(checkExpiration, 1000);
    } catch {
      sessionStorage.removeItem("token");
      dispatch(clearUser());
      console.log("Error decoding token, redirecting to login.");
      navigate("/login");
    }
    return () => clearInterval(interval);
  }, [token, navigate]);

   // If Redux lost user (like after refresh), try rehydrate from sessionStorage
  useEffect(() => {
    if (!user) {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      }
    }
  }, [user, dispatch]);

  return token ? children : null;
};
export default PrivateRoute;
