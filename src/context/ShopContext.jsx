import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function ShopContextProvider(props){

    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);
    const[cart, setCart] = useState({});
    
    function getDefaultCart(data){
        let cart = {}
        for(let i = 1; i <= data.length; i++){
            cart[i] = 0;
        }
        return cart;
    }
    
    async function getData(){
        try{
            const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
            if(response.status === 200){
                setLoading(false);
            }
            const data = await response.json();
            setData(data);
            setCart(getDefaultCart(data));
        }catch(err){
            setError(err);
        }
    }

    function addToCart(productId){
        setCart((prevValue) => ({...prevValue, [productId]:prevValue[productId] + 1}));
    }

    function removeFromCart(productId){
        if(cart[productId] <= 0){
            return;
        }
        setCart((prevValue) => ({...prevValue, [productId]:prevValue[productId] - 1}));
    }

    function updateCartItemAmount(productId, amount){
        setCart((prevValue) => ({...prevValue, [productId]:amount}));
    }

    function getTotalAmount(){
        let total = 0;
        for(const item in cart){
            
            if(cart[item] > 0){
                let foundItem = data.find((product) => product.id === Number(item));
                total+= cart[item] * foundItem.price;
            }
        }
        return Number.parseFloat(total).toFixed(2);
    }

    useEffect(()=>{
        getData();    
    },[]);

    const contextValue = { 
        data, 
        error, 
        loading, 
        cart, 
        addToCart, 
        removeFromCart, 
        updateCartItemAmount, 
        getTotalAmount
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider;