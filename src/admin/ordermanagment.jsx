import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../assets/CSS/admin.css";
import Table from "react-bootstrap/esm/Table";
import useOrderContext from "../context/OrderContext";
import UnAcceptPopUp from "../component/UnAcceptPopUp";
import AcceptPopUp from "../component/AcceptPopUp";
import { useEffect, useState } from "react";
import Paginate from "../component/Pagination";

function Ordermanagment() {
  const { orders, Accept, UnAccept } = useOrderContext();
  const [orderAccept, setOrderAccept] = useState([]);
  const [orderUnAccept, setOrderUnAccept] = useState([]);

  const [currentAcceptOrder, setCurrentAcceptOrder] = useState([]);
  const [currentUnAcceptOrder, setCurrentUnAcceptOrder] = useState([]);
  // const [totalOrder, setTotalOrder] = useState(0);
  const [currentAcceptPage, setCurrentAcceptPage] = useState(1);
  const [currentUnAcceptPage, setCurrentUnAcceptPage] = useState(1);
  const [orderPerPage, setOrderPerPage] = useState(12);
  // const [totalPages, setTotalPages] = useState(0);

  const paginateAccept = (pageNumber) => {
    setCurrentAcceptPage(pageNumber);
  };
  const paginateUnAccept = (pageNumber) => {
    setCurrentUnAcceptPage(pageNumber);
  };

  const getOrderAccpet = () => {
    let filterData = orders;
    filterData = filterData.filter((item) => {
      return item.Accept == 1;
    });
    setOrderAccept(filterData);
  };
  const getOrderUnAccpet = () => {
    let filterData = orders;
    filterData = filterData.filter((item) => {
      return item.Accept == 0;
    });
    setOrderUnAccept(filterData);
  };

  const handleAccept = (id) => {
    Accept(id);
  };
  const handleUnAccept = (id) => {
    UnAccept(id);
  };
  useEffect(() => {
    getOrderAccpet();
    getOrderUnAccpet();
  }, [orders.length === 0, orders]);
  useEffect(() => {
    let newIndexOfLastProduct = currentAcceptPage * orderPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - orderPerPage;

    setCurrentAcceptOrder(
      orderAccept.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
    );
  }, [orderAccept, currentAcceptPage]);
  useEffect(() => {
    let newIndexOfLastProduct = currentUnAcceptPage * orderPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - orderPerPage;
    // console.log(orderUnAccept);
    setCurrentUnAcceptOrder(
      orderUnAccept.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
    );
  }, [orderUnAccept, currentUnAcceptPage]);
  return (
    <div>
      <Sidebar />
      <div className="container-fluid ">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">
                Danh sách đặt hàng Chưa Xác Nhận
              </h1>
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
                      <th className="table-custom-rose">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom-green">
                    {currentUnAcceptOrder.map((item) => (
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
                        <td className="table-custom-green">
                          <AcceptPopUp
                            name={item.OrderID}
                            handle={handleAccept}
                          ></AcceptPopUp>
                        </td>
                        <td className="table-custom-green d-flex ">
                          <a href="#">
                            <button className="button-63">Xóa</button>
                          </a>
                          <a href="#">
                            <button className="button-63">Chỉnh sửa</button>
                          </a>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td className="table-custom-green ">Tổng doanh thu :</td>
                      <td className="table-custom-green text-total-money">
                        5000
                      </td>
                    </tr>
                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
                <Paginate
                  dataPerPage={orderPerPage}
                  totalData={orderUnAccept.length}
                  paginate={paginateUnAccept}
                ></Paginate>
              </div>
              <button className="button-62">Xuất dữ liệu</button>
            </Col>
          </Row>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">
                Danh sách đặt hàng Đã Xác Nhận
              </h1>
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
                      <th className="table-custom-rose">Thao tác</th>
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
                        <td className="table-custom-green">{item.Accept}</td>
                        <td className="table-custom-green d-flex ">
                          <a href="#">
                            <button className="button-63">Xóa</button>
                          </a>
                          <a href="#">
                            <button className="button-63">Chỉnh sửa</button>
                          </a>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="table-custom-green ">Tổng doanh thu :</td>
                      <td className="table-custom-green text-total-money">
                        5000
                      </td>
                    </tr>
                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
                <Paginate
                  dataPerPage={orderPerPage}
                  totalData={orderAccept.length}
                  paginate={paginateAccept}
                ></Paginate>
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
