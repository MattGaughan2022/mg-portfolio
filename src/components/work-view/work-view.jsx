import { Col, Container, Row } from "react-bootstrap";
import WorkCard from "../work-card/work-card.jsx";
import { data } from "../../workImgData";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./work-view.scss";
export const WorkView = () => {
  const [index, setIndex] = useState([0, 0, 0, 0, 0, 0]);

  const slideLeft = (n) => {
    if (index[n] - 1 >= 0) {
      const arr = [...index];
      arr[n] = arr[n] - 1;
      setIndex(arr);
    }
  };

  const slideRight = (n) => {
    if (index[n] + 1 <= data[0].length - 1) {
      const arr = [...index];
      arr[n] = arr[n] + 1;
      setIndex(arr);
    }
  };

  return (
    <Container>
      <h1 style={{ fontSize: "180px", textAlign: "left" }}>Porfolio</h1>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="angularApp card-container mx-auto justify-content-md-center"
        >
          <FontAwesomeIcon
            onClick={() => slideLeft(0)}
            className="leftBtn"
            icon={faChevronLeft}
            style={{}}
          />
          <FontAwesomeIcon
            onClick={() => slideRight(0)}
            className="rightBtn"
            icon={faChevronRight}
            style={{ marginLeft: "10px" }}
          />
          {data[0].map((pic, n) => {
            let position =
              n > index[0]
                ? "nextCard"
                : n === index[0]
                ? "activeCard"
                : "prevCard";
            return <WorkCard key={pic.id} {...pic} cardStyle={position} />;
          })}
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="nodeApi card-container mx-auto justify-content-md-center"
        >
          <FontAwesomeIcon
            onClick={() => slideLeft(1)}
            className="leftBtn"
            icon={faChevronLeft}
            style={{}}
          />
          <FontAwesomeIcon
            onClick={() => slideRight(1)}
            className="rightBtn"
            icon={faChevronRight}
            style={{ marginLeft: "10px" }}
          />
          {data[1].map((pic, n) => {
            let position =
              n > index[1]
                ? "nextCard"
                : n === index[1]
                ? "activeCard"
                : "prevCard";
            return <WorkCard key={pic.id} {...pic} cardStyle={position} />;
          })}
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="reactApp card-container mx-auto justify-content-md-center"
        >
          <FontAwesomeIcon
            onClick={() => slideLeft(2)}
            className="leftBtn"
            icon={faChevronLeft}
            style={{}}
          />
          <FontAwesomeIcon
            onClick={() => slideRight(2)}
            className="rightBtn"
            icon={faChevronRight}
            style={{ marginLeft: "10px" }}
          />
          {data[1].map((pic, n) => {
            let position =
              n > index[2]
                ? "nextCard"
                : n === index[2]
                ? "activeCard"
                : "prevCard";
            return <WorkCard key={pic.id} {...pic} cardStyle={position} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};
