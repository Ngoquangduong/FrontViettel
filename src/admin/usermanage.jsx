import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../assets/CSS/admin.css";
import Table from "react-bootstrap/esm/Table";
import useAdminAuthContext from "../context/AdminAuthContext";
import DeletePopUp from "../component/DeletePopUp";
import { useEffect, useState } from "react";
import RegisterAdmin from "./RegisterAdmin";
import Paginate from "../component/Pagination";

function Usermanagement() {
  const { admins, getAdmins, deleteAdmin } = useAdminAuthContext();
  const [currentAdmins, setCurrentAdmins] = useState([]);
  // const [totalOrder, setTotalOrder] = useState(0);
  const [currentAdminPage, setCurrentAdminPage] = useState(1);
  const [adminPerPage, setAdminPerPage] = useState(12);
  // const [totalPages, setTotalPages] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentAdminPage(pageNumber);
  };

  useEffect(() => {
    let newIndexOfLastProduct = currentAdminPage * adminPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - adminPerPage;

    setCurrentAdmins(
      admins.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
    );
  }, [admins, currentAdminPage]);

  const handleDelete = (ID) => {
    deleteAdmin(ID);
    getAdmins();
  };
  useEffect(() => {
    getAdmins();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="container-fluid">
        <Container>
          <RegisterAdmin/>
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
                      <th className="table-custom">Tùy Chỉnh</th>
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
                        <td className="table-custom d-flex">
                          <DeletePopUp 
                            name={item.id}
                            handle={handleDelete}
                          ></DeletePopUp>
                          <a href="#">
                            <button className="button-63">Chỉnh sửa</button>
                          </a>
                        </td>
                      </tr>
                    ))}

                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
                <Paginate
                  dataPerPage={adminPerPage}
                  totalData={admins.length}
                  paginate={paginate}
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
export default Usermanagement;
