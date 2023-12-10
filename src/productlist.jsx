import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
import useProductContext from "./context/ProductContext";
import Filter from "./Filter";
import Paginate from "./component/Pagination";

export default function List() {
  const {
    totalPages,
    getProducts,
    products,
    productPerPage,
    paginate,
    currentPage,
  } = useProductContext();
  const [filterResult, setFilterResult] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);
  const [indexOfLastProduct, setIndexOfLastProduct] = useState(
    currentPage * productPerPage
  );
  const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(
    indexOfLastProduct - productPerPage
  );
  const [currentProduct, setCurrentProduct] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const newIndexOfLastProduct = currentPage * productPerPage;
    const newIndexOfFirstProduct = newIndexOfLastProduct - productPerPage;

    setIndexOfLastProduct(newIndexOfLastProduct);
    setIndexOfFirstProduct(newIndexOfFirstProduct);

    if (filterResult.length > 0) {
      setCurrentProduct(
        filterResult.slice(indexOfFirstProduct, indexOfLastProduct)
      );
    } else {
      setCurrentProduct(
        products.slice(indexOfFirstProduct, indexOfLastProduct)
      );
    }

    function handleResize() {
      setShowNav(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentPage, productPerPage, products, filterResult]);

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
                      <Filter
                        show={show}
                        handleClose={handleClose}
                        setFilterResult={setFilterResult}
                        filterResult={filterResult}
                      ></Filter>
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
              {filterResult.length > 0 ? (
                <>
                  <ProductList products={currentProduct}></ProductList>
                  <Paginate
                    dataPerPage={productPerPage}
                    totalData={filterResult.length}
                    paginate={paginate}
                  ></Paginate>
                </>
              ) : (
                <>
                  <ProductList products={currentProduct}></ProductList>
                  <Paginate
                    dataPerPage={productPerPage}
                    totalData={products.length}
                    paginate={paginate}
                  ></Paginate>
                </>
              )}
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
