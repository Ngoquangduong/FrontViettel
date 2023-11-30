import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import Header from "./component/Header";
import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./assets/CSS/filter.css";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import RegisterForm from "./component/RegisterForm";
import { FormProvider } from "./context/FormContext";
import ProductList from "./component/ProductList";
import ReactPaginate from "react-paginate";
import useProductContext from "./context/ProductContext";
import Filter from "./Filter";


export default function List() {
  const { totalPages, getProducts } = useProductContext();
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePageClick = (event) => {
    // console.log(event);
    // console.log(+event.selected + 1);
    const selectedPage = +event.selected + 1;
    getProducts(selectedPage);
    navigate(`/productList/product?page=${selectedPage}`);
  };

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
            <Row className="mx-auto">
              <ProductList></ProductList>
              <ReactPaginate
                className="justify-content-center d-flex flex-row pagination"
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </Row>

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
