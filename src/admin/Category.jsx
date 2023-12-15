
import React, { useState } from "react";
import { Container, Table, Col, Row, Form } from "react-bootstrap";
import "../assets/CSS/form.css";
import "../assets/CSS/admin.css";
import Sidebar from "./adminheader";
import useCategoryContext from "../context/CategoryContext";
import DeletePopUp from "../component/DeletePopUp";
const Category = () => {
  const {
    categories,
    errors,
    getCategory,
    insertCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryContext();
  const [categoryName, setCategoryName] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);
  const handleInsertCategory = async (event) => {
    event.preventDefault();
    try {
      await insertCategory({
        categoryName,
      });
      setCategoryName(""); // Clear input after successful insertion
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
  };
  const handleUpdateCategory = async (id) => {
    try {
      await updateCategory(id, {
        categoryName: editingCategory,
      });
      setEditingCategory(null); // Clear editing state after successful update
      getCategory(); // Refresh the category list
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
  };

  const handleEditCategory = (id, name) => {
    setEditingCategory(name); // Set the category name in the editing state
  };

  const handleCancelEdit = () => {
    setEditingCategory(null); // Clear editing state if canceling edit
  };
   const handleDelete = (ID) => {
      deleteCategory(ID);
    };

  return (
    <div>
      <Sidebar />
      <Container fluid className="d-flex py-2 bg-admin">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">Danh sách loại sản phẩm</h1>
              <div className="table-responsive br-6">
                <Table striped bordered hover size="sm" className="table-custom">
                  <thead className="table-custom">
                    <tr className="table-custom">
                      <th className="table-custom">ID</th>
                      <th className="table-custom">Tên loại sản phẩm</th>
                      <th className="table-custom ">
                        <p className="text-center">Thao tác</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-custom">
          {categories.map((category) => (
            <tr key={category.id} className="table-custom">
              <td className="table-custom">{category.id}</td>
              <td className="table-custom">
                {editingCategory === category.name ? (
                  <input
                    type="text"
                    value={editingCategory}
                    onChange={(e) => setEditingCategory(e.target.value)}
                  />
                ) : (
                  category.name
                )}
              </td>
              <th className="table-custom d-flex justify-center">
                {editingCategory === category.name ? (
                  <>
                    <button
                      className="button-63 ms-2"
                      onClick={() => handleUpdateCategory(category.id)}
                    >
                      Lưu
                    </button>
                    <button
                      className="button-62 ms-2"
                      onClick={handleCancelEdit}
                    >
                      Hủy
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button-63 ms-2"
                      onClick={() => handleEditCategory(category.id, category.name)}
                    >
                      Chỉnh sửa
                    </button>
                    <DeletePopUp
                            name={item.CategoryID}
                            handle={handleDelete}
                    ></DeletePopUp>
                  </>
                )}
              </th>
            </tr>
          ))}
        </tbody>

                </Table>
              </div>
              <button className="button-62">Xuất dữ liệu</button>
            </Col>
          </Row>

          <Row>
            <Form onSubmit={handleInsertCategory}>
              <Row>
                <h1 className="my-3 title-table">Thêm loại sản phẩm</h1>
                <Col>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Tên loại sản phẩm"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}

                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar mb-4"></span>
                </Col>
                <button type="submit" className="button-63">
                  Xác nhận
                </button>
              </Row>
            </Form>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Category;
