import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mini from "../../Assets/mini.png";
import todo from "../../Assets/todo.png";
import calculator from "../../Assets/calculator.png";
import game from "../../Assets/game.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mini}
              isBlog={false}
              title="Mini-insta"
              description="Mini-insta is a MERN stack project where users have to create a account or directly login through Google SignIn. After signing to the account user can see each and every posts. A user can create it's own post by filling the form which contains Title, Message, Tags, Image section. After filling all the details click on the submit button."
              ghLink="https://github.com/akshaysoni10/MiniInsta-client"
              demoLink="https://mini-insta-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo-list"
              description="It's a todo-list project using Reactjs. In that a user can create a list, update a list and delete any list at anytime."
              ghLink="https://github.com/akshaysoni10/Todo-list"
              demoLink="https://akshay-react-todo-list.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="React Calculator"
              description="It's a basic calculator using Reactjs. A user can perform all basic mathematical calculations like addition, subtraction, multiplication and division."
              ghLink="https://github.com/akshaysoni10/React-Calculator"
              demoLink="https://ak-soni-react-calculator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Dragon Dino Game"
              description="A Dragon-Dino game using HTML, CSS and Javascript. In that dino has to jump over the dragon and automatically the scoreboard is increase by 1. When dino hits the dragon the game over."
              ghLink="https://github.com/akshaysoni10/Dragon-Dino-Game-"
              demoLink="https://dragon-dino-game.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
