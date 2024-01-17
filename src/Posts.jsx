import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import useBlogContext from "./context/BlogContext";
import { Row, Col } from "react-bootstrap";
// import { current } from "@reduxjs/toolkit";
// import PortCard from "./component/PostCard";
import { useState, useEffect } from "react";
import Pagination from "./component/Pagination2";

const Posts = () => {
  const { blogs, getBlogs } = useBlogContext();
  const [currentBlog, setCurrentBlog] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(12);
  let totalPage = Math.ceil(blogs.length / blogPerPage);
  const handlePageChange = (value) => {
    window.scrollTo(0, 0);
    if (value === "&laquo;" || value === "... ") {
      setCurrentPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setCurrentPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setCurrentPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setCurrentPage(totalPage);
    } else {
      setCurrentPage(value);
    }
  };

  useEffect(() => {
    let newIndexOfLastProduct = currentPage * blogPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - blogPerPage;
    // console.log(newIndexOfFirstProduct);
    setCurrentBlog(blogs.slice(newIndexOfFirstProduct, newIndexOfLastProduct));
  }, [blogs.length === 0]);
  return (
    <div>
      <Header></Header>
      <Container fluid>
        
        <Container>
          <Row >
            <PostList blogs={currentBlog}></PostList>
            <Pagination
              totalPage={totalPage}
              page={currentPage}
              limit={blogPerPage}
              siblings={1}
              onPageChange={handlePageChange}
            ></Pagination>
            {/* {currentBlog.map((item) => (

             

         ))} */}
          </Row>
        </Container>
      </Container>
      <Footer></Footer>
    </div>
  );
};
export default Posts;
