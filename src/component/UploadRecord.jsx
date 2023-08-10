import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DropFileInput from "./DropFileInput";

const UploadRecord = ({ show, setShow }) => {
  const [files, setFiles] = useState([]);
  const onFileChange = (uploadedFiles) => {
    setFiles(uploadedFiles); // Update the uploaded files state
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          //   closeButton
          className="d-flex justify-content-center"
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <Modal.Title as={"h5"} className="fw-bold text-center text-white">
            UPLOAD YOUR LEADERBOARD <br /> RECORD
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center justify-content-center flex-column w-100">
          <DropFileInput onFileChange={onFileChange} />
          <div className="d-flex gap-5 pt-3 fw-bold">
            <Form.Check // prettier-ignore
              type="checkbox"
              id="checkbox"
              label="Park win"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              id="checkbox"
              label="Rec win"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center border-0">
          <Button
            variant="primary"
            className="px-5 py-2 foruploadbtn"
            onClick={handleClose}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadRecord;
