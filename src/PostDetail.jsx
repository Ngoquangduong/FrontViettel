import { useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container, Col,Row, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductContext from "./context/ProductContext";
import "../src/assets/CSS/DetailPost.css";
import Product from "./component/Product";
import useBlogContext from "./context/BlogContext";

import PostList from "./component/PostList";

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



  const { products } = useProductContext();
  return (
    <div>
      <Header />
      <Container fluid className="d-flex mx-auto">

        <div className=" p-2 second-list-responsive">
          <p className="text-center header-list-text">Các bài viết khác</p>
          <ListGroup>
            
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>




        <div className="Postdetail-container main-post-responsive  p-3 my-4">
          <div className="d-flex flex-wrap">
            <img src={`http://localhost:8000/storage/${blog.TitleImage}`}
              className="my-2 post-image "/>
            <h1 className="px-3">{blog.BlogTitle}</h1>
          </div>

          <p
            className="normal-text"
            dangerouslySetInnerHTML={{
              __html: `${blog.BlogContent}`,
            }}
          ></p>
        </div>



        <div className="p-2 second-list-responsive" >
          <p className="text-center header-list-text">Các sản phẩm nổi bật</p>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>


      </Container>
   
    
    
     <Container fluid className="mx-auto responsive-list">
      <Container>
      <div className=" my-3 ">
            <PostList blogs={blogs.slice(0, 4)} />
            
      </div>
     <Row className="mx-auto d-flex w-100 justify-content-center ">
        
        {products.slice(0, 3).map((item) => (         
            <Product key={item.ProductID} item={item}/>        
        ))} 
     
      </Row>
      </Container>
 
     </Container>
     
    
   
  
      

      
      <Footer />
    </div>
  );
};
export default DetailPost;
