import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom"; 

function Header(){

    const { cartItemCount, getData } = useContext(ShopContext);

    let navigate = useNavigate();

    function handleNavigate(route){
        navigate(route);
        getData();
    }

    return(
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <div className="p-4 flex items-center hover:opacity-75">
                <Link to="/shop" className="text-3xl" onClick={()=>handleNavigate(`/shop`)}>SuperStore 9000</Link>
                <div className="ml-auto">
                    {
                        cartItemCount > 0 && <h1 className="text-2xl">{cartItemCount}</h1>
                    }
                </div>
                <ShoppingCart onClick={()=>handleNavigate(`/cart`)} className="text-4xl hover:opacity-75 cursor-pointer"></ShoppingCart>
            </div>
        </div>

    );
}

export default Header;