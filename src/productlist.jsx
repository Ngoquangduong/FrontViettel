import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import Header from "./component/Header";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import "./assets/CSS/filter.css";

import Footer from "./component/Footer";
import PostList from "./component/PostList";
import RegisterForm from "./component/RegisterForm";
import { FormProvider } from "./context/FormContext";
import Filter from "./Filter";
import "./assets/CSS/main.css";

export default function ProductList() {
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    function handleResize() {
      // Kiểm tra kích thước màn hình và đặt giá trị showNav dựa trên điều kiện
      setShowNav(window.innerWidth >= 768); // 768px là một ví dụ về kích thước điện thoại
    }

    // Gọi handleResize khi màn hình thay đổi kích thước
    window.addEventListener("resize", handleResize);

    // Gọi handleResize lần đầu khi nạp trang
    handleResize();

    // Loại bỏ sự kiện lắng nghe khi component bị unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item className="pagination" key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="">
      <Header />
      <Container fluid className="bg-Form">
        <Container>
          <Row>
            {/* startfilter -----------------------------------------------------------------------------------*/}
            <Row className="d-flex flex-column">
              <div className="responsive-nav-container mt-4">
                {showNav ? (
                  <Nav
                    className="my-4 bg-filter-bar p-3"
                    defaultActiveKey="/home"
                    as="ul"
                  >
                    <Nav.Item as="li">
                      <Nav.Link
                        href=""
                        eventKey={"/home"}
                        className="filter-text"
                      >
                        Gói camera
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="link-1" className="filter-text">
                        Gói Internet
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="link-2" className="filter-text">
                        Gói cố định
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="ms-auto">
                      <Button
                        onClick={handleShow}
                        className="btn-filter-2 mx-3"
                      >
                        Bộ lọc sản phẩm
                      </Button>
                      <Filter show={show} handleClose={handleClose}></Filter>
                    </Nav.Item>
                    <Button
                      onClick={() => setShowNav(false)}
                      className="btn-filter"
                    >
                      X
                    </Button>
                  </Nav>
                ) : (
                  <Button
                    onClick={() => setShowNav(true)}
                    className="btn-filter-2 mt-3 mx-4"
                  >
                    Hiển thị Bộ lọc
                  </Button>
                )}
              </div>
            </Row>

            {/* endfilter ----------------------------------------------------------------------------------------------------------------*/}
            {/* Mobile-first design: Full width on small screens */}
            <Row className="mx-auto ">
              <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
                <Card className="product-card-img position-relative">
                  {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
                    Card Title
                  </Card.Title>
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">
                    <Card.Text className="text-light text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mx-auto text-dark button-62 mt-2 ">
                      Chi tiết
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
                <Card className="product-card-img position-relative">
                  {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
                    Card Title
                  </Card.Title>
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">
                    <Card.Text className="text-light text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mx-auto text-dark button-62 mt-2 ">
                      Chi tiết
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
                <Card className="product-card-img position-relative">
                  {/* Card content */}
                  <Card.Title className="text-dark text-center uppercase position-absolute product-name w-100 py-1">
                    Card Title
                  </Card.Title>
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">
                    <Card.Text className="text-light text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mx-auto text-dark button-62 mt-2 ">
                      Chi tiết
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
                <Card className="product-card-img position-relative">
                  {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
                    Card Title
                  </Card.Title>
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">
                    <Card.Text className="text-light text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mx-auto text-dark button-62 mt-2 ">
                      Chi tiết
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              


              <Pagination className="justify-center pagination ">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item >{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item >{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Row>
            <div className="divider"></div>
            {/* 
-----------------------------------------------------------------postlist------------------------------------------------------------------------ */}
            <PostList />

            {/* ----------------------------------------------------------------FOrm------------------------------------------------------ */}
            <Container fluid="md p-4  my-3 bg-home-menu">
              <h2 className=" text-title">Sản phẩm nổi bật/ hot</h2>
              <Row>
                {/* Mobile-first design: Full width on small screens */}
              </Row>

              <FormProvider>
                <RegisterForm />
              </FormProvider>
            </Container>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
