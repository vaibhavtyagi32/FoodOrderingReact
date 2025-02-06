import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ data }) => {
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
    dispatch(addItem(item));
  }
  return (
    <div>
      <ul>
        {data.map((item) => {
          const imageUrl = item?.card?.info?.imageId
            ? `https://media-assets.swiggy.com/${item.card.info.imageId}` // Replace with correct Swiggy image URL if needed
            : null;

          return (
            <div
              key={item?.card?.info?.id}
              className="border-b-2 m-3 p-4 border-gray-200 text-left flex gap-4 items-center">
              
              <div className="py-2 flex-1">
                <span className="font-semibold">{item?.card?.info?.name}</span>
                <span className="font-semibold">
                  {" "}
                  - ₹
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </span>
                <p className="text-sm text-gray-600">
                  {item?.card?.info?.description}
                </p>
              </div>
              {imageUrl && (
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={item?.card?.info?.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <button className="absolute bottom-1 right-1 bg-black text-white px-2 py-1 text-sm rounded-md shadow-md hover:bg-gray-600 transition cursor-pointer"
                  onClick={()=>handleAddItem(item)}>
                    Add +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemList;
