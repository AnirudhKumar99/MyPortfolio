import React from "react";
import { Col, Container, Row,Image, Button } from "react-bootstrap";
import ProfilePic from '../../ProfileImage.jpg'

const HomeSection = () => (
  <Container  id="home"  >
    <Row style={RowStyles} className="bg-dark">
      <Col lg={4} sm={6}>
        <Image src={ProfilePic} roundedCircle fluid />
      </Col>
      <Col className="bg-light">
        <h1>Hi, I am Anirudh </h1>
        <h3> I am a FullStack Developer.</h3>
        <Button variant="info" style={ButtonStyles}>Get Resume</Button>
      </Col>
    </Row>
  </Container>
);
const RowStyles={
  "height":"100vh"
}
const ButtonStyles={
  "border-radius":"20px"
}
HomeSection.propTypes = {};

HomeSection.defaultProps = {};

export default HomeSection;
