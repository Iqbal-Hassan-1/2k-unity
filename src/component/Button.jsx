import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <a href="sign-up">
      <button className="btnn">Sign Up</button>
    </a>
  );
}
