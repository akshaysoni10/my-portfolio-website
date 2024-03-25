import React from "react";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../../Assets/bharattech.jpeg";
import logo2 from "../../Assets/gssoc.png";
import logo3 from "../../Assets/hacktoberfest.webp";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>Here's my work experience.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={logo1}
              title="Frontend Developer Intern"
              subtitle="Bharattech"
              description="I have been worked as a frontend developer intern for 6-months at Bharattech company. As a frontend developer my role is to build fully responsive and dynamic websites using Reactjs. I worked on real-life projects and gains lot of experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={logo2}
              title="Open Source Contributor"
              subtitle="GSSoC"
              description="I have made contribution in GirlScript Summer of Code i.e. GSSoC where I have contributed in various projects. Through contribution I have solved lot of bugs and add various necessary features in the projects."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={logo3}
              title="Open Source Contributor"
              subtitle="Hacktoberfest"
              description="I have made contribution in Hacktoberfest where I have contributed in various projects. This was my first experience in open source and through contribution I have solved lot of bugs and add various necessary features in the projects."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Experience;
