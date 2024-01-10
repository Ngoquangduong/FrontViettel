import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Header from "./component/Header";

import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import "./assets/CSS/filter.css";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import RegisterForm from "./component/RegisterForm";
import { FormProvider } from "./context/FormContext";
import ProductList from "./component/ProductList";
import useProductContext from "./context/ProductContext";
import Filter from "./Filter";
import Pagination from "./component/Pagination2";
// import Paginate from "./component/Pagination";
import useBlogContext from "./context/BlogContext";
export default function List() {
  const { blogs } = useBlogContext();

  const { getProducts, products } = useProductContext();
  const [filterResult, setFilterResult] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);
  // const [indexOfLastProduct, setIndexOfLastProduct] = useState(
  //   currentPage * productPerPage
  // );
  // const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(
  //   indexOfLastProduct - productPerPage
  // );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let totalPage = Math.ceil(products.length / productPerPage);
  let filterTotalPage = Math.ceil(filterResult.length / productPerPage);
  const handlePageChange = (value) => {
    window.scrollTo(0, 0);
    if (value === "&laquo;" || value === "... ") {
      setCurrentPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setCurrentPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setCurrentPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setCurrentPage(totalPage);
    } else {
      setCurrentPage(value);
    }
  };
  // const paginate = (pageNumber) => {
  //   window.scrollTo(0, 0);
  //   setCurrentPage(pageNumber);
  // };
  // useEffect(() => {
  //   function handleResize() {
  //     setShowNav(window.innerWidth >= 768);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    let newIndexOfLastProduct = currentPage * productPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - productPerPage;

    // setIndexOfLastProduct(newIndexOfLastProduct);
    // setIndexOfFirstProduct(newIndexOfFirstProduct);

    if (filterResult.length > 0) {
      setCurrentProduct(
        filterResult.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
      );
    } else {
      setCurrentProduct(
        products.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
      );
    }
  }, [filterResult, currentPage]);

  useEffect(() => {
    let newIndexOfLastProduct = currentPage * productPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - productPerPage;
    // console.log(newIndexOfFirstProduct);
    setCurrentProduct(
      products.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
    );
  }, [products.length === 0]);
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
                    {/* <Nav.Item as="li">
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
                    </Nav.Item> */}
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

                  <Pagination
                    totalPage={filterTotalPage}
                    page={currentPage}
                    limit={productPerPage}
                    siblings={1}
                    onPageChange={handlePageChange}
                  ></Pagination>
                </>
              ) : (
                <>
                  <ProductList products={currentProduct}></ProductList>

                  <Pagination
                    totalPage={totalPage}
                    page={currentPage}
                    limit={productPerPage}
                    siblings={1}
                    onPageChange={handlePageChange}
                  ></Pagination>
                </>
              )}
            </Row>

            {/* 
-----------------------------------------------------------------postlist------------------------------------------------------------------------ */}
            <PostList blogs={blogs} />
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
