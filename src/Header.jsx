import { useState, useContext } from "react";
// import { LOGO_URL } from "./utils/constants";
// import "./image.png" from public;
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./utils/UserContext.js"
import { useSelector } from "react-redux";


export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setLoginBtn] = useState("login");
  const {loggedInUser} =useContext(UserContext);


  //Subscribing to store using selector.Selector is also a Hook.Selector gives Acess to whole store (it is global data /state over App).A Hook is normal JavaScript funtion with specific functionality
  const cartItems=useSelector((store)=>store.cart.items);
  


  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 border-2 bg-[#f0f0f0]  border-white rounded-xl shadow-xl sticky ">  
      
      {/* Logo */}
      <div className="h-12 w-36 bg-[#f0f0f0] rounded-xl">
        <img src="./image.png" className="py-1 mx--1 h-16 w-16 object-contain rounded-xl " />
      </div>

      {/* Nav */}
      <div className="nav-details">
        <ul className="flex items-center gap-6 text-gray-700 font-medium">

          <li>
            Online Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
            <Link to="/">Home</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
            <Link to="/About">About Us</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white ">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition font-bold text-xl">
            <Link to="/Cart">🛒({cartItems.length})</Link>
          </li>

          <button
            className="px-4 py-1 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition hover:bg-pink-700"
            onClick={() =>
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login")
            }
          >
            {loginBtn}
          </button>
          <li className="font-extrabold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
