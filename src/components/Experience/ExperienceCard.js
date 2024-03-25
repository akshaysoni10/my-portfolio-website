import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ width: "100%", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title className="purple">{props.subtitle}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;