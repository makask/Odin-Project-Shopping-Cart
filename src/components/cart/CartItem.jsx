import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({id, title, price, description, image }){

    const { cart, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);

    return(
        <div>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <img className="h-20" src={image}></img>
            <div className="flex gap-2">
                <button onClick={()=>addToCart(id)}>+</button>
                <input onChange={(event)=>updateCartItemAmount(id, Number(event.target.value))} type="number" className="w-20" min="0" value={cart[id]}></input>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}

export default CartItem;
