import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import porfolioImage from "../../images/portfolio.png";
import styles from "./ProjectsSection.module.css";

const data = [
  {
    img: porfolioImage,
    title: "Portfolio",
    description: "This is my portfolio site.",
  },
  {
    img: porfolioImage,
    title: "Portfolio",
    description: "This is my portfolio site.",
  },
  {
    img: porfolioImage,
    title: "Portfolio",
    description: "This is my portfolio site.",
  },
  {
    img: porfolioImage,
    title: "Portfolio",
    description: "This is my portfolio site.",
  },
];
const ProjectsSection = () => (
  <Container id="projects" className={styles.ProjectsSection}>
    <h1> Projects</h1>
    <Row className="justify-content-center align-items-center">
      {data.map((project, idx) => (
        <Col lg={4} key={`ProjectCol_${idx}`} className={styles.ProjectsCol}>
          <ProjectComponent key={`Project_${idx}`} data={project} />
        </Col>
      ))}
    </Row>
  </Container>
);

ProjectsSection.propTypes = {};

ProjectsSection.defaultProps = {};

export default ProjectsSection;
