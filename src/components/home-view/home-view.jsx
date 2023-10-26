import { Col, Row } from "react-bootstrap";

export const HomeView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <div className="profile">
        <img
          src="img/me.jpg"
          className="img__me"
          alt="Actually me.jpg"
          width="130"
          height="200"
          style={{ borderRadius: "10%" }}
        />
        <h1>Hello World!</h1>
        <p>My name it Matt Gaughan.</p>
        <p>I am a computer engineer from Boston. </p>
        <p>
          <a href="https://github.com/MattGaughan2022">
            Check out some of my code.
          </a>
        </p>
      </div>
    </Row>
  );
};
