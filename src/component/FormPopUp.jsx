import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import useProductContext from "../context/ProductContext";
import useCityContext from "../context/CityContext";
import useDistrictContext from "../context/DistrictContext";
import usePaymentContext from "../context/PaymentContext";
import useOrderContext from "../context/OrderContext";

function FormPopUp(props) {
  const { cities } = useCityContext();
  const { districts } = useDistrictContext();
  const { payments } = usePaymentContext();

  const { insertOrder, errors } = useOrderContext();

  const [selectedCity, setSelectedCity] = useState(undefined);
  const [selectedDistrict, setSelectedDistrict] = useState(undefined);
  const [Phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [Address, setAddress] = useState("");

  const [payment, setPayment] = useState(0);

  const handleOrder = async (event) => {
    event.preventDefault();
    await insertOrder({
      ProductID: props.product.ProductID,
      Phone: Phone,
      name: name,
      Address: Address,
      CityID: selectedCity,
      DistrictID: selectedDistrict,
      PaymentID: payment,
    });

    // login({ email, password });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Đăng Ký
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOrder}>
          <Row>
            <Col>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="justify-content-center align-items-center d-flex flex-column"
              >
                {props.product.ProductName}
              </Modal.Title>
              <span className="highlight"></span>
              <span className="bar mb-4"></span>
            </Col>
          </Row>
          <Row>
            <Col className="w-50">
              <input
                type="text"
                className="w-100 "
                placeholder="Tên người mua"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="highlight"></span>
              {errors.name && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.name[0]}
                </span>
              )}
              <span className="bar mb-4"></span>
            </Col>
            <Col className="w-50 ">
              <Form.Select
                aria-label="Default select example"
                className=""
                onChange={(e) => {
                  setPayment(parseInt(e.target.value));
                }}
              >
                <option>Phương thức thanh toán</option>
                {payments.map((item) => (
                  <option key={item.PaymentID} value={item.PaymentID}>
                    {item.PaymentName}
                  </option>
                ))}
              </Form.Select>
              {errors.PaymentID && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.PaymentID[0]}
                </span>
              )}
            </Col>
          </Row>

          <Row>
            <Col className="w-50">
              <input
                type="text"
                className="w-100"
                placeholder="Số điện thoại liên hệ"
                required
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="highlight"></span>
              {errors.Phone && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.Phone[0]}
                </span>
              )}
              <span className="bar mb-4"></span>
            </Col>
            <Col className="w-25">
              <Form.Select
                aria-label="Default select example"
                // className="w-25"
                onChange={(e) => {
                  setSelectedCity(parseInt(e.target.value));
                  // setDistricts(e.target.value === "" ? [] : cities);
                }}
                // onChange={(e) => {
                //   setCity(e.target.value);
                // }}
              >
                <option>--Thành phố--</option>

                {cities.map((item) => (
                  <option key={item.CityID} value={item.CityID}>
                    {item.CityName}
                  </option>
                ))}
              </Form.Select>
              {errors.CityID && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.CityID[0]}
                </span>
              )}
            </Col>
            <Col className="w-25 ">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedDistrict(parseInt(e.target.value));
                  // setDistricts(e.target.value === "" ? [] : cities);
                }}
              >
                <option>Quận</option>
                {districts
                  .filter((item) => item.CityID == selectedCity)
                  .map((item) => (
                    <option key={item.DistrictID} value={item.DistrictID}>
                      {item.DistrictName}
                    </option>
                  ))}
              </Form.Select>
              {errors.DistrictID && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.DistrictID[0]}
                </span>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="text"
                className="w-100"
                placeholder="Địa chỉ"
                required
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar mb-4"></span>
            </Col>
            {errors.Address && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.Address[0]}
              </span>
            )}
          </Row>
          <div className="text-center">
            <button className="bn632-hover bn28 mb-3" type="submit">
              Xác nhận
            </button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{ background: "blue" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FormPopUp;
