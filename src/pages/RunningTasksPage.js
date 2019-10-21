import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import ListGroup from "react-bootstrap/ListGroup";
import TaskList from "../components/TaskList";

const RunningTasksPage = ({ taskList }) => {
  return (
    <Container>
      <h2 className="display-1">My Tasks</h2>
      <Row className="mt-3">
        <Col xs={{ span: 12 }}>
          <h1>Paused Tasks</h1>
        </Col>
      </Row>
      <Row>
        <TaskList
          tasks={taskList.filter(task => !task.running && !task.completed)}
        />
      </Row>

      <Row className="mt-3">
        <Col xs={{ span: 12 }}>
          <h1>Running Tasks</h1>
        </Col>
      </Row>
      <Row>
        <TaskList tasks={taskList.filter(task => task.running)} />
      </Row>

      <Row className="mt-3">
        <Col xs={{ span: 12 }}>
          <h1>Completed Tasks</h1>
        </Col>
      </Row>
      <Row>
        <TaskList tasks={taskList.filter(task => task.completed)} />
      </Row>
    </Container>
  );
};

RunningTasksPage.propTypes = {
  taskList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    taskList: state.tasks.taskList
  };
};
export default connect(mapStateToProps)(RunningTasksPage);
