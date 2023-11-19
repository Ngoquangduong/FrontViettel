
import { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap"
import { Form } from "react-bootstrap";
import "../assets/CSS/main.css"
import Container from "react-bootstrap/Container";
export default function RegisterForm(){
  const city_data = [
    {id:1, name:"Hà Nội",data_district:[{d_id:1,d_name:"dt1"},{d_id:2,d_name:"dt2"}]},
    {id:2, name:"Hải Phòng",data_district:[{d_id:3,d_name:"dt3"},{d_id:4,d_name:"dt4"}]}
  ]
  const [city,setCity] = useState({});
  const [district,setDistrict] = useState({});
return(
  <>
  <Container>
            <Row className="bg-confirm my-5 box-shadow-1">
                <h1 className="my-3 text-title ">Mua/đặt sản phẩm</h1>
		<Form action="/register" method="POST">
<Row>
<Col>
                    <input type="text" className="w-100" placeholder="Tên người mua" required />
                    <span className="highlight"></span>
                    <span className="bar mb-4"></span>

                  </Col>
                  <Col>
                    <input type="text" className="w-100" placeholder="Số điện thoại liên hệ" required />
                    <span className="highlight"></span>
                    <span className="bar mb-4"></span>

                  </Col></Row>
                  
                  <Row>
                    <Col>
                      <Form.Select aria-label="Default select example" className="w-100 mb-4">
                        <option>Sản phẩm</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>



                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example" className="w-100 mb-4">
                        <option>Phương thức thanh toán</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>

                  </Row>
                  <Row>

                  </Row>
                  <Row>
                    <Form.Select aria-label="Default select example" className="w-25 mb-4" onChange={(e)=>{
                        setCity(e.target.value)
                    }}>
                      <option>--Thành phố--</option>
                      
                      {city_data.map((item) => (
		
                      <option value={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className="w-25 mb-4 mx-2">
                      <option>Quận</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Col>
                      <input type="text" className="w-100" placeholder="Địa chỉ" required />
                      <span className="highlight"></span>
                      <span className="bar mb-4"></span>

                    </Col>
                  </Row>
                  <div className="text-center"><button className="bn632-hover bn28 mb-3" type="submit">Xác nhận</button></div>
                </Form>
            </Row>
      </Container>
  </>
  )
}
