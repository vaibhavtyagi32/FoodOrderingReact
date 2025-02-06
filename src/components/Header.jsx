import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(userContext);
  const cartItems=useSelector((store)=> store.cart.items);
  console.log(cartItems);
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Branding */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 rounded-full"></div>
            <img
              className="relative h-16 w-16 rounded-lg shadow-xl border-2 border-white p-1 transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
              src={LOGO_URL}
              alt="Street Food Logo"
            />
          </div>
          <span className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Street Food
          </span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-6 text-lg text-white font-medium">
            <li className="hover:text-yellow-300 transition duration-300">
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="relative">
              <Link
                to="/cart"
                className="flex items-center gap-2 font-bold transition-transform duration-300 hover:scale-105"
              >
                🛒 Cart 
                {cartItems.length > 0 && (
                  <span className="bg-red-500 text-white text-sm font-semibold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <button
                className="px-3 py-1 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 cursor-pointer"
                onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
              >
                {loginBtn}
              </button>
            </li>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
