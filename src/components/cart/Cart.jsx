import Header from "../partials/Header";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";


function Cart(){

    const { data, cart, getTotalAmount} = useContext(ShopContext);
    const total = getTotalAmount();

    return(
        <div>
            <Header />
            <h1>CART</h1>
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
            <h1>Total: ${total}</h1>
        </div>
    );
}

export default Cart;
//