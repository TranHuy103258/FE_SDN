import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import * as bcrypt from "bcryptjs";
import { PASSWORD_SECRET } from "../../auth/passwordSecret";

const Register = () => {
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const hash = (password) => {
    return bcrypt.hashSync(password, parseInt(PASSWORD_SECRET));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    // Extract user registration data
    const name = event.target.name.value;
    const mobile = event.target.mobile.value;
    // const date = event.target.date.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Encrypt password
    const hashedPassword = hash(password);

    const newUser = {
      name,
      phone: mobile,
      //   date,
      email,
      password: hashedPassword,
      role: "user",
    };

    try {
      // // Check if the email already exists
      // const emailCheckResponse = await fetch(
      //   "http://localhost:9999/users?email=" + newUser.email
      // );
      // if (emailCheckResponse.ok) {
      //   const existingUser = await emailCheckResponse.json();
      //   if (existingUser) {
      //     // If the user with the email already exists, show an alert
      //     window.alert("Email đã tồn tại. Vui lòng sử dụng email khác.");
      //     return; // Exit the registration process
      //   }
      // } else {
      //   throw new Error("Failed to check email existence.");
      // }

      // If the email doesn't exist, proceed with registration
      const response = await fetch("http://localhost:9999/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        window.alert("Đăng ký thành công!");
        navigate("/login");
      } else {
        console.log(newUser);
        throw new Error("Đăng ký thất bại.");
      }
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="container">
      <div className="row dk2">
        <div className="col-xl-5 ">
          <p className="tieude">
            <Link to="/login" className="tieude">
              ĐĂNG NHẬP
            </Link>
            <Link to="/register" className="tieude">
              ĐĂNG KÝ
            </Link>
          </p>
          <form accept-charset="utf-8" onSubmit={handleRegister}>
            <p className="input">
              Tên hiển thị trên web
              <br />
              <input type="text" name="name" placeholder="Name" />
            </p>
            <p className="input">
              Số điện thoại
              <br />
              <input type="tel" name="mobile" placeholder="Số điện thoại" />
            </p>

            <p className="input">
              Email:
              <br />
              <input type="email" name="email" placeholder="Email" />
            </p>
            <p className="input">
              Mật Khẩu:
              <br />
              <input type="password" name="password" placeholder="Mật Khẩu" />
            </p>

            <p className="chinhsachdk">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="" title="">
                Privacy Policy
              </a>{" "}
              and
              <a href="" title="">
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <div className="submit_wrapper">
              <div className="submit">
                <button type="submit">Đăng Ký</button>
              </div>
              <div className="text" style={{ paddingTop: "15px" }}>
                Bạn đã có tài khoản ?{" "}
                <a href="/login" title="">
                  Đăng nhập ngay
                </a>
              </div>
            </div>
            {/* <p style={{textAlign:'center',color: 'red',fontSize: '20px',fontWeight: 'bold'}}>oke</p> */}
            <input type="hidden" name="do" value="dangki" />
          </form>
          <a className="trangchu" href="home.html">
            <i className="fa-solid fa-arrow-left-long"></i>
            Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
