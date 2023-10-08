import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import "../assets/CSS/admin.css"
import "../assets/CSS/form.css"
import Table from "react-bootstrap/esm/Table";
export default function Productmanagment(){
    return(
        <div>
            <Sidebar/>
            <div className="container-fluid">
                <Container>
                <Row className="py-3">
            <Col md={12}>
            <h1 className="my-3 title-table">Danh sách sản phẩm</h1>
              <div className="table-responsive br-6">
              
                <Table striped bordered hover size="sm" className="table-custom-rose">
                  <thead className="table-custom-rose ">
                    <tr className="table-custom-rose">
                      <th className="table-custom-rose">ID</th>
                      <th className="table-custom-rose">Tên</th>
                      
                      <th className="table-custom-rose">Giá trị gói cước/dịch vụ</th>
                      <th className="table-custom-rose"> Mô Tả</th>
                      <th className="table-custom-rose">Băng thông</th>
                      <th className="table-custom-rose">Tốc độ đường truyền</th>
                      <th className="table-custom-rose">IP tĩnh</th>
                      <th className="table-custom-rose">Số ngày dùng</th>
                      <th className="table-custom-rose">Loại sản phẩm</th>
                      <th className="table-custom-rose">Dịch vụ đi kèm</th>
                     
                      
                    </tr>
                  </thead>
                  <tbody className="table-custom-rose">
                    <tr className="table-custom-rose">
                      <td className="table-custom-rose">1</td>
                      <td className="table-custom-rose">ST5K</td>
                      <td className="table-custom-rose">5000</td>
                      <td className="table-custom-rose">Dùng tạm được</td>
                      <td className="table-custom-rose">không dùng băng thông</td>
                      <td className="table-custom-rose">flash</td>
                      <td className="table-custom-rose">ờmmmmmm</td>
                      <td className="table-custom-rose">1 ngày</td>
                      <td className="table-custom-rose">Gói cước điện thoại</td>
                      <td className="table-custom-rose">Đăng ký hộ</td>
                   
                    </tr>
                    <tr >
                      <td className="table-custom-rose">Tổng doanh thu :</td>
                      <td className="table-custom-rose total-product">1</td>
                    </tr>
                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
                
              </div>
              <button className="button-62">Xuất dữ liệu</button>
            </Col>
          </Row>
<div className="divider"></div>

          <Row>
                   <h1 className="my-3 title-table">Thêm sản phẩm</h1>
                   <Form>
                   <Row>
                    <Col>
                    <input type="text" className="w-100" placeholder="Tên sản phẩm" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   
                    <Col>
                    <input type="text" className="w-100" placeholder="Giá sản phẩm" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   </Row>
  
                   

      <Row>
                    <Col>
                    <input type="text" className="w-100" placeholder="Tốc độ đường truyền" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   
                    <Col>
                    <input type="text" className="w-100" placeholder="Băng thông" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                    <Col>
                    <input type="text" className="w-100" placeholder="IP tĩnh" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                    <Col>
                    <input type="text" className="w-100" placeholder="Số ngày dùng" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
     </Row>
     <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" className="border-textarea" rows={3} placeholder="Mô tả"/>
      </Form.Group>  
    </Form>
     
    
        <Form.Select aria-label="Default select example" className="w-25 mb-4">
      <option>Loại sản phẩm</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> 
    <Col>
                    <input type="text" className="w-100" placeholder="Tốc độ đường truyền" required/>
                        <span className="highlight"></span>
                        <span className="bar mb-4"></span>
                        
                    </Col>
                   
    

          </Row>
                </Container>
            </div>
        </div>
    );
}