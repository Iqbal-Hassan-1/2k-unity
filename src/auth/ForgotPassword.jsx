import React from "react";
import style from "./forgot.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
const ForgotPassword = () => {
  return (
    <Container fluid className={style.divForgot}>
      <Row className="pt-3">
        <Col
          xs={12}
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 8, span: 3 }}
          className={`text-white bg-white mt-5 p-5 ${style.forShadow}`}
        >
          <Form>
            <h4 className="text-center fw-bold p-0">FORGOT PASSWORD</h4>
            <p className="text-center">Don't worry enter email below</p>
            <InputField placeholder={"Email"} />{" "}
            <div className="d-flex flex-column justify-content-center py-3">
              <label className={style.forLabel}>
                Enter the code send to your email
              </label>
              <input
                placeholder="e.g YEQUNED"
                className={`p-2 ${style.forInput}`}
              />
            </div>
            <div className="d-grid gap-2 py-3 opacity-100">
              {" "}
              <Button variant="primary" size="lg" className="opacity-100">
                Continue
              </Button>
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
