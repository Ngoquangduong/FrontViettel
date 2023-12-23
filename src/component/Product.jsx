import { useState } from "react";
import Col from "react-bootstrap/Col";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormPopUp from "./FormPopUp";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(props.item);
  const ProductDetailHandle = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.ProductID}`);
  };
  const [modalShow, setModalShow] = useState(false);
  const reload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={3}
      className="p-3 my-3 row-cols-4 overflow-hidden"
    >
      <a className="">
        <Card className="product-card-img position-relative ">
          {/* Card content */}
          <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
            {product.ProductName}
          </Card.Title>
          <Card.Body className="justify-content-center align-items-center d-flex flex-column">
            <Card.Text className="text-light text-center px-3 product-description ">
              {product.Description.length > 50 ? (
                <pre>{product.Gift.substring(0, 50) + "..."}</pre>
              ) : (
                <pre>{product.Gift}</pre>
              )}
              {/* {product.Description} */}
            </Card.Text>
            <div className="d-flex price-tag flex-column ">
              <Card.Title className="  text-center w-100 ">
                {product.Price.toLocaleString("en-US")}VND
              </Card.Title>
              <Card.Title className=" text-center   w-100 ">
              <span className="price-hint">Ngoại thành : </span> <span>{product.NTPrice.toLocaleString("en-US")}VND</span>
              </Card.Title>
            </div>


            <div className="d-flex card-button justify-content-center flex-column ">
              <div className="my-2">
                <button
                  className="button-61"
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

              <Button
                onClick={ProductDetailHandle}
                className="mx-auto text-dark button-63 mt-2 "
              >
                Chi tiết
              </Button>
            </div>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}
