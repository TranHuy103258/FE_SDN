import React, { useState, useEffect } from "react";
import "./UserHome.css";
import { useAuthentication } from "../../auth/use-authentication";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";

const UserHome = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuthentication();
  const [thisUser, setThisUser] = useState();
  const { currentUser } = useAuthentication();

  useEffect(() => {
    if (isLogged) {
      fetch(
        "http://localhost:9999/users/" +
          JSON.parse(sessionStorage.getItem("data")).email
      )
        .then((res) => res.json())
        .then((json) => setThisUser(json));
    }
  }, [isLogged]);

  const handleLogout = () => {
    sessionStorage.removeItem("data");
    window.alert("Successfully logged out!");
    navigate("/login");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Tạo một object mới chứa thông tin cập nhật từ state thisUser
    const updatedUserInfo = {
      name: thisUser.name,
      email: thisUser.email,
      address: thisUser.address,
      phone: thisUser.phone,
    };

    // Gửi object này lên server để cập nhật thông tin người dùng
    fetch(`http://localhost:9999/users/${thisUser.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    })
      .then((res) => {
        if (res.ok) {
          window.alert("Thông tin tài khoản đã được cập nhật!");
          // Cập nhật lại state thisUser để hiển thị thông tin mới
          setThisUser(updatedUserInfo);
        } else {
          throw new Error("Cập nhật thông tin thất bại!");
        }
      })
      .catch((error) => {
        console.error("Error updating user info:", error);
        window.alert("Cập nhật thông tin thất bại!");
      });
  };

  const handleHome = () => {
    window.location.href = `/`;
  };

  return (
    <div className="container" style={{ margin: "100px" }}>
      <div className="row uh_3">
        <div className="col-xl-5 uh_3_trai">
          <div className="avataruser">{isLogged && thisUser?.role}</div>
          <div className="tenuser">
            Xin chào <b>{isLogged && thisUser?.name}</b>
          </div>

          <Button variant="primary" onClick={handleHome} className="quanlidh">
            <i className="fa-solid fa-rectangle-list"></i>Back home
          </Button>
          <br />
          <Button href="" className="quanlidh">
            <i className="fa-solid fa-rectangle-list"></i>Quản lý đơn hàng
          </Button>
          <br />
          <Button variant="danger" className="dangxuat" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>Đăng xuất
          </Button>
        </div>

        <div className="col-xl-7 uh_3_phai">
          <Row>
            <Col md={12}>
              <div className="thongtin_phai3">
                <h2 style={{ marginBottom: "10px", display: "block" }}>
                  THÔNG TIN TÀI KHOẢN
                </h2>

                <Form onSubmit={handleUpdate}>
                  <Form.Group controlId="formName">
                    <Form.Label>Họ và tên:</Form.Label>
                    <Form.Control
                      type="text"
                      value={thisUser?.name || ""}
                      onChange={(e) =>
                        setThisUser({ ...thisUser, name: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={thisUser?.email || ""}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Địa chỉ:</Form.Label>
                    <Form.Control
                      type="text"
                      value={thisUser?.address || ""}
                      onChange={(e) =>
                        setThisUser({ ...thisUser, address: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Điện thoại:</Form.Label>
                    <Form.Control
                      type="text"
                      value={thisUser?.phone || ""}
                      onChange={(e) =>
                        setThisUser({ ...thisUser, phone: e.target.value })
                      }
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Cập nhật
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
