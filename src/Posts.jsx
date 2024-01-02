import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import useBlogContext from "./context/BlogContext";
import { Row, Col} from "react-bootstrap";
import { current } from "@reduxjs/toolkit";
import PortCard from "./component/PostCard";
  const Posts = () => {
   const {blogs} = useBlogContext();
 

  return (
    <div>
      <Header></Header>
      <Container fluid>
        <h1 className="text-title text-center my-3 text-danger">
          Các bài viết và tin tức về dịch vụ lắp đặt mạng Viettel
        </h1>
        <Container>
          <Row>

            {blogs.map((item) => (

            <PortCard key={blogs.blogId} item={item} ></PortCard>
            ))}

  {/* {currentBlog.map((item) => (

             

         ))} */}

          </Row>
        </Container>
      </Container>
      <Footer></Footer>
    </div>
  );
  }
export default Posts;
