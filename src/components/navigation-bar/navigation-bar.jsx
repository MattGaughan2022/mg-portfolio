import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation-bar.scss";

//img import
import home from "./recoHome.png";
import about from "./recoContact.png";
import work from "./work.png";

export const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  let location = useLocation();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        <div>
          <h1>
            <Nav.Link as={Link} to="/">
              Matt Gaughan
            </Nav.Link>
          </h1>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <>
              <Nav.Link as={Link} to="/">
                <button className="navButton">
                  <p className="btnText" alt="button to home page">
                    Home
                  </p>
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <button className="navButton">
                  <p className="btnText" alt="button to about page">
                    About Me
                  </p>
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                <button className="navButton">
                  <p className="btnText" alt="button to projects page">
                    Projects
                  </p>
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <button className="navButton">
                  <p className="btnText" alt="button to my work experience">
                    My Work
                  </p>
                </button>
              </Nav.Link>
            </>
            {/* ) : (
              <></>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
