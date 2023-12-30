import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TempImg from "../../logo192.png";

const ProjectComponent = () => (
    <Card style={{ width: "18rem", margin: "1em" }}>
      <Card.Img
        variant="top"
        src={TempImg}
        style={{ height: "10vh", width: "10vh" }}
        alt="Project logo"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
);

ProjectComponent.propTypes = {};

ProjectComponent.defaultProps = {};

export default ProjectComponent;
