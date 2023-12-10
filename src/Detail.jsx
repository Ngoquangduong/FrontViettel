import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./assets/CSS/font.css";
import Card from "react-bootstrap/Card";
import "./assets/CSS/productDetail.css";
import "./assets/CSS/button.css";
import { useEffect, useState } from "react";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import { FormProvider } from "./context/FormContext";
import RegisterForm from "./component/RegisterForm";
import { useParams } from "react-router-dom";
import axios from "./api/axios";
import ProductDetail from "./component/ProductDetail";
import Header from "./component/Header";
import { ProductProvider } from "./context/ProductContext";
import useProductContext from "./context/ProductContext";
// import { useParams } from "react-router-dom";

function Detail() {
  const [productDetailLoaded, setProductDetailLoaded] = useState(false);
  const [recommnet, setRecomment] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const { id } = useParams();

  const { products, product, getProductDetail } = useProductContext();
  const handleRecomment = () => {
    if (product && product.CategoryID && products) {
      console.log(product.CategoryID);
      let filterData = products.filter(
        (item) => item.CategoryID === product.CategoryID
      );
      setRecomment(filterData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setRecomment([]);
      await getProductDetail(id);
      setProductDetailLoaded(true); // set a flag to indicate that getProductDetail is completed
      window.scrollTo(0, 0);
      // console.log(product);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Execute handleRecomment only if getProductDetail is completed
    if (productDetailLoaded) {
      handleRecomment();
    }
  }, [productDetailLoaded, product]);

  return (
    <div className="bg-detail">
      <Header />
      <Container fluid="md p-4">
        {/* <ProductProvider> */}
        <ProductDetail product={product} />
        {/* </ProductProvider> */}

        <div className="mt-3 img-block p-4">
          <Container className=" ">
            <Row>
              <h1 className=" text-light-title">Các gói cước đề cử khác</h1>

              <ProductList products={recommnet}></ProductList>

              <p>
                <a href="" className=" float-end link-text">
                  Xem nhiều hơn
                </a>
              </p>
            </Row>
          </Container>
        </div>
        <PostList />
      </Container>
      <Footer />
    </div>
  );
}
export default Detail;
