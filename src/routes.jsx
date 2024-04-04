import App from "./App";
import MainPage from "./components/main/MainPage";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import ShopContextProvider from "./context/ShopContext";

const routes = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
        path: "/shop",
        element: <ShopContextProvider><Shop /></ShopContextProvider>
    },
    {
        path: "/cart",
        element: <ShopContextProvider><Cart /></ShopContextProvider>
    }
  ];
  
  export default routes;