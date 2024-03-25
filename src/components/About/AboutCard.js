import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Akshay Soni </span>
            a third year undergraduate computer science student at Parul
            University.
            <br />
            I am currently employed as a frontend developer intern at
            Bharattech.
            <br />I have made contribution in an open source programs like{" "}
            <span className="purple">Hacktoberfest'22 </span>
            and <span className="purple">GSSoC'23 </span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way that we can live, is if we grow."{" "}
          </p>
          <footer className="blockquote-footer">Akshay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
