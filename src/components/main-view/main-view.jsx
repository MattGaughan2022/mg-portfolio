import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { HomeView } from "../home-view/home-view";
import { ContactView } from "../contact-view/contact-view";
import { WorkView } from "../work-view/work-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import "./main-view.scss";

export const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Row>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Col md={5}>
                  <HomeView />
                </Col>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Col md={5}>
                  <ContactView />
                </Col>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Col md={5}>
                  <WorkView />
                </Col>
              </>
            }
          />
        </Routes>

        <Row>This is the main view!</Row>
        <footer className="page-footer">
          <p>Find me on</p>
          <a href="https://www.linkedin.com/in/matt-gaughan-70243b214/">
            <img src="img/iconLinkedIn.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/MattGaughan2022">
            <img src="img/iconGithub.png" alt="GitHub" />
          </a>
        </footer>
      </Row>
    </BrowserRouter>
  );
};
