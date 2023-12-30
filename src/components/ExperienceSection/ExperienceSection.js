import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import WorkComponent from '../WorkComponent/WorkComponent';
const ExperienceSection = () => (
  <Container id="experience" className='bg-success'>
    <Row style={RowStyles}>
      <Col lg={6}>
        <Container>
          <Row>
        <h2>Experience</h2>
          </Row>
           <WorkComponent/> 
           <WorkComponent/> 
           <WorkComponent/> 
        </Container>
      </Col>
      <Col lg={6}>
        <Container>
          <Row>
        <h2>Education</h2>
          </Row>
           <WorkComponent/> 
        </Container>
      </Col>
    </Row>
  </Container>
);


const RowStyles={
  "height":"100vh",
  "text-align":"left"
}
ExperienceSection.propTypes = {};

ExperienceSection.defaultProps = {};

export default ExperienceSection;
