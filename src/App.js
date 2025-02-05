import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from './components/Body.jsx';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Grocery from "./components/Grocery.jsx";
import userContext from "./utils/userContext.js";
const App = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    setUserName("Vaibhav Tyagi");
  },[])
  return (
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app">
      <Header />
      <Outlet/>
    </div>
    </userContext.Provider>
  );
};
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:'',
        element:<Body />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'grocery',
        element:<Grocery />
      },
      {
        path:'restaurant/:resId',
        element:<RestaurantMenu />
      }
    ]
    
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
