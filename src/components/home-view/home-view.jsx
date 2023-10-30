import { Col, Nav, Row } from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";

import "react-awesome-button/dist/styles.css";
import "./home-view.scss";
import { Link } from "react-router-dom";

//img import
import meJPG from "./me.jpg";

export const HomeView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <div className="profile">
        <img
          src="./me.jpg"
          className="img__me"
          alt="Actually me.jpg"
          width="130"
          height="200"
          style={{ borderRadius: "10%" }}
        />
        <h1>Hello, World!</h1>
        <p>My name it Matt Gaughan.</p>
        <p>I am a computer engineer from Boston. </p>
        <Nav.Link as={Link} to="/projects">
          <AwesomeButton type="primary" className="projectBtn">
            Projects
          </AwesomeButton>
        </Nav.Link>
      </div>
    </Row>
  );
};
