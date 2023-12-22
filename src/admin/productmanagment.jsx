import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import "../assets/CSS/admin.css";
import "../assets/CSS/form.css";
import Table from "react-bootstrap/esm/Table";
import useProductContext from "../context/ProductContext";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useCategoryContext from "../context/CategoryContext";
import SelectForm from "../component/SelectForm";
import useServiceContext from "../context/ServiceContext";
import DeletePopUp from "../component/DeletePopUp";
import Paginate from "../component/Pagination";
// import {  } from "react-csv";
import axios from "../api/axios";
// import { data } from "autoprefixer";
import { CSVLink, CSVDownload } from "react-csv";

function Productmanagment() {
  const {
    products,
    product,
    errors,
    getProductDetail,
    insertProduct,
    deleteProduct,
    setProductDetail,
    updateProduct,
    productExport,
    getProductExport,
  } = useProductContext();
  const [show, setShow] = useState(false);
  const { categories } = useCategoryContext();
  const { services } = useServiceContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryData, setCategoryData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  // ----- insertProduct-------------------------------
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedService, setSelectedService] = useState(0);
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState(0);
  const [UseDay, setUseDay] = useState(0);
  const [Bandwidth, setBandwidth] = useState("");
  const [Speed, setSpeed] = useState("");
  const [Gift, setGift] = useState("");
  const [Description, setDescription] = useState("");
  const [IPstatic, setIPstatic] = useState("");
  const [NTPrice, setNTPrice] = useState(0);
  const [productSort, setProductSort] = useState(1);

  //edit
  const [selectedEditCategory, setSelectedEditCategory] = useState(0);
  const [selectedEditService, setSelectedEditService] = useState(0);
  const [updateActive, setUpdateActive] = useState(false);
  const [editPrice, setEditPrice] = useState(0);
  const [editDescription, setEditDescription] = useState("");
  const [editGift, setEditGift] = useState("");
  const [editProductName, setEditProductName] = useState("");
  const [editSpeed, setEditSpeed] = useState("");
  const [editBandwidth, setEditBandwidth] = useState("");
  const [editIPstatic, setEditIPstatic] = useState("");
  const [editUseDay, setEditUseDay] = useState(0);
  const [editNTPrice, setEditNTPrice] = useState(0);
  const [editProductSort, setEditProductSort] = useState(1);
  // ---------------Paginate--------------------------

  //Export

  const [currentProduct, setCurrentProduct] = useState([]);
  // const [totalOrder, setTotalOrder] = useState(0);
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  // const [totalPages, setTotalPages] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentProductPage(pageNumber);
  };

  useEffect(() => {
    let newIndexOfLastProduct = currentProductPage * productPerPage;
    let newIndexOfFirstProduct = newIndexOfLastProduct - productPerPage;

    setCurrentProduct(
      products.slice(newIndexOfFirstProduct, newIndexOfLastProduct)
    );
  }, [products, currentProductPage]);
  //---------------------------------------------------------

  const handleCategoryData = (data) => {
    let temp = data.map((item) => ({
      ID: item.CategoryID,
      Name: item.CategoryName,
    }));
    // console.log(temp);
    setCategoryData(temp);
  };
  const handleServiceData = (data) => {
    let temp = data.map((item) => ({
      ID: item.ServiceID,
      Name: item.ServiceName,
    }));
    // console.log(temp);
    setServiceData(temp);
  };
  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(parseInt(selectedValue));
  };
  const handleServiceChange = (selectedValue) => {
    setSelectedService(parseInt(selectedValue));
  };
  const handleInsertProduct = async (event) => {
    event.preventDefault();
    // console.log(Description);

    insertProduct({
      ProductName: ProductName,
      Speed: Speed,
      sort: productSort,
      NTPrice: NTPrice,
      Bandwidth: Bandwidth,
      Price: Price,
      Gift: Gift,
      Description: Description,
      IPstatic: IPstatic,
      UseDay: UseDay,
      CategoryID: selectedCategory,
      ServiceID: selectedService,
    });
    setProductName("");
    setPrice(0);
    setNTPrice(0);
    setProductSort(1);
    // setSelectedCategory(0);
    // setSelectedService(0);
    setUseDay(0);
    setSpeed("");
    setGift("");
    setDescription("");
    setBandwidth("");
    setIPstatic("");
  };

  const handleEditCategoryChange = (selectedValue) => {
    setSelectedEditCategory(parseInt(selectedValue));
  };
  const handleEditServiceChange = (selectedValue) => {
    setSelectedEditService(parseInt(selectedValue));
  };
  const handleUpdateProduct = async (id) => {
    try {
      await updateProduct(id, {
        ProductName: editProductName,
        Speed: editSpeed,
        NTPrice: editNTPrice,
        sort: editProductSort,
        Bandwidth: editBandwidth,
        Price: editPrice,
        Gift: editGift,
        Description: editDescription,
        IPstatic: editIPstatic,
        UseDay: editUseDay,
        CategoryID: selectedEditCategory,
        ServiceID: selectedEditService,
      });
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }

    setUpdateActive(false);
    setProductDetail({});
    setEditNTPrice(0);
    setEditProductSort(1);
    setEditProductName("");
    setEditPrice("");
    setEditDescription("");
    setEditBandwidth("");
    setEditSpeed("");
    setEditIPstatic("");
    setEditGift("");
    setSelectedEditCategory(0);
    setSelectedEditService(0);
  };

  const handleEditProduct = async (
    id,
    ProductName,
    Price,
    NTPrice,
    sort,
    Description,
    Bandwidth,
    Speed,
    IPstatic,
    Gift,
    UseDay,
    CategoryID,
    ServiceID
  ) => {
    setUpdateActive(true);
    setEditProductName(ProductName);
    setEditPrice(Price);
    setEditNTPrice(NTPrice);
    setProductSort(sort);
    setEditDescription(Description);
    setEditBandwidth(Bandwidth);
    setEditSpeed(Speed);
    setEditIPstatic(IPstatic);
    setEditGift(Gift);
    setEditUseDay(UseDay);
    setSelectedEditCategory(parseInt(CategoryID));
    setSelectedEditService(parseInt(ServiceID));
    await getProductDetail(id);
    // Set the category name in the editing state
  };

  const handleCancelEdit = () => {
    setUpdateActive(false);
    setEditProductName("");
    setEditPrice(0);
    setDescription("");
    setProductDetail({});
    setEditBandwidth("");
    setEditSpeed("");
    setEditIPstatic("");
    setEditGift("");
    setEditUseDay(0);
    setSelectedEditCategory(0);
    setSelectedEditService(0);
  };

  const handleDelete = (ID) => {
    deleteProduct(ID);
  };
  useEffect(() => {
    getProductExport();
  }, [products]);

  useEffect(() => {
    handleCategoryData(categories);
    handleServiceData(services);
  }, [categories, services]);
  // console.log(categories);
  return (
    <div>
      <Sidebar />
      <div className="container-fluid bg-slate-100">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">Danh sách sản phẩm</h1>
              <div className="table-responsive br-6">
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom-money"
                >
                  <thead className="table-custom-money ">
                    <tr className="table-custom-money">
                      <th className="table-custom-money">ID</th>
                      <th className="table-custom-money">Độ ưu tiên</th>
                      <th className="table-custom-money">Tên Sản Phẩm</th>
                      <th className="table-custom-money">
                        Giá nội thành gói cước
                      </th>
                      <th className="table-custom-money">
                        Giá ngoại thành gói cước
                      </th>
                      <th className="table-custom-money"> Mô Tả</th>
                      <th className="table-custom-money">Băng thông</th>
                      <th className="table-custom-money">
                        Tốc độ đường truyền
                      </th>
                      <th className="table-custom-money">IP tĩnh</th>
                      <th className="table-custom-money">Số ngày dùng</th>
                      <th className="table-custom-money">Loại sản phẩm</th>
                      <th className="table-custom-money">Dịch vụ đi kèm</th>
                      <th className="table-custom-money">Qua</th>
                      <th className="table-custom-money">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom-money">
                    {currentProduct.map((item) => (
                      <tr className="table-custom-money" key={item.ProductID}>
                        {updateActive === true &&
                        product.ProductID === item.ProductID ? (
                          <>
                            <td className="table-custom-money">
                              {product.ProductID}
                            </td>
                            <td className="table-custom-money">
                              <input
                                type="number"
                                value={editProductSort}
                                style={{ color: "#000" }}
                                onChange={(e) =>
                                  setEditProductSort(e.target.value)
                                }
                              />
                            </td>
                            <td className="table-custom-money">
                              <input
                                type="text"
                                value={editProductName}
                                style={{ color: "#000" }}
                                onChange={(e) =>
                                  setEditProductName(e.target.value)
                                }
                              />
                            </td>

                            <td className="table-custom-money">
                              <input
                                type="number"
                                value={editPrice}
                                style={{ color: "#000" }}
                                onChange={(e) => setEditPrice(e.target.value)}
                              />
                            </td>
                            <td className="table-custom-money">
                              <input
                                type="number"
                                value={editNTPrice}
                                style={{ color: "#000" }}
                                onChange={(e) => setEditNTPrice(e.target.value)}
                              />
                            </td>
                            <td className="table-custom-money">
                              <input
                                type="text"
                                value={editDescription}
                                style={{ color: "#000" }}
                                onChange={(e) =>
                                  setEditDescription(e.target.value)
                                }
                              />
                            </td>
                            <td className="table-custom-money">
                              {/* {item.Bandwidth} */}
                              <input
                                type="text"
                                value={editBandwidth}
                                style={{ color: "#000" }}
                                onChange={(e) =>
                                  setEditBandwidth(e.target.value)
                                }
                              />
                            </td>
                            <td className="table-custom-money">
                              {/* {item.Speed} */}
                              <input
                                type="text"
                                value={editSpeed}
                                style={{ color: "#000" }}
                                onChange={(e) => setEditSpeed(e.target.value)}
                              />
                            </td>
                            <td className="table-custom-money">
                              {/* {item.IPstatic} */}
                              <input
                                type="text"
                                value={editIPstatic}
                                style={{ color: "#000" }}
                                onChange={(e) =>
                                  setEditIPstatic(e.target.value)
                                }
                              />
                            </td>
                            <td className="table-custom-money">
                              <input
                                type="number"
                                value={editUseDay}
                                style={{ color: "#000" }}
                                onChange={(e) => setEditUseDay(e.target.value)}
                              />{" "}
                              ngày
                            </td>
                            <td className="table-custom-money">
                              <SelectForm
                                name={"Loại Sản Phẩm"}
                                item={categoryData}
                                onCategoryChange={handleEditCategoryChange}
                              />
                            </td>
                            <td className="table-custom-money">
                              <SelectForm
                                name={"Loại Hỗ Trợ"}
                                item={serviceData}
                                onCategoryChange={handleEditServiceChange}
                              />
                            </td>
                            <td className="table-custom-money">
                              {/* {item.Gift} */}
                              <input
                                type="text"
                                value={editGift}
                                style={{ color: "#000" }}
                                onChange={(e) => setEditGift(e.target.value)}
                              />
                            </td>
                            <td className="table-custom-money d-flex ">
                              <>
                                <button
                                  className="button-63 ms-2"
                                  onClick={() =>
                                    handleUpdateProduct(item.ProductID)
                                  }
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
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="table-custom-money">
                              {item.ProductID}
                            </td>
                            <td className="table-custom-money">{item.sort}</td>
                            <td className="table-custom-money">
                              {item.ProductName}
                            </td>
                            <td className="table-custom-money">
                              {parseInt(item.Price)}
                            </td>
                            <td className="table-custom-money">
                              {parseInt(item.NTPrice)}
                            </td>
                            <td className="table-custom-money">
                              {item.Description}
                            </td>
                            <td className="table-custom-money">
                              {item.Bandwidth}
                            </td>
                            <td className="table-custom-money">{item.Speed}</td>
                            <td className="table-custom-money">
                              {item.IPstatic}
                            </td>
                            <td className="table-custom-money">
                              {item.UseDay} ngày
                            </td>
                            <td className="table-custom-money">
                              {item.category.CategoryName}
                            </td>
                            <td className="table-custom-money">
                              {item.service.ServiceName}
                            </td>
                            <td className="table-custom-money">{item.Gift}</td>
                            <td className="table-custom-money d-flex ">
                              <DeletePopUp
                                name={item.ProductID}
                                handle={handleDelete}
                              ></DeletePopUp>
                              <a href="#">
                                <button
                                  className="button-63"
                                  onClick={() =>
                                    handleEditProduct(
                                      item.ProductID,
                                      item.ProductName,
                                      item.Price,
                                      item.NTPrice,
                                      item.sort,
                                      item.Description,
                                      item.Bandwidth,
                                      item.Speed,
                                      item.IPstatic,
                                      item.Gift,
                                      item.UseDay,
                                      item.CategoryID,
                                      item.ServiceID
                                    )
                                  }
                                >
                                  Chỉnh sửa
                                </button>
                              </a>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Paginate
                  dataPerPage={productPerPage}
                  totalData={products.length}
                  paginate={paginate}
                ></Paginate>
              </div>
              <CSVLink
                data={productExport}
                filename="products.csv"
                className="button-62"
              >
                {"Xuất file Excel"}
              </CSVLink>
              {/* <button className="button-63 mx-3">Nhập dữ liệu</button>

              <Button className="btn-filter-3" onClick={handleShow}>
                Cập nhật sản phẩm
              </Button> */}
              <Modal
                className="mt-5"
                show={show}
                onHide={handleClose}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    {" "}
                    <h1 className="my-3 title-table">Chỉnh sửa sản phẩm</h1>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3">
                  <Row>
                    <Form>
                      <Row>
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Tên sản phẩm"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>

                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Giá sản phẩm"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Tốc độ đường truyền"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>

                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Băng thông"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="IP tĩnh"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Số ngày dùng"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                      </Row>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          className="border-textarea"
                          rows={3}
                          placeholder="Mô tả"
                        />
                      </Form.Group>

                      <Row>
                        <SelectForm
                          name={"Loại Sản Phẩm"}
                          item={categoryData}
                          onCategoryChange={handleCategoryChange}
                        />
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Tốc độ đường truyền"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Dịch vụ đi kèm"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar mb-4"></span>
                        </Col>
                      </Row>
                      <div className="">
                        <button
                          className="btn-filter-3 p-3"
                          type="submit"
                          onClick={handleClose}
                        >
                          Xác nhận
                        </button>
                      </div>
                    </Form>
                  </Row>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          {/* ------------------------------------------------------------------------form------------------------------------------          */}
          <div className="divider"></div>

          <Row>
            <h1 className="my-3 title-table">Thêm sản phẩm</h1>
            <Form onSubmit={handleInsertProduct}>
              <Row>
                <Col>
                  <label htmlFor="">Tên Sản Phẩm</label>
                  <input
                    type="text"
                    className="w-100"
                    value={ProductName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Tên sản phẩm"
                    required
                  />
                  <span className="highlight"></span>
                  {errors.ProductID && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.ProductID[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>

                <Col>
                  <label htmlFor="">Giá Nội Thành Sản Phẩm</label>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Giá sản phẩm"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Price && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Price[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <label htmlFor="">Giá Ngoại Thành Sản Phẩm</label>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Giá sản phẩm"
                    value={NTPrice}
                    onChange={(e) => setNTPrice(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Price && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Price[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <label htmlFor="">Độ Ưu tiên sản phẩm</label>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Giá sản phẩm"
                    value={productSort}
                    onChange={(e) => setProductSort(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Price && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Price[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="">Tốc Độ Đường</label>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Tốc độ đường truyền"
                    value={Speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Speed && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Speed[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>

                <Col>
                  <label htmlFor="">Băng Thông</label>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Băng thông"
                    value={Bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Bandwidth && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Bandwidth[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <label htmlFor="">IP tĩnh</label>
                  <input
                    type="text"
                    className="w-100"
                    placeholder="IP tĩnh"
                    value={IPstatic}
                    onChange={(e) => setIPstatic(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.IPstatic && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.IPstatic[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <label htmlFor="">Ngày Dùng</label>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Số ngày dùng"
                    value={UseDay}
                    onChange={(e) => setUseDay(parseInt(e.target.value))}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.UseDay && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.UseDay[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
              </Row>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <label htmlFor="">Mô Tả</label>
                <Form.Control
                  as="textarea"
                  className="border-textarea"
                  rows={3}
                  placeholder="Mô tả"
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              {errors.Description && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.Description[0]}
                </span>
              )}
              <span className="highlight"></span>

              <Row>
                <Col className="w-25 mb-4">
                  <SelectForm
                    name={"Loại Sản Phẩm"}
                    item={categoryData}
                    onCategoryChange={handleCategoryChange}
                  />
                  <span className="highlight"></span>
                  {errors.CategoryID && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.CategoryID[0]}
                    </span>
                  )}
                </Col>

                <Col className="w-25 mb-4">
                  <SelectForm
                    name={"Loại Hỗ Trợ"}
                    item={serviceData}
                    onCategoryChange={handleServiceChange}
                  />
                  <span className="highlight"></span>
                  {errors.ServiceID && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.ServiceID[0]}
                    </span>
                  )}
                </Col>
              </Row>
              <Row>
                {/* <Form.Select
                  
                 
                >
                  <option>Loại sản phẩm</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select> */}

                <Col>
                  <label htmlFor="">Quà Tặng</label>
                  <input
                    type="text"
                    className="w-100"
                    value={Gift}
                    onChange={(e) => setGift(e.target.value)}
                    placeholder="Quà tặng"
                    required
                  />
                  <span className="highlight"></span>
                  {errors.Gift && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.Gift[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
              </Row>
              <div className="">
                <button className="bn632-hover bn28 mb-3" type="submit">
                  Xác nhận
                </button>
              </div>
            </Form>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Productmanagment;
