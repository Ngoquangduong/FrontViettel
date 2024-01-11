import { Row, Col, Container } from "react-bootstrap";
import "../assets/CSS/font.css";
import PostCard from "./PostCard";
import useBlogContext from "../context/BlogContext";
import { BlogProvider } from "../context/BlogContext";
import { useState } from "react";
export default function PostList({ blogs }) {
  // const {blogs} = useBlogContext();
  // const [currentBlog, setCurrentBlog] = useState([]);

  return (
    <>
      <div className=" pb-5 ">
        <Container className="pt-3">
          <Row>
            <Col xs={12} sm={6} md={4} lg={4}>
              {blogs.map((item) => (
                <PostCard key={item.BlogID} item={item} />
              ))}
            </Col>
          </Row>
          <a href="#" className=" float-end link-text">
            Xem nhiều hơn
          </a>
        </Container>
      </div>
    </>
  );
}
