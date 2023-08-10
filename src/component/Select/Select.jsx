import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ options }) => {
  return (
    <Form.Select
      size="lg"
      className="shadow-lg p-3 mb-1 bg-body"
      style={{ borderRadius: "0", fontSize: "1rem" }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
