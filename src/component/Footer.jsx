import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/CSS/main.css";
const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
        }}
        className="p-4 footer-background"
      >
        <Container className="h-100">
          <Row className="h-100">
            <Col md="2" className="p-2 d-flex h-100">
              <img
                src="/newlogomain.png"
                width={200}
                height={200}
                className="m-auto ms-0"
              />
            </Col>
            <Col md="2">
              <p>
                <Link to="/Productlist">
                  <a href="" className="footer-text ">
                    {" "}
                    Sản phẩm dịch vụ
                  </a>
                </Link>
              </p>

              <Row className=" align-items-center justify-center">
                {/* <p className="footer-text ">Theo dõi chúng tôi trên </p>
                <div className=" text-center ms-2 p-0 icon-logo">
                  <a href="" className="icon-logo d-block">
                    <img
                      src="../../public/zalo-logo.png"
                      className="icon-logo icon-animation"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" text-center ms-2 p-0 icon-logo">
                  <a href="" className="icon-logo d-block">
                    <img
                      src="../../public/youtube2.png"
                      className="icon-logo icon-animation"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" text-center ms-2 p-0 icon-logo">
                  <a href="" className="icon-logo d-block">
                    <img
                      src="../../public/facebook-logo-icon-vector-27990381-e1592215786624.png"
                      className="icon-logo icon-animation"
                      alt=""
                    />
                  </a>
                </div> */}
              </Row>
            </Col>
            <Col md="6" className="d-flex flex-column">
              <Col md="12" className="">
                <p>
                  <a href="" className="footer-text-info ">
                    {" "}
                    Liên hệ :{" "}
                    <span className="phone-number">0962.88.9696 </span>
                    hoặc <span className="phone-number">0989.9779.68</span>
                  </a>
                </p>
              </Col>
              <Col md="12">
                <p>
                  <a href="" className="footer-text-info ">
                    {" "}
                    Địa chỉ:
                    <span className=" text-info">
                      {" "}
                      677 Lạc Long Quân, Phú Thượng, Tây Hồ, Hà Nội
                    </span>
                  </a>
                </p>{" "}
              </Col>
            </Col>
            <Col md="2">
              <p>
                <Link to="/Posts">
                  <a href="" className="footer-text ">
                    Tin tức
                  </a>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
