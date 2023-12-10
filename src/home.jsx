import { useState, useEffect } from "react";
import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Product from "./component/Product";
import CarouselVietTel from "./component/CarouselVIetTel";
import RegisterForm from "./component/RegisterForm";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import PostList from "./component/PostList";
import "./assets/CSS/form.css";
import "./assets/CSS/product.css";
import { FormProvider } from "./context/FormContext";
import useProductContext from "./context/ProductContext";
import { useNavigate } from "react-router-dom";
function Home() {
  const [currentProduct, setCurrentProduct] = useState([]);
  const { products } = useProductContext();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentProduct(products.slice(0, 8));
  }, [products]);

  const handleShowMore = () => {
    navigate("/productList");
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-all">
      <Header />
      {/* <Container fluid="md p-4 border-menu my-3 bg-home-menu"> */}
      {/* {data.map(() => {
        <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
          <h1>12345</h1>
        </Col>;
      })} */}
      <CarouselVietTel />
      <Container fluid="md p-4  my-3 bg-home-menu">
        <h2 className=" text-title">Sản phẩm nổi bật/ hot</h2>
        <Row>{/* Mobile-first design: Full width on small screens */}</Row>
        <RegisterForm />
      </Container>
      <ProductList products={currentProduct}></ProductList>
      <div className="text-center">
        <button
          onClick={handleShowMore}
          className="bn632-hover bn28 mb-3"
          type="submit"
        >
          Xem Thêm
        </button>
      </div>

      <PostList />

      <Footer />
    </div>
  );
}

export default Home;
