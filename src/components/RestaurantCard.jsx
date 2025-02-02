import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,id}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="card-img"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <Link to={`/restaurant/${id}`}>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-cuisines">{cuisines.join(", ")}</p>
          <p className="card-rating">⭐ {avgRating} Stars</p>
          <p className="card-price">💰 {costForTwo}</p>
          <p className="card-time">⏳ {deliveryTime} mins</p>
        </div>
        </Link>
      </div>
    );
  };

export default RestaurantCard;