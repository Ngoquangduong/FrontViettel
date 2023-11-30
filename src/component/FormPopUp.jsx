import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import useProductContext from "../context/ProductContext";
import useFormContext from "../context/FormContext";
function FormPopUp(props) {
  const { product } = useProductContext();
  const { cities, districts, payments } = useFormContext();

  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
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
        <Form action="/register" method="POST">
          <Row>
            <Col>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="justify-content-center align-items-center d-flex flex-column"
              >
                {product.ProductID}
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
              />
              <span className="highlight"></span>
              <span className="bar mb-4"></span>
            </Col>
            <Col className="w-50 ">
              <Form.Select aria-label="Default select example" className="">
                <option>Phương thức thanh toán</option>
                {payments.map((item) => (
                  <option key={item.PaymentID} value={item.PaymentID}>
                    {item.PaymentName}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col className="w-50">
              <input
                type="text"
                className="w-100"
                placeholder="Số điện thoại liên hệ"
                required
              />
              <span className="highlight"></span>
              <span className="bar mb-4"></span>
            </Col>
            <Col className="w-25">
              <Form.Select
                aria-label="Default select example"
                // className="w-25"
                onChange={(e) => {
                  setSelectedCity(e.target.value);
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
            </Col>
            <Col className="w-25 ">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
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
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="text"
                className="w-100"
                placeholder="Địa chỉ"
                required
              />
              <span className="highlight"></span>
              <span className="bar mb-4"></span>
            </Col>
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
