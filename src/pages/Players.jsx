import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import style from "./players.module.css";
import PlayerCard from "../component/PlayerCard/PlayerCard";
import axios from "axios";
import { BASE_URL } from "../constant";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}users`);
        setPlayers(response.data.users);
        setIsLoading(false);
        console.log(response.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Container className={style.divleader} fluid>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={6} className={`mt-4 `}>
          <div className="text-center d-flex flex-column gap-3">
            <h3 style={{ color: "#000", fontWeight: "700" }}>
              <span className={style.leaderColor}>OTHER </span>
              <span className="ps-4">PLAYERS LIST</span>
            </h3>
          </div>
          <Row className="d-flex align-items-center justify-content-center my-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="search a player"
                className={style.classInput}
              />
            </Col>
            <Col className={style.divSearch} md={3}>
              <Button>Search</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="py-5 mt-4 mx-4 d-flex justify-content-center">
        {isLoading ? (
          <div
            className="spinner-grow text-warning"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <Col md={8} className="d-flex gap-4 flex-wrap">
            {players?.length > 0 &&
              players.map((player, index) => {
                return (
                  <Col className="mb-5 pb-5" md={2}>
                    {" "}
                    <PlayerCard player={player} index={index} />
                  </Col>
                );
              })}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Players;
