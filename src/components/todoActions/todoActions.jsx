import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TodoActions = ({ onDelete, onComplete }) => {
  return (
    <Row>
      <Col>
        <Button variant="btn btn-danger ml-1 mr-1" onClick={onDelete}>
          Delete
        </Button>
      </Col>
      <Col>
        <Button variant="btn btn-success ml-1 mr-1" onClick={onComplete}>
          Complete
        </Button>
      </Col>
    </Row>
  );
};

export default TodoActions;
