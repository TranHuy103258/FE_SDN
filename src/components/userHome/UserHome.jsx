import React, { useState, useEffect } from "react";
import "./UserHome.css";
import { useAuthentication } from "../../auth/use-authentication";
import { Link, useNavigate } from "react-router-dom";

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
      birthDate: thisUser.birthDate,
      phone: thisUser.phone,
    };

    // Gửi object này lên server để cập nhật thông tin người dùng
    fetch(`http://localhost:9999/users/${thisUser.email}`, {
      method: "PUT",
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

  return (
    <div className="container" style={{ margin: "100px" }}>
      <div className="row uh_3">
        <div className="col-xl-3 uh_3_trai">
          <div className="avataruser">TH</div>
          <div className="tenuser">
            Xin chào <b>{isLogged && thisUser?.name}</b>
          </div>
          <a href="UserHome.jsp" className="thongtin">
            {" "}
            Thông tin tài khoản
          </a>
          <br />
          <a href="" className="quanlidh">
            <i className="fa-solid fa-rectangle-list"></i>Quản lý đơn hàng
          </a>
          <br />
          <Link className="dangxuat" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>Đăng xuất
          </Link>
        </div>
        <div className="col-xl-9 uh_3_phai">
          <div className="thongtin_phai3">
            <b style={{ marginBottom: "10px", display: "block" }}>
              THÔNG TIN TÀI KHOẢN
            </b>
            <form onSubmit={handleUpdate}>
              <label>
                Họ và tên:
                <input
                  type="text"
                  value={thisUser?.name || ""}
                  onChange={(e) =>
                    setThisUser({ ...thisUser, name: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                Email:
                <input type="email" value={thisUser?.email || ""} disabled />
              </label>
              <br />
              <label>
                Địa chỉ:
                <input
                  type="text"
                  value={thisUser?.address || ""}
                  onChange={(e) =>
                    setThisUser({ ...thisUser, address: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                Ngày sinh:
                <input
                  type="date"
                  value={thisUser?.birthDate || ""}
                  onChange={(e) =>
                    setThisUser({ ...thisUser, birthDate: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                Điện thoại:
                <input
                  type="text"
                  value={thisUser?.phone || ""}
                  onChange={(e) =>
                    setThisUser({ ...thisUser, phone: e.target.value })
                  }
                />
              </label>
              <br />
              <button type="submit">Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
