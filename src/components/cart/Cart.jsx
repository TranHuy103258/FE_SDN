import React from 'react';
import './Cart.css';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import { formatCurrency, calculateDiscountPercentage } from '../../ultils/function';

const Cart = () => {
    const [product,setProduct]=useState([]);
    const [cartSize,setCartSize]=useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:9999/products/cart`, {
                method: 'GET',
                credentials: 'include'

            });
            const data = await response.json();
            console.log(data.length); // In ra "Cookie đã được tạo!" từ phản hồi của backend
            setProduct(data);
            setCartSize(data.length);

       
           
        } catch (error) {
            console.error('Lỗi:', error);

        }
    };

   


    const handleDelete=(p)=>{
        const deleteFromCart = async (p) => {
            try {
                console.log(p.productId); 
                console.log(p._id); 
                console.log(p.quantity); 
                const response = await fetch(`http://localhost:9999/products/cart?subProductId=${p._id}`, {
                    method: 'DELETE',
                    credentials: 'include'
    
                });
                const data = await response.json();
                console.log(data);    
               
            } catch (error) {
                console.error('Lỗi:', error);
            }
        };
        console.log(p);
        deleteFromCart(p);
        fetchData();
        
    }

    return (
        <>
            <section id="cart-container" class="container my-5">
                <table width="100%">
                    <thead><tr>
                        <td></td>
                        <td>Hình Ảnh</td>
                        <td>Tên Sản Phẩm</td>
                        <td>Giá tiền</td>
                        <td>Màu sắc</td>
                        <td>Số Lượng</td>
                        <td>Tổng tiền</td>


                    </tr>
                    </thead>
                    <tbody>

                    {cartSize&&product.map(p=>(  <tr>
                            <td onClick={()=>handleDelete(p)}>
                                <i class="fas fa-trash-alt"></i>
                            </td>
                            <td><img src={`http://localhost:9999/${p?.images?.[0]}`} alt="" /></td>
                            <td><h5>{p.subName}</h5></td>
                            <td><h5>{formatCurrency(p.discountPrice)}</h5></td>
                            <td><h5>{p.color}</h5></td>
                            <td class="numProduct">
                                <button><a href="ProcessServlet?num=-1&size=${i.size}&id=${i.product.productID}">-</a></button>
                                <input type="text" readonly value={p.quantity} />
                                <button><a href="ProcessServlet?num=1&size=${i.size}&id=${i.product.productID}">+</a></button>
                            </td>
                            <td><h5>{formatCurrency(p.discountPrice*p.quantity)}</h5></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
            <section id="cart-bottom" class="container">
                <div class="row cart">
                    
                    <div class="total col-lg-6 col-md-6 col-12 mb-4">
                        <div>
                            <h5>Giỏ Hàng</h5>
                            <div class="d-flex justify-content-between">
                                <h6>Giá tiền</h6>
                                <p>24.000.000</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h6>Shipping</h6>
                                <p>FREE</p>
                            </div>
                            <hr class="second-hr" />
                            <div class="d-flex justify-content-between">
                                <h6>Tổng đơn hàng</h6>
                                <p>24.000.000</p>
                            </div>
                            <a href="GiaoHang.jsp" style={{ display: 'flex', margin: '0px 30px', justifyContent: 'flex-end', textDecoration: 'none' }}>
                                <button class="ml-auto cart" >Tiến hành đặt hàng</button>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Cart;
