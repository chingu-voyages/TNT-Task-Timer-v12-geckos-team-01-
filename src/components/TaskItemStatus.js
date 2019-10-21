import React from "react";
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";

// TaskItemStatus is the component that shows the current status
// of the task in the TaskList - running, completed or paused.

const TaskItemStatus = ({ running, completed }) => {
  if (completed) {
    return (
      <div className="task-item-status">
        <Badge variant="primary">Completed</Badge>
      </div>
    );
  }

  return (
    <div className="task-item-status">
      {running ? (
        <Badge variant="success">Running</Badge>
      ) : (
        <Badge variant="warning">Paused</Badge>
      )}
    </div>
  );
};

TaskItemStatus.propTypes = {
  running: PropTypes.bool,
  completed: PropTypes.bool
};

TaskItemStatus.defaultProps = {
  running: false,
  completed: false
};
export default TaskItemStatus;
