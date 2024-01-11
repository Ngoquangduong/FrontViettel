import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import "../src/assets/CSS/DetailPost.css";
const DetailPost = () => {
  return (
    <div>
      <Header />
      <Container fluid className="d-flex mx-auto">
        <div className="col-3 p-2">
          <p className="text-center header-list-text">Các bài viết khác</p>
        </div>
        <div className="Postdetail-container col-6 p-3 my-4">
          Hello đây là phần nội dung chính hehe nên nhìn sẽ rất là rộng có gì
          hấp dẫn ko. có con mèo đen và bản nhạc quen thuộc
        </div>
        <div className="col-3 p-2">
          <p className="text-center header-list-text">Các sản phẩm nổi bật</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default DetailPost;
