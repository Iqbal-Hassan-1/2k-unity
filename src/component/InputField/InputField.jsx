import React from "react";
import "./input.css";
import { Form } from "react-bootstrap";
const InputField = ({ title, placeholder }) => {
  return (
    <>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>{title}</Form.Label>
        <Form.Control type="email" placeholder={placeholder && placeholder} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    </>
  );
};

export default InputField;
