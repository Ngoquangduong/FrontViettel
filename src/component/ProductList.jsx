import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/CSS/product.css";
import Product from "./Product";
import "../assets/CSS/filter.css";
import { ProductProvider } from "../context/ProductContext";
import useProductContext from "../context/ProductContext";


export default function ProductList({products}) {
  // const { products } = useProductContext();

  
  
  return (
    <div>
      <Container>
        <Row className="mx-auto w-100 col-12 justify-content-center">
        {products.map((item) => (
            
            
              <Product key={item.ProductID} item={item}/>
              
            
           
            
          ))} 
        </Row>
      </Container>
    </div>
  );
}