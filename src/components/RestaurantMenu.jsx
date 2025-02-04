import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);
  const [showIndex,setShowIndex]=useState(0);
  useEffect(() => {
    getMenu();
  }, [resId]);

  const getMenu = async () => {
    try {
      const response = await fetch(MENU_URL + resId);
      const json = await response.json();
      setResMenu(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resMenu) {
    return <Shimmer />; // Prevent accessing null state
  }
  // Extract Restaurant Details
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards?.[2]?.card?.card?.info || "Unknown Restaurant";
  // Extract Menu Items
  const menuCategories =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold p-2 m-2">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {menuCategories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={showIndex==index ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
