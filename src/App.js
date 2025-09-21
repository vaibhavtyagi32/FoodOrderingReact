import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from './components/Body.jsx';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStrore.jsx";
import Cart from "./components/Cart.jsx";
const Grocery=lazy(()=>import('./components/Grocery.jsx'))
const App = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    setUserName("Vaibhav Tyagi");
  },[])
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app">
      <Header />
      <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
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
        path:'cart',
        element:<Cart />
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
