import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./player-rank.module.css";

const PlayerRanking = () => {
  return (
    <Container className={style.divrank} fluid>
      <Row className="d-flex justify-content-center text-center flex-column py-3">
        <Col
          //   xs={{ offset: 0, span: 2 }}
          //   sm={{ offset: 0, span: 2 }}
          //   md={{ offset: 1, span: 2 }}
          className={style.forUserImage}
        >
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt="profile player"
          />
          <h3 className="fw-bold">Daily Gamer</h3>
          <h5 className="border py-2 rounded fw-bold">PLAYER GAME STATS</h5>
        </Col>

        <Col className="d-flex flex-wrap gap-5 fs-4 fw-bold pt-3 border-bottom">
          <p className="d-flex flex-column">
            <span>48</span>
            <span>Ranking</span>
          </p>
          <p className="d-flex flex-column">
            <span>48</span>
            <span>Win</span>
          </p>
          <p className="d-flex flex-column">
            <span>48</span>
            <span>Lose</span>
          </p>
          <p className="d-flex flex-column">
            <span>48</span>
            <span>Played</span>
          </p>{" "}
          <p className="d-flex flex-column">
            <span>78%</span>
            <span>Win Percentage</span>
          </p>
        </Col>
        <Col className="d-flex justify-content-center gap-5 py-3" md={12}>
          <button className={`px-4 py-3 ${style.matchButton}`}>
            Setup a Match
          </button>
          <button className={`px-4 py-3 bg-primary  ${style.prevButton}`}>
            Message User
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerRanking;
