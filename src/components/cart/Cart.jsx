import Header from "../partials/Header";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";


function Cart(){

    const { data, cart, getTotalAmount} = useContext(ShopContext);
    const total = getTotalAmount();

    return(
        <div className="flex-col bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
            <Header />
                {
                    data?.map((product) => {
                        if(cart[product.id] > 0){
                            return <CartItem 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        }
                    })
                }
            <h1 className="text-white float-right mr-10 mt-6 text-xl">Total: ${total}</h1>
        </div>
    );
}

export default Cart;
//