import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData=async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData=await data.json();
      console.log(jsonData);
      const restaurants =
      jsonData?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      console.log(listOfRestaurant);
    }
    return listOfRestaurant.length===0?<Shimmer />:(
      <div className="body">
        <div className="search">
          <button className="filter-btn" onClick={()=>{
            let filteredList=listOfRestaurant.filter((res)=>res.info.avgRating> 4.2);
            setListOfRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            listOfRestaurant.map((res)=> <RestaurantCard resData={res} key={res.info.id} />)
          }
        </div>
      </div>
    );
  };
export default Body;