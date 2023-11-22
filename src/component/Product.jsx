import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Product(props) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(props.item);
  const ProductDetailHandle = () => {
    navigate(`/product/${product.ProductID}`);
  };

  return (
    <Link to={`/product/${product.ProductID}`}>
      <Card className="product-card-img position-relative">
        {/* Card content */}
        <Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">
          {product.ProductID}
        </Card.Title>
        <Card.Body className="justify-content-center align-items-center d-flex flex-column">
          <Card.Text className="text-light text-center">
            {product.Description.length > 30
              ? product.Description.substring(0, 30) + "..."
              : product.Description}
          </Card.Text>
          <Button
            // onClick={ProductDetailHandle}
            className="mx-auto text-dark button-62 mt-2 "
          >
            Chi tiết
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
