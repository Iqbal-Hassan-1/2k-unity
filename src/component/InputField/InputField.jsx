import React from "react";
import { Form } from "react-bootstrap";
import style from "./input.module.css";
const InputField = ({ title, placeholder, type, value, setValue }) => {
  return (
    <>
      <div className={style.forIdd}>
        <label>{title}</label>
        <input
          type={type && type}
          placeholder={placeholder && placeholder}
          className={style.forInputField}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </div>
    </>
  );
};

export default InputField;
