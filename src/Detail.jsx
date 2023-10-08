import Header from "./header";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./assets/CSS/productDetail.css";

function Detail(){
    return(
        <div >
          <Header/>
    <Container fluid="md p-4 bg-detail ">
           <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="p-2 my-3 ">
            <Card className="product-Detailimg position-relative">
              {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-Detailname w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
      
     </Card.Body>
            </Card>
            </Col>
            <Col xs={12} sm={6} md={8} lg={8} className="p-3 my-3 img-block ">
                <p className=" uppercase detail-name"><a href="" className="text-decoration-none detail-name">Card Title</a></p>
                <p className="mt-3 text-success price">120000đ<span> /tháng</span></p>
                <span className="text-custom">Ưu đãi: </span> <span className="text-danger text-custom-title"> Free call</span>
                <div className = "d-flex">
                <Col md={6} lg={6} className="text-custom my-3 text-primary">
<span className="text-custom-title">Băng thông :</span><span className="text-custom-title">Băng thông quốc tế</span>
                </Col>
                <Col md={6} lg={6} className="text-custom my-3 text-info">
                <span className="text-custom-title">Tốc độ đường truyền :</span><span className="text-custom-title">12GB/s</span>
                </Col>
               
                </div>
                <p className="text-custom"><span className="text-warning">Mô tả :</span>Dùng rất là sướng, nhanh mạnh khỏe, chơi game mượt, ưu đãi tốt, được nhiều idol recomend</p>
                 <div className="px-4  my-3"><button className="button-62">Đăng ký</button></div>
            </Col>
           </Row>
           
    </Container>
        </div>
    )
}
export default Detail