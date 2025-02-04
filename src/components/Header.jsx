import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between p-4 bg-indigo-400 shadow-lg mb-2 items-center h-24">
      <div className="flex items-center space-x-3">
  <div className="relative">
    <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50 rounded-full"></div>
    <img 
      className="relative h-16 w-16 md:h-14 md:w-14 rounded-lg shadow-xl border-2 border-white p-1 transition-transform duration-300 hover:scale-110 hover:shadow-2xl" 
      src={LOGO_URL} 
      alt="Street Food Logo"
    />
  </div>
  <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
    Street Food
  </span>
</div>

      <div>
        <ul className="flex gap-10 p-4 m-4 text-2xl">
          <li>
            Online Status {onlineStatus ? "✅":"❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="border border-solid border-black px-4 rounded-xl"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
