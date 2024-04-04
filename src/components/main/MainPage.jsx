import { Link } from "react-router-dom";

function MainPage(){

    return (
        <div>
            <h1>MAIN PAGE</h1>
            <button><Link to="/shop">To Shop</Link></button>
        </div>
    )
}

export default MainPage;