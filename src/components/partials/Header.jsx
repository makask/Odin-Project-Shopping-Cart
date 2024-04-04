import { Link } from "react-router-dom";

function Header(){

    return(
        <div>
            <h1>HEADER</h1>
            <Link to="/cart">To Cart</Link>
            <Link to="/shop">To Shop</Link>
        </div>

    );
}

export default Header;