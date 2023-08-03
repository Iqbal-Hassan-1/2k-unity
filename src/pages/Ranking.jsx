import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./rank.module.css";
import basketBall from "../assets/kit.png";
import player from "../assets/player.png";

const Ranking = () => {
  return (
    <Container fluid className={style.mainDiv}>
      <Row>
        <Col className={style.forImage} md={12}>
          <img src={basketBall} alt="basktet" />
        </Col>
        <Col md={{ offset: 1, span: 2 }} className={style.forPlayer}>
          <img src={player} alt="profile" />
        </Col>
        <Col md={{ offset: 3, md: 6 }} className="pt-1 ">
          <div className="d-flex align-items-center gap-3">
            <h4 className="fw-bold">Daily Gamer</h4>
            <button className="px-4 py-1 bg-primary text-white border-0">
              Message User
            </button>
          </div>

          <div className="d-flex align-items-center gap-3 pt-1">
            <button className="px-4 py-1 border-0">1234567</button>
            <button className="border-0 px-4 py-1" style={{ color: "red" }}>
              Copy Referal code
            </button>
          </div>
          <Row className="px-1 pt-1">
            <Col md={2}>
              <p className="mb-0 text-secondary">ArcheType</p>
              <p className="mb-0 text-secondary">Height</p>
              <p className="mb-0 text-secondary">Position</p>
            </Col>
            <Col md={2}>
              {" "}
              <p className="mb-0">Athletic Finisher</p>
              <p className="mb-0">6.6</p>
              <p className="mb-0">Shooting Guard</p>
            </Col>
          </Row>
          <Row className="d-flex gap-2 px-1 pt-1">
            <Col md={2}>
              <div className=" text-center">
                <p className="bg-secondary p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }}>Rec win percentage</span>
              </div>
            </Col>{" "}
            <Col md={2}>
              <div className=" text-center">
                <p className="bg-secondary p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }}>Park win percentage</span>
              </div>
            </Col>{" "}
            <Col md={2}>
              <div className=" text-center">
                <p className="bg-secondary p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }}>Total Matched Played</span>
              </div>
            </Col>{" "}
          </Row>
          <Row className="pt-1 px-1">
            <Col>
              <button className="px-4 py-2 bg-primary text-white border-0">
                Player Ranking
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Ranking;
