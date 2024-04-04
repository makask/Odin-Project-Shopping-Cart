import Header from "../partials/Header";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import Product from "../product/Product";

function Shop(){

    const { data, error, loading, addToCart, removeFromCart } = useContext(ShopContext);
    
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return(
        <div>
            <Header></Header>
            <h1>SHOP</h1>
            {
                data?.map(product => <Product 
                   key={product.id}
                   id={product.id}
                   title={product.title}
                   price={product.price}
                   description={product.description}
                   image={product.image}
                />)
                
            }
        </div>
    );
}

export default Shop;