import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Product({ id, title, price, description, image }){

    //const { id, title, price, description, image } = data;
    const { cart, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);

    // id title price description image
    return(
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <img className="h-48" src={image}></img>
            <div className="flex gap-2">
                <button onClick={()=>addToCart(id)}>+</button>
                <input onChange={(event)=>updateCartItemAmount(id, Number(event.target.value))} type="number" className="w-20" min="0" value={cart[id]}></input>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}

export default Product;