import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as bcrypt from "bcryptjs";
import { Button } from "react-bootstrap";

const Change = () => {
  const handleHome = () => {
    window.location.href = `/`;
  };

  return (
    <div className="container">
      <div className="row dk2">
        <div className="col-xl-5 ">
          <p className="tieude">
            <Link to="/login" className="tieude">
              ĐĂNG NHẬP
            </Link>
          </p>
          <form accept-charset="utf-8">
            <p className="input">
              Mật khẩu cũ:
              <br />
              <input type="password" name="password" placeholder="Mật Khẩu" />
            </p>
            <p className="input">
              Mật khẩu mới:
              <br />
              <input type="password" name="password" placeholder="Mật Khẩu" />
            </p>
            <p className="input">
              Nhập mật khẩu mới:
              <br />
              <input type="password" name="password" placeholder="Mật Khẩu" />
            </p>

            {/* <p style={{textAlign:'center',color: 'red',fontSize: '20px',fontWeight: 'bold'}}>oke</p> */}
            <input type="hidden" name="do" value="dangki" />
          </form>
          <Button className="trangchu" href="home.html" onClick={handleHome}>
            <i className="fa-solid fa-arrow-left-long"></i>
            Quay lại trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Change;
