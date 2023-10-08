import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../assets/CSS/admin.css"
import Table from "react-bootstrap/esm/Table";

function Usermanagement (){

    return(
        <div>
            <Sidebar/>
            <div className="container-fluid">
              <Container>
              <Row className="py-3">
            <Col md={12}>
            <h1 className="my-3 title-table">Danh sách tài khoản người dùng</h1>
              <div className="table-responsive br-6">
                
                <Table striped bordered hover size="sm" className="table-custom ">
                  <thead className="table-custom ">
                    <tr className="table-custom">
                      <th className="table-custom">ID</th>
                      <th className="table-custom">Tên</th>
                      <th className="table-custom">Password</th>
                      <th className="table-custom">Số điện thoại</th>
                      <th className="table-custom">Địa chỉ</th>
                      <th className="table-custom">Thành phố</th>
                      <th className="table-custom">Quận</th>
                      <th className="table-custom">Ngày sinh</th>
                      
                    </tr>
                  </thead>
                  <tbody className="table-custom">
                    <tr className="table-custom">
                      <td className="table-custom">1</td>
                      <td className="table-custom">Ngô Quang Dương</td>
                      <td className="table-custom">Otto</td>
                      <td className="table-custom">0868284726</td>
                      <td className="table-custom">Chỗ nào đó rất đẹp và biu ti phun ở Hà Nội</td>
                      <td className="table-custom">Hà Nội</td>
                      <td className="table-custom">Hoàng Mike</td>
                      <td className="table-custom">31/01/2003</td>
                    </tr>
                    <tr >
                      <td className="table-custom ">Tổng số các tài khoản :</td>
                      <td className="table-custom text-total">100</td>
                    </tr>
                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
                
              </div>
              <button className="button-62">Xuất dữ liệu</button>
            </Col>
          </Row>
              </Container>
            </div>
        </div>
    );
}
export default Usermanagement