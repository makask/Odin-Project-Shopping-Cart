import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Product({ id, title, price, category, image }){

    const { cart, addToCart, removeFromCart, updateCartItemAmount, setSelectedProduct, getProductById, getProductsByCategory } = useContext(ShopContext);

    let navigate = useNavigate();
    function navToProductPage(id){
        navigate(`/product/${id}`);
        setSelectedProduct(getProductById(id));
    }

    return(
        <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col">
            <img className="m-auto mt-6 w-48 h-60 rounded-t-lg hover:cursor-pointer" src={image} alt="" onClick={()=>navToProductPage(id)} />
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:cursor-pointer" onClick={()=>getProductsByCategory(category)}>{category}</p>
            <a onClick={()=>navToProductPage(id)} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <div className="text-white flex text-xl gap-3 my-4 justify-center">
                <button onClick={()=>addToCart(id)}>+</button>
                    <h1>{cart[id]}</h1>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>   
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

