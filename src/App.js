import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/order" element={<OrderPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/" element={<HomePage/>}/>
         
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
}

export default App;
