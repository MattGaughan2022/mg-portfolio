import "./full-view.scss";
import Card from "react-bootstrap/Card";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FullView = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex flex-row" style={{ margin: "10px" }}>
        <Card
          bg="primary"
          text={"primary" === "light" ? "dark" : "white"}
          className="card"
          as={Link}
          to={`/projects/${encodeURIComponent("angularmoviedb")}`}
          state={1}
        >
          <Card.Img
            variant="top"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
            className="photo-card"
            onClick={handleShow}
          />
          <Card.Title style={{ fontFamily: "Arial" }}>
            Angular Movie Project
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card>
        <Card
          bg="primary"
          text={"primary" === "light" ? "dark" : "white"}
          className="card"
          as={Link}
          to={`/projects/${encodeURIComponent("reactmoviedb")}`}
          state={2}
        >
          {/* <Card.Body variant="top"><CarouselView/></Card.Body> */}
          <Card.Title style={{ fontFamily: "Arial" }}>
            React Movie Project
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
            className="photo-card"
          />
          <Card.Title>React</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png"
            className="photo-card"
          />
          <Card.Title>Angular</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card>
      </div>
    </>
  );
};
