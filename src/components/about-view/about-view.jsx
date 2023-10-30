import { Row } from "react-bootstrap";
//img import
import mejpg from "./me.jpg";

export const AboutView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <h1>About Me</h1>
      <img
        src={mejpg}
        alt="me dot jpeg"
        style={{ aspectRatio: "auto", height: "400px", width: "180px" }}
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

      <a href="mailto:mattgaugs@gmail.com">mattgaugs@gmail.com</a>
      <br />
      <script src="js/tota11y.min.js"></script>
    </Row>
  );
};
