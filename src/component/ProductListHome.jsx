import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/CSS/product.css";
import Product from "./Product";
import "../assets/CSS/filter.css";
import useProductContext from "../context/ProductContext";
import { useEffect, useState } from "react";

export default function ProductListHome({ CategoryID }) {
  const { products } = useProductContext();
  const [currentProduct, setCurrentProduct] = useState([]);
  useEffect(() => {
    let temp = products.filter((item) => {
      return item.CategoryID === CategoryID;
    });
    setCurrentProduct(temp);
  }, [CategoryID, products]);

  return (
    <div>
      <Container>
        <Row className="mx-auto w-100 row-cols-4">
          {currentProduct.slice(0, 4).map((item) => (
            <Product key={item.ProductID} item={item} className="col"></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
}
