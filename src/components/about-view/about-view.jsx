import { Col, Row } from "react-bootstrap";

import "./about-view.scss";

//img import
import mejpg from "./me.jpg";

export const AboutView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <Col>
        <div className="formatWidthAuto">
          <h1>About Me</h1>
          <img src={mejpg} alt="me dot jpeg" style={{ height: "320px" }}></img>
          <br />
          <br />
          <p className="formatWidthAuto">
            I am a computer engineer from Canton MA that has been learning
            full-stack web development for almost a full year through
            CareerFoundry's web-dev bootcamp.
            <br />
            <br />
            Recently, I finished working over a year at a small law firm where I
            handled automation of their tax client intake via a no-code low-code
            (<a href="https://zapier.com/">Zapier</a>) environment.{" "}
          </p>
        </div>
        <br />
        <p>
          To reach me, please email at{" "}
          <a href="mailto:mattgaugs@gmail.com">mattgaugs@gmail.com</a>
        </p>

        <br />
        <br />
        <script src="js/tota11y.min.js"></script>
      </Col>
    </Row>
  );
};
