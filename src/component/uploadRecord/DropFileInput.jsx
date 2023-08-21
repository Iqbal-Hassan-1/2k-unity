import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./drop-file-input.css";
import uploadImg from "../../assets/cloud.png";
import { ImageConfig } from "../../config/ImageConfig";
import { Button } from "react-bootstrap";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [file, setFile] = useState(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      props.onFileChange(newFile);
    }
  };

  const fileRemove = () => {
    setFile(null);
    props.onFileChange(null);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input box-b"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          {/* <img src={uploadImg} alt="" /> */}
          {/* <h6>
            DRAG AND DROP
            <br />
            YOUR FILE <br />
            Here
          </h6> */}
          <h6> DRAG AND DROP</h6>
          <h6>YOUR FILE</h6>
          <h6>HERE</h6>

          <p className="fw-bold text-center">OR</p>
          <Button variant="primary" className="px-3 py-1">
            Browse
          </Button>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {file ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          <div className="drop-file-preview__item">
            <img
              src={
                ImageConfig[file.type.split("/")[1]] || ImageConfig["default"]
              }
              alt=""
            />
            <div className="drop-file-preview__item__info">
              <p>{file.name}</p>
            </div>
            <span className="drop-file-preview__item__del" onClick={fileRemove}>
              x
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
