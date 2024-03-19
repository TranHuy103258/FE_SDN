import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { hashCode } from "../../auth/hashPassword";
import { Row, Col } from "react-bootstrap";

const loginSchema = yup.object({
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
      console.log(values);
      console.log(values.password);
      login(values.email, values.password);
    },
  });

  const login = (email, password) => {
    fetch(`http://localhost:9999/users/${email}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          toast.error("Please enter valid email");
        } else {
          if (hashCode().verifyCode(password, resp.password)) {
            toast.success("Successfully logged in");
            window.alert("login successfully");
            const data = {
              email: email,
              role: resp.role,
              name: resp.name,
            };
            sessionStorage.setItem("data", JSON.stringify(data));
            navigate("/");
          } else {
            toast.error("Wrong password");
          }
        }
      })
      .catch((err) => {
        toast.error("Login failed: " + err.message);
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

                <div class="text" style={{ textAlign: "left" }}>
                  Bạn Chưa Có Tài Khoản ?{" "}
                  <a href="/register">Tạo tài khoản ngay</a>
                  <br />
                  Bạn quên mật khẩu? <a href="">Khôi phục mật khẩu</a>
                </div>
                {/* <p style="text-align: center;color: red;font-size: 20px;font-weight: bold">${requestScope.error}</p> */}
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
