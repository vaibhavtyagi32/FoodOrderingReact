import ItemList from "./ItemLists";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    const handleChange=()=>{
        setShowIndex();
    }
  return (
    <div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer" onClick={handleChange}>
            <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
        {showItems && <ItemList data={data.itemCards}/>} 
        </div>
    </div>
  )
}

export default RestaurantCategory;