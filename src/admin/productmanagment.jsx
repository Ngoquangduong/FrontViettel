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
function Productmanagment() {
  const { products, errors, insertProduct, deleteProduct } =
    useProductContext();
  const [show, setShow] = useState(false);
  const { categories } = useCategoryContext();
  const { services } = useServiceContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryData, setCategoryData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

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
  // ----- insertProduct-------------------------------
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedService, setSelectedService] = useState(0);
  const [ProductID, setProductID] = useState("");
  const [Price, setPrice] = useState(undefined);
  const [UseDay, setUseDay] = useState(undefined);
  const [Bandwidth, setBandwidth] = useState("");
  const [Speed, setSpeed] = useState("");
  const [Gift, setGift] = useState("");
  const [Description, setDescription] = useState("");
  const [IPStatic, setIPStatic] = useState("");

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(parseInt(selectedValue));
  };
  const handleServiceChange = (selectedValue) => {
    setSelectedCategory(parseInt(selectedValue));
  };
  const handleInsertProduct = async (event) => {
    event.preventDefault();
    insertProduct({
      ProductID: ProductID,
      Speed: Speed,
      Bandwidth: Bandwidth,
      Price: Price,
      Gift: Gilf,
      Description: Description,
      IPStatic: IPStatic,
      UseDay: UseDay,
      CategoryID: selectedCategory,
      ServiceID: selectedService,
    });
  };

  const handleDelete = (ID) => {
    deleteProduct(ID);
  };
  //----------------useEffect--------------------------

  useEffect(() => {
    handleCategoryData(categories);
    handleServiceData(services);
  }, [categories]);
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
                      <th className="table-custom-rose">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-custom-rose">
                    {products.map((item) => (
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
                        <td className="table-custom-rose d-flex ">
                          <DeletePopUp
                            name={item.ProductID}
                            handle={handleDelete}
                          ></DeletePopUp>
                          <a href="#">
                            <button className="button-63">Chỉnh sửa</button>
                          </a>
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
              <button className="button-63 mx-3">Nhập dữ liệu</button>
              <Button className="btn-filter-3" onClick={handleShow}>
                Cập nhật sản phẩm
              </Button>
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
                  <input
                    type="text"
                    className="w-100"
                    value={ProductID}
                    onChange={(e) => setProductID(e.target.value)}
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
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Giá sản phẩm"
                    value={Price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
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
                  <input
                    type="text"
                    className="w-100"
                    placeholder="IP tĩnh"
                    value={IPStatic}
                    onChange={(e) => setIPStatic(e.target.value)}
                    required
                  />
                  <span className="highlight"></span>
                  {errors.IPStatic && (
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.IPStatic[0]}
                    </span>
                  )}
                  <span className="bar mb-4"></span>
                </Col>
                <Col>
                  <input
                    type="text"
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
                <Form.Control
                  as="textarea"
                  className="border-textarea"
                  rows={3}
                  placeholder="Mô tả"
                />
                {errors.Description && (
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.Description[0]}
                  </span>
                )}
              </Form.Group>
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
