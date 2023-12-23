import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SelectForm from "../component/SelectForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import useProductContext from "../context/ProductContext";

function MyVerticallyCenteredModal(props) {
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

  const [categorydata, setCategoryData] = useState([]);
  const [servicedata, setServiceData] = useState([]);
  //   const handleUpdateProduct = () => {};
  const [selectedEditCategory, setSelectedEditCategory] = useState(0);
  const [selectedEditService, setSelectedEditService] = useState(0);
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

  const handleEditCategoryChange = (selectedValue) => {
    setSelectedEditCategory(parseInt(selectedValue));
  };
  const handleEditServiceChange = (selectedValue) => {
    setSelectedEditService(parseInt(selectedValue));
  };

  const handleUpdateProduct = async (event, id) => {
    event.preventDefault();
    // console.log(id);

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
    props.onHide();
  };
  useEffect(() => {
    setCategoryData(props.categorydata);
    setServiceData(props.servicedata);
    setEditProductName(props.product.ProductName);
    setEditPrice(props.product.Price);
    setEditNTPrice(props.product.NTPrice);
    setEditProductSort(props.product.sort);
    setEditDescription(props.product.Description);
    setEditBandwidth(props.product.Bandwidth);
    setEditSpeed(props.product.Speed);
    setEditIPstatic(props.product.IPstatic);
    setEditGift(props.product.Gift);
    setEditUseDay(props.product.UseDay);
    setSelectedEditCategory(parseInt(props.product.CategoryID));
    setSelectedEditService(parseInt(props.product.ServiceID));
  }, [props.show]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chỉnh sử Sản Phẩm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tên: {props.product.ProductName}</h4>
        <Row>
          {/* <h1 className="my-3 title-table">Thêm sản phẩm</h1> */}
          <Form
            onSubmit={(event) =>
              handleUpdateProduct(event, props.product.ProductID)
            }
          >
            <Row>
              <Col>
                <label htmlFor="">Tên Sản Phẩm</label>
                <input
                  type="text"
                  className="w-100"
                  value={editProductName}
                  onChange={(e) => setEditProductName(e.target.value)}
                  placeholder="Tên sản phẩm"
                  required
                />
                <span className="highlight"></span>
                {errors.ProductName && (
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.ProductName[0]}
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
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
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
                  value={editNTPrice}
                  onChange={(e) => setEditNTPrice(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                {errors.NTPrice && (
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.NTPrice[0]}
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
                  value={editProductSort}
                  onChange={(e) => setEditProductSort(e.target.value)}
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

            <Row>
              <Col>
                <label htmlFor="">Tốc Độ Đường</label>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Tốc độ đường truyền"
                  value={editSpeed}
                  onChange={(e) => setEditSpeed(e.target.value)}
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
                  value={editBandwidth}
                  onChange={(e) => setEditBandwidth(e.target.value)}
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
                  value={editIPstatic}
                  onChange={(e) => setEditIPstatic(e.target.value)}
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
                  value={editUseDay}
                  onChange={(e) => setEditUseDay(parseInt(e.target.value))}
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
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
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
                  item={categorydata}
                  onCategoryChange={handleEditCategoryChange}
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
                  item={servicedata}
                  onCategoryChange={handleEditServiceChange}
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
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <label htmlFor="">Quà Tặng</label>
                <Form.Control
                  as="textarea"
                  className="border-textarea"
                  rows={3}
                  placeholder="Quà Tặng"
                  value={editGift}
                  onChange={(e) => setEditGift(e.target.value)}
                  required
                />
              </Form.Group>
              {errors.Gift && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.Gift[0]}
                </span>
              )}
              <span className="highlight"></span>
              <div className="">
                <button className="bn632-hover bn28 mb-3" type="submit">
                  Chỉnh Sửa
                </button>
              </div>
            </Row>
          </Form>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-61" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ProductUpdate({ product, categoryData, serviceData }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button className="button-63" onClick={() => setModalShow(true)}>
        Chỉnh sửa
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        product={product}
        categorydata={categoryData}
        servicedata={serviceData}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
