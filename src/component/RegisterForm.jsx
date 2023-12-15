import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../assets/CSS/main.css";
import Container from "react-bootstrap/Container";
import useCityContext from "../context/CityContext";
import useDistrictContext from "../context/DistrictContext";
import usePaymentContext from "../context/PaymentContext";
import useProductContext from "../context/ProductContext";
import useOrderContext from "../context/OrderContext";

export default function RegisterForm() {
  const { cities } = useCityContext();
  const { districts } = useDistrictContext();
  const { payments } = usePaymentContext();
  const { products } = useProductContext();

  const { insertOrder } = useOrderContext();

  const [selectedCity, setSelectedCity] = useState(undefined);
  const [selectedDistrict, setSelectedDistrict] = useState(undefined);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [Phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [Address, setAddress] = useState("");

  const [payment, setPayment] = useState(undefined);

  const handleOrder = async (event) => {
    event.preventDefault();

    insertOrder({
      ProductID: selectedProduct,
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
    <>
      <Container>
        <Row className="bg-confirm my-1 box-shadow-1">
          <h1 className="my-3 text-title ">Mua/đặt sản phẩm</h1>
          <Form>
            <Row>
              <Col>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Tên người mua"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                <span className="bar mb-4"></span>
              </Col>
              <Col>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Số điện thoại liên hệ"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                <span className="bar mb-4"></span>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className="w-100 mb-4"
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                  }}
                >
                  <option>Sản phẩm</option>
                  {products.map((item) => (
                    <option key={item.ProductID} value={item.ProductID}>
                      {item.ProductID}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className="w-100 mb-4"
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
              </Col>
            </Row>
            <Row></Row>
            <Row>
              <Form.Select
                aria-label="Default select example"
                className="w-25 mb-4"
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
              <Form.Select
                aria-label="Default select example"
                className="w-25 mb-4 mx-2"
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
              <Col>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Địa chỉ"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
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
        </Row>
      </Container>
    </>
  );
}
