import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  console.log(location)
  const product = location.state && location.state.productData;

  if (!product) {
    return <div>Loading...</div>; // Xử lý trường hợp không có dữ liệu
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      {/* Thêm các thông tin chi tiết khác nếu cần */}
    </div>
  );
};

export default ProductDetail;