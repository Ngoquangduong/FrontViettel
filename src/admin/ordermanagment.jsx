import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../assets/CSS/admin.css"
import Table from "react-bootstrap/esm/Table";


function Ordermanagment (){

    return(
        <div>
            <Sidebar/>
            <div className="container-fluid ">
                <Container>
                <Row className="py-3">
            <Col md={12}>
            <h1 className="my-3 title-table">Danh sách đặt hàng</h1>
              <div className="table-responsive br-6">
              
                <Table striped bordered hover size="sm" className="table-custom-green">
                  <thead className="table-custom-green ">
                    <tr className="table-custom-green">
                      <th className="table-custom-green">ID</th>
                      <th className="table-custom-green">Tên</th>
                      <th className="table-custom-green ">Gói cước/dịch vụ đặt</th>
                      <th className="table-custom-green ">Giá trị gói cước/dịch vụ</th>
                      <th className="table-custom-green">Số điện thoại</th>
                      <th className="table-custom-green">Địa chỉ</th>
                      <th className="table-custom-green">Thành phố</th>
                      <th className="table-custom-green">Quận</th>
                      <th className="table-custom-green">Ngày sinh</th>
                      <th className="table-custom-green">Trạng thái đơn</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom-green">
                    <tr className="table-custom-green">
                      <td className="table-custom-green">1</td>
                      <td className="table-custom-green">Ngô Quang Dương</td>
                      <td className="table-custom-green">ST5K</td>
                      <td className="table-custom-green">5000</td>
                      <td className="table-custom-green">0868284726</td>
                      <td className="table-custom-green">Chỗ nào đó rất đẹp và biu ti phun ở Hà Nội</td>
                      <td className="table-custom-green">Hà Nội</td>
                      <td className="table-custom-green">Hoàng Mike</td>
                      <td className="table-custom-green">31/01/2003</td>
                      <td className="table-custom-green">Đang chờ xác nhận</td>
                    </tr>
                    <tr >
                      <td className="table-custom-green ">Tổng doanh thu :</td>
                      <td className="table-custom-green text-total-money">5000</td>
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
export default Ordermanagment;