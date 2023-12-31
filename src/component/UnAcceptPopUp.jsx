import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UnAcceptPopUp({ name, handle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    handleClose();
    console.log(name);
    handle(name);
  };
  return (
    <>
      <Button className="btn btn-outline-success" onClick={handleShow}>
        Đã Xác Nhận
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn Hủy Xác Nhận Không</Modal.Body>
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
            Hủy Xác Nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UnAcceptPopUp;
