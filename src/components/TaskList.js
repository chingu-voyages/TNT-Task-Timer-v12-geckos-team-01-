import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

// bootstrap imports
import ListGroup from "react-bootstrap/ListGroup";

// task actions
import { removeTask } from "../actions/taskActions";

import TaskListItem from "./TaskListItem";

// utilities
// import { convertSecondsToHMS } from "../util/timetools";

// eslint-disable-next-line no-unused-vars
const TaskList = ({ tasks, remove }) => {
  if (tasks.length === 0) {
    return <h2>You have not created any tasks yet.</h2>;
  }
  return (
    <div className="task-list-container">
      <ListGroup>
        {tasks.map(task => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ListGroup>
    </div>
  );
};

TaskList.propTypes = {
  remove: PropTypes.any.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.taskList
});

const mapDispatchToProps = dispatch => ({
  remove(event) {
    dispatch(removeTask(event.target.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
