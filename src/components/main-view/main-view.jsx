import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import { HomeView } from "../home-view/home-view";
import React, { Suspense, lazy } from "react";
import { FullView } from "../full-view/full-view";
import { ContactView } from "../contact-view/contact-view";
//import { WorkView } from "../work-view/work-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { AboutView } from "../about-view/about-view";
import { ProjView } from "../proj-view/proj-view";
import "./main-view.scss";

//img imports
import linkedinIco from "./iconLinkedIn.png";
import gitIco from "./iconGithub.png";

const CarouselView = React.lazy(() => import("../carousel-view/carousel-view"));

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
                  <Suspense fallback={"loading..."}>
                    <HomeView />
                  </Suspense>
                </div>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <div className="compDiv">
                  <Suspense fallback={"loading..."}>
                    <CarouselView />
                  </Suspense>
                </div>
              </>
            }
          />
          <Route
            path="/projects/:proj"
            element={
              <div className="compDiv">
                <ProjView />
              </div>
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
              src={linkedinIco}
              alt="LinkedIn"
              style={{ backgroundColor: "#64ffda" }}
            />
          </a>
          <a href="https://github.com/MattGaughan2022">
            <img
              src={gitIco}
              alt="GitHub"
              style={{ backgroundColor: "#64ffda" }}
            />
          </a>
        </footer>
      </Row>
    </BrowserRouter>
  );
};
