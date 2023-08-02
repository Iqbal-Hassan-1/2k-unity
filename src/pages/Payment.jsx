import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../component/InputField/InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import paypal from "../assets/pay-pal.png";
import style from "./payment.module.css";
const Payment = () => {
  return (
    <Container fluid className={style.divpayment}>
      <Row>
        <Col
          md={6}
          className={`d-flex justify-content-center ${style.forHead}`}
        >
          <h2 className="text-white text-sm-start text-md-center fw-bold pt-md-4 ps-0 ps-md-4">
            PAYMENT PROCESS
          </h2>
        </Col>
        <Col
          md={{ offset: 2, span: 3 }}
          className={`text-white bg-white mt-1 mt-md-5 p-5 ${style.forShadow}`}
        >
          <div className={style.divpaypal}>
            <img src={paypal} />
          </div>
          <Form>
            <InputField placeholder={"Card Number"} />
            <InputField placeholder={"Expiry date"} />{" "}
            <InputField placeholder={"Card holder's Name"} />{" "}
            <InputField placeholder={"Cvv"} />
            <Form.Check // prettier-ignore
              type="checkbox"
              id="checkbox"
              className="pt-3"
              label="Agree to the terms of payment"
            />
            <div className="d-grid gap-2 pt-3 opacity-100">
              {" "}
              <Button variant="primary" size="lg" className="opacity-100">
                Confirm Payment
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
