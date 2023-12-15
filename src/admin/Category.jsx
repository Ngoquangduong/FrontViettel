import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import "../assets/CSS/form.css";
import "../assets/CSS/admin.css";
import Sidebar from "./adminheader";
import { useState } from "react";
import useCategoryContext from "../context/CategoryContext";
const Category = () => {
  const HandleinsertCategory = () => {};

  return (
    <div>
      <Sidebar />
      <Container fluid className=" d-flex py-2 bg-admin">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">Danh sách loại sản phẩm</h1>
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
                      <th className="table-custom">Tên loại sản phẩm</th>
                      <th className="table-custom ">
                        <p className="text-center">Thao tác</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-custom">
                    <tr className="table-custom">
                      <td className="table-custom">1</td>
                      <td className="table-custom">Ngô Quang Dương</td>
                      <th className="table-custom d-flex justify-center">
                        <button className="button-63  ms-2">Chỉnh sửa</button>
                        <button className="button-62  ms-2">Xóa</button>
                      </th>
                    </tr>

                    {/* Thêm dữ liệu cho các dòng khác nếu cần */}
                  </tbody>
                </Table>
              </div>
              <button className="button-62">Xuất dữ liệu</button>
            </Col>
          </Row>

          <Row>
            <Form onSubmit={HandleinsertCategory}>
              <Row>
                <h1 className="my-3 title-table">Thêm loại sản phẩm</h1>
                <Col>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Tên loại sản phẩm"
                    // value={categories}
                    // onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>
                </Col>
               
              </Row>
              <button type="submit" className="button-63">
                  Xác nhận
                </button>
            </Form>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Category;
