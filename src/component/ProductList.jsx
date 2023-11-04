import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



import "../assets/CSS/filter.css"
export default function ProductList(){
return(
<>
<Container className="">
<Row className="mx-auto align-item-center">
              <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
                <Card className="product-card-img position-relative">
                  {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">

                    <Card.Text className="text-light text-center">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.

                    </Card.Text>
                    <Button className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
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
                    <Button className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
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
                    <Button className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
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
                    <Button className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
</Container>

</>
)
}
