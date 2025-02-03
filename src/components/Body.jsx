import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    const [filteredList,setFilteredList]=useState([]);
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
      setFilteredList(restaurants);
      console.log(listOfRestaurant);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
      return (
      <h1>Look's Like you are offline,,,,,Please check your connection....</h1>
      )
    }
    return listOfRestaurant.length===0?<Shimmer />:(
      <div className="body p-5">
        <div className="flex flex-wrap justify-between items-center mb-3">
          <div className="flex items-center gap-3">
          <input type="text" 
          placeholder="search here..." 
          className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
          value={searchInput} 
          onChange={(e)=>{
            setSearchInput(e.target.value);
          }}></input>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={()=>{
            const filterRes=listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
            setFilteredList(filterRes);
          }}>Search</button>
          </div>
          <div className="p-4 m-4 flex items-center">
          <button className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition" onClick={()=>{
            let filteredList=listOfRestaurant.filter((res)=>res.info.avgRating> 4.5);
            setFilteredList(filteredList);
          }}>Top Rated Restaurant</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 p-5 cursor-pointer">
          {
            filteredList.map((res)=> <RestaurantCard resData={res} key={res.info.id} />)
          }
        </div>
      </div>
    );
  };
export default Body;