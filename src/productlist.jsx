import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./header";
import { Form } from "react-bootstrap";

export default function ProductList (){
    return (
        <div>
           <Header />
           <Container fluid>
            
            <Container>
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

{/* ----------------------------------------------------------------FOrm------------------------------------------------------ */}
            <Row>
                   <h1 className="my-3 title-table">Mua/đặt sản phẩm</h1>
                   <Form>
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
                    <input type="text" className="w-100" placeholder="Giá sản phẩm" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   </Row>
  
                   

      <Row>
                    <Col>
                    <input type="text" className="w-100" placeholder="Tốc độ đường truyền" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   
                 
            
                
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
        <input type="text" className="w-100" placeholder="Địa chỉ" required/>
        <span className="highlight"></span>
        <span className="bar mb-4"></span>
                        
    </Col>
    </Row>
    <div className=""><button className="bn632-hover bn28 mb-3" type="submit">Xác nhận</button></div>
    </Form>
     
    
       
                   
    

          </Row>
           </Container>
        </div>
    );
}