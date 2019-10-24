import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// import ListGroup from "react-bootstrap/ListGroup";
import TaskList from "../components/TaskList";

const RunningTasksPage = ({ taskList }) => {
  return (
    <Container>
      <div className="page-header">
        <h2 className="">My Tasks</h2>
      </div>

      <Row>
        <TaskList
          title="Running Tasks"
          tasks={taskList.filter(task => task.running)}
        />
      </Row>

      <Row>
        <TaskList
          title="Paused Tasks"
          tasks={taskList.filter(task => !task.running && !task.completed)}
        />
      </Row>
      <Row>
        <TaskList
          title="Completed Tasks"
          tasks={taskList.filter(task => task.completed)}
        />
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
