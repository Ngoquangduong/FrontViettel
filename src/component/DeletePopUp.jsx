import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeletePopUp({ name, handle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    handleClose();
    handle(name);
  };
  return (
    <>
      <Button className="button-61 mx-2" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa Không</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ background: "blue" }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => handleSubmit()}
            style={{ background: "#ff0e0e" }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletePopUp;
