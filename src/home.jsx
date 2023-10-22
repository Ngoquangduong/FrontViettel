import Header from "./header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import "./assets/CSS/form.css"
import "./assets/CSS/product.css";
import { Nav } from "react-bootstrap";


function Home() {
  return (
    <div className="bg-productpage">
   <Header/>
   <Carousel className="">
  <Carousel.Item>
    <img
      className="d-block w-100 Carousel-home"
      src="../public/carousel1.jpg"
      
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 Carousel-home"
      src="../public/carousel2.jpg"
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 Carousel-home"
      src="../public/carousel3.jpg"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Container fluid="md p-4 border-menu my-3 bg-home-menu">


     
        <h2 className=" menu-title">Sản phẩm nổi bật/ hot</h2>
        <Row>
          {/* Mobile-first design: Full width on small screens */}
          <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
            <Card className="product-card-img position-relative">
              {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
       <Card.Text className="text-light text-center">
         Some quick example text to build on the card title and make up the
         bulk of the card's content.

       </Card.Text>
       <Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
     </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
            <Card className="product-card-img position-relative">
              {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
       <Card.Text className="text-light text-center">
         Some quick example text to build on the card title and make up the
         bulk of the card's content.

       </Card.Text>
       <Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
     </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
            <Card className="product-card-img position-relative">
              {/* Card content */}
                  <Card.Title className="text-dark text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
       <Card.Text className="text-light text-center">
         Some quick example text to build on the card title and make up the
         bulk of the card's content.

       </Card.Text>
       <Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
     </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
            <Card className="product-card-img position-relative">
              {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
       <Card.Text className="text-light text-center">
         Some quick example text to build on the card title and make up the
         bulk of the card's content.

       </Card.Text>
       <Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
     </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <Container>



          <Row className="bg-confirm my-5">
              <h1 className="my-3 title-form ">Mua/đặt sản phẩm</h1>
              <Form>

                <Col>
                  <input type="text" className="w-100" placeholder="Tên người mua" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
                <Row>
                  <Col>
                    <Form.Select aria-label="Default select example" className="w-100 mb-4">
                      <option>Sản phẩm</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>



                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example" className="w-100 mb-4">
                      <option>Phương thức thanh toán</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>

                </Row>
                <Row>

                </Row>
                <Row>
                  <Form.Select aria-label="Default select example" className="w-25 mb-4">
                    <option>Thành phố</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example" className="w-25 mb-4 mx-2">
                    <option>Quận</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Col>
                    <input type="text" className="w-100" placeholder="Địa chỉ" required />
                    <span className="highlight"></span>
                    <span className="bar mb-4"></span>

                  </Col>
                </Row>
                <div className="text-center"><button className="bn632-hover bn28 mb-3" type="submit">Xác nhận</button></div>
              </Form>
            </Row>
</Container>
    </div>
  );
}

export default Home;
