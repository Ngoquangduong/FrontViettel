import Header from "./header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import "./assets/CSS/product.css";


function Home() {
  return (
    <div className="bg-red">
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
      <Container fluid="md p-4 ">
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

    </div>
  );
}

export default Home;
