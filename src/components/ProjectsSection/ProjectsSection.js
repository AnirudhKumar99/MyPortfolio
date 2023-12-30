import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectComponent from "../ProjectComponent/ProjectComponent";

const ProjectsSection = () => (
  <Container id='projects'>
    <Row>
      <h1> Projects</h1>
    </Row>
    <Row>
      <Col lg={4}>
        <ProjectComponent />
      </Col>
      <Col lg={4}>
        <ProjectComponent />
      </Col>
      <Col lg={4}>
        <ProjectComponent />
      </Col>
      <Col lg={4}>
        <ProjectComponent />
      </Col>
    </Row>
  </Container>
);


ProjectsSection.propTypes = {};

ProjectsSection.defaultProps = {};

export default ProjectsSection;
