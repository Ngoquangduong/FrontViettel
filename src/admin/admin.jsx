import Sidebar from "./adminheader";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "../assets/CSS/admin.css"
import "../assets/CSS/productDetail.css"

function Adminhome() {
  return (
    <div className="">
      <Sidebar />
      <div className="container-fluid d-flex py-2 bg-admin ">
        <Container>

          <Row>
            <h1 className="my-3 title-table">Thêm admin</h1>
            <Form>
              <Row>
                <Col>
                  <input type="text" className="w-100" placeholder="Tên" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
                <Col>
                  <input type="password" className="w-100" placeholder="Password" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
                <Col>
                  <input type="password confirm" className="w-100" placeholder="Confirm Password" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
              </Row>


              <Row>
                <Col>
                  <input type="text" className="w-100" placeholder="Phonenumber" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
                <Col>
                  <input type="email" className="w-100" placeholder="Email" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>

                </Col>
                <Col>
                  <Form.Select aria-label="Gender" className="mt-3">
                    <option>Gender</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>

                  </Form.Select>
                </Col>

              </Row>
              <Row>
              
                <Col>
                <input type="text" className="w-100 mt-4" placeholder="Địa chỉ" required />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>
                </Col>
                
              </Row>
              <button className="button-63">Xác nhận</button>
            </Form>
          </Row>

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
          <Row>
            <Col md={4} sm={12}></Col>
            <Col md={4} sm={12}></Col>
            <Col md={4} sm={12}></Col>
          </Row>


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
                      <th className="table-custom-green">Status</th>

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
                      <th className="table-custom-green">Đã xác nhận</th>
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

        </Container>
      </div>
    </div>
  );
}

export default Adminhome;
