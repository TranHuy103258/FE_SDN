import { Outlet } from "react-router-dom";
import UserHome from "../components/userHome/UserHome";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrderPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import AllProduct from "../pages/AllProduct";
import HomePage from "../pages/HomePage";
import ChangePassPage from "../pages/ChangePassPage";
import UserHomePage from "../pages/UserHomePage";
import BlogDetail from "../components/blog/BlogDetail";
import BlogPage from "../pages/BlogPage";

export function publicRoutes() {
  return {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/profile", element: <UserHomePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/change", element: <ChangePassPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:id", element: <BlogDetail /> },
      { path: "/order", element: <OrderPage /> },
      { path: "/orderdetail", element: <OrderDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/allProducts", element: <AllProduct /> },
    ],
  };
}
