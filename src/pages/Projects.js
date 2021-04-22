import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Logo from "../assets/KirsiRalko.png";
import Project from "../components/Project";
import projects from "../project.json";
// import Carousel from "../components/Carousel";
// import { Carousel } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <Hero>
        <img src={Logo} alt="" style={{ marginTop: 100 }}/>
        {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-power-off"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
        <h3>Lawyer - Entrepreneur - Full Stack Developer</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>

        <Row>
          <Col size="md-12">
          {projects.map(project => {
                return (
                <Project
                    key={project.key}
                    title={project.title}
                    img={project.img}
                    github={project.github}
                    deploy={project.application}
                /> 
                )     
            })
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
