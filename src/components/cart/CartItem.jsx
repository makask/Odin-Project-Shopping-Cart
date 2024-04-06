import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({id, title, price, description, image }){

    const { cart, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);

    return(
        <div className="dark:bg-gray-800 dark:border-gray-700 text-white m-4 flex items-center gap-4 p-6 rounded-lg">
            <img className="h-20 rounded-lg w-20 mr-10" src={image}></img>
            <p className="w-1/2">{title}</p>
            <p className="w-1/4 float-right">${price}</p>
            <div className="flex gap-5 ml-52">
                <button onClick={()=>addToCart(id)}>+</button>
                <h1>{cart[id]}</h1>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}

export default CartItem;
