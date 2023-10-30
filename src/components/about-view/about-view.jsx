import { Row } from "react-bootstrap";
//img import
import mejpg from "./me.jpg";

export const AboutView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <h1>About Me</h1>
      <img src={mejpg} alt="me dot jpeg"></img>

      <a href="mailto:mattgaugs@gmail.com">mattgaugs@gmail.com</a>
      <br />
      <script src="js/tota11y.min.js"></script>
    </Row>
  );
};
