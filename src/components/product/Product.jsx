import React from 'react';
import './Product.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency, calculateDiscountPercentage } from '../../ultils/function';

const Product = ({ productId, subProductId }) => {
    const [subProduct, setSubProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const [color, setColor] = useState("");
    const [storage, setStorage] = useState("");
    const [productStorage, setProductStorage] = useState([]);
    const [productColor, setProductColor] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseProduct = await fetch(
                `http://localhost:9999/products/find/${productId}`,
                { method: "GET" }
            );
            const dataProduct = await responseProduct.json();
           
            setProductStorage(dataProduct.storage)
            setProduct(dataProduct)

            const responseSubProduct = await fetch(`http://localhost:9999/products/subProduct/${subProductId}`);
            const dataSubProduct = await responseSubProduct.json();
            console.log(dataSubProduct);
            setSubProduct(dataSubProduct);
            setStorage(dataSubProduct.storage);
            setColor(dataSubProduct.color);

            const filteredProducts = dataProduct.subProducts.filter(p => p.storage === dataSubProduct.storage);
            setProductColor(filteredProducts.map(p => p.color));

        } catch (error) {
            console.log("Lỗi:", error);
        }
    }

  


    const handleClickColor = (color) => {
        fetch(`http://localhost:9999/products/subPro?storage=${storage}&&productId=${productId}&&color=${color}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.subProducts);
                setSubProduct(data.subProducts);
                setStorage(storage)
                console.log(color)
                setColor(color)
                // setProductColor(data.map(d=>d.subProducts.color))
            })
   
    }

    const handleClickMemory = (storage) => {
        fetch(`http://localhost:9999/products/subProduct?storage=${storage}&&productId=${productId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data[0].subProducts);
                setSubProduct(data[0].subProducts);
                setStorage(storage)
                setColor(data[0].subProducts.color);
                // console.log(data.color)
                setProductColor(data.map(d=>d.subProducts.color))
            })
    }
    const navigate = useNavigate();
   
     

        const handleAddToCart = () => {
            const fetchData1 = async () => {
                try {
                    const response = await fetch(`http://localhost:9999/products/setCart?productId=${productId}&subProductId=${subProductId}&quantity=1`, {
                        method: 'GET',
                        credentials: 'include'
        
                    });
                    const data = await response.json();
                    console.log(data); // In ra "Cookie đã được tạo!" từ phản hồi của backend
                    setSubProduct(data);
        
        
                   
                } catch (error) {
                    console.error('Lỗi:', error);
                }
            };
            fetchData1();
            // Chuyển hướng và truyền thông tin sản phẩm
            navigate('/cart', {
                state: {
                    productId: productId,
                    subProductId: subProduct._id,
                    quantity: 1
                }
            });
        };
    




    return (
        <div class="container">
            <div class="row sp4">
                <div class="col-xl-6 sp3_trai" >

                <img src={`http://localhost:9999/${subProduct?.images?.[0]}`} alt="" class="trai3_anhto" />

                    


                </div>

                <div class="col-xl-6 sp3_phai">
                    <form  >
                        <p class="tensanpham" style={{ padding: 0 }}>{subProduct.subName}</p>
                        <div class="gia" style={{ justifyContent: 'normal', }}>
                            <p class="giagiam" style={{ paddingRight: '10px' }} >{formatCurrency(subProduct.price)}</p>
                            <p class="giabandau">{formatCurrency(subProduct.discountPrice)}</p>
                        </div>

                        <p style={{ fontSize: '15px' }} >Dung Lượng:</p>
                        <div className="color">
                            {productStorage.map(s => (
                                <div id="memoryPicker" onClick={() => handleClickMemory(s)}
                                    style={{ border: `2px solid ${storage === s ? '#007bff' : '#6c757d6e'}` }}>
                                    <p style={{ margin: 0 }}>{s} </p>
                                </div>

                            ))}
                        </div>

                        <p style={{ fontSize: '15px' }} >Màu sắc:{color}</p>
                        <div className="color">
                            {productColor.map(c => (
                                <div id="colorPicker" onClick={() => handleClickColor(c)}
                                    style={{
                                        backgroundColor: 'red',
                                        border: `2px solid ${color === c ? '#007bff' : 'transparent'}`
                                    }}>

                                </div>

                            ))}
                        </div>
                        <p class="tinhtrang">
                            Tình trạng: Còn hàng ({subProduct.quantity})
                        </p>



                        <div class="sp3_nut">
                            <button onClick={handleAddToCart} class="mua" >
                                Thêm vào giỏ
                            </button>
                            <div class="tuvan">
                                Tư vấn:19002126
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Product;
