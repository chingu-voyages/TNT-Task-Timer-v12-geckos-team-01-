import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import ListGroup from "react-bootstrap/ListGroup";
import TaskList from "../components/TaskList";

const RunningTasksPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 12 }}>
          <h1>Paused Tasks</h1>
        </Col>
      </Row>
      <Row>
        <TaskList />
      </Row>
    </Container>
  );
};
/* make sure to add PropTypes if any */

export default RunningTasksPage;
