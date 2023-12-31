import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import WorkComponent from "../WorkComponent/WorkComponent";

const experience = [
  {
    position: "Technology Analyst",
    company: "Infosys Limited",
    description: "Work in dotnet core",
    date:'July 2023 - '
  },
  {
    position: "Senior Systems Engineer",
    company: "Infosys Limited",
    description: "Work in dotnet core",
    date:'July 2022 - June 2023'
  },
  {
    position: "Systems Engineer",
    company: "Infosys Limited",
    description: "Work in dotnet core",
    date:'Nov 2020 - June 2022'
  },
];
const education = [
  {
    position: "B.Sc in Data Science",
    company: "Indian Institute of Technology Madras",
    description: "Course in Data Science",
    date:'Nov 2020 - Dec 2023'
  },
  {
    position: "B.Tech (ECE)",
    company: "Jawaharlal Nehru Technological University Anantapur",
    description: "Work in dotnet core",
    date:'Aug 2016 - Nov 2020'
  }
];
const ExperienceSection = () => (
  <Container >
    <Row id="experience">
      <Col>
        <h2>Experience</h2>
        <VerticalTimeline layout="1-column-left">
          {experience.map((exp,idx) => (
            <WorkComponent key={`Experience_${idx}`} data={exp} />
          ))}
        </VerticalTimeline>
      </Col>
    </Row>
    <Row id="education">
      <Col>
        <h2>Education</h2>
        <VerticalTimeline layout="1-column-left">
        {education.map((exp,idx) => (
            <WorkComponent key={`Education_${idx}`} data={exp} />
          ))}
        </VerticalTimeline>
      </Col>
    </Row>

    {/* //   <Row>
  //     <Col >
          
  //     </Col>
  //   </Row>
  //   <Row>
  //     <Col lg={6}>
  //       <Container id="education">
  //           <h2>Education</h2>
  //         <WorkComponent />
  //       </Container>
  //     </Col>
  //   </Row> */}
  </Container>
);

ExperienceSection.propTypes = {};

ExperienceSection.defaultProps = {};

export default ExperienceSection;
