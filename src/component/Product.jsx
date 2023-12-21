import { useState } from "react";
import Col from "react-bootstrap/Col";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
  // const navigate = useNavigate();
  const [product, setProduct] = useState(props.item);
  // const ProductDetailHandle = () => {
  //   navigate(`/product/${product.ProductID}`);
  // };

  const reload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Col xs={12} sm={6} md={6} lg={3} className="p-3 my-3 row-cols-4 overflow-hidden">
      <Link to={`/product/${product.ProductID}`} onClick={reload}>
        <Card className="product-card-img position-relative">
          {/* Card content */}
          <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
            {product.ProductName}
          </Card.Title>
          <Card.Body className="justify-content-center align-items-center d-flex flex-column">
            <Card.Text className="text-light text-center">
              {product.Description.length > 30
                ? product.Description.substring(0, 30) + "..."
                : product.Description}
            </Card.Text>
            <Button
              // onClick={ProductDetailHandle}
              className="mx-auto text-dark button-62 card-button mt-2 "
            >
              Chi tiết
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
