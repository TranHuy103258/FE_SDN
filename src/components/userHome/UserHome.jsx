import React from 'react';
import './UserHome.css';
const UserHome = () => {
    return (
        <div class="container" style={{margin:'100px'}}>
            <div class="row uh_3">
                <div class="col-xl-3 uh_3_trai">
                    <div class="avataruser">
                        TH
                    </div>
                    <div class="tenuser">Xin chào <b> Huy Trần</b></div>
                    <a href="UserHome.jsp" class="thongtin"> Thông tin tài khoản</a><br/>
                    <a href="" class="quanlidh"><i class="fa-solid fa-rectangle-list"></i>Quản lý đơn hàng</a><br/>
                    <a href="Logout" class="dangxuat"><i class="fa-solid fa-right-from-bracket"></i>Đăng xuất</a>
                </div>
                <div class="col-xl-9 uh_3_phai">
                    <div class="thongtin_phai3">
                        <b style={{marginBottom:'10px',display:'block'}}>THÔNG TIN TÀI KHOẢN</b>
                        <p >Họ và tên: <b >Huy Trần</b></p>
                        <p >Email: <b >a@gmail.com</b></p>
                        <p>Địa chỉ: <b >Thái Bình</b></p>
                        <p >Ngày sinh: <b >22-01-2002</b></p>
                        <p>Điện thoại: <b>012345678</b></p>
                    </div>  
                    <a  href="UpdateInfo.html" class="capnhatthongtin">
                        Cập nhật thông tin tài khoản
                    </a>
                </div>


            </div>
        </div>
    );
};

export default UserHome;
