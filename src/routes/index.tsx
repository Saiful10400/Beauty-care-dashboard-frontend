import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../pages/Root";
import Brands from "../pages/brand/Brands";
import CreateBrand from "../pages/brand/CreateBrand";
import Categoryes from "../pages/category/Categoryes";
import CreateCategory from "../pages/category/CreateCategory";
import Products from "../pages/product/Products";
import CreateProduct from "../pages/product/CreateProduct";
import General from "../pages/general/General";
import EditBrand from "../pages/brand/EditBrand";
import EditCategory from "../pages/category/EditCategory";
import EditProduct from "../pages/product/EditProduct";
import Banner from "../pages/banner/Banner";
import CreateBanner from "../pages/banner/CreateBanner";
import Order from "../pages/order/Order";
import CreateReview from "../pages/facebook-reviews(admin)/CreateReview";
import Review from "../pages/facebook-reviews(admin)/Review";
import CreateCombo from "../pages/offer/combo/CreateCombo";
import Combo from "../pages/offer/combo/Combo";
import FreeGift from "../pages/offer/freeGift/FreeGift";
import CreateDiscount from "../pages/offer/discount/CreateDiscount";
import Discount from "../pages/offer/discount/Discount";
import CreateFreeGift from "../pages/offer/freeGift/CreateFreeGift";
import OrderDetails from "../pages/order/OrderDetails";

const routes = createBrowserRouter([
    {
        path: "/", element: <Root />, children: [
            { index: true, element: <Home /> },
            {
                path: "banner", children: [
                    { index: true, element: <Banner /> },
                    { path: "create", element: <CreateBanner /> },

                ]
            },
            {
                path: "brand", children: [
                    { index: true, element: <Brands /> },
                    { path: "create", element: <CreateBrand /> },
                    { path: "edit/:id", element: <EditBrand /> },
                ]
            },
            {
                path: "category", children: [
                    { index: true, element: <Categoryes /> },
                    { path: "create", element: <CreateCategory /> },
                    { path: "edit/:id", element: <EditCategory /> },
                ]
            },
            {
                path: "product", children: [
                    { index: true, element: <Products /> },
                    { path: "create", element: <CreateProduct /> },
                    { path: "edit/:id", element: <EditProduct /> },
                ]
            },
            {
                path: "order", children: [
                    { index: true, element: <Order /> },
                    { path: ":id", element: <OrderDetails /> },
                ]
            },
            {
                path: "review", children: [
                    { index: true, element: <Review /> },
                    { path: "create", element: <CreateReview /> },

                ]
            },
            {
                path: "settings", children: [
                    { path: "general", element: <General /> },
                ]
            },
            {
                path: "offer", children: [
                    {
                        path: "combo", children: [
                            { index: true, element: <Combo /> },
                            { path: "create", element: <CreateCombo /> },
                        ]
                    },
                    {
                        path: "free-gift", children: [
                            { index: true, element: <FreeGift /> },
                            { path: "create", element: <CreateFreeGift /> },
                        ]
                    },
                    {
                        path: "discount", children: [
                            { index: true, element: <Discount /> },
                            { path: "create", element: <CreateDiscount /> },
                        ]
                    },
                ]
            },
        ]
    },
]);

export default routes;