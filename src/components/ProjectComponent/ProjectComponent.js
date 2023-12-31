import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import TempImg from "../../logo192.png";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = (props) => (
  <Card
    style={{
      width: "90%",
      marginTop:"2em",
      marginLeft:"5%"
    }}
  >
    <Card.Img
      variant="top"
      src={props.data.img}
      style={{ height: "60%", width: "100%" }}
      alt="Project logo"
    />
    <Card.Body>
      <Card.Title>{props.data.title}</Card.Title>
      <Card.Text>{props.data.description}</Card.Text>
    </Card.Body>
    {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
    <Card.Body className={styles.CardBody}>
      <Button className="bg-info">Demo</Button>
      <Button className="bg-info">Github</Button>
    </Card.Body>
  </Card>
);

ProjectComponent.propTypes = {};

ProjectComponent.defaultProps = {};

export default ProjectComponent;
