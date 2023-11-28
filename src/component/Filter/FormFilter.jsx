import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

const FormFilter = (props) => {
  return (
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
  );
};
export default FormFilter;
