import { Link } from "react-router-dom";

function MainPage(){

    return (
        <div className="static bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-white text-5xl mb-6">Welcome to SuperStore 9000</h1>
                <button className="bg-slate-800 text-white mt-14 p-4 w-36 rounded-lg border-white border-2 hover:opacity-75"><Link to="/shop">To Shop</Link></button>
            </div>
        </div>
    )
}

export default MainPage;