import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div class="container-fluid">
            <div class="row dangnhap">

                <div class="col-xl-5 ">
                    <img src="img/12.jpg" />
                </div>
                <div class="col-xl-4 dn">

                    <form action="Login" method="get" accept-charset="utf-8">

                        <p class="input">
                            Tên đăng nhập:<br />
                            <input type="email" name="Username" placeholder="Email" />
                        </p>
                        <p class="input">
                            Mật Khẩu:<br />
                            <input type="password" name="Password" placeholder="Mật Khẩu" />
                        </p>
                        <div class="submit_wrapper">
                            <div class="submit dn1">
                                <button  class="dn1" type="submit" >Đăng Nhập</button>
                            </div>


                        </div>
                        <div class="text" style={{textAlign:'left'}}>
                                Bạn Chưa Có Tài Khoản ? <a href="" title="">Tạo tài khoản ngay</a><br/>
                                Bạn quên mật khẩu? <a href="" title="">Khôi phục mật khẩu</a>
                            </div>
                        {/* <p style="text-align: center;color: red;font-size: 20px;font-weight: bold">${requestScope.error}</p> */}

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;