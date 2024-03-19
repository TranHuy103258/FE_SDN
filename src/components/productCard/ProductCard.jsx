import React from "react";
import "./ProductCard.css";
import { useState, useEffect } from "react";
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
};

export default ProductCard;
