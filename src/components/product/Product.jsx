import React from "react";
import "./Product.css";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  formatCurrency,
  calculateDiscountPercentage,
} from "../../ultils/function";

const Product = ({ productId, subProductId }) => {
  const [subProduct, setSubProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState("");
  const [memory, setMemory] = useState("");
  const [productMemory, setProductMemory] = useState([]);
  const [productColor, setProductColor] = useState([]);

  useEffect(() => {
    fetchData();
    // fetch(`http://localhost:9999/products/subProduct/${subProductId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(product);
    //         setSubProduct(data);
    //         setMemory(data.memory);
    //         setColor(data.color);
    //         // if(product){
    //         //     const filteredProducts = product.subProducts.filter(p => p.memory === data.memory);
    //         //     setProductColor(filteredProducts.map(p => p.color));
    //         // }
    //     })
  }, []);

  async function fetchData() {
    try {
      const responseProduct = await fetch(
        `http://localhost:9999/products/find/${productId}`,
        { method: "GET" }
      );
      const dataProduct = await responseProduct.json();

      setProductMemory(dataProduct.subProducts.map((p) => p.memory));
      setProduct(dataProduct);

      const responseSubProduct = await fetch(
        `http://localhost:9999/products/subProduct/${subProductId}`
      );
      const dataSubProduct = await responseSubProduct.json();
      console.log(dataSubProduct);
      setSubProduct(dataSubProduct);
      setMemory(dataSubProduct.memory);
      setColor(dataSubProduct.color);

      const filteredProducts = dataProduct.subProducts.filter(
        (p) => p.memory === dataSubProduct.memory
      );
      setProductColor(filteredProducts.map((p) => p.color));
    } catch (error) {
      console.log("Lỗi:", error);
    }
  }

  const handleClickColor = (color) => {
    console.log(color);
    setColor(color);
  };

  const handleClickMemory = (memory) => {
    fetch(
      `http://localhost:9999/products/subProduct?storage=${memory}&&productId=${productId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data[0].subProducts);
        setSubProduct(data[0].subProducts);
        setMemory(memory);
        setColor(data[0].subProducts.color);
        // console.log(data.color)
        setProductColor(data.map((d) => d.subProducts.color));
      });
  };
  return (
    <div class="container">
      <div class="row sp4">
        <div class="col-xl-6 sp3_trai">
          <img src="img/13.jpg" alt="" class="trai3_anhto" />

          <div class="trai3_anhnho">
            <img src="img/13.jpg" alt="" />
          </div>
          <div class="trai3_anhnho">
            <img src="img/13.jpg" alt="/" />
          </div>
          <div class="trai3_anhnho">
            <img src="img/13.jpg" alt="" />
          </div>
          <div class="trai3_anhnho">
            <img src="img/13.jpg" alt="" />
          </div>

          <div class="trai3_anhnho1">
            <img src="img/13.jpg" alt="" />
          </div>
          <div class="trai3_anhnho1">
            <img src="img/13.jpg" alt="" />
          </div>
          <div class="trai3_anhnho1">
            <img src="img/13.jpg" alt="" />
          </div>
        </div>

        <div class="col-xl-6 sp3_phai">
          <form>
            <p class="tensanpham" style={{ padding: 0 }}>
              {subProduct.subName}
            </p>
            <div class="gia" style={{ justifyContent: "normal" }}>
              <p class="giagiam" style={{ paddingRight: "10px" }}>
                {formatCurrency(subProduct.price)}
              </p>
              <p class="giabandau">
                {formatCurrency(subProduct.discountPrice)}
              </p>
            </div>

            <p style={{ fontSize: "15px" }}>Dung Lượng:</p>
            <div className="color">
              {productMemory.map((m) => (
                <div
                  id="memoryPicker"
                  onClick={() => handleClickMemory(m)}
                  style={{
                    border: `2px solid ${
                      memory === m ? "#007bff" : "#6c757d6e"
                    }`,
                  }}
                >
                  <p style={{ margin: 0 }}>{m} </p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "15px" }}>Màu sắc:{color}</p>
            <div className="color">
              {productColor.map((c) => (
                <div
                  id="colorPicker"
                  onClick={() => handleClickColor(c)}
                  style={{
                    backgroundColor: "red",
                    border: `2px solid ${
                      color === c ? "#007bff" : "transparent"
                    }`,
                  }}
                ></div>
              ))}
            </div>
            <p class="tinhtrang">
              Tình trạng: Còn hàng ({subProduct.quantity})
            </p>

            <div class="sp3_nut">
              <button type="submit" class="mua">
                Thêm vào giỏ
              </button>
              <div class="tuvan">Tư vấn:19002126</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
