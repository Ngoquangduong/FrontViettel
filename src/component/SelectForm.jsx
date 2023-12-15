import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function SelectForm(props) {
  const [categories, setCategories] = useState([]);

  const handleSelectChange = (value) => {
    props.onCategoryChange(value); // Sử dụng tham số value thay vì selectedValue
  };
  useEffect(() => {
    setCategories(props.item);
  }, [categories]);
  return (
    <Form.Select
      aria-label="Default select example"
      defaultValue={null} // Sử dụng defaultValue thay vì value
      onChange={(e) => handleSelectChange(e.target.value)}
    >
      <option>{props.name}</option>
      {categories.map((item) => (
        <option key={item.ID} value={item.ID}>
          {item.Name}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectForm;
