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
        {/* <div style={{ height: "200px" }}></div> */}
        <img
          src={meJPG}
          className="img__me"
          alt="Actually me.jpg"
          width="130"
          height="200"
          style={{ borderRadius: "10%" }}
        />
        <h1>Hello, World!</h1>
        <br />
        <AwesomeButton type="primary" className="projectBtn">
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </AwesomeButton>
      </div>
    </Row>
  );
};
