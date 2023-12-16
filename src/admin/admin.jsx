import { useState, useEffect } from "react";
import Sidebar from "./adminheader";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../assets/CSS/admin.css";
import useProductContext from "../context/ProductContext";
import useCategoryContext from "../context/CategoryContext";
import useAdminAuthContext from "../context/AdminAuthContext";
import useOrderContext from "../context/OrderContext";

function Adminhome() {
  const { admins, getAdmins } = useAdminAuthContext();
  const { products } = useProductContext();
  const { categories } = useCategoryContext();
  const { orders } = useOrderContext();
  const [orderAccept, setOrderAccept] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentAcceptOrder, setCurrentAcceptOrder] = useState([]);
  const [currentAdmins, setCurrentAdmins] = useState([]);
  // const [totalOrder, setTotalOrder] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(12);
  // const [totalPages, setTotalPages] = useState(0);

  const getOrderAccpet = () => {
    let filterData = orders;
    filterData = filterData.filter((item) => {
      return item.Accept == 1;
    });
    filterData.sort((a, b) => parseInt(b.OrderID) - parseInt(a.OrderID));
    setOrderAccept(filterData);
  };

  useEffect(() => {
    getOrderAccpet();

    let newIndexOfLast = currentPage * PerPage;
    let newIndexOfFirst = newIndexOfLast - PerPage;

    setCurrentProduct(products.slice(newIndexOfFirst, newIndexOfLast));
    setCurrentAcceptOrder(orderAccept.slice(newIndexOfFirst, newIndexOfLast));
    setCurrentAdmins(admins.slice(newIndexOfFirst, newIndexOfLast));
  }, [products, admins, orders]);
  useEffect(() => {
    getAdmins();
  }, []);
  return (
    <div className="">
      <Sidebar />

      <div className="container-fluid d-flex py-2 bg-admin ">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">
                Danh sách tài khoản người dùng
              </h1>
              <div className="table-responsive br-6">
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom "
                >
                  <thead className="table-custom ">
                    <tr className="table-custom">
                      <th className="table-custom">ID</th>
                      <th className="table-custom">Tên</th>
                      <th className="table-custom">Số điện thoại</th>
                      <th className="table-custom">Email</th>
                      <th className="table-custom">Giới tính</th>
                      <th className="table-custom">Địa chỉ</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom">
                    {currentAdmins.map((item) => (
                      <tr className="table-custom" key={item.id}>
                        <td className="table-custom">{item.id}</td>
                        <td className="table-custom">{item.name}</td>
                        <td className="table-custom">{item.Phone}</td>
                        <td className="table-custom">{item.email}</td>
                        <td className="table-custom">
                          {item.Gender == "m" ? "Nam" : "Nữ"}
                        </td>
                        <td className="table-custom">{item.Address}</td>
                      </tr>
                    ))}

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
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom-green"
                >
                  <thead className="table-custom-green ">
                    <tr className="table-custom-green">
                      <th className="table-custom-green">ID</th>
                      <th className="table-custom-green">Tên</th>
                      <th className="table-custom-green">Ngày Đăng Ký</th>
                      <th className="table-custom-green ">
                        Gói cước/dịch vụ đặt
                      </th>
                      <th className="table-custom-green ">
                        Giá trị gói cước/dịch vụ
                      </th>
                      <th className="table-custom-green">Số điện thoại</th>
                      <th className="table-custom-green">Địa chỉ</th>
                      <th className="table-custom-green">Thành phố</th>
                      <th className="table-custom-green">Quận</th>
                      <th className="table-custom-green">
                        Phương Thức Thanh Toán
                      </th>

                      <th className="table-custom-green">Dịch Vụ Đi Kèm</th>
                      <th className="table-custom-green">Trạng thái đơn</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom-green">
                    {currentAcceptOrder.map((item) => (
                      <tr className="table-custom-green" key={item.OrderID}>
                        <td className="table-custom-green">{item.OrderID}</td>
                        <td className="table-custom-green">{item.name}</td>
                        <td className="table-custom-green">{item.DateStart}</td>
                        <td className="table-custom-green">{item.ProductID}</td>
                        <td className="table-custom-green">
                          {item.product.Price}
                        </td>
                        <td className="table-custom-green">{item.Phone}</td>
                        <td className="table-custom-green">{item.Address}</td>
                        <td className="table-custom-green">
                          {item.city.CityName}
                        </td>
                        <td className="table-custom-green">
                          {item.district.DistrictName}
                        </td>
                        <td className="table-custom-green">
                          {item.payment.PaymentName}
                        </td>
                        <td className="table-custom-green">
                          {item.service.ServiceName}
                        </td>
                        <td className="table-custom-green">Đã Xác Nhận</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td className="table-custom-green ">Tổng doanh thu :</td>
                      <td className="table-custom-green text-total-money">
                        5000
                      </td>
                    </tr> */}
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
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom-rose"
                >
                  <thead className="table-custom-rose ">
                    <tr className="table-custom-rose">
                      <th className="table-custom-rose">ID</th>
                      <th className="table-custom-rose">
                        Giá trị gói cước/dịch vụ
                      </th>
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
                    {currentProduct.map((item) => (
                      <tr className="table-custom-rose" key={item.ProductID}>
                        <td className="table-custom-rose">{item.ProductID}</td>
                        <td className="table-custom-rose">
                          {parseInt(item.Price)}
                        </td>
                        <td className="table-custom-rose">
                          {item.Description}
                        </td>
                        <td className="table-custom-rose">{item.Bandwidth}</td>
                        <td className="table-custom-rose">{item.Speed}</td>
                        <td className="table-custom-rose">{item.IPstatic}</td>
                        <td className="table-custom-rose">
                          {item.UseDay} ngày
                        </td>
                        <td className="table-custom-rose">
                          {item.category.CategoryName}
                        </td>
                        <td className="table-custom-rose">
                          {item.service.ServiceName}
                        </td>
                      </tr>
                    ))}

                    {/* <tr>

                      <td className="table-custom-rose">Tổng doanh thu :</td>
                      <td className="table-custom-rose total-product">1</td>
                    </tr> */}
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
