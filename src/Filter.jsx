import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Filter({ show, handleClose }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className="responsive-offcanvas col-s-3"
    >
      <Offcanvas.Header>
        <Offcanvas.Title className="text-title">Bộ lọc</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo giá
              </Accordion.Header>
              <Accordion.Body>
                {["radio"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="form-normal-text">
                        {" "}
                        Từ cao xuống thấp
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="form-normal-text">
                        Từ thấp đến cao
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo số ngày sử dụng
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="radio"
                  label={<span className="normal-text">Từ thấp đến cao</span>}
                  aria-label="radio 1"
                />
                <Form.Check
                  type="radio"
                  label={<span className="normal-text">Từ cao đến thấp</span>}
                  aria-label="radio 2"
                />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo bảng chữ cái
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="radio"
                  label={<span className="normal-text">Từ A đến Z</span>}
                  aria-label="radio 1"
                />
                <Form.Check
                  type="radio"
                  label={<span className="normal-text">Từ Z đến A</span>}
                  aria-label="radio 2"
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button type="submit" className="btn-filter-3 my-3">
            Xác Nhận
          </Button>
        </Form>

        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Tìm kiếm theo tên"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="button-63">
                Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default Filter;
