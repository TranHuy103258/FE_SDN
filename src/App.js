import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import UserHomePage from "./pages/UserHomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AllProduct from "./pages/AllProduct";
import Dashboard from "./Admin/pages/DashBoard/DashBoard";
import BlogList from "./Admin/pages/Blog/BlogList";
import AddBlog from "./Admin/pages/Blog/AddBlog";
import EditBlog from "./Admin/pages/Blog/EditBlog";
import BlogDetail from "./Admin/pages/Blog/BlogDetail";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./route/router";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <AppRouter />
    </>
  );
}

export default App;
