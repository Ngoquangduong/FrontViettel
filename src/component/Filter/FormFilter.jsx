// FormFilter.js

import React from "react";
import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

const FormFilter = ({ type, name, item, onRadioChange }) => {
  return (
    <div className="mb-3">
      {item.map((radioItem) => (
        <Form.Check
          key={radioItem.value}
          id={`check-api-radio-${radioItem.value}`}
        >
          <Form.Check.Input
            name={name}
            type={type}  
            value={radioItem.value}
            onChange={() => onRadioChange(radioItem.value)}
            isValid
          />
          <Form.Check.Label className="form-normal-text w-100">
            {radioItem.name}
          </Form.Check.Label>
        </Form.Check>
      ))}
    </div>
  );
};

export default FormFilter;
