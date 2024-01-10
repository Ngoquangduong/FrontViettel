import React, { useState, useEffect } from "react";
import { Container, Table, Col, Row, Form } from "react-bootstrap";
import "../assets/CSS/form.css";
import "../assets/CSS/admin.css";
import Sidebar from "./adminheader";
import useCategoryContext from "../context/CategoryContext";
import DeletePopUp from "../component/DeletePopUp";
import Paginate from "../component/Pagination";
import { CSVLink, CSVDownload } from "react-csv";
import CategoryUpdate from "../component/CategoryUpdate";
import Pagination from "../component/Pagination2";
import { values } from "lodash";

const Category = () => {
  const {
    categories,
    errors,
    category,
    getCategoryDetail,
    setCategoryDetail,
    getCategory,
    insertCategory,
    updateCategory,
    deleteCategory,
    exportCategory,
    getExportCategory,
  } = useCategoryContext();

  const [categoryName, setCategoryName] = useState("");
  const [sort, setSort] = useState(1);

  useEffect(() => {
    getExportCategory();
  }, [categories]);

  const handleInsertCategory = async (event) => {
    event.preventDefault();
    try {
      await insertCategory({
        CategoryName: categoryName,
        sort: sort,
      });
      setCategoryName("");
      setSort(1); // Clear input after successful insertion
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
  };

  const handleDelete = (ID) => {
    deleteCategory(ID);
  };

  const [currentCategory, setCurrentCategory] = useState([]);
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1);
  const [categoryPerPage, setCategoryPerPage] = useState(12);

  let totalPage = Math.ceil(categories.length / categoryPerPage);
  // const paginate = (pageNumber) => {
  //   setCurrentCategoryPage(pageNumber);
  // };
  const handlePageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      setCurrentCategoryPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setCurrentCategoryPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setCurrentCategoryPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setCurrentCategoryPage(totalPage);
    } else {
      setCurrentCategoryPage(value);
    }
  };

  useEffect(() => {
    let newIndexOfLastCategory = currentCategoryPage * categoryPerPage;
    let newIndexOfFirstCategory = newIndexOfLastCategory - categoryPerPage;

    setCurrentCategory(
      categories.slice(newIndexOfFirstCategory, newIndexOfLastCategory)
    );
  }, [categories, currentCategoryPage]);
  return (
    <div>
      <Sidebar />
      <Container fluid className="d-flex py-2 bg-admin">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">Danh sách loại sản phẩm</h1>
              <div className="table-responsive br-6">
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom"
                >
                  <thead className="table-custom">
                    <tr className="table-custom">
                      <th className="table-custom">ID</th>
                      <th className="table-custom">Thứ tự ưu tiên</th>
                      <th className="table-custom">Tên loại sản phẩm</th>
                      <th className="table-custom ">
                        <p className="text-center">Thao tác</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-custom">
                    {currentCategory.map((item) => (
                      <tr key={item.CategoryID} className="table-custom">
                        <>
                          <td className="table-custom-rose">
                            {item.CategoryID}
                          </td>
                          <td className="table-custom-rose">{item.sort}</td>
                          <td className="table-custom-rose">
                            {item.CategoryName}
                          </td>
                          <td className="table-custom-rose d-flex ">
                            <CategoryUpdate Category={item}></CategoryUpdate>
                            <DeletePopUp
                              name={item.CategoryID}
                              handle={handleDelete}
                            ></DeletePopUp>
                          </td>
                        </>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {/* <Paginate
                  dataPerPage={categoryPerPage}
                  totalData={categories.length}
                  paginate={paginate}
                ></Paginate> */}
                <Pagination
                  totalPage={totalPage}
                  page={currentCategoryPage}
                  limit={categoryPerPage}
                  siblings={1}
                  onPageChange={handlePageChange}
                ></Pagination>
              </div>
              <CSVLink
                data={exportCategory}
                filename="categories.csv"
                className="button-62"
              >
                {"Xuất file Excel"}
              </CSVLink>
            </Col>
          </Row>

          <Row>
            <Form onSubmit={handleInsertCategory}>
              <Row>
                <h1 className="my-3 title-table">Thêm loại sản phẩm</h1>
                <Col>
                  <label htmlFor="">Tên loại sản phẩm</label>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Tên loại sản phẩm"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.CategoryName && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.CategoryName[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <label htmlFor="">Thứ tự ưu tiên</label>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Tên loại sản phẩm"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.sort && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.sort[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
              </Row>
              <button type="submit" className="button-63 mb-5">
                Xác nhận
              </button>
            </Form>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Category;
