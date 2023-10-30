import { Col, Container, Row } from "react-bootstrap";
import WorkCard from "../work-card/work-card.jsx";
import { data, projInfo } from "../../workImgData";

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
    if (index[n] + 1 <= data[n].length - 1) {
      const arr = [...index];
      arr[n] = arr[n] + 1;
      setIndex(arr);
    }
  };

  return (
    <Container className="pageContainer">
      <h1 className="header1" style={{ fontSize: "180px", textAlign: "left" }}>
        Porfolio
      </h1>
      <h2 className="header2">Portfolio</h2>
      <Row className="text-center">
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="angularApp card-container mx-auto justify-content-md-center"
        >
          {/* justify-content-md-center */}
          {data[0].map((pic, n) => {
            let ratio = "desktop";
            let position =
              n > index[0]
                ? "nextCard"
                : n === index[0]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[0]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(0)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(0)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(0)}>
            <FontAwesomeIcon
              onClick={() => slideRight(0)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
        {/* v====================REACT PROJECT====================v */}
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="nodeApi card-container mx-auto justify-content-md-center"
        >
          {data[1].map((pic, n) => {
            let ratio = "desktop";
            let position =
              n > index[1]
                ? "nextCard"
                : n === index[1]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[1]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(1)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(1)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(1)}>
            <FontAwesomeIcon
              onClick={() => slideRight(1)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
        {/* v====================MOVIE API PROJECT====================v  */}
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="reactApp card-container mx-auto justify-content-md-center"
        >
          {data[2].map((pic, n) => {
            let ratio = "desktop";
            let position =
              n > index[2]
                ? "nextCard"
                : n === index[2]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[2]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(2)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(2)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(2)}>
            <FontAwesomeIcon
              onClick={() => slideRight(2)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
        {/* v====================MEET APP====================v  */}
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="reactApp card-container mx-auto justify-content-md-center"
        >
          {data[3].map((pic, n) => {
            let ratio = "desktop";
            let position =
              n > index[3]
                ? "nextCard"
                : n === index[3]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[3]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(3)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(3)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(3)}>
            <FontAwesomeIcon
              onClick={() => slideRight(3)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
        {/* v====================CHAT (MOBILE) APP====================v  */}
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="reactApp card-container mx-auto justify-content-md-center"
        >
          {data[4].map((pic, n) => {
            let ratio = "mobile";
            let position =
              n > index[4]
                ? "nextCard"
                : n === index[4]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[4]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(4)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(4)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(4)}>
            <FontAwesomeIcon
              onClick={() => slideRight(4)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
        {/* v====================POKEDEX (LOCAL) APP====================v  */}
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="reactApp card-container mx-auto justify-content-md-center"
        >
          {data[5].map((pic, n) => {
            let ratio = "desktop";
            let position =
              n > index[5]
                ? "nextCard"
                : n === index[5]
                ? "activeCard"
                : "prevCard";
            return (
              <WorkCard
                info={projInfo[5]}
                picRatio={ratio}
                key={pic.id}
                {...pic}
                cardStyle={position}
              />
            );
          })}
          <div className="leftBtnDiv" onClick={() => slideLeft(5)}>
            <FontAwesomeIcon
              onClick={() => slideLeft(5)}
              className="leftBtn"
              icon={faChevronLeft}
              style={{}}
            />
          </div>
          <div className="rightBtnDiv" onClick={() => slideRight(5)}>
            <FontAwesomeIcon
              onClick={() => slideRight(5)}
              className="rightBtn"
              icon={faChevronRight}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
