import Form from "react-bootstrap/Form";
import { useState } from "react";

function SelectForm(props) {
  const [categories] = useState(props.item || []);

  const handleSelectChange = (value) => {
    props.onCategoryChange(value); // Sử dụng tham số value thay vì selectedValue
  };

  return (
    <Form.Select
      aria-label="Default select example"
      defaultValue={null} // Sử dụng defaultValue thay vì value
      onChange={(e) => handleSelectChange(e.target.value)}
    >
      <option>Open this select menu</option>
      {categories.map((item) => (
        <option key={item.CategoryID} value={item.CategoryID}>
          {item.CategoryName}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectForm;
