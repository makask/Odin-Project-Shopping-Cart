import { Link } from "react-router-dom";

function Header(){

    return(
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1>HEADER</h1>
            <Link to="/cart">To Cart</Link>
            <Link to="/shop">To Shop</Link>
        </div>

    );
}

export default Header;