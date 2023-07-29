import React from "react";
import { Form } from "react-bootstrap";
import style from "./input.module.css";
const InputField = ({ title, placeholder }) => {
  return (
    <>
      <div className={style.forIdd}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>{title}</Form.Label>
          <Form.Control
            type="email"
            placeholder={placeholder && placeholder}
            className={style.forInput}
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
      </div>
    </>
  );
};

export default InputField;
