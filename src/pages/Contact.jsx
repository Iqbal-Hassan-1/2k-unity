import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { InputField } from "../component/Index";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <Container fluid className={style.divcontainer}>
      <Row>
        <Col
          xs={12}
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 8, span: 3 }}
          className={`text-white bg-white mt-5 p-5 ${style.forShadow}`}
        >
          <Form>
            <h2 className="text-center fw-bold">CONTACT US</h2>
            <InputField placeholder={"User Name"} />
            <InputField placeholder={"Email"} />{" "}
            <InputField placeholder={"Message"} />{" "}
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button variant="primary" size="lg" className="opacity-100">
                Send <BiRightArrowAlt size={25} />{" "}
              </Button>
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
