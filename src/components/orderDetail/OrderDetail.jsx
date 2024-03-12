import React from 'react';
import './OrderDetail.css';
const OrderDetail = () => {
    return (
        <div class="container">
            <div class="row od">
                <div class="col-xl-5 order_sumary">
                    <p class="tieude">
                        Chi tiết đơn hàng

                    </p>
                    <div className="order_overview">
                        <div className="order_content">
                            <label>Mã đơn hàng:</label>
                            <strong>#26472</strong>
                        </div>
                        <div className="order_content">
                            <label>Ngày đặt hàng:</label>
                            <strong>03/03/2024</strong>
                        </div>
                        <div className="order_content">
                            <label>Tình trạng:</label>
                            <strong style={{ color: '#339901' }}>Đang xử lý</strong>
                        </div>
                        <div className="order_content">
                            <label>Tên khách hàng:</label>
                            <strong>Trần Quang Huy</strong>
                        </div>
                        <div className="order_content">
                            <label>Số điện thoại:</label>
                            <strong>0123456789</strong>
                        </div>
                        <div className="order_content">
                            <label>Email:</label>
                            <strong>a@gmail.com</strong>
                        </div>
                        <hr />
                        <div className="order_content">
                            <label>Phương thức thanh toán:</label>
                            <strong>Chuyển khoản ngân hàng</strong>
                        </div>
                        <div className="order_content">
                            <label>Tình trạng thanh toán:</label>
                            <strong style={{ color: '#339901' }}>Đang chờ xử lý</strong>
                        </div>
                        <hr />
                        <div className="order_content">
                            <label>Sản Phẩm</label>

                        </div>
                        <div className="order_product">
                            <div className="order_product_detail">
                                <a class="order_product_name" href="/iphone-15-256gb">iPhone 15 256GB - 23.790.000₫</a>
                                <div class="attributes">Màu sắc: Đen</div>
                            </div>
                            <div class="quantity">
                                <label class="td-title">SL:</label>
                                <span class="product-quantity">1</span>
                            </div>

                        </div>

                        <hr />
                        <div className="order_content">
                            <label>Tổng số tiền đã đặt hàng:</label>
                            <strong style={{ color: '#0066CC',fontSize:'24px' }}>23.790.000₫</strong>
                        </div>
                        <div className="buttons">
                            <button class="bt_od" type="button">Tiếp tục mua hàng</button>
                            <button class="bt_od" type="button">Thanh toán</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
