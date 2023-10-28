import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./header";
import { Form } from "react-bootstrap";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Nav } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import "./assets/CSS/filter.css"

export default function ProductList() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Kiểm tra kích thước màn hình và đặt giá trị showNav dựa trên điều kiện
      setShowNav(window.innerWidth >= 768); // 768px là một ví dụ về kích thước điện thoại
    }

    // Gọi handleResize khi màn hình thay đổi kích thước
    window.addEventListener('resize', handleResize);

    // Gọi handleResize lần đầu khi nạp trang
    handleResize();

    // Loại bỏ sự kiện lắng nghe khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <Header />
      <Container fluid className="bg-Form">

        <Container>

          <Row>
            {/* startfilter -----------------------------------------------------------------------------------*/}

            <div className="responsive-nav-container">
              {showNav ? (
                <Nav className="my-4 bg-filter-bar p-3" defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="" eventKey={'/home'} className="filter-text">Gói camera</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" className="filter-text">Gói Internet</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className="filter-text">Gói cố định</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="ms-auto">
                    <Dropdown>
                      <Dropdown.Toggle className="btn-filter-2 mx-3" id="dropdown-basic">
                        Bộ lọc sản phẩm
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="mt-1 filter-content p-4">
                        <Row>
                          <Form>
                            <h1 className="filter-heading">Sắp xếp</h1>
                            <div className="underline-1"></div>




                          </Form>


                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Item>
                  <Button onClick={() => setShowNav(false)} className="btn-filter">X</Button>
                </Nav>
              ) : (
                <Button onClick={() => setShowNav(true)} className="btn-filter-2 mt-3 mx-4">Hiển thị Bộ lọc</Button>
              )
              }
            </div>

            {/* endfilter ----------------------------------------------------------------------------------------------------------------*/}
            {/* Mobile-first design: Full width on small screens */}
            <Row className="mx-auto">
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








            {/* ----------------------------------------------------------------FOrm------------------------------------------------------ */}
            <Row className="bg-confirm my-3">
              <h1 className="my-3 title-form ">Mua/đặt sản phẩm</h1>
              <Form>
                <Row>
                  <Col>
                    <input type="text" className="w-100" placeholder="Tên người mua" required />
                    <span className="highlight"></span>
                    <span className="bar mb-4"></span>

                  </Col>
                  <Col>
                    <input type="text" className="w-100" placeholder="Số điện thoại liên hệ" required />
                    <span className="highlight"></span>
                    <span className="bar mb-4"></span>

                  </Col>
                </Row>

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