import React from "react";
import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import styles from "./ContactSection.module.css";

const ContactSection = () => (
  <Container className={styles.ContactSection} id="contact">
    <h1>Contact Me</h1>
    <Row>
      <Col className={styles.DetailsSection}>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Phone No :</h3>
              </td>
              <td>
                <h3>+91 9999999999</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Email :</h3>
              </td>
              <td>
                <h3>gxxxxxxxxxx@gmail.com</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col className={styles.FormSection}>
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
        <Button variant="info" className={styles.ButtonSection}>
          Send
        </Button>
      </Col>
    </Row>
  </Container>
);

ContactSection.propTypes = {};

ContactSection.defaultProps = {};

export default ContactSection;
