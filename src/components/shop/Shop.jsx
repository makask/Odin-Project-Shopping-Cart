import Header from "../partials/Header";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import Product from "../product/Product";

function Shop(){

    const { data, error, loading, getProductsByCategory } = useContext(ShopContext);
    
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    function handleChange(event){
        event.preventDefault();
        getProductsByCategory(event.target.value);
    }

    return(
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Header></Header>
            <div className="flex">
            {
                data?.map(product => <Product 
                   key={product.id}
                   id={product.id}
                   title={product.title}
                   price={product.price}
                   category={product.category}
                   image={product.image}
                />)
                
            }
            </div>
            <div>
                <form>
                    <label htmlFor="categories">Choose a category: </label>
                    <select name="categories" onChange={handleChange}>
                        <option value="all-products">All products</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default Shop;