import { useState } from "react";
import useAdminAuthContext from "../context/AdminAuthContext";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RegisterAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Gender, setGender] = useState("m");
  const [Address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { admin, errors, register } = useAdminAuthContext();

  const handleAdminRegister = async (event) => {
    event.preventDefault();
    register({
      name,
      email,
      Phone,
      Gender,
      Address,
      password,
      password_confirmation,
    });
  };



  
  return (
    <Row>
      <h1 className="my-3 title-table">Thêm admin</h1>
      <Form onSubmit={handleAdminRegister}>
        <Row>
          <Col>
            <input
              type="text"
              className="w-100"
              placeholder="Tên"
              required
              autoComplete="on"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
          <Col>
            <input
              type="email"
              className="w-100"
              placeholder="Email"
              autoComplete="on"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Phonenumber"
              autoComplete="on"
              required
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
          <Col>
            <input
              type="password"
              className="w-100"
              placeholder="Password"
              autoComplete="on"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
          <Col>
            <input
              type="password"
              className="w-100"
              placeholder="Password Confirmation"
              autoComplete="on"
              required
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select
              aria-label="Gender"
              className="mt-4"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="m">Nam</option>
              <option value="f">Nữ</option>
            </Form.Select>
          </Col>
          <Col>
            <input
              type="text"
              className="w-100 mt-3"
              placeholder="Địa chỉ"
              autoComplete="on"
              required
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
        </Row>
        <button className="button-63">Xác nhận</button>
      </Form>
    </Row>
  );
};
export default RegisterAdmin;
