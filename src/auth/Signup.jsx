import React, { useState } from "react";
import style from "./signup.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import InputFieldWhite from "../component/InputField/InputFieldWhite";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    position: "",
    stream: "",
    archtype: "",
    game_mod: "",
    gamer_tag: "",
    height: "",
    country: "",
  });

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value, // Update the field based on the provided fieldName
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://nutty-dove-earmuffs.cyclic.app/api/auth/signup",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (num) => {
    console.log(num);
    setActiveStep(num);
  };
  return (
    <Container fluid className={style.signupdiv}>
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-center gap-5">
          <Col
            md={3}
            className={`text-white mt-4 p-4 ${
              activeStep === 0 ? style.activeForm : style.inactiveForm
            } ${style.forbgshadow}`}
          >
            <h3 className="text-center fw-bold">STEP 1</h3>
            <InputFieldWhite
              name="first_name"
              placeholder={"First Name"}
              type="text"
              value={formData.first_name}
              onChange={handleChange}
            />
            <InputFieldWhite
              placeholder={"Last Name"}
              name="last_name"
              type="text"
              value={formData.last_name}
              onChange={handleChange}
            />{" "}
            <select
              className={`${style.divselect}`}
              name="gender"
              value={formData.gender}
              onChange={(e) => handleChange(e, "gender")}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
            <InputFieldWhite
              placeholder={"Date of Birth"}
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />{" "}
            <select
              className={`${style.divselect}`}
              name="country"
              value={formData.country}
              onChange={(e) => handleChange(e, "country")}
            >
              <option>Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="England">England</option>
              <option value="United Kingdom">United kingdom</option>
            </select>
            <InputFieldWhite
              placeholder={"User Name"}
              name="username"
              type="text"
              onChange={handleChange}
              value={formData.username}
            />{" "}
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button
                variant="primary"
                size="lg"
                className="opacity-100"
                onClick={() => handleNext(1)}
              >
                Next <BiRightArrowAlt size={25} />{" "}
              </Button>
            </div>{" "}
          </Col>
          <Col
            md={3}
            className={`text-white mt-2 p-4 ${
              activeStep === 1 ? style.activeForm : style.inactiveForm
            } ${style.forbgshadow}`}
          >
            <Form>
              <h3 className="text-center fw-bold">STEP 2</h3>
              <InputFieldWhite
                placeholder={"Gamer tag"}
                name="gamer_tag"
                type="text"
                onChange={handleChange}
                value={formData.gamer_tag}
              />
              <InputFieldWhite placeholder={"System"} />{" "}
              <InputFieldWhite
                placeholder={"Game Mode"}
                name="game_mod"
                value={formData.game_mod}
                onChange={handleChange}
              />
              <InputFieldWhite
                placeholder={"Archetype"}
                type="text"
                name="archtype"
                value={formData.archtype}
                onChange={handleChange}
              />{" "}
              <InputFieldWhite
                placeholder={"Position"}
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
              <InputFieldWhite
                placeholder={"Height"}
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />{" "}
              <div className="d-grid gap-2 pt-3 opacity-100">
                {" "}
                <Button
                  variant="primary"
                  size="lg"
                  className="opacity-100"
                  onClick={() => handleNext(2)}
                >
                  Next <BiRightArrowAlt size={25} />{" "}
                </Button>
              </div>{" "}
            </Form>
          </Col>
          <Col
            md={3}
            className={`text-white mt-2 p-4 ${
              activeStep === 2 ? style.activeForm : style.inactiveForm
            } ${style.forbgshadow}`}
          >
            <h3 className="text-center fw-bold">STEP 3</h3>
            <InputFieldWhite
              placeholder={"Email"}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputFieldWhite
              placeholder={"Password"}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />{" "}
            <InputFieldWhite placeholder={"Confirm Password"} />
            <InputFieldWhite
              placeholder={"Stream"}
              name="stream"
              type="text"
              value={formData.stream}
              onChange={handleChange}
            />{" "}
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button
                variant="primary"
                size="lg"
                className="opacity-100"
                type="submit"
                // onClick={() => handleNext(0)}
              >
                SIGNUP
              </Button>
            </div>{" "}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
