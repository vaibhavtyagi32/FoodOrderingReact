import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=> store.cart.items)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    console.log(cartItems);
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold m-2">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="border rounded-xl p-2 cursor-pointer bg-green-400 hover:bg-green-500 text-white m-3" onClick={()=>handleClearCart()}>Clear Cart</button>
                {cartItems.length===0? <h1 className="text-2xl font-bold m-2">Cart is Empty, Add Item to the cart...</h1>:<ItemList data={cartItems}></ItemList>}
    
            </div>
        </div>
    )
}
export default Cart;