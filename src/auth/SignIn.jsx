import React from "react";
import style from "./signin.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import ball from "../assets/basket-ball.png";
const SignIn = () => {
  return (
    <Container fluid className={style.divcontainer}>
      <Row>
        <Col
          md={{ offset: 8, span: 3 }}
          className={`text-white bg-white mt-5 p-5 ${style.forShadow}`}
        >
          <Form>
            <h2 className="text-center fw-bold">Welcome Back!</h2>
            <h6 className="text-center">You have been missed</h6>
            <InputField placeholder={"Email"} />
            <InputField placeholder={"password"} />{" "}
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button variant="primary" size="lg" className="opacity-100">
                Login to Continue <BiRightArrowAlt size={25} />{" "}
              </Button>
              <p className="text-center pt-2">Forget to password</p>{" "}
            </div>{" "}
            <h6 className="text-center pt-4">Don't have an account ? SIGNUP</h6>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
