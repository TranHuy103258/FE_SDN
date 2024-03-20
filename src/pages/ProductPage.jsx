import Header from "../components/header/Header";
import Product from "../components/product/Product";
import Footerr from "../components/footer/Footer";
import { useParams, useLocation } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subProductId = searchParams.get("subProductId");

  return (
    <>
      <Header />
      <Product productId={productId} subProductId={subProductId} />
      <Footerr />
    </>
  );
};

export default ProductPage;
