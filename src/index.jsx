import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { MainView } from "./components/main-view/main-view";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const MyPortfolioApp = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyPortfolioApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
