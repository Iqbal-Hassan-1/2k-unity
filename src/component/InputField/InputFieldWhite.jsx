import React from "react";
import { Form } from "react-bootstrap";
import style from "./inputwhite.module.css";
const InputFieldWhite = ({
  title,
  placeholder,
  type,
  className,
  value,
  onChange,
  name,
}) => {
  return (
    <Form.Group className={className} controlId={`formBasic${name}`}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder && placeholder}
        className={style.FieldWhiteInput}
        value={value}
        onChange={(e) => onChange(e, name)}
        autoComplete="off"
      />
      {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
    </Form.Group>
  );
};

export default InputFieldWhite;
