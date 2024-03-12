import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import BlogList from "./Admin/pages/Blog/BlogList";
import Feedback from "react-bootstrap/esm/Feedback";
import Customer from "./Admin/pages/Customer/Customer";
import BlogDetail from "./Admin/pages/Blog/BlogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/blog" element={<BlogList />} />
          <Route path="/admin/blogdetails/:id" element={<BlogDetail />} />
          <Route path="/admin/feedback" element={<Feedback />} />
          <Route path="/admin/cus" element={<Customer />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/product" element={<Products/>}/> */}
          {/* <Route path="/products/:productId" element={<ProductDetail/>}/> */}
          {/* <Route path='/admin' element={<HomeAdmin />}>
            <Route index element={<TableAlbum />} />
            <Route path="/admin/albums" element={<TableAlbum />} />
            <Route path="/admin/songs" element={<TableSong />} />
            <Route path="/admin/users" element={<TableUser />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import UserHomePage from "./pages/UserHomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AllProduct from "./pages/AllProduct";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/userhome" element={<UserHomePage/>}/>
                    <Route path="/order" element={<OrderPage/>}/>
                    <Route path="/orderdetail" element={<OrderDetailPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/allProducts" element={<AllProduct />} />

                    {/* <Route path="/product" element={<Products/>}/> */}
                    {/* <Route path="/products/:productId" element={<ProductDetail/>}/> */}
                    {/* <Route path='/admin' element={<HomeAdmin />}>
                        <Route index element={<TableAlbum />} />
                        <Route path="/admin/albums" element={<TableAlbum />} />
                        <Route path="/admin/songs" element={<TableSong />} />
                        <Route path="/admin/users" element={<TableUser />} />
                        </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
>>>>>>> 9d86f4d92df75cff724a2d295bb45246f72ad434
}

export default App;
