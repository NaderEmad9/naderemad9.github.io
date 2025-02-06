import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import bugaway from "../../Assets/Projects/bugaway.png";
import taskManagement from "../../Assets/Projects/task_management.png";
import moviesApp from "../../Assets/Projects/movies_application.png";
import islamicApp from "../../Assets/Projects/islamyapplication.png";
import ecommerceApp from "../../Assets/Projects/ecommerce.png";

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

          {/* BugAway */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bugaway}
              isBlog={false}
              title="BugAway"
              description="A pesticide operation management app with role-based access for managers and engineers. Features include real-time inventory tracking, QR scanning, chat, and report generation."
              ghLink="https://github.com/NaderEmad9/BugAway"
            />
          </Col>

          {/* Task Management App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManagement}
              isBlog={false}
              title="Task Management"
              description="A Firebase-integrated task management app to create, track, and manage daily tasks with real-time updates and cloud sync."
              ghLink="https://github.com/NaderEmad9/task_management"
            />
          </Col>

          {/* Movies Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesApp}
              isBlog={false}
              title="Movies App"
              description="A movie browsing app featuring a watchlist, search functionality, and bookmarks, built using a clean architecture pattern."
              ghLink="https://github.com/NaderEmad9/movies_application"
            />
          </Col>

          {/* Islamic App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={islamicApp}
              isBlog={false}
              title="Islamic App"
              description="An offline Islamic app with local data storage, providing religious content and useful features for users."
              ghLink="https://github.com/NaderEmad9/islamyapplication"
            />
          </Col>

          {/* E-Commerce App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceApp}
              isBlog={false}
              title="E-Commerce App"
              description="A feature-rich e-commerce application allowing users to browse, search, and purchase products seamlessly."
              ghLink="https://github.com/NaderEmad9/E_Commerce"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;