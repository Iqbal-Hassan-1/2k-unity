import React, { useState } from "react";
import style from "./signup.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import InputFieldWhite from "../component/InputField/InputFieldWhite";
const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (num) => {
    console.log(num);
    setActiveStep(num);
  };
  return (
    <Container fluid className={style.signupdiv}>
      <Row className="d-flex justify-content-center gap-5">
        <Col
          md={3}
          className={`text-white mt-2 p-4 ${
            activeStep === 0 ? style.activeForm : style.inactiveForm
          } ${style.forbgshadow}`}
        >
          <Form>
            <h3 className="text-center fw-bold">STEP 1</h3>
            <InputFieldWhite placeholder={"First Name"} />
            <InputFieldWhite placeholder={"Last Name"} />{" "}
            <select className={`${style.divselect}`}>
              <option>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
            <InputFieldWhite placeholder={"Date of Birth"} type="date" />{" "}
            <select className={`${style.divselect}`}>
              <option>Country</option>
              <option value="1">Pakistan</option>
              <option value="2">India</option>
              <option value="3">England</option>
              <option value="3">United kingdom</option>
            </select>
            <InputFieldWhite placeholder={"User Name"} />{" "}
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
          </Form>
        </Col>
        <Col
          md={3}
          className={`text-white mt-2 p-4 ${
            activeStep === 1 ? style.activeForm : style.inactiveForm
          } ${style.forbgshadow}`}
        >
          <Form>
            <h3 className="text-center fw-bold">STEP 2</h3>
            <InputFieldWhite placeholder={"Gamer tag"} />
            <InputFieldWhite placeholder={"System"} />{" "}
            <InputFieldWhite placeholder={"Game Mode"} />
            <InputFieldWhite placeholder={"Archetype"} />{" "}
            <InputFieldWhite placeholder={"Position"} />
            <InputFieldWhite placeholder={"Height"} />{" "}
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
          <Form>
            <h3 className="text-center fw-bold">STEP 3</h3>
            <InputFieldWhite placeholder={"Email"} />
            <InputFieldWhite placeholder={"Password"} />{" "}
            <InputFieldWhite placeholder={"Confirm Password"} />
            <InputFieldWhite placeholder={"Stream"} />{" "}
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button
                variant="primary"
                size="lg"
                className="opacity-100"
                onClick={() => handleNext(0)}
              >
                SIGNUP
              </Button>
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
