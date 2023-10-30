import { Col, Row } from "react-bootstrap";
//img import
import mejpg from "./me.jpg";

export const AboutView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <Col>
        <div style={{ maxWidth: "60%", maxHeight: "880px", margin: "auto" }}>
          <h1>About Me</h1>
          <img
            src={mejpg}
            alt="me dot jpeg"
            style={{ aspectRatio: 2 / 1, height: "40%" }}
          ></img>
          <p>
            I am a computer engineer from Canton MA that has been learning
            full-stack web development for almost a full year on my own.
          </p>
          <br />
          <p>
            Recently, I finished working at a small law firm where I handled
            automation of their client intake via a no-code low-code (Zapier)
            environment.{" "}
          </p>
        </div>

        <a href="mailto:mattgaugs@gmail.com">mattgaugs@gmail.com</a>
        <br />
        <script src="js/tota11y.min.js"></script>
      </Col>
    </Row>
  );
};
