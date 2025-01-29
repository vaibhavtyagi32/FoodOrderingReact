import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="card-img"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-cuisines">{cuisines.join(", ")}</p>
          <p className="card-rating">⭐ {avgRating} Stars</p>
          <p className="card-price">💰 {costForTwo}</p>
          <p className="card-time">⏳ {deliveryTime} mins</p>
        </div>
      </div>
    );
  };

export default RestaurantCard;