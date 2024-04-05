import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function ShopContextProvider(props){

    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);
    const[cart, setCart] = useState({});
    const[selectedProduct, setSelectedProduct] = useState(null);
    const[cartItemCount, setCartItemCount] = useState(0);
    
    function getDefaultCart(data){
        let cart = {}
        if(data){
            for(let i = 0; i < data.length; i++){
                cart[data[i].id]=0;
            }
        }
        return cart;
    }
    
    async function getDefaultData(){
        try{
            const response = await fetch(`https://fakestoreapi.com/products?limit=20`);
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

    async function getData(){
        try{
            const response = await fetch(`https://fakestoreapi.com/products?limit=20`);
            if(response.status === 200){
                setLoading(false);
            }
            const data = await response.json();
            setData(data);
        }catch(err){
            setError(err);
        }
    }

    function addToCart(productId){
        setCart((prevValue) => ({...prevValue, [productId]:prevValue[productId] + 1}));
        setCartItemCount(cartItemCount + 1);
    }

    function removeFromCart(productId){
        if(cart[productId] <= 0){
            return;
        }
        setCart((prevValue) => ({...prevValue, [productId]:prevValue[productId] - 1}));
        setCartItemCount(cartItemCount - 1);
    }

    function getTotalCartItemAmount(){
        let amount = 0;
        for(const id in cart){
            amount+=cart[id];
        }
        setCartItemCount(amount);
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

    function getProductById(id){
        if(data){
            const item = data.find((product) => product.id === Number(id));
            return item;
        }
    }

    async function getProductsByCategory(category){
        if(category==="all-products"){
            getData();
            return;
        } 
        if(category!=="all-products"){
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setData(json))
        }
    }
    
    useEffect(()=>{
        getDefaultData(); 
    },[]);
    
    const contextValue = { 
        data, 
        error, 
        loading, 
        cart, 
        addToCart, 
        removeFromCart, 
        updateCartItemAmount, 
        getTotalAmount,
        getProductsByCategory,
        getProductById,
        selectedProduct,
        setSelectedProduct,
        cartItemCount
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider;