import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between p-4 bg-indigo-400 shadow-lg mb-2 items-center">
      <div className="w-20">
        <img className="logo" src={LOGO_URL}></img>
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
