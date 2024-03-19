import React from "react";
import "./ProductCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function formatCurrency(number) {
    // Sử dụng hàm toLocaleString để định dạng số theo định dạng tiền tệ của quốc gia
    return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function calculateDiscountPercentage(discountPrice, originalPrice) {
    if (originalPrice === 0) {
        return 0; // Tránh chia cho 0
    }
    return ((originalPrice - discountPrice) / originalPrice) * 100;
}

const ProductCard = ({ category }) => {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        fetchData(); // Gọi API khi giá trị tham số thay đổi
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:9999/products?category=${category}`, { method: "GET" });
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log("Lỗi:", error);
        }
    }

    return (
        <div class="row k6">
            {Product.map((product, index) => (
                <div class="col-xl-3">
                    <Link class="sanpham" to={`/product/${product._id}`}>
                        <div class="khoi6">
                            <div class="anh6">
                                <img src="img/13.jpg" alt="" />
                            </div>
                            <div class="anh6_2">
                                <img src="img/14.jpg" alt="" />
                            </div>

                            <p class="tensanpham">{product.subName}</p>
                            <div class="gia">
                                <p class="giagiam">{formatCurrency(product.discountPrice)}</p>
                                <p class="giabandau">{formatCurrency(product.price)}</p>
                                <p class="giabandau">
                                    -{calculateDiscountPercentage(product.discountPrice, product.price).toFixed(1)}%
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
