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
      {/*
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/userhome" element={<UserHomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orderdetail" element={<OrderDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/allProducts" element={<AllProduct />} />

               <Route path="/product" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetail />} /> 
            
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/blog" element={<BlogList />} />
          <Route path="/admin/blog/detail/:id" element={<BlogDetail />} />
          <Route path="/admin/blog/add" element={<AddBlog />} />
          <Route path="/admin/blog/edit/:id" element={<EditBlog />} />
          </Routes>
        </BrowserRouter> 
      </div>
    */}
      <AppRouter />
    </>
  );
}

export default App;
