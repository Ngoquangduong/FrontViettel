import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormFilter from "./component/Filter/FormFilter";
import SelectForm from "./component/SelectForm";
import useCategoryContext from "./context/CategoryContext";
import useProductContext from "./context/ProductContext";
import { all } from "axios";
function Filter({ show, handleClose }) {
  const { categories } = useCategoryContext();
  const [sort, setSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const { filterResult, products, setFilterResult } = useProductContext();

  //Search-----------------------
  const [searchProduct, setSearchProduct] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();

    if (searchProduct !== "") {
      let filterData = products.filter((item) => {
        return Object.values(item.ProductID)
          .join("")
          .toUpperCase()
          .includes(searchProduct.toUpperCase());
      });
      setFilterResult(filterData);
    } else {
      setFilterResult([]);
    }
    handleClose();
  };
  //---------------Filter-----------------------
  const handleFilter = (event) => {
    event.preventDefault();
    if (
      selectedCategory !== null ||
      sort !== null ||
      minPrice !== null ||
      maxPrice !== null
    ) {
      let filterData = products; // Change const to let

      if (selectedCategory !== null) {
        // console.log("hello");
        let CategoryID = parseInt(selectedCategory);
        filterData = filterData.filter((item) => {
          return item.CategoryID === CategoryID;
        });
      }
      if (sort === "A_Z") {
        filterData = filterData.sort((a, b) => {
          const productIDA = a.ProductID.toUpperCase();
          const productIDB = b.ProductID.toUpperCase();
          return productIDA.localeCompare(productIDB);
        });
      }
      if (sort === "Z_A") {
        filterData = filterData.sort((a, b) => {
          const productIDA = a.ProductID.toUpperCase();
          const productIDB = b.ProductID.toUpperCase();
          return productIDB.localeCompare(productIDA);
        });
      }
      if (minPrice !== null) {
        filterData = filterData.filter((item) => {
          return parseInt(item.Price) >= minPrice;
        });
      }
      if (maxPrice !== null) {
        filterData = filterData.filter((item) => {
          return parseInt(item.Price) <= maxPrice;
        });
      }
      
      setFilterResult(filterData);
    } else {
      setFilterResult([]);
    }
  };
  // old
  const HandleCloseItem = () => {
    handleClose();
  };

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };

  const handleSort = (selectedValue) => {
    setSort(selectedValue);
  };

  // useEffect(() => {
  //   console.log(selectedCategory);
  //   console.log(sort);
  //   // Giá trị mới của selectedCategory sẽ được hiển thị ở đây
  // }, [selectedCategory, sort]);

  // console.log(categories);

  return (
    <Offcanvas
      show={show}
      onHide={HandleCloseItem}
      className="responsive-offcanvas col-s-3"
    >
      <Offcanvas.Header>
        <Offcanvas.Title className="text-title">Bộ lọc</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={(e) => handleFilter(e)}>
          <b>Loại Sản Phẩm</b>
          <SelectForm
            item={categories}
            onCategoryChange={handleCategoryChange}
          />
          <br></br>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo bảng chữ cái
              </Accordion.Header>
              <Accordion.Body>
                <FormFilter
                  name={"sort"}
                  type={"radio"}
                  item={[
                    { name: "Từ A đến Z", value: "A_Z" },
                    { name: "Từ Z đến A", value: "Z_A" },
                  ]}
                  onRadioChange={handleSort}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo số Giá
              </Accordion.Header>
              <Accordion.Body>
                <Form.Control
                  size="sm"
                  type="number"
                  placeholder="Từ"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />
                <b>-</b>
                <Form.Control
                  size="sm"
                  type="number"
                  placeholder="Đến"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* <Accordion.Item eventKey="2">
              <Accordion.Header className="form-normal-text">
                Sắp xếp theo bảng chữ cái
              </Accordion.Header>
              <FormFilter />
              <Accordion.Body>
                <FormFilter
                  name={"sort"}
                  type={"checkbox"}
                  item={categories}
                  onRadioChange={handleCategoryChange}
                />
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
          <Button type="submit" className="btn-filter-3 my-3">
            Xác Nhận
          </Button>
        </Form>

        <Form onSubmit={(e) => handleSearch(e)}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Tìm kiếm theo tên"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
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
