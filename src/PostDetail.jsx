import { useEffect } from "react";
import Header from "./component/Header"
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../src/assets/CSS/DetailPost.css";
import useBlogContext from "./context/BlogContext";
const DetailPost = () => {
  const { id } = useParams();

  const { blog, blogs, getBlogDetail } = useBlogContext();
  useEffect(() => {
    const fetchData = async () => {
      await getBlogDetail(id);
    };
    fetchData();
  }, [id, blog == {}]);

  console.log(blog);
  return (
    <div>
      <Header />
      <Container fluid className="d-flex mx-auto">
        <div className="col-3 p-2">
          <p className="text-center header-list-text">Các bài viết khác</p>
        </div>
        <div className="Postdetail-container col-6 p-3 my-4">
        <div className="d-flex 
        ">
        <img
            src={`http://localhost:8000/storage/${blog.TitleImage}`}
            className="my-2 post-image "
          />
            <h1 className="px-3">{blog.BlogTitle}</h1>
           </div>
         
        
          <p
            className="normal-text"
            dangerouslySetInnerHTML={{
              __html: `${blog.BlogContent}`,
            }}
          ></p>
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
