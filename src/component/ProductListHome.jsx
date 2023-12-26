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
import Carousel from "react-bootstrap/Carousel";

export default function ProductListHome({ CategoryID }) {
  const { products } = useProductContext();
  const [currentProduct, setCurrentProduct] = useState([]);
  useEffect(() => {
    let temp = products.filter((item) => {
      return item.CategoryID === CategoryID;
    });
    temp.sort((a, b) => a.sort - b.sort);
    setCurrentProduct(temp);
  }, [CategoryID, products]);

  return (
    <div>
      <Container>
        <Row className="mx-auto w-100 justify-content-center">
          {currentProduct.slice(0, 3).map((item) => (
            <Product
              className="w-100"
              key={item.ProductID}
              item={item}
            ></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
}
