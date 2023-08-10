import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import style from "./createteam.module.css";
import InputFieldWhite from "../component/InputField/InputFieldWhite";
import Select from "../component/Select/Select";

const CreateTeam = () => {
  const apiOptions = [
    { value: "value1", label: "Select palyer name" },
    { value: "value2", label: "Option 2" },
    { value: "value3", label: "Option 3" },
    // Add more options as needed
  ];
  return (
    <Container fluid className={style.divcontainer}>
      <Row>
        <Col
          xs={{ offset: 2, span: 8 }}
          sm={{ offset: 2, span: 6 }}
          md={{ offset: 6, span: 6 }}
          lg={{ offset: 8, span: 3 }}
          className={`text-white bg-white mt-2 px-5 py-3 ${style.forShadow}`}
        >
          <Form>
            <h4 className="text-center fw-bold mb-0">Create your team</h4>
            <InputFieldWhite
              type={"email"}
              placeholder={"Team Name"}
              className="mb-0"
            />
            <InputFieldWhite
              placeholder={"password"}
              type={"Player Name"}
              className="mb-0"
            />
            <div className="d-flex gap-4 pt-3 fw-bold">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="1v1"
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="3v3"
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="5v5"
              />
            </div>
            <div className="py-2 d-flex flex-column gap-1">
              <div>
                <label className={style.amountLabel}>Player 02</label>
                <Select options={apiOptions} />
              </div>
              <div>
                <label className={style.amountLabel}>Player 03</label>
                <Select options={apiOptions} />
              </div>
            </div>
            <div className="d-flex flex-column ">
              <label className={style.amountLabel}>Set Amount</label>
              <input
                type="number"
                placeholder="e.g  1.00$"
                className={`shadow-lg mb-1 ${style.amountInput}`}
              />
            </div>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="checkbox"
              className="pt-3"
              label="Agree to the terms of payment"
            />
            <div className="d-grid gap-2 py-1 opacity-100">
              {" "}
              <Button
                variant="primary"
                size="lg"
                className="opacity-100"
                type="submit"
              >
                Create
              </Button>
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTeam;
