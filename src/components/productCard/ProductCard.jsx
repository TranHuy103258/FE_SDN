import React from "react";
import "./ProductCard.css";
import { useState, useEffect } from "react";
<<<<<<< HEAD

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
=======
import { Link } from "react-router-dom";
import { formatCurrency, calculateDiscountPercentage } from "../../ultils/function";

const ProductCard = ({ category }) => {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        fetchData(); // Gọi API khi giá trị tham số thay đổi
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:9999/products?category=${category}`, { method: "GET" });
            const data = await response.json();

            setProduct(data);
        } catch (error) {
            console.log("Lỗi:", error);
        }
    }

    return (
        <div class="row k6">
            {Product.map((product, index) => (
                <div class="col-xl-3">
                    <Link
                        class="sanpham"
                        to={{
                            pathname: `/product/${product._id}`,
                            search: `?subProductId=${product.subProducts?._id}`, // Thêm tham số vào search
                        }}
                    >
                        <div class="khoi6">
                            <div class="anh6">
                                <img src="img/13.jpg" alt="" />
                            </div>
                            <div class="anh6_2">
                                <img src="img/14.jpg" alt="" />
                            </div>

                            <p class="tensanpham">{product.subProducts?.subName} </p>
                            <div class="gia">
                                <p class="giagiam">{formatCurrency(product.subProducts?.discountPrice)}</p>
                                <p class="giabandau">{formatCurrency(product.subProducts?.price)}</p>
                                <p class="giabandau">
                                    -
                                    {calculateDiscountPercentage(
                                        product.subProducts?.discountPrice,
                                        product.subProducts?.price
                                    ).toFixed(1)}
                                    %
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
>>>>>>> master
};

export default ProductCard;
