import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./component/Product";
import CarouselVietTel from "./component/CarouselVIetTel";
import RegisterForm from "./component/RegisterForm";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import PostList from "./component/PostList";
import "./assets/CSS/form.css";
import "./assets/CSS/product.css";
import { FormProvider } from "./context/FormContext";
import { ProductProvider } from "./context/ProductContext";

function Home() {
  const data = [
    { title: "title1", description: "description1" },
    { title: "title2", description: "description2" },
    { title: "title3", description: "description3" },
    { title: "title4", description: "description4" },
  ];

  return (
    <div className="bg-all">
      <Header />
      {/* <Container fluid="md p-4 border-menu my-3 bg-home-menu"> */}
      {data.map(() => {
        <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
          <h1>12345</h1>
        </Col>;
      })}

      <CarouselVietTel />
      <h2 className=" text-title mt-2">Sản phẩm nổi bật/ hot</h2>
        <Row>{/* Mobile-first design: Full width on small screens */}
        <ProductList /></Row>

      <Container fluid="md p-4  my-3 bg-home-menu">
        
        <FormProvider>
          <RegisterForm />
        </FormProvider>
      </Container>
      <PostList />
      <ProductProvider>
        
      </ProductProvider>

      <Footer />
    </div>
  );
}

export default Home;
