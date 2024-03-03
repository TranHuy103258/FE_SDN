import React from 'react';
import './Order.css';
const Order = () => {
    return (
        <div class="container">
            <div class="row dk2">
                <div class="col-xl-5 ">
                    <p class="tieude">
                        Thông tin thanh toán
                    </p>
                    <form action="Orders" method="get" accept-charset="utf-8">
                        <p class="input">Họ và tên:<br />
                            <input type="text" name="hovaten" placeholder="Họ và tên" />
                        </p>
                        <p class="input">Email:<br />
                            <input type="email" name="email" placeholder="Email" />
                        </p>

                        <p class="input">Số điện thoại:<br />
                            <input type="text" name="sdt" placeholder="Số điện thoại" />
                        </p>
                        <p class="radio">
                            <b style={{ fontWeight: "500", color: 'black' }}>Hình thức nhận hàng</b>
                            <br />
                            <input type="radio" name="order" value="1" /> Nhận tại cửa hàng
                            <input type="radio" name="order" value="0" /> Giao tận nơi
                        </p>
                        <p class="input">Địa chỉ:<br />
                            <input type="text" name="diachi" placeholder="Đại chỉ" />
                        </p>
                        <p class="input">Xã:<br />
                            <input type="text" name="xa" placeholder="Xã" />
                        </p>
                        <p class="input">Huyện:<br />
                            <input type="text" name="huyen" placeholder="Huyện" />
                        </p>
                        <p class="input">Tỉnh:<br />
                            <input type="text" name="tinh" placeholder="Tỉnh" />
                        </p>

                        <div className="paymentMethods">
                            <div class="tt-address-select">Thông tin thanh toán</div>
                            <div class="notice-payment" style={{ textAlign: 'left' }}>Quý khách vui lòng lựa chọn các hình thức thanh toán dưới đây:</div>
                            <div className="method_list">
                                <div className="payment_details">
                                    <input type="radio" name="payment" value="1" /> 
                                    <div className="paymet_logo">
                                        <img src="img/15.jpg"/>
                                    </div>
                                    <div className="payment_name">Thanh toán VNPay</div>
                                </div>

                                <div className="payment_details">
                                    <input type="radio" name="payment" value="1" /> 
                                    <div className="paymet_logo">
                                        <img src="img/16.jpg"/>
                                    </div>
                                    <div className="payment_name">Chuyển khoản ngân hàng</div>
                                </div>
                            </div>

                            
                        </div>

                        <div class="submit_wrapper">
                            <div class="submit">
                                <button type="submit">Mua Hàng</button>
                            </div>
                            <div class="text" style={{ paddingTop: '15px' }}>Bạn đã có tài khoản ?
                                <a href="DangNhap.jsp" title="">Đăng nhập ngay</a>
                            </div>
                        </div>
                        {/* <p style="text-align: center;color: red;font-size: 20px;font-weight: bold">${requestScope.trangthai}</p>
                        <input type="hidden" name="do" value="dangki"/> */}
                    </form>
                    {/* <p style="color: red;text-align: center;font-size:15px;font-weight: bold;">${requestScope.thongbao}</p>     */}
                    <a class="trangchu" href="PhanTrang">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        Quay lại trang chủ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Order;
