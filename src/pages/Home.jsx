import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./home.module.css";
const Home = () => {
  return (
    <Container fluid className={style.divhome}>
      <Row>
        <Col md={7} className="pt-5 px-3 text-white">
          <h1 className="fw-bold fst-italic display-4 md-display-1">
            LET THE SHOW <br />
            <div className={style.began}>
              <span>BEGAN</span>
            </div>
          </h1>
          <p className="ps-2 fst-italic ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            possimus explicabo voluptates temporibus nesciunt corrupti
            laudantium quasi, praesentium eligendi expedita vero veritatis saepe
            tenetur pariatur non et eos tempora. Eum optio beatae aspernatur a
            earum harum accusantium sapiente quod, corrupti atque tenetur ad
            dolore animi similique quisquam odit? Officia quas hic ipsum
            tempore, rerum velit temporibus harum veniam minus dolor iure
            laborum dolorem doloremque consectetur assumenda ipsam eos nobis
            nulla quos voluptates voluptatibus in necessitatibus totam? Quod
            dolores harum tempore culpa iure vel aspernatur nam! Facere tempora
            quod omnis consequuntur, quasi inventore officia molestiae facilis
            eveniet sequi, eligendi eum? Ipsam consequuntur, in voluptatem
            officiis cupiditate ea eligendi iste non neque, eius error aliquid
            modi magnam totam? Illum distinctio voluptatibus eius.
          </p>
          <div className={style.doller}>
            <h5 className="fw-bold p-1 d-flex align-items-center justify-content-center">
              Only IN 25$ LIFETIME
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
