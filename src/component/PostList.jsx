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
    <h1 className="text-center">Các bài viết nổi bật</h1>
      <div className=" pb-5 post-container">
        <Container className="pt-3">
          <Row  className="d-flex flex-wrap">
            
              {blogs.map((item) => (
                <PostCard key={item.BlogID} item={item} />
              ))}
            
          </Row>
          <a href="#" className=" float-end link-text">
            Xem nhiều hơn
          </a>
        </Container>
      </div>
    </>
  );
}
