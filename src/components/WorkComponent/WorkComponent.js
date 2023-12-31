import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdOutlineWork } from "react-icons/md";

// const data = {
//   position: "Technology Analyst",
//   company: "Infosys Limited",
//   description: "Work in dotnet core",
// };
const WorkComponent = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline--one-column-left"
      contentStyle={{textAlign:"left", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={props.data.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      position="right"
      icon={<MdOutlineWork />}
      // icon={<workicon}
    >
      <h4 className="vertical-timeline-element-title">{props.data.position}</h4>
      <h5 className="vertical-timeline-element-subtitle">
        {props.data.company}
      </h5>
      <p>{props.data.description}</p>
    </VerticalTimelineElement>
  );
};

WorkComponent.propTypes = {};

WorkComponent.defaultProps = {};

export default WorkComponent;
