import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SelectForm from "../component/SelectForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import useCategoryContext from "../context/CategoryContext";
function MyVerticallyCenteredModal(props) {
  const {
    categories,
    errors,
    category,
    getCategoryDetail,
    setCategoryDetail,
    getCategory,
    insertCategory,
    updateCategory,
    deleteCategory,
    exportCategory,
    getExportCategory,
  } = useCategoryContext();

  const [editingCategory, setEditingCategory] = useState("");
  const [editSort, setEditSort] = useState(1);
  const handleUpdateCategory = async (event, id) => {
    event.preventDefault();
    try {
      await updateCategory(id, {
        CategoryName: editingCategory,
        sort: editSort,
      });
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
    props.onHide();
  };

  useEffect(() => {
    setEditSort(props.category.sort);
    setEditingCategory(props.category.CategoryName);
  }, [props.show]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chỉnh sửa Loại Sản Phẩm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tên: {props.category.CategoryName}</h4>
        <Row>
          <Form
            method="post"
            onSubmit={(event) =>
              handleUpdateCategory(event, props.category.CategoryID)
            }
          >
            <Row>
              <Col>
                <label htmlFor="">Tên loại sản phẩm</label>

                <input
                  type="text"
                  className="w-100"
                  placeholder="Tên loại sản phẩm"
                  value={editingCategory}
                  onChange={(e) => setEditingCategory(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                <span className="bar mb-4"></span>
              </Col>
              <Col>
                <label htmlFor="">Thứ tự ưu tiên</label>
                <input
                  type="number"
                  className="w-100"
                  placeholder="Tên loại sản phẩm"
                  value={editSort}
                  onChange={(e) => setEditSort(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                <span className="bar mb-4"></span>
              </Col>
            </Row>
            <button type="submit" className="button-63 mb-5">
              Xác nhận
            </button>
          </Form>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-61" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CategoryUpdate({ Category }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button className="button-63" onClick={() => setModalShow(true)}>
        Chỉnh sửa
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        category={Category}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
