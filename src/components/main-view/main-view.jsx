import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import { HomeView } from "../home-view/home-view";
import { ContactView } from "../contact-view/contact-view";
import { WorkView } from "../work-view/work-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import "./main-view.scss";

//img imports
import linkedinIco from "../src/img/iconLinkedIn.png";
import gitIco from ".../src/img/iconGithub.png";

export const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Row>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="compDiv">
                  <HomeView />
                </div>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <div className="compDiv">
                  <ContactView />
                </div>
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <div className="compDiv">
                  <WorkView />
                </div>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navigate to="/" />
              </>
            }
          />
        </Routes>
        <Row className="mx-auto justify-content-md-center">
          {/* This is the main view! */}
        </Row>
        <footer style={{ paddingBottom: "60px" }} className="page-footer">
          <p>Find me on</p>
          <a href="https://www.linkedin.com/in/matt-gaughan-70243b214/">
            <img
              src={{ linkedinIco }}
              alt="LinkedIn"
              style={{ backgroundColor: "#64ffda" }}
            />
          </a>
          <a href="https://github.com/MattGaughan2022">
            <img
              src={{ gitIco }}
              alt="GitHub"
              style={{ backgroundColor: "#64ffda" }}
            />
          </a>
        </footer>
      </Row>
    </BrowserRouter>
  );
};
