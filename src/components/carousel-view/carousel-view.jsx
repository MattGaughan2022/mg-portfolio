import {Container, Row } from "react-bootstrap";
import { data } from "../../workImgData.jsx";
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';

import React from "react";
import "./carousel-view.scss";

const CarouselView = () => {

  return (
    <Container className="pageContainer">
    {data.map((proj)=> {
      return(
      <>
      <Row style={{paddingBottom: '20px'}} key={proj.name}>
      <Carousel data-bs-theme="dark" interval={null}> 
        {proj.content.map((c)=>(
          <Carousel.Item
            key={c.id}>
            <img src={c.img} className="item" alt={"slide number " + c.id} />
          </Carousel.Item>
        ))}
      </Carousel>
      </Row>
      <div className="d-flex flex-row" style={{margin: "10px"}}>
        {proj.tech.map((t)=>(
            <Card bg="primary" text={"primary" ==='light' ? 'dark' : 'white'} className="card" >
              <Card.Img variant="top" src={t.img} className="photo-card"/>
              <Card.Title>{t.key}</Card.Title>
            </Card>
          ))}
      </div>
      </>
      )
    })}
    </Container>
  );
};

export default CarouselView