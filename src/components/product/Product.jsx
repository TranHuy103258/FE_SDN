import React from 'react';
import './Product.css';
const Product = () => {
    return (
        <div class="container">
            <div class="row sp4">
                <div class="col-xl-6 sp3_trai" >

                    <img src="img/13.jpg" alt="" class="trai3_anhto" />

                    <div class="trai3_anhnho">
                        <img src="img/13.jpg" alt="" />
                    </div>
                    <div class="trai3_anhnho">
                        <img src="img/13.jpg" alt="/" />
                    </div>
                    <div class="trai3_anhnho">
                        <img src="img/13.jpg" alt="" />
                    </div>
                    <div class="trai3_anhnho">
                        <img src="img/13.jpg" alt="" />
                    </div>

                    <div class="trai3_anhnho1">
                        <img src="img/13.jpg" alt="" />
                    </div>
                    <div class="trai3_anhnho1">
                        <img src="img/13.jpg" alt="" />
                    </div>
                    <div class="trai3_anhnho1">
                        <img src="img/13.jpg" alt="" />
                    </div>

                </div>

                <div class="col-xl-6 sp3_phai">
                    <form  >


                        <p class="name">
                            oke
                        </p>
                        <p class="gia">12233 ₫</p>

                        <p class="chinhsach">
                            Mua trước trả sau với Kredivo <br/>
                                Trả sau lên đến 12 tháng | Ưu đãi 50% tối đa 100k | Tải app và đăng ký ngay
                                <a href="" title="">tại đây</a>
                        </p>
                        <p class="tinhtrang">
                            Tình trạng: Còn hàng (10)
                        </p>
                        <p style={{fontSize:'15px'}} >Kích Thước:</p>

                        <p class="khoiluong">
                            <button><a href="">-</a></button>
                            <input type="number" name="num" value="1" />
                            <button><a href="">+</a></button>
                        </p>
                        <div class="sp3_nut">
                            <button type="submit" class="mua" >
                                Thêm vào giỏ
                            </button>
                            <div class="tuvan">
                                Tư vấn:19002126
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Product;
