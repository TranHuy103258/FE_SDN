import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div class="container">
            <div class="row dk2">
                <div class="col-xl-5 ">
                    <p class="tieude">
                        <a href="DangNhap" class="tieude">ĐĂNG NHẬP</a>
                        <a href="DangKi" class="tieude">ĐĂNG KÝ</a>

                    </p>
                    <form action="Register"  accept-charset="utf-8">
                        <p class="input">
                            Họ:<br/>
                            <input type="text" name="ho" placeholder="Họ"/>
                        </p> 
                        <p class="input"> 
                            Tên:<br/>
                            <input type="text" name="ten" placeholder="Tên"/>
                        </p> 
                        <p class="radio">
                            <b style={{fontWeight:"500",color:'black'}}>Giới tính:</b>
                            <input type="radio" name="gioitinh"  value="1" /> Nữ
                            <input type="radio" name="gioitinh"  value="0"/> Nam
                        </p>
                        <p class="input">
                            Ngày sinh:<br/>
                            <input type="date" name="ngaysinh"/>
                        </p> 
                        <p class="input">
                            Email:<br/>
                            <input type="email" name="username" placeholder="Email"/>
                        </p>
                        <p class="input">
                            Mật Khẩu:<br/>
                            <input type="password" name="password" placeholder="Mật Khẩu"/>
                        </p>
                        <p class="chinhsachdk">
                            This site is protected by reCAPTCHA and the Google <a href="" title="">Privacy Policy</a> and
                            <a href="" title="">Terms of Service</a> apply.
                        </p>
                        <div class="submit_wrapper">
                            <div class="submit">
                                <button type="submit">Đăng Ký</button>
                            </div>
                            <div class="text"  style={{paddingTop:'15px'}}>
                                Bạn đã có tài khoản ? <a href="DangNhap.jsp" title="">Đăng nhập ngay</a>                  
                            </div>
                        </div>                 
                        {/* <p style={{textAlign:'center',color: 'red',fontSize: '20px',fontWeight: 'bold'}}>oke</p> */}
                        <input type="hidden" name="do" value="dangki"/>
                    </form>
                    <a class="trangchu" href="home.html">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        Quay lại trang chủ             
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;