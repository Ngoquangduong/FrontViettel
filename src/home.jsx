import { useState, useEffect } from "react";
import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Product from "./component/Product";
import CarouselVietTel from "./component/CarouselVIetTel";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import RegisterForm from "./component/RegisterForm";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import "./assets/CSS/form.css";
import "./assets/CSS/main.css";
import ProductListHome from "./component/ProductListHome";
import "./assets/CSS/product.css";
import { FormProvider } from "./context/FormContext";
import useProductContext from "./context/ProductContext";
import useCategoryContext from "./context/CategoryContext";
import useBlogContext from "./context/BlogContext";
import { useNavigate, Link } from "react-router-dom";
function Home() {
  // const [currentProduct, setCurrentProduct] = useState([]);
  // const { products } = useProductContext();

  const { blogs } = useBlogContext();
  const { categories, getCategory } = useCategoryContext();
  const navigate = useNavigate();

  const [categorySort, setCategorySort] = useState([]);
  // console.log(categories);

  useEffect(() => {
    if (categories.length === 0) {
      getCategory();
    }
  }, [categories]);
  useEffect(() => {
    if (categorySort == undefined || categorySort.length == []) {
      let temp = categories;
      temp.sort((a, b) => a.sort - b.sort);
      setCategorySort(temp);
    }
  });
  const handleShowMore = () => {
    navigate("/productList");
    window.scrollTo(0, 0);
  };
  return (
    <>
    <div className="responsive-noti">
    <div className="fixed-noti mx-auto d-flex justify-content-center align-items-center">
        <p>
          Hỗ trợ đăng ký{" "}
          <span className="text-danger phone-number">0962.88.9696 </span>{" "}
        </p>
        <img
          src="/public//phone-icon.png"
          className="phone ms-2 me-auto"
          alt=""
        />
      </div>
    </div>
    

      <div className="fixed-noti-2 mx-auto">
        <img src="../public/gift3.png" alt="" className="gift" />
        <div className="d-flex flex-column relative justify-content-center align-items-center my-auto">
          <p className="fixed-noti-2-text">Đặt trước 6 tháng tặng 1 tháng</p>
          <p className="fixed-noti-2-text">Đặt trước 12 tháng tặng 2 tháng </p>
        </div>
      </div>
      <div className="bg-all ">
        <Header className="z-1 header" />

        {/* <Container fluid="md p-4 border-menu my-3 bg-home-menu"> */}
        {/* {data.map(() => {
       <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3">
         <h1>12345</h1>
       </Col>;
     })} */}

        <CarouselVietTel className="z-1 position-static" />
        <Container>
          <Row className="d-flex flex-wrap">
            <div className="noti-home-responsive mx-auto">
            
              <img src="../public/gift3.png" alt="" className="gift" />
              <div className="d-flex mx-auto my-auto text-center">
                <p className="fixed-noti-2-text">Đặt trước 6 tháng tặng 1 tháng</p>
                <p className="fixed-noti-2-text mx-2">Đặt trước 12 tháng tặng 2 tháng </p>
              </div>
          
            </div>
          

            <div className="noti-home-responsive text-center  mx-auto">
              <Col  className="d-flex align-item-center  mx-auto  justify-center">
                <span className="text-center mx-auto"> <p className="text-light"> Hỗ trợ đăng ký{" "} :</p><span className="text-danger phone-number"> 0962.88.9696 </span></span>
              </Col>
            </div>

          </Row>
        </Container>

        {/* <Container fluid="md p-4  my-3 bg-home-menu">
       <h2 className=" text-title">Đăng ký sản phẩm</h2>
       
       <RegisterForm />
     </Container> */}
        <div className="category-block ">
          <div className="divider mt-5"></div>
          <h1 className="text-center mt-3 text-bigtitle uppercase">
            Gói cước hộ gia đình (HOT)
          </h1>
          {categorySort.slice(0, 3).map((item) => (
            <Container fluid="md p-4  my-3 bg-home-menu" key={item.CategoryID}>
              <h2 className="text-title uppercase">
                Gói cước {item.CategoryName}
              </h2>
              <Row>
                <ProductListHome CategoryID={item.CategoryID}></ProductListHome>
              </Row>
            </Container>
          ))}

          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="bn632-hover bn28 mb-3"
              type="submit"
            >
              Xem Thêm
            </button>
          </div>
          <div className="divider my-4"></div>
        </div>
        <div className="category-block my-4 ">
          <div className="divider mt-5"></div>
          <h1 className="text-center mt-3 text-bigtitle uppercase">
            Gói cước hộ gia đình
          </h1>
          {categorySort.slice(3, 6).map((item) => (
            <Container fluid="md p-4  my-3 bg-home-menu" key={item.CategoryID}>
              <h2 className="text-title uppercase">
                Gói cước {item.CategoryName}
              </h2>
              <Row>
                <ProductListHome CategoryID={item.CategoryID}></ProductListHome>
              </Row>
            </Container>
          ))}

          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="bn632-hover bn28 mb-3"
              type="submit"
            >
              Xem Thêm
            </button>
          </div>
          <div className="divider my-4"></div>
        </div>
        <div className="category-block my-4">
          <div className="divider mt-5"></div>
          <h1 className="text-center mt-3 text-bigtitle uppercase">
            Gói cước doanh nghiệp
          </h1>
          {categorySort.slice(6, 8).map((item) => (
            <Container fluid="md p-4  my-3 bg-home-menu" key={item.CategoryID}>
              <h2 className="text-title">Gói cước {item.CategoryName}</h2>
              <Row>
                <ProductListHome CategoryID={item.CategoryID}></ProductListHome>
              </Row>
            </Container>
          ))}

          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="bn632-hover bn28 mb-3"
              type="submit"
            >
              Xem Thêm
            </button>
          </div>
          <div className="divider my-4"></div>
        </div>
        <Container className="my-4" >
          <div className=" my-3">
            <PostList blogs={blogs.slice(0, 4)} />
            <Link to="/Posts" className=" float-end link-text">
              Xem nhiều hơn
            </Link>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default Home;
