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
  const { admin, errors, register, setErrors } = useAdminAuthContext();

  const handleAdminRegister = async (event) => {
    event.preventDefault();
    try {
      register({
        name,
        email,
        Phone,
        Gender,
        Address,
        password,
        password_confirmation,
      });
      setName("");
      setEmail("");
      setPhone("");
      setGender("m");
      setAddress("");
      setPassword("");
      setPasswordConfirmation("");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
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
              autoComplete="on"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <span className="text-red-400 text-sm m-2 p-2">abc</span> */}
            {errors.name && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.name[0]}
              </span>
            )}
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
            {errors.email && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.name[0]}
              </span>
            )}
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
            {errors.Phone && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.Phone[0]}
              </span>
            )}
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
          <Col>
            <input
              type="password"
              className="w-100"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.name[0]}
              </span>
            )}
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
            {errors.password_confirmation && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.password_confirmation[0]}
              </span>
            )}
            <span className="highlight"></span>
            <span className="bar mb-4"></span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select
              aria-label="Gender"
              className="mt-3"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="m">Nam</option>
              <option value="f">Nữ</option>
            </Form.Select>
            {errors.Gender && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.Gender[0]}
              </span>
            )}
          </Col>
          <Col>
            <input
              type="text"
              className="w-100 mt-4"
              placeholder="Địa chỉ"
              autoComplete="on"
              required
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.Address && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.Address[0]}
              </span>
            )}
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
