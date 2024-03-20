import React from "react";
import "./Cart.css";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Cart = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:9999/products/cookie/65ef088eeb3187cd951c4fcc",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.text();
      console.log(data); // In ra "Cookie đã được tạo!" từ phản hồi của backend

      // const cookieValue = Cookies.get('product');

      // // Sử dụng cookieValue
      // console.log(cookieValue);
      // Lấy tất cả các cookies từ trình duyệt
      const cookiesArray = document.cookie.split(";");

      // In ra từng cookie
      cookiesArray.forEach((cookie) => {
        console.log(cookie.trim());
      });
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <>
      <section id="cart-container" class="container my-5">
        <table width="100%">
          <thead>
            <tr>
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
            <tr>
              <td>
                {/* <form >
                                        <input type="hidden" name="id" value="1" />
                                        <input type="hidden" name="size" value="43" />
                                        <input type="submit" value="Xóa" />
                                    </form> */}

                <a href="RemoveProduct?id=${i.product.productID}&size=${i.size}">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
              <td>
                <img src="img/14.jpg" alt="" />
              </td>
              <td>
                <h5>Iphone 15 Pro Max</h5>
              </td>
              <td>
                <h5>24.000.000</h5>
              </td>
              <td>
                <h5>Tím mộng mơ</h5>
              </td>
              <td class="numProduct">
                <button>
                  <a href="ProcessServlet?num=-1&size=${i.size}&id=${i.product.productID}">
                    -
                  </a>
                </button>
                <input type="text" readonly value="4" />
                <button>
                  <a href="ProcessServlet?num=1&size=${i.size}&id=${i.product.productID}">
                    +
                  </a>
                </button>
              </td>
              <td>
                <h5>24.000.000</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="cart-bottom" class="container">
        <div class="row cart">
          {/* <div class="coupon col-lg-6 col-md-6 col-12 mb-4">
                        <div>
                            <h5>COUPON</h5>
                            <p>Mã Giảm Giá</p>
                            <input type="text" placeholder="Nhập"/>
                                <button style={{backGround:'black',color:'white',padding:'5px'}} >Nhập mã</button>
                        </div>
                    </div> */}
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
              <a
                href="GiaoHang.jsp"
                style={{
                  display: "flex",
                  margin: "0px 30px",
                  justifyContent: "flex-end",
                  textDecoration: "none",
                }}
              >
                <button class="ml-auto cart">Tiến hành đặt hàng</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
