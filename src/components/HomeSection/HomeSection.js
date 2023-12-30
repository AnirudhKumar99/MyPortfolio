import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import ProfilePic from "../../ProfileImage.jpg";
import styles from "./HomeSection.module.css";

const HomeSection = () => (
  <Container className={styles.HomeSection}>
    <Row>
      <Col className={styles.ImgSection} lg={6}>
        <Image src={ProfilePic} roundedCircle fluid />
      </Col>
      <Col  className={styles.AboutSection}>
        <h1>Hi, I am <b>Anirudh</b> </h1>
        <h3> I am a <b> FullStack Developer</b></h3>
        <Button className={styles.ButtonSection} variant="info">Get Resume</Button>
      </Col>
    </Row>
  </Container>
);

HomeSection.propTypes = {};

HomeSection.defaultProps = {};

export default HomeSection;
