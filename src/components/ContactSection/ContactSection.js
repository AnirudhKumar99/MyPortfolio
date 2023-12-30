import React from "react";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";

const ContactSection = () => (
  <Container style={{margin:'2em'}} id="contact">
    <h1>Contact Me</h1>
    <Row>
      <Col lg={6} style={{height:'30vh'}}>
        <h3>Phone No : +91 9999999999</h3>
        <h3>Email : gxxxxxxxxxx@gmail.com</h3>
      </Col>
      <Col lg={6}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Name</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Comment</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </Col>
    </Row>
  </Container>
);

ContactSection.propTypes = {};

ContactSection.defaultProps = {};

export default ContactSection;
