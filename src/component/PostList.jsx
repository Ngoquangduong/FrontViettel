import { Row, Col, Container } from "react-bootstrap";
import "../assets/CSS/font.css";
import PostCard from "./PostCard";
export default function PostList() {
  return (
    <>
      <div className=" pb-5 ">
        <Container className="pt-3">
         
          <Row>
            <Col xs={12} sm={6} md={4} lg={4}>
              <PostCard />
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <PostCard />
            </Col>
          </Row>
          <a href="" className=" float-end link-text">
            Xem nhiều hơn
          </a>
        </Container>
      </div>
    </>
  );
}
