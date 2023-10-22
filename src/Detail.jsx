import Header from "./header";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import Card from "react-bootstrap/Card";
import "./assets/CSS/productDetail.css";
import "./assets/CSS/button.css";
import { useState } from "react";

function Detail(props){
    const [detail,setDetail] = useState({
        title:"ST15K",
        reducer: "Free Call",
        speed:"12GB/s",
        description:"Dùng rất là sướng, nhanh mạnh khỏe, chơi game mượt, ưu đãi tốt, được nhiều idol recomend"
    });
    return(
        <div className="bg-detail">
          <Header/>
    <Container fluid="md p-4">
           <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="p-2 my-3 ">
            <Card className="product-Detailimg position-relative">
              {/* Card content */}
                  <Card.Title className="text-light text-center uppercase position-absolute product-Detailname w-100 py-1">Card Title</Card.Title>
              <Card.Body className="justify-content-center align-items-center d-flex flex-column">
       
      
     </Card.Body>
            </Card>
            </Col >
            <Col xs={12} sm={6} md={8} lg={8} className="p-3 my-3 img-block postition-relative">
                
                <p className=" uppercase text-custom-title"><a href="" className="text-decoration-none text-custom-title">{detail.title}</a></p>
                <p className="mt-3 text-success price">120000đ<span> /tháng</span></p>
                <span className="text-custom">Ưu đãi: </span> <span className="text-danger text-custom-title"> {detail.reducer}</span>
                <div className = "d-flex">
                <Col md={6} lg={6} className="text-custom my-3 ">
<span className="text-custom-title">Băng thông :</span><span className="text-custom-title">Băng thông quốc tế</span>
                </Col>
                <Col md={6} lg={6} className="text-custom my-3 ">
                <span className="text-custom-title">Tốc độ đường truyền :</span><span className="text-custom-title">{detail.speed}</span>
                </Col>
               
                </div>
                <p className="text-custom"><span className="text-custom-title">Mô tả :</span>{detail.description}</p>
                 <div className="my-3"><a href="/"><button className="bn632-hover bn28">Đăng ký</button></a></div>
                <div className="detail1"></div>
           
            </Col>
           </Row>
           
    </Container>
        </div>
    )
}
export default Detail