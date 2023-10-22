import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./header";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function ProductList() {
  return (
    <div>
      <Header />
      <Container fluid className="bg-Form">

        <Container>
       
          <Row>

            
            {/* Mobile-first design: Full width on small screens */}

            {/* ----------------------------------------------------------------FOrm------------------------------------------------------ */}
            <Row className="bg-confirm my-3">
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
          </Row>
        </Container>


      </Container>
    </div>
  );
}