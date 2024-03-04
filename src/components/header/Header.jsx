import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';


const Header = () => {
    useEffect(() => {
        function handleDropdown() {
            var pt1 = document.querySelectorAll('a#navbarDropdownMenuLink');
            var pt2 = document.querySelectorAll('ul.dropdown-menu');
            var d2=document.querySelectorAll('div.icon1.user');
            console.log(d2[0]);

            var pt4=document.querySelectorAll('div.vuong');
            var pt5=document.querySelectorAll('div.login');
            console.log(pt4[0]);

            var d1 = document.querySelectorAll('li.nav-item.dropdown');

            for (let i = 0; i < pt1.length; i++) {
                d1[i].addEventListener('mousemove', function (event) {
                    pt1[i].classList.add('show');
                    pt2[i].classList.add('show');
                })
                d1[i].addEventListener('mouseleave', function (event) {
                    pt1[i].classList.remove('show');
                    pt2[i].classList.remove('show');
                })
            }

            d2[0].addEventListener('mousemove', function (event) {
                pt4[0].classList.add('show1');
                pt5[0].classList.add('show1');
            })
            d2[0].addEventListener('mouseleave', function (event) {
                pt4[0].classList.remove('show1');
                pt5[0].classList.remove('show1');
            })

            var pt3 = document.querySelectorAll('li.nav-item.dropdown');
            var thanhchay = document.querySelectorAll('.thanhchay');

            for (let i = 0; i < pt3.length; i++) {
                pt3[i].addEventListener('mousemove', function (event) {
                    thanhchay[i].classList.add('chay1');
                    thanhchay[i].classList.remove('chay2');
                })

                pt3[i].addEventListener('mouseleave', function (event) {
                    thanhchay[i].classList.remove('chay1');
                    thanhchay[i].classList.add('chay2');
                })
            }

            var trangthaimenu = 'duoimenu'
            var menu = document.querySelector('nav.khoi2')
            var vitrimenu = menu.offsetTop;
            console.log(vitrimenu);
            var i = -1;

            window.addEventListener('scroll', function () {
                console.log(window.pageYOffset);
                if (window.pageYOffset > vitrimenu) {

                    if (window.pageYOffset > i) {
                        i = window.pageYOffset;
                        menu.classList.remove('menuchay2_1');
                        menu.classList.add('menuchay2_2');
                    } else {
                        i = window.pageYOffset;
                        menu.classList.add('menuchay2_1');
                        menu.classList.remove('menuchay2_2');
                    }

                } else if (window.pageYOffset < vitrimenu) {


                    console.log('dưới menu');
                    trangthaimenu = 'duoimenu';
                    menu.classList.remove('menuchay2_1');

                }

            })
        }

        handleDropdown();
    }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="khoi">
                        <div class="col-xl-4 khoitrai">
                            <p>Hotline: 19002126 (8h - 12h, 13h30 - 17h)</p>
                            <a href="" title="">Liên hệ hợp tác</a>
                        </div>
                        <div class="col-xl-3 khoiphai">
                            <a href="" title="">Tìm cửa hàng</a>
                            <a href="" title="">Mua hàng tại Shopify</a>
                        </div>

                    </div>
                </div>
            </div>


            <nav class="navbar navbar-expand-lg navbar-light bg-light khoi2" >
                <div class="container">
                    <a class="navbar-brand" href="home.html">
                        <img src="img/3.png" alt="" />

                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="Nam.html" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                    iPhone
                                    <i class="fa fa-chevron-down"></i>
                                    <div class="thanhchay"></div>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">iPhone 15 series</a></li>
                                    <li><a class="dropdown-item" href="#">iPhone 14 series</a></li>
                                    <li><a class="dropdown-item" href="#">iPhone 13 series</a></li>
                                    <li><a class="dropdown-item" href="#">iPhone 12 series</a></li>
                                    <li><a class="dropdown-item" href="#">iPhone 11 series</a></li>
                                    <li><a class="dropdown-item" href="#">iPhone SE</a></li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="Nu.html" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                    iPad
                                    <i class="fa fa-chevron-down"></i>
                                    <div class="thanhchay"></div>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">iPad Pro M1</a></li>
                                    <li><a class="dropdown-item" href="#">iPad Pro M2</a></li>
                                    <li><a class="dropdown-item" href="#">iPad Air </a></li>
                                    <li><a class="dropdown-item" href="#">iPad 9</a></li>
                                    <li><a class="dropdown-item" href="#">iPad 10</a></li>
                                    <li><a class="dropdown-item" href="#">ipad Mini</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="Nu.html" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                    Mac
                                    <i class="fa fa-chevron-down"></i>
                                    <div class="thanhchay"></div>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">MacBook Pro M2</a></li>
                                    <li><a class="dropdown-item" href="#">MacBook Pro M3</a></li>
                                    <li><a class="dropdown-item" href="#">MacBook Air</a></li>
                                    <li><a class="dropdown-item" href="#">iMac</a></li>
                                    <li><a class="dropdown-item" href="#">Mac Mini</a></li>
                                    <li><a class="dropdown-item" href="#">Mac Pro</a></li>
                                    <li><a class="dropdown-item" href="#">Mac Studio</a></li>
                                </ul>
                            </li>

                            <li class="nav-item" style={{ padding: '10px', }}>
                                <a class="nav-link" href="Nam.html" style={{ color: 'white' }}>Khuyến Mãi</a>
                            </li>
                        </ul>

                        <div class="icon">

                            <div class="icon1">
                                <i class="fa-solid fa-magnifying-glass khoi2"></i>

                            </div>

                            <div class="icon1 user">
                                <div class="vuong"></div>
                                <div class="login">
                                    <div class="ls_title">
                                        <a class="login" href="#">Tạo tài khoản ngay</a>
                                    </div>
                                    <div class="ls_title">
                                        <a class="login" href="#">Đăng Nhập</a>
                                    </div>
                                </div>
                                <i class="fa-regular fa-user khoi2"></i>

                            </div>

                            <div class="icon1">
                                <div class="khoiden2">6</div>
                                <i class="fa-solid fa-cart-shopping khoi2"></i>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;
