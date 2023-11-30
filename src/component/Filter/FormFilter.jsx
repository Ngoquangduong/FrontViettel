import { useState } from "react";
import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

const FormFilter = ({ name, item }) => {

  const [categories, setCategory] = useState(item);

  return (
    <Accordion.Body>
      {categories.map((item) => {
        return (
          <div key={item.value} className="mb-3">
            <Form.Check type="radio" id={`check-api-${item.value}-asc`}>
              <Form.Check.Input
                name={name} 
                value={item.value}  
                type="radio"
                isValid
              />
              <Form.Check.Label className="form-normal-text">
                {item.name}
              </Form.Check.Label>
            </Form.Check>
          </div>
        );
      })}
    </Accordion.Body>
  );
};

export default FormFilter;
