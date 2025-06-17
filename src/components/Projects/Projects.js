import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieweb from "../../Assets/Projects/movieweb.png";
import jewelery from "../../Assets/Projects/jewelery.avif";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import photography from "../../Assets/Projects/photography.png.crdownload";
import bitsOfCode from "../../Assets/Projects/blog.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://irenenjoki.github.io/Technet/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Restaurant"
              description="A sleek, interactive site that lets diners view menus, check opening hours, book reservations, and get directions — all from their phone or computer."
              ghLink="https://github.com/irenenjoki/RMWS"
              demoLink="https://irenenjoki.github.io/RMWS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Babyclothes"
              description="A charming online boutique offering a curated range of stylish, comfortable baby and toddler clothing, with easy filters by age, gender, and color."
              ghLink="https://github.com/irenenjoki/Babyclothes"
              demoLink="https://irenenjoki.github.io/Babyclothes/index.html"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieweb}
              isBlog={false}
              title="movieweb"
              description="A cinematic platform where users can stream trailers, check showtimes, read reviews, and stay up-to-date with the latest film releases and celebrity gossip."
              ghLink="https://github.com/irenenjoki/movieweb"
              demoLink="https://irenenjoki.github.io/movieweb/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photography}
              isBlog={false}
              title="photography"
              description="A portfolio site designed to showcase a photographer’s best shots, from portraits to landscapes, with a clean gallery and a booking form for prospective clients."
              ghLink="https://github.com/irenenjoki/photography"
               demoLink="https://irenenjoki.github.io/photography/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewelery}
              isBlog={false}
              title="jewellery"
              description="A sophisticated e-commerce store featuring handcrafted jewelry, from rings and necklaces to bracelets and earrings, with detailed product descriptions and secure payments."
              ghLink="https://github.com/irenenjoki/jewellery-store"
              demoLink="https://irenenjoki.github.io/jewellery-store/index.html"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
