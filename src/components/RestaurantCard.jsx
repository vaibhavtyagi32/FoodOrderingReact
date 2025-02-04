import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,id}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return (
      <div className="w-[250px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8  ">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <Link to={`/restaurant/${id}`} className="text-inherit no-underline">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
            <p>⭐ {avgRating} Stars</p>
            <p>💰 {costForTwo}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">⏳ {deliveryTime} mins</p>
        </div>
        </Link>
      </div>
    );
  };

export default RestaurantCard;