import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "./navigation-bar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//img import
import home from "./recoHome.png";
import about from "./recoContact.png";

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
        {/* <Navbar.Brand as={Link} to="/home">
          <img src="img/logoMattGaughan.png" alt="logo" />{" "}
        </Navbar.Brand> */}
        {/* hello */}
        <div style={{ borderColor: "white", borderWidth: "3px" }}>
          <h1>
            <Nav.Link as={Link} to="/">
              Matt Gaughan
            </Nav.Link>
          </h1>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            {/* {location.pathname !== "/" ? ( */}
            <>
              <Nav.Link as={Link} to="/">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid #00AA66",
                  }}
                >
                  <img
                    src={home}
                    className="imgBtn"
                    alt="button to home page"
                    style={{ height: "50px", width: "50px" }}
                  />
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid #00AA66",
                  }}
                >
                  <img
                    src={about}
                    className="imgBtn"
                    alt="button to about page"
                    style={{ height: "50px", width: "50px" }}
                  />
                </button>
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/projects">
                  <button className="navButton">My Work</button>
                </Nav.Link> */}
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
