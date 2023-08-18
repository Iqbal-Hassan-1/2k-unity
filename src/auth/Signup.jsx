import React, { useState } from "react";
import style from "./signup.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import InputFieldWhite from "../component/InputField/InputFieldWhite";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../constant";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value, // Update the field based on the provided fieldName
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password Not Match");
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}auth/signup`, formData);
      toast.success("User Create Successfully");
      setIsLoading(false);
      navigate("/sign-in");
      console.log("Response:", response.data);
    } catch (error) {
      toast.error(error.msg);
      console.error("Error:", error);
    }
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (num) => {
    setActiveStep(num);
  };
  const isFormIncomplete =
    !formData.email ||
    !formData.username ||
    !formData.password ||
    !formData.first_name ||
    !formData.last_name ||
    !formData.gender ||
    !formData.dob ||
    !formData.country ||
    !formData.gamer_tag ||
    !formData.game_mod ||
    !formData.archtype ||
    !formData.position ||
    !formData.height ||
    !formData.stream;
  const isNextFirst =
    !formData.first_name ||
    !formData.last_name ||
    !formData.gender ||
    !formData.dob ||
    !formData.country ||
    !formData.username;
  const isNextSec =
    !formData.gamer_tag ||
    !formData.game_mod ||
    !formData.archtype ||
    !formData.position ||
    // !formData.height ||
    !formData.height;
  const isSignup = !formData.email || !formData.stream || !formData.password;

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
            <div
              className={`d-grid gap-2 pt-3 opacity-100 ${
                isNextFirst ? "not-allowed-cursor" : ""
              }`}
            >
              {" "}
              <Button
                variant="primary"
                size="lg"
                disabled={isNextFirst}
                className="opacity-100"
                onClick={() => handleNext(1)}
              >
                Next <BiRightArrowAlt size={25} />{" "}
              </Button>
            </div>
          </Col>
          <Col
            md={3}
            className={`text-white mt-4 p-4 ${
              activeStep === 1 ? style.activeForm : style.inactiveForm
            } ${style.forbgshadow}`}
          >
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
            <div
              className={`d-grid gap-2 pt-3 opacity-100 ${
                isNextSec ? "not-allowed-cursor" : ""
              }`}
            >
              {" "}
              <Button
                variant="primary"
                size="lg"
                disabled={isNextSec}
                className="opacity-100"
                onClick={() => handleNext(2)}
              >
                Next <BiRightArrowAlt size={25} />{" "}
              </Button>
            </div>
          </Col>
          <Col
            md={3}
            className={`text-white mt-4 p-4 ${
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
            <InputFieldWhite
              placeholder={"Confirm Password"}
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <InputFieldWhite
              placeholder={"Stream"}
              name="stream"
              type="text"
              value={formData.stream}
              onChange={handleChange}
            />{" "}
            <div
              className={`d-grid gap-2 pt-3 opacity-100 ${
                isSignup ? "not-allowed-cursor" : ""
              }`}
            >
              {" "}
              <Button
                variant="primary"
                size="lg"
                className="opacity-100"
                type="submit"
                disabled={isSignup}
                // onClick={() => handleNext(0)}
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <span>
                    Signup <BiRightArrowAlt size={25} />
                  </span>
                )}
              </Button>
            </div>{" "}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
