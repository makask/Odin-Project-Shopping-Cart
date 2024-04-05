import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

function ProductPage(){
    
    const { cart, addToCart, removeFromCart, updateCartItemAmount, selectedProduct } = useContext(ShopContext);

    const[product, setProduct] = useState(selectedProduct);
    
    return(
        <div>
            <h1>PRODUCT:</h1>
            <img className="h-80" src={product.image}></img>
            <h2>{product.title}</h2>
            <h2>{product.description}</h2>
            <h2>{product.category}</h2>
            <h2>{product.price}</h2>
            <div className="flex gap-2">
                <button onClick={()=>addToCart(product.id)}>+</button>
                <input onChange={(event)=>updateCartItemAmount(product.id, Number(event.target.value))} type="number" className="w-20" min="0" value={cart[product.id]}></input>
                <button onClick={()=>removeFromCart(product.id)}>-</button>
            </div>
        </div>
    )
}

export default ProductPage;