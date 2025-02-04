const ItemList=({data})=>{
    console.log(data)
    return(
        <div>
            <ul>
                {data.map((item)=>(
                    <div key={item?.card?.info?.id} className="border-b-2 m-3 p-4 border-gray-200 text-left"> 
                       <div className="py-2">
                            <span className="font-semibold">{item?.card?.info?.name}</span>
                            <span className="font-semibold"> - ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</span>
                        </div>
                        <p className="text-sm">{item?.card?.info?.description}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ItemList;