import React from 'react';
import './ProductCard.css';
import { useState, useEffect } from 'react';

const ProductCard = () => {



    return (
        <div class="row k6">
            <div class="col-xl-3">
                <a class="sanpham" href="SanPham.html" title="">
                    <div class="khoi6">
                        <div class="anh6">
                            <img src="img/5.jpg" alt="" />
                        </div>
                        <div class="anh6_2">
                            <img src="img/6.jpg" alt="" />
                        </div>

                        <p class="tensanpham">Iphone 13</p>
                        <div class="gia">
                            <p class="giagiam">1,329,000 ₫</p>
                            <p class="giabandau">1,329,000 ₫</p>

                        </div>
                    </div>
                </a>
            </div>

            <div class="col-xl-3">
                <a class="sanpham" href="SanPham.html" title="">
                    <div class="khoi6">
                        <div class="anh6">
                            <img src="img/5.jpg" alt="" />
                        </div>
                        <div class="anh6_2">
                            <img src="img/6.jpg" alt="" />
                        </div>

                        <p class="tensanpham">Iphone 13</p>
                        <div class="gia">
                            <p class="giagiam">1,329,000 ₫</p>
                            <p class="giabandau">1,329,000 ₫</p>

                        </div>
                    </div>
                </a>
            </div>




        </div>

    );
};

export default ProductCard;
