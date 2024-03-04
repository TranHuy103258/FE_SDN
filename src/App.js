import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
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
}

export default App;
