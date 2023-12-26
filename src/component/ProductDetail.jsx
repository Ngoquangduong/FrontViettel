import React from "react";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../assets/CSS/font.css";
import Card from "react-bootstrap/Card";
import "../assets/CSS/productDetail.css";
import "../assets/CSS/button.css";
import useProductContext from "../context/ProductContext";
import FormPopUp from "./FormPopUp";
const ProductDetail = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  // const { product } = useProductContext();
  return (
    <Row className="mx-auto my-3">
      <Col xs={12} sm={6} md={4} lg={3}>
        <div className=" my-3 ">
          <Card className="product-Detailimg position-relative">
            Card content
            <Card.Title className="text-light text-center uppercase position-absolute product-Detailname w-100 py-1">
              {product.ProductName}
            </Card.Title>
            <Card.Body className="justify-content-center align-items-center d-flex flex-column"></Card.Body>
          </Card>
        </div>
      </Col>
      <Col xs={12} sm={6} md={8} lg={9} className="normal-text ">
        <div className="p-4 my-3  img-block postition-relative ">
          <p className=" uppercase text-custom-title">
            <a href="" className="text-decoration-none text-custom-title">
              {product.ProductName}
            </a>
          </p>
          <p className="mt-3 detail-price">
            {/* {product.Price.toLocaleString('en-US')} */}
            <span className="product-price-name">Nội thành: </span>
            {product && product.Price ? (
              <>
                {product.Price.toLocaleString("en-US")}
                <span> /tháng</span>
              </>
            ) : (
              <span>No price available</span>
            )}
          </p>
          <p className="mb-3 detail-price">
            {/* {product.Price.toLocaleString('en-US')} */}
            <span className="product-price-name">Ngoại thành: </span>
            {product && product.NTPrice ? (
              <>
                {product.NTPrice.toLocaleString("en-US")}
                <span> /tháng</span>
              </>
            ) : (
              <span>No price available</span>
            )}
          </p>
          <div className="d-flex">
            <Col md={6} lg={6} className="text-custom my-3 ">
              <span className="text-custom-title">Băng thông: </span>
              <span className="text-custom-title">{product.Bandwidth}</span>
            </Col>
            <Col md={6} lg={6} className="text-custom my-3 ">
              <span className="text-custom-title">Tốc độ đường truyền: </span>
              <span className="text-custom-title">{product.Speed}</span>
            </Col>
          </div>
          <span className="text-custom-title">Ưu đãi: </span>{" "}
          <div className="text-danger text-custom-title mb-3">
            {/* {" "} */}
            <pre>{product.Gift}</pre>
          </div>
          <div className="text-custom text-custom-title">
            <span className="text-custom-title">Mô tả: </span>
            <pre className="text-success">{product.Description}</pre>
          </div>
          <div className="my-3">
            <button
              className="bn632-hover bn28"
              onClick={() => setModalShow(true)}
            >
              Đăng ký
            </button>

            <FormPopUp
              show={modalShow}
              product={product}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default ProductDetail;
