import App from "./App";
import MainPage from "./components/main/MainPage";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import ShopContextProvider from "./context/ShopContext";
import ProductPage from "./components/product/ProductPage";

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
    },
    {
       path: "/product/:id",
       element: <ShopContextProvider><ProductPage /></ShopContextProvider>
    }
  ];
  
  export default routes;