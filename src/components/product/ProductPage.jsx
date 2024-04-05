import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Header from "../partials/Header";

function ProductPage(){
    
    const { cart, addToCart, removeFromCart, updateCartItemAmount, selectedProduct } = useContext(ShopContext);

    const[product, setProduct] = useState(selectedProduct);
    
    return(
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
            <Header />
            <div className="flex-col dark:bg-gray-800 dark:border-gray-700 text-white m-4 flex items-center gap-4 p-6 rounded-lg justify-between text-2xl">
                <img className="h-80 rounded" src={product.image}></img>
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>{product.category}</h2>
                <h2>{product.price}</h2>
                <div className="flex gap-2">
                    <button onClick={()=>addToCart(product.id)}>+</button>
                    <h1>{cart[product.id]}</h1>
                    <button onClick={()=>removeFromCart(product.id)}>-</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductPage;