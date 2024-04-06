import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Header from "../partials/Header";
import { useNavigate } from "react-router-dom";

function ProductPage(){
    
    const { cart, addToCart, removeFromCart, selectedProduct, getProductsByCategory } = useContext(ShopContext);

    const[product, setProduct] = useState(selectedProduct);

    let navigate = useNavigate();

    function navToShop(category){
        getProductsByCategory(category);
        navigate(`/shop`);
    }
    
    return(
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen shadow-lg shadow-indigo-500/50">
            <Header />
            <div className="flex-col dark:bg-gray-800 dark:border-gray-700 text-white m-4 flex items-center gap-4 p-6 rounded-lg justify-between text-2xl">
                <img className="h-80 rounded shadow-lg shadow-white-500/50" src={product.image}></img>
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2 className="hover:cursor-pointer" onClick={()=>navToShop(product.category)}>{product.category}</h2>
                <h2>${product.price}</h2>
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