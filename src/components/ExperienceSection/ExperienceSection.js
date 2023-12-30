import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import WorkComponent from "../WorkComponent/WorkComponent";
const ExperienceSection = () => (
  <Container className="bg-success">
    <Row>
      <Col lg={6}>
        <Container id="experience">
          <Row>
            <h2>Experience</h2>
          </Row>
          <ListGroup>
            <ListGroupItem>
              <WorkComponent />
            </ListGroupItem>
            <ListGroupItem>
              <WorkComponent />
            </ListGroupItem>
            <ListGroupItem>
              <WorkComponent />
            </ListGroupItem>
          </ListGroup>
        </Container>
      </Col>
      <Col lg={6}>
        <Container id="education">
          <Row>
            <h2>Education</h2>
          </Row>
          <WorkComponent />
        </Container>
      </Col>
    </Row>
  </Container>
);

ExperienceSection.propTypes = {};

ExperienceSection.defaultProps = {};

export default ExperienceSection;
