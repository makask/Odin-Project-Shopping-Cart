import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Product({ id, title, price, category, image }){

    const { cart, addToCart, removeFromCart, updateCartItemAmount, setSelectedProduct, getProductById } = useContext(ShopContext);

    let navigate = useNavigate();
    function navToProductPage(id){
        navigate(`/product/:${id}`);
        setSelectedProduct(getProductById(id));
    }

    return(
        <div className="bg-white">
            <img className="h-48" src={image} onClick={()=>navToProductPage(id)}></img>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{category}</p>
            <div className="flex gap-2">
                <button onClick={()=>addToCart(id)}>+</button>
                <input onChange={(event)=>updateCartItemAmount(id, Number(event.target.value))} type="number" className="w-20" min="0" value={cart[id]}></input>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string
}

export default Product;

