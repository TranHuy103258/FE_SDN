import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { hashCode } from "../../auth/hashPassword";
import { Row, Col } from "react-bootstrap";

const loginSchema = yup.object({
  // Xác thực dữ liệu đầu vào
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  const login = (email, password) => {
    fetch("http://localhost:9999/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 400) {
          throw new Error("Invalid Email/Password");
        } else if (res.status === 404) {
          throw new Error("User not registered");
        } else if (res.status === 401) {
          throw new Error("Email/Password not valid");
        } else {
          throw new Error("Login failed: " + res.statusText);
        }
      })
      .then((resp) => {
        console.log(resp);
        // Handle response here
        if (resp.accessToken && resp.refreshToken) {
          // Store accessToken and refreshToken in sessionStorage
          const data = {
            email: email,
            name: resp.name,
            role: resp.role,
          };
          sessionStorage.setItem("data", JSON.stringify(data));
          navigate("/");
          window.alert("Login successfully");
        }
      })
      .catch((err) => {
        console.error("Login failed: " + err.message);
        window.alert("Login failed: " + err.message);
      });
  };

  return (
    <div class="container-fluid">
      <div class="row dangnhap">
        <Row>
          <Col>
            <div class="col-xl-6 ">
              <img src="img/12.jpg" />
            </div>
          </Col>
          <Col>
            <div class="col-xl-6 dn">
              <form
                action="Login"
                method="POST"
                accept-charset="utf-8"
                onSubmit={formik.handleSubmit}
              >
                <p class="input">
                  Tên đăng nhập:
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.value?.email}
                    errMes={formik.touched.email && formik.errors.email}
                  />
                </p>
                <p class="input">
                  Mật Khẩu:
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật Khẩu"
                    required
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.value?.password}
                    errMes={formik.touched.password && formik.errors.password}
                  />
                </p>
                <div class="submit_wrapper">
                  <div class="submit dn1">
                    <button class="dn1" type="submit">
                      Đăng Nhập
                    </button>
                  </div>
                </div>
              </form>
              <div class="text" style={{ textAlign: "left" }}>
                Bạn Chưa Có Tài Khoản ?{" "}
                <a href="/register">Tạo tài khoản ngay</a>
                <br />
                Bạn quên mật khẩu? <a href="">Khôi phục mật khẩu</a>
              </div>
              {/* <p style="text-align: center;color: red;font-size: 20px;font-weight: bold">${requestScope.error}</p> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
