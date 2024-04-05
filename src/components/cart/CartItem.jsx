import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({id, title, price, description, image }){

    const { cart, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);

    return(
        <div className="dark:bg-gray-800 dark:border-gray-700 text-white m-4 flex items-center gap-4 p-6 rounded-lg justify-between">
            <img className="h-20 rounded-lg" src={image}></img>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <div className="flex gap-5">
                <button onClick={()=>addToCart(id)}>+</button>
                <h1>{cart[id]}</h1>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}

export default CartItem;
