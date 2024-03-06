import React from "react";
import "./ProductCard.css";
import { useState, useEffect } from "react";

const ProductCard = () => {
  return (
    <div className="row k6">
      <div className="col-xl-3">
        <a className="sanpham" href="SanPham.html" title="">
          <div className="khoi6">
            <div className="anh6">
              <img src="img/5.jpg" alt="" />
            </div>
            <div className="anh6_2">
              <img src="img/6.jpg" alt="" />
            </div>

            <p className="tensanpham">Iphone 13</p>
            <div className="gia">
              <p className="giagiam">14.450.000 ₫</p>
              <p className="giabandau">24.990.000 ₫</p>
              <p className="giabandau">-42%</p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-xl-3">
        <a className="sanpham" href="SanPham.html" title="">
          <div className="khoi6">
            <div className="anh6">
              <img src="img/13.jpg" alt="" />
            </div>
            <div className="anh6_2">
              <img src="img/14.jpg" alt="" />
            </div>

            <p className="tensanpham">Iphone 15 Pro Max 256GB</p>
            <div className="gia">
              <p className="giagiam">14.450.000 ₫</p>
              <p className="giabandau">24.990.000 ₫</p>
              <p className="giabandau">-42%</p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-xl-3">
        <a className="sanpham" href="SanPham.html" title="">
          <div className="khoi6">
            <div className="anh6">
              <img src="img/13.jpg" alt="" />
            </div>
            <div className="anh6_2">
              <img src="img/14.jpg" alt="" />
            </div>

            <p className="tensanpham">Iphone 15 Pro Max 256GB</p>
            <div className="gia">
              <p className="giagiam">14.450.000 ₫</p>
              <p className="giabandau">24.990.000 ₫</p>
              <p className="giabandau">-42%</p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-xl-3">
        <a className="sanpham" href="SanPham.html" title="">
          <div className="khoi6">
            <div className="anh6">
              <img src="img/5.jpg" alt="" />
            </div>
            <div className="anh6_2"></div>

            <p className="tensanpham">Iphone 15 Pro Max 256GB</p>
            <div className="gia">
              <p className="giagiam">14.450.000 ₫</p>
              <p className="giabandau">24.990.000 ₫</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
